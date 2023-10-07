import style from "../../../assets/css/meetings.module.css";
import { useContext, useEffect, useState } from 'react';
import { FirebaseContext } from '../../../firebase/FirebaseContext';
import CenteredCircularProgress from "../../CenteredCircularProgress/CenteredCircularProgress.js";
import removeAccents from "remove-accents"

const processDoc = (doc) => {
    var data = doc.data();
    data["createdAt"] = data["createdAt"].toDate();
    return {
        id: doc.id,
        ...data
    }
}

const sessions = ["DNA", "PHYS", "CTRS", "DAMLAI", "TCLS", "TDA"];

const notRegisteredParticipantsPerSession = {
    'DNA': [
        { 'completeName': "Sophie Jackson", 'surname': 'Jackson' },
        { 'completeName': "Natasha Jonoska", 'surname': 'Jonoska' },
        { 'completeName': "Alexander Klotz", 'surname': 'Klotz' },
        { 'completeName': "Cristian Micheletti", 'surname': 'Micheletti' },
        { 'completeName': "Davide Michieletto", 'surname': 'Michieletto' },
        { 'completeName': "Ken Millett", 'surname': 'Millett' },
        { 'completeName': "De Witt Sumners", 'surname': 'Sumners' },
        { 'completeName': "Lynn Zechiedrich", 'surname': 'Zechiedrich' }
    ],
    'PHYS': [
        { 'completeName': "Mitchell Berger", 'surname': 'Berger' },
        { 'completeName': "J. Cantarella", 'surname': 'Cantarella' },
        { 'completeName': "Yasuhide Fukumoto", 'surname': 'Fukumoto' },
        { 'completeName': "X. Liu", 'surname': 'Liu' },
        { 'completeName': "R.L. Ricca", 'surname': 'Ricca' },
        { 'completeName': "T. Sakajo", 'surname': 'Sakajo' },
        { 'completeName': "K. Shimokawa", 'surname': 'Shimokawa' }
    ],
    'CTRS': [
        { 'completeName': 'Marco Tulio Angulo', 'surname': 'Angulo' },
        { 'completeName': 'Gilberto Calvillo Vives', 'surname': 'Calvillo Vives' },
        { 'completeName': 'Armando Castañeda', 'surname': 'Castañeda' },
        { 'completeName': 'Dmitry Feichtner-Kozlov', 'surname': 'Feichtner-Kozlov' },
        { 'completeName': 'Matthias Függer', 'surname': 'Függer' },
        { 'completeName': 'Emmanuel Godard', 'surname': 'Godard' },
        { 'completeName': 'Sophia Knight', 'surname': 'Knight' },
        { 'completeName': 'Jeremy Ledent', 'surname': 'Ledent' },
        { 'completeName': 'Thomas Nowak', 'surname': 'Nowak' },
        { 'completeName': 'Pablo Soberón', 'surname': 'Soberón' },
        { 'completeName': 'Ismar Volić', 'surname': 'Volić' },
        { 'completeName': 'Yuliy Baryshnikov', 'surname': 'Baryshnikov' },
        { 'completeName': 'Joseph Root', 'surname': 'Root' },
    ],
    'DAMLAI': [
        { 'completeName': 'Manuel Mellado Cuerno', 'surname': 'Cuerno' },
        { 'completeName': 'Paweł Dłotko', 'surname': 'Dłotko' },
        { 'completeName': 'José Angel Frías', 'surname': 'Frías' },
        { 'completeName': 'Marissa Masden', 'surname': 'Masden' },
        { 'completeName': 'Jesús Rodríguez-Viorato', 'surname': 'Rodríguez-Viorato' },
        { 'completeName': 'Radmila Sazdanovic', 'surname': 'Sazdanovic' },
        { 'completeName': 'Pablo Suárez-Serrato', 'surname': 'Suárez-Serrato' },
    ],
    'TCLS': [
        { 'completeName': 'Dan Cohen', 'surname': 'Cohen' },
        { 'completeName': 'Alexander Dranishnikov', 'surname': 'Dranishnikov' },
        { 'completeName': 'Jose Manuel García-Calcines', 'surname': 'García-Calcines' },
        { 'completeName': 'Dan Guralnik', 'surname': 'Guralnik' },
        { 'completeName': 'Stephan Mescher', 'surname': 'Mescher' },
        { 'completeName': 'Amit Kumar Paul', 'surname': 'Paul' },
        { 'completeName': 'Petar Pavesic', 'surname': 'Pavesic' },
        { 'completeName': 'Lucile Vandembroucq', 'surname': 'Vandembroucq' },
    ],
    'TDA': [
        { 'completeName': 'Davide Gurnari', 'surname': 'Gurnari' },
        { 'completeName': 'Sara Kalisink Hintz', 'surname': 'Kalisink Hintz' },
        { 'completeName': 'Michał Lipiński', 'surname': 'Lipiński' },
        { 'completeName': 'Ingrid Membrillo-Solís', 'surname': 'Membrillo-Solís' },
        { 'completeName': 'Alexander Smith', 'surname': 'Smith' },
        { 'completeName': 'Yusu Wang', 'surname': 'Wang' },
        { 'completeName': 'Iris Yoon', 'surname': 'Yoon' },
        { 'completeName': 'Lori Ziegelmaier', 'surname': 'Ziegelmaier' },
        { 'completeName': 'Javier Arsuaga', 'surname': 'Arsuaga' },
    ]
};

