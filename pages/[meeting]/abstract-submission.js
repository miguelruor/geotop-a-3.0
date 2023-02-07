import Background from '../../components/Proceedings/Background/Background';
import { makeStyles } from "@material-ui/core/styles";
import Divider from '@material-ui/core/Divider';
import styles from "../../views/HomePage/HomePageStyle.js";

// nodejs library that concatenates classes

const useStyles = makeStyles(styles);

export async function getStaticProps(context) {
    const meeting = context.params.meeting;

    return {
        props: {
            meeting: meeting
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
        <Background title="Seminar GEOTOP-A" meetingId={props.meeting} shortDescription="First presential meeting in Merida, Mexico">
            <div className={classes.paragraphTitle}>
                <h1>Keynote Speakers</h1>
            </div>
            <ul>
                <li>Gareth P Alexander (U Warwick)</li>
                <li>Carlo Barenghi (Newcastle U)</li>
                <li>Mitchell A Berger (U Exeter)</li>
                <li>Jason Cantarella (U Georgia)</li>
                <li>Mark Dennis (U Birmingham)</li>
                <li>Yasuhide Fukumoto (Kyushu U)</li>
                <li>Gunnar Hornig (U Dundee)</li>
                <li>Randall Kamien (U Pennsylvania)</li>
                <li>Louis H Kauffman (U Illinois at Chicago)</li>
                <li>Boris A. Khesin (U. Toronto)</li>
                <li>Sofia Lambropoulou (Technical U. Athens)</li>
                <li>Xin Liu (Beijing U Technology)</li>
                <li>David MacTaggart (Glasgow U)</li>
                <li>Vassily Manturov (Moscow Institute of Physics and Technology)</li>
                <li>Sergei Nechaev (U Paris-Saclay)</li>
                <li>Antti Niemi (NORDITA Stockholm)</li>
                <li>Daniel Peralta-Salas (ICMAT Madrid)</li>
                <li>Renzo L. Ricca (U Milano-Bicocca)</li>
                <li>Rob Scharein (Hypnagogic Software)</li>
                <li>Urs Schreiber (New York U at Abu Dhabi)</li>
                <li>Koya Shimokawa (Ochanomizu U)</li>
                <li>Clayton Shonkwiler (Colorado State U)</li>
                <li>De Witt L Sumners (Florida State University)</li>
                <li>Paul M. Sutcliffe (U Durham)</li>
                <li>Jean-Luc Thiffeault (U Wisconsin at Madison)</li>
                <li>Alexander Voronov (U Minnesota)</li>
                <li>Asher Yahalom (Ariel U)</li>
                <li>Anthony Yeates (Durham U)</li>
            </ul>
        </Background>
    )
}
