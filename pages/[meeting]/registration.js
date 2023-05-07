import Background from '../../components/Proceedings/Background/Background';
import style from "../../assets/css/meetings.module.css";
import Link from "next/link";
import RegistrationForm from '../../components/Proceedings/RegistrationForm/RegistrationForm';

import meetingData from "../../data/meeting.json";

export async function getStaticProps() {
    return {
        props: meetingData
    }
}


export async function getStaticPaths() {

    var paths = [{ params: { meeting: meetingData.meetingId } }]
    //paths = [{params: {meeting: "0"}}, {params:{meeting: "1"}}, {params:{meeting: "2"}}]

    return {
        paths: paths,
        fallback: false
    };
}

export default function AbstractSubmission(props) {

    return (
        <Background title={props.meetingTitle} meetingId={props.meetingId} shortDescription={props.shortDescription}>
            <h1 className={style.paragraphTitle}>Deadlines and Registration</h1>
            <h2>Deadlines</h2>
            <p>
                For the preparation of your abstract please follow the <Link href={"/" + props.meetingId + "/contribution-guidelines"}>Guidelines for Contribution</Link>.
            </p>
            <ul>
                <li>Deadline for the submission of abstracts (Keynote lectures - 45 mins): October 31</li>
                <li>Deadline for the submission of abstracts (Oral contributions - 25 mins): September 30</li>
                <li>Deadline for the submission of abstracts (Poster presentations - 5 mins): September 30</li>
            </ul>

            <h2>Registration</h2>
            <p>
                Participants are kindly requested to register their details online by filling this form. In order to encourage the participation of post-docs and the community of researchers at
                large, there will be NO REGISTRATION FEE to attend this conference.
            </p>

            <RegistrationForm />

        </Background>
    )
}
