import style from "../../../assets/css/meetings.module.css";
import { useContext, useEffect, useState } from 'react';
import { FirebaseContext } from '../../../firebase/FirebaseContext';
import CenteredCircularProgress from "../../CenteredCircularProgress/CenteredCircularProgress.js";

const processDoc = (doc) => {
    var data = doc.data();
    data["createdAt"] = data["createdAt"].toDate();
    return {
        id: doc.id,
        ...data
    }
}

export default function ListOfParticipants({ meetingId }) {
    const { getAcceptedSubmissions } = useContext(FirebaseContext);
    const [submissions, setSubmissions] = useState([]);
    const [error, setError] = useState(false);
    const [loadingData, setLoadingData] = useState(true);

    useEffect(() => {
        getAcceptedSubmissions(meetingId).then((querySnapshot) => {
            setSubmissions(
                querySnapshot.docs.map((doc) => processDoc(doc))
            );
            setError(false);
            setLoadingData(false);
        }).catch((error) => {
            console.log(error);
            setError(true);
            setLoadingData(false);
        });
    }, []);

    const orderOfSessions = ["DNA", "PHYS", "CTRS", "DAMLAI", "TCLS", "TDA"];

    return (
        <>
            <h1 className={style.paragraphTitle}>List of Participants</h1>
            <br />
            <h3>Applications of Geometry and Topology to Biology (DNA)</h3>
            <ul>
                <li>Sophie Jackson</li>
                <li>Natasha Jonoska</li>
                <li>Alexander Klotz</li>
                <li>Cristian Micheletti</li>
                <li>Davide Michieletto</li>
                <li>Ken Millett</li>
                <li>De Witt Sumners</li>
                <li>Lynn Zechiedrich</li>
            </ul>
            <h3>Applications in Physical Sciences (PHYS)</h3>
            <ul>
                <li>Mitchell Berger</li>
                <li>J. Cantarella</li>
                <li>Yasuhide Fukumoto</li>
                <li>L.H. Kauffman</li>
                <li>X. Liu</li>
                <li>R.L. Ricca</li>
                <li>T. Sakajo</li>
                <li>K. Shimokawa</li>
            </ul>
            <h3>Combinatorial Topology of Relational Structures (CTRS)</h3>
            <ul>
                <li>Marco Tulio Angulo</li>
                <li>Gilberto Calvillo Vives</li>
                <li>Armando Castañeda</li>
                <li>Dmitry Feichtner-Kozlov</li>
                <li>Matthias Függer</li>
                <li>Emmanuel Godard</li>
                <li>Sophia Knight</li>
                <li>Jeremy Ledent</li>
                <li>Thomas Nowak</li>
                <li>Pablo Soberón</li>
                <li>Ismar Volić</li>
            </ul>
            <h3>Data Analysis, Machine Learning and AI (DAMLAI)</h3>
            <ul>
                <li>Manuel Mellado Cuerno</li>
                <li>Paweł Dłotko</li>
                <li>José Angel Frías</li>
                <li>Jesús Rodríguez-Viorato</li>
                <li>Radmila Sazdanovic</li>
                <li>Pablo Suárez-Serrato</li>
            </ul>
            <h3>Topological Complexity and LS Category (TCLS)</h3>
            <ul>
                <li>Dan Cohen</li>
                <li>Alexander Dranishnikov</li>
                <li>Jose Manuel García-Calcines</li>
                <li>Dan Guralnik</li>
                <li>Norio Iwase</li>
                <li>Stephan Mescher</li>
                <li>Amit Kumar Paul</li>
                <li>Petar Pavesic</li>
                <li>Lucile Vandembroucq</li>
            </ul>
            <h3>Topological Data Analysis (TDA)</h3>
            <ul>
                <li>Davide Gurnari</li>
                <li>Sara Kalisink Hintz</li>
                <li>Michał Lipiński</li>
                <li>Ingrid Membrillo-Solís</li>
                <li>Alexander Smith</li>
                <li>Yusu Wang</li>
                <li>Iris Yoon</li>
                <li>Lori Ziegelmaier</li>
            </ul>

            <h1 className={style.paragraphTitle}>Registered Attendees</h1>
            <br />

            {loadingData && <CenteredCircularProgress />}
            {error && <h3 style={{ textAlign: "center" }}>Error loading submissions. Try again.</h3>}
            <ul>
                {submissions.filter((submission => submission.contribution == "participant")).map((submission) => (
                    <li>{submission.completeName}</li>
                ))}
            </ul>

        </>
    )
}
