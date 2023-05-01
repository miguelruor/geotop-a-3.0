import Background from '../../components/Proceedings/Background/Background';
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../views/HomePage/HomePageStyle.js";
import Link from "next/link";

import meetingData from "../../data/meeting.json";

const useStyles = makeStyles(styles);

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

    const classes = useStyles();

    return (
        <Background title={props.meetingTitle} meetingId={props.meetingId} shortDescription={props.shortDescription}>
            <h1 className={classes.paragraphTitle}>Deadlines and Registration</h1>
            <h2>Deadlines</h2>
            <p>
                For the preparation of your abstract please follow the <Link href={"/" + props.meeting + "/contribution-guidelines"}>Guidelines for Contribution</Link>.
            </p>
            <ul>
                <li>Deadline for the submission of abstracts (Keynote lectures - 45 mins): October 31</li>
                <li>Deadline for the submission of abstracts (Oral contributions - 25 mins): September 30</li>
                <li>Deadline for the submission of abstracts (Poster presentations - 5 mins): September 30</li>
            </ul>

            <h2>Registration</h2>
            <p>
                Participants are kindly requested to register their details online by filling this form (not yet available).
            </p>
            <p>
                In order to encourage the participation of post-docs and the community of researchers at
                large, there will be no registration fee to attend this conference.
            </p>

        </Background>
    )
}
