import Background from '../../components/Proceedings/Background/Background';
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../views/HomePage/HomePageStyle.js";
import Link from 'next/link';

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
            <h1 className={classes.paragraphTitle}>Guidelines for Contribution</h1>
            <p>
                This conference is organized in 6 thematic sessions:
                <ul>
                    <li>Applications of Geometry and Topology to Biology (DNA)</li>
                    <li>Applications in Physical Sciences (PHYS)</li>
                    <li>Combinatorial Topology of Relational Structures (CTRS)</li>
                    <li>Data Analysis, Machine Learning and AI (DAMLAI)</li>
                    <li>Topological Complexity and LS Category (TCLS)</li>
                    <li>Topological Data Analysis (TDA)</li>
                </ul>
            </p>
            <p>
                In order to make each session accessible and useful to everybody, especially the young
                researchers, an effort should be made to present the material in an accessible way to
                non-specialists. Given the wide variety of topics covered it is of paramount importance
                to leave time for questions.
            </p>
            <h2>Keynote lectures - 45 mins</h2>
            <p>
                Keynote Lectures are kindly requested to keep their presentation to 40 minutes, leaving 5 minutes for questions. It would be beneficial to include a
                short introduction accessible to non-specialists, possibly outlining the key concepts and the methodology used.
            </p>
            <p>
                To prepare the Abstract please follow the format as indicated in the <Link href={"/" + props.meetingId + "/abstract-submission"}>Abstract Submission</Link> page.
            </p>
            <h2>Oral Contributions - 25 mins</h2>
            <p>
                Speakers contributing with an oral presentation are kindly requested to keep their talk
                to 20 minutes, leaving 5 minutes for questions. It would be beneficial to include a very short entry to the key concepts,
                so to make accessible the contents of the talk to non-specialists.

                minutes for questions. It would be beneficial to include a short introduction accessible to non-
                specialists, possibly outlining the key concepts and the methodology used.
            </p>
            <p>
                To prepare the Abstract please follow the format as indicated in the <Link href={"/" + props.meetingId + "/abstract-submission"}>Abstract Submission</Link> page.
            </p>
            <h2>Poster presentations - 5 mins</h2>
            <p>
                Presenters of posters are kindly requested to keep strictly to the allocated 5-minute time for
                their oral presentation. They are also kindly requested to stand by their poster during the
                poster session (as indicated in the Scientific Program) so to be available for questions.
            </p>
            <p>
                To prepare the Abstract please follow the format as indicated in the <Link href={"/" + props.meetingId + "/abstract-submission"}>Abstract Submission</Link> page.
            </p>
        </Background>
    )
}