export default function ListOfParticipants({ meetingId }) {
    const { getAcceptedSubmissions } = useContext(FirebaseContext);
    const [attendees, setAttendees] = useState([]);
    const [submissionsPerSession, setSubmissionsPerSession] = useState(Object.fromEntries(
        sessions.map(session => [session, []])));
    const [error, setError] = useState(false);
    const [loadingData, setLoadingData] = useState(true);

    useEffect(() => {
        getAcceptedSubmissions(meetingId).then((querySnapshot) => {

            var submissions = querySnapshot.docs.map((doc) => processDoc(doc));

            setAttendees(
                submissions.filter(submission => submission.contribution == "participant")
            );

            var submissionsPerSessionAux = Object.fromEntries(
                sessions.map(session => [session, new Set(
                    submissions.filter(
                        (submission => (submission.contribution == "oral" || submission.contribution == "poster") && submission.session == session)
                    ).map(submission => JSON.stringify(Object.fromEntries([['completeName', submission.completeName], ['surname', submission.surname]])))
                )])
            );

            sessions.forEach((session) => {
                notRegisteredParticipantsPerSession[session].forEach(submission => submissionsPerSessionAux[session].add(JSON.stringify(submission)));
                submissionsPerSessionAux[session] = Array.from(submissionsPerSessionAux[session]).map(submission => JSON.parse(submission));
                submissionsPerSessionAux[session].sort(((a, b) => {
                    if (removeAccents(a.surname) > removeAccents(b.surname)) {
                        return 1;
                    }
                    else if (removeAccents(b.surname) > removeAccents(a.surname)) {
                        return -1;
                    }
                    return 0;
                }));
            });

            setSubmissionsPerSession(submissionsPerSessionAux);

            setError(false);
            setLoadingData(false);


        }).catch((error) => {
            console.log(error);
            setError(true);
            setLoadingData(false);
        });
    }, []);

    return (
        <>
            <h1 className={style.paragraphTitle}>List of Participants</h1>
            <br />
            <h3>Applications of Geometry and Topology to Biology (DNA)</h3>
            {loadingData && <CenteredCircularProgress />}
            {error && <h3 style={{ textAlign: "center" }}>Error loading submissions. Try again.</h3>}
            <ul>
                {submissionsPerSession['DNA'].map((submission) => (
                    <li key={submission.surname}>{submission.completeName}</li>
                ))}
            </ul>
            <h3>Applications in Physical Sciences (PHYS)</h3>
            {loadingData && <CenteredCircularProgress />}
            {error && <h3 style={{ textAlign: "center" }}>Error loading submissions. Try again.</h3>}
            <ul>
                {submissionsPerSession['PHYS'].map((submission) => (
                    <li key={submission.surname}>{submission.completeName}</li>
                ))}
            </ul>
            <h3>Combinatorial Topology of Relational Structures (CTRS)</h3>
            {loadingData && <CenteredCircularProgress />}
            {error && <h3 style={{ textAlign: "center" }}>Error loading submissions. Try again.</h3>}
            <ul>
                {submissionsPerSession['CTRS'].map((submission) => (
                    <li key={submission.surname}>{submission.completeName}</li>
                ))}
            </ul>
            <h3>Data Analysis, Machine Learning and AI (DAMLAI)</h3>
            {loadingData && <CenteredCircularProgress />}
            {error && <h3 style={{ textAlign: "center" }}>Error loading submissions. Try again.</h3>}
            <ul>
                {submissionsPerSession['DAMLAI'].map((submission) => (
                    <li key={submission.surname}>{submission.completeName}</li>
                ))}
            </ul>
            <h3>Topological Complexity and LS Category (TCLS)</h3>
            {loadingData && <CenteredCircularProgress />}
            {error && <h3 style={{ textAlign: "center" }}>Error loading submissions. Try again.</h3>}
            <ul>
                {submissionsPerSession['TCLS'].map((submission) => (
                    <li key={submission.surname}>{submission.completeName}</li>
                ))}
            </ul>
            <h3>Topological Data Analysis (TDA)</h3>
            {loadingData && <CenteredCircularProgress />}
            {error && <h3 style={{ textAlign: "center" }}>Error loading submissions. Try again.</h3>}
            <ul>
                {submissionsPerSession['TDA'].map((submission) => (
                    <li key={submission.surname}>{submission.completeName}</li>
                ))}
            </ul>

            <h1 className={style.paragraphTitle}>Registered Attendees</h1>
            <br />

            {loadingData && <CenteredCircularProgress />}
            {error && <h3 style={{ textAlign: "center" }}>Error loading submissions. Try again.</h3>}
            <ul>
                {attendees.map((submission) => (
                    <li key={submission.surname}>{submission.completeName}</li>
                ))}
            </ul>

        </>
    )
}
