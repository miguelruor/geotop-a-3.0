import Background from "../Background/Background"
import { useContext, useEffect, useState } from 'react';
import { FirebaseContext } from '../../../firebase/FirebaseContext';
import SubmissionCard from "./SubmissionCard";

const processDoc = (doc) => {
    var data = doc.data();
    data["createdAt"] = data["createdAt"].toDate();
    return {
        id: doc.id,
        ...data
    }
}

const Submissions = ({ meetingId }) => {
    const { getSubmissions } = useContext(FirebaseContext);
    const [submissions, setSubmissions] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        getSubmissions(meetingId).then((querySnapshot) => {
            console.log(querySnapshot.docs[0].data());
            setSubmissions(
                querySnapshot.docs.map((doc) => processDoc(doc))
            );
            setError(false);
        }).catch((error) => {
            setError(true);
        });
    }, []);


    return (<Background title={"Admin site GEOTOP-A"} showLogOutButton>
        <h1>Submissions for GEOTOP-A event in Merida</h1>
        {error && <h3 style={{ textAlign: "center" }}>Error loading submissions. Try again.</h3>}
        {submissions.length == 0 && <h3 style={{ textAlign: "center" }}>No submissions yet</h3>}
        {submissions.map((submission) => (
            <SubmissionCard meetingId={meetingId} submission={submission} />
        ))}

    </Background>)
}

export default Submissions;