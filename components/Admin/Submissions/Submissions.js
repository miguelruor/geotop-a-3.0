import { useContext, useEffect, useState } from 'react';
import { FirebaseContext } from '../../../firebase/FirebaseContext';
import SubmissionCard from "./SubmissionCard";
import CenteredCircularProgress from "../../CenteredCircularProgress/CenteredCircularProgress.js";

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
    const [loadingData, setLoadingData] = useState(true);

    useEffect(() => {
        getSubmissions(meetingId).then((querySnapshot) => {
            setSubmissions(
                querySnapshot.docs.map((doc) => processDoc(doc))
            );
            setError(false);
            setLoadingData(false);
        }).catch((error) => {
            setError(true);
            setLoadingData(false);
        });
    }, []);


    return <>
        <h1>Submissions for GEOTOP-A event in Merida</h1>
        {loadingData && <CenteredCircularProgress />}
        {error && <h3 style={{ textAlign: "center" }}>Error loading submissions. Try again.</h3>}
        {submissions.length == 0 && !loadingData && <h3 style={{ textAlign: "center" }}>No submissions yet</h3>}
        {submissions.map((submission) => (
            <SubmissionCard meetingId={meetingId} submission={submission} />
        ))}
    </>
}

export default Submissions;