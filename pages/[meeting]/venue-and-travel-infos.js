import Background from '../../components/Proceedings/Background/Background';
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../views/HomePage/HomePageStyle.js";
import Link from 'next/link';

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
            <h1 className={classes.paragraphTitle}>Venue and Travel Infos</h1>
            <br />
            <h2>The Majorana Centre in Erice</h2>
            <p>
                The Ettore Majorana Foundation and Centre for Scientific Culture is named after the outstanding Italian
                physicist born in Sicily in 1906. It was founded by the Italian physicist Antonino Zichichi (now 92
                years-old!) in Geneva in 1962, and it moved to the pre-medieval town of Erice the following year. Ever
                since the Centre has actively promoted and hosted several workshops every year covering a wide variety of
                disciplines, ranging from fundamental physics, mathematics, medicine, chemistry, life sciences and many
                others applied fields to present day. Since its foundation the Centre has represented an important meeting
                place for hundreds of scientists from all over the world.
            </p>
            <p>
                The Majorana centre is distributed over several, ancient monasteries (see the map here below):
                <ul>
                    <li>the San Rocco monastery (now renamed the Isidor Rabi Institute) hosts the Directorate and the main Secretariat of the centre;</li>
                    <li>the former monastery of San Domenico (now the Patrick Blackett Institute) hosts 3 lecture rooms named after Paul Dirac, Robert Hofstadter and John von Neumann;</li>
                    <li>the ancient monastery of San Francesco (now the Eugene Wigner Institute) and the Ciclope (today the Victor Weisskopf Institute) host several other lecture rooms including the Enrico Fermi Lecture Hall.</li>
                </ul>
            </p>
        </Background>
    )
}
