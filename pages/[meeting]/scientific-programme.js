import Background from '../../components/Proceedings/Background/Background';
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../views/HomePage/HomePageStyle.js";

const useStyles = makeStyles(styles);

export async function getStaticProps(context) {
    const meeting = context.params.meeting;

    return {
        props: {
            meeting: meeting,
            meetingTitle: "Seminar GEOTOP-A",
            shortDescription: "First presential meeting in Merida, Mexico"
        }
    }
}


export async function getStaticPaths() {

    var paths = [{ params: { meeting: "merida24" } }]
    //paths = [{params: {meeting: "0"}}, {params:{meeting: "1"}}, {params:{meeting: "2"}}]

    return {
        paths: paths,
        fallback: false
    };
}

export default function AbstractSubmission(props) {

    const classes = useStyles();

    return (
        <Background title={props.meetingTitle} meetingId={props.meeting} shortDescription={props.shortDescription}>
            <h1 className={classes.paragraphTitle}>Scientific Programme</h1>
            <br />
            <p>
                The Programma at a Glance is a one-page document with the time-table of the keynote lectures and oral contributions. You can download the PDF directly from HERE.
            </p>
            <p>
                The detailed Scientific Programme, complete with the time-table of all the activities, including lecturers' names and titles of their presentations, is a 5-page document. You can download the PDF directly from HERE.
            </p>
        </Background>
    )
}
