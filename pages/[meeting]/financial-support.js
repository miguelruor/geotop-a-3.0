import Background from '../../components/Proceedings/Background/Background';
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../views/HomePage/HomePageStyle.js";

// nodejs library that concatenates classes

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
            <h1 className={classes.paragraphTitle}>Financial Support</h1>
            <h2>TBA</h2>
            {/*
            <p>
                Limited funds are available to provide partial support towards the participation of key speakers and young researchers.
                Financial support is provided by the <a href="https://www.matapp.unimib.it">Department of Mathematics and Applications</a> of the University of Milano-Bicocca,
                the Rector’s Office of the <a href="https://www.unimib.it">University of Milano-Bicocca</a>, and the <a href="https://www.altamatematica.it/gnfm/">Gruppo Nazionale per la Fisica Matematica (GNFM)</a>
                of the Istituto Nazionale di Alta Matematica (INdAM).
            </p>
            <p>
                Supported participants will be advised directly by the Chair by the end of July, 2022.
            </p>
            <h3>Financial support and reimbursement procedure</h3>
            <p>
                Those of you who expect to receive financial support or reimbursement are kindly requested to send the <b>original, official receipts</b> by ordinary mail to the Workshop Director at this address:
            </p>
            <p>
                Professor Renzo Ricca<br />
                Dipartimento di Matematica e Applicazioni<br />
                Università di Milano-Bicocca<br />
                Via Cozzi 55<br />
                20125 Milano<br />
                ITALY<br />
            </p>
            <strong>NOTE:</strong> in order to be efficient with the paperwork you are kindly requested to do the following.<br />
            i) Stick your receipts one by one on an A4 paper (one side only) so that they are all legible, highlighting the price and using as many sheets of paper as necessary.<br />
            ii) Keep travel expenses separated from meals expenses.<br />
            iii) Include print-outs of online purchases, such as air tickets, or train tickets.<br />
            iv) Provide separate summaries of the total expenditure for your travel, and for your meals.<br />
            v) Keep a copy of the original documents for your reference, and send everything by postal mail to the address above.
    */}
        </Background>
    )
}
