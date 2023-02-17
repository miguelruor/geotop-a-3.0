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
            <h1 className={classes.paragraphTitle}>FAQs and Suggestions</h1>
            <br />
            <p>
                <b>Q.: How do I find the driver of the shuttle to the Majorana Centre at the airport?</b>
                <br />
                A.: Just outside the baggage claim (either at Palermo or Trapani airport) look for a driver with a plate bearing the name of the Majorana Centre and the event you are attending. The driver is instructed to collect a group of participants at given time slots during the whole day of September 1.
            </p>
            <p>
                <b>Q.: Can I get a transfer to/from the Majorana Centre any other day during the workshop?</b>
                <br />
                A.: Yes, just contact the Centre directly to organize the transfer. Call the local number 0923 869 133. The service is NOT free of charge and for this you should pay the Centre (ask for an invoice if you need reimbursement).
            </p>
            <p>
                <b>Q.: What do I do in case of need or help?</b>
                <br />
                A.: Call the Majorana Centre; dial the local number 0923 869 133 (keep this number with you at all times).
            </p>

        </Background>
    )
}
