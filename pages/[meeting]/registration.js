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
            <h1 className={classes.paragraphTitle}>Deadlines and Registration</h1>
            <h2>TBA</h2>
            {/*
            <h2>Deadlines</h2>
            <ul>
                <li>Conference Grant requests: <b>June 15, 2022</b></li>
                <li>Registration fees payments: <b>July 15, 2022</b></li>
                <li>Abstract submission deadline: <b>July 31, 2022</b></li>
            </ul>
            <h2>Registration</h2>
            <h3>Step 1: Conference registration</h3>
            <ol type="A">
                <li>
                    All prospective participants are requested to send details of their participation by clicking
                    <a href="mailto:renzo.ricca@unimib.it?subject=Erice%20Conference%20Registration&body=Please%20fill%20in%20the%20requested%20information%20and%20return%20this%20message%20by%20standard%20email%20as%20soon%20as%20possible.%0A%0APlease%20note%20that%20accommodation%20is%20handled%20directly%20by%20the%20Majorana%20Centre%20and%20it%20will%20be%20arranged%20in%20rooms%20available%20on%20site.%0A%0ABasic%20information%0A%E2%80%A2%20Family%20name%20%28capital%20letters%29%3A%0A%E2%80%A2%20First%20name%3A%0A%E2%80%A2%20Affiliation%3A%20%0A%E2%80%A2%20Department%3A%0A%E2%80%A2%20Expected%20arrival%20date%20%28please%20specify%20am%20or%20pm%29%3A%0A%E2%80%A2%20Expected%20departure%20date%20%28please%20specify%20am%20or%20pm%29%3A%0A%E2%80%A2%20VISA%20invitation%20letter%20needed%20%28please%20specify%20yes%2Fno%29%3A%0A%E2%80%A2%20Accompanying%20person%20%28please%20specify%20yes%2Fno%29%3A%0A%E2%80%A2%20Accompanying%20person%3A%20Family%20name%20%28capital%20letters%29%3A%0A%E2%80%A2%20Accompanying%20person%3A%20First%20name%3A%0A%E2%80%A2%20Accompanying%20person%3A%20VISA%20invitation%20letter%20needed%20%28please%20specify%20yes%2Fno%29%3A%0A%E2%80%A2%20Email%20address%3A%0A%0AScientific%20contribution%20%28preliminary%29%0A%E2%80%A2%20Oral%20presentation%20%28please%20specify%20yes%2Fno%29%3A%0A%E2%80%A2%20Poster%20presentation%20%28please%20specify%20yes%2Fno%29%3A%0A%E2%80%A2%20Interest%20in%20conference%20proceedings%20%28please%20specify%20yes%2Fno%29%3A%0A%0AAccommodation%20information%20%28preliminary%29%0A%E2%80%A2%20Room%20type%20requested%20%28please%20specify%20if%20single%2C%20shared%20double%2C%20triple%2C%20other%29%3A%0A%E2%80%A2%20Dietary%20requirements%2Fallergens%20%28please%20specify%29%3A%0A%E2%80%A2%20Additional%20information%20%28please%20specify%29%3A">HERE</a>.
                </li>
                <li>
                    (Optional) Limited funds are available to provide partial support towards the participation of young researchers. Prospective applicants should send their request by filling the required details by clicking
                    <a href="mailto:renzo.ricca@unimib.it?subject=Conference%20Grant%20Request&body=Please%20fill%20in%20the%20requested%20information%20and%20return%20this%20message%20by%20standard%20email%20as%20soon%20as%20possible.%0A%0ALimited%20funds%20are%20provided%20towards%20the%20participation%20of%20young%20researchers%20in%20the%20form%20of%20Conference%20Grants%20of%20EUR%20400.00%20towards%20partial%20coverage%20of%20full%20conference%20fees.%20Please%20send%20in%20the%20following%20information.%0A%0ABasic%20information%0A%E2%80%A2%20Family%20name%20%28capital%20letters%29%3A%0A%E2%80%A2%20First%20name%3A%0A%E2%80%A2%20Affiliation%3A%20%0A%E2%80%A2%20Department%3A%0A%E2%80%A2%20Academic%20status%20%28PhD%20student%2C%20PostDoc%2C%20Researcher%29%3A%0A%E2%80%A2%20Oral%20presentation%20%28please%20specify%20yes%2Fno%29%3A%0A%E2%80%A2%20Poster%20presentation%20%28please%20specify%20yes%2Fno%29%3A%0A%E2%80%A2%20Email%20address%3A%0A%0ASupporting%20information%0A%E2%80%A2%20Scientific%20mentor%3A%20Surname%20%28capital%20letters%29%3A%0A%E2%80%A2%20Scientific%20mentor%3A%20Name%3A%0A%E2%80%A2%20Scientific%20mentor%3A%20Email%20address%3A%0A%E2%80%A2%20Key%20publication%20attached%20%28please%20specify%20yes%2Fno%29%3A">HERE</a> as early as possible.
                </li>
            </ol>
            <h3>Step 2: Registration Fees Payment</h3>
            <p>Registration Fees</p>
            <p>Registration fees will provide a comprehensive package covering all services during the conference; in particular:</p>
            <ul>
                <li>formal registration to the conference and welcome package</li>
                <li>minibus transfer from/to Palermo and Trapani airport</li>
                <li>accommodation in rooms provided by the Majorana Centre</li>
                <li>full board (breakfast, lunch and dinner) during the days of the conference</li>
                <li>lecturing support and wi-fi services</li>
                <li>morning and afternoon coffee breaks</li>
                <li>social programme including a half-day excursion</li>
                <li>social dinner</li>
            </ul>
            <p>Payments</p>
            <p>All payments must be done by online transactions (major cards accepted) by entering details according to the appropriate type of registration.</p>
            <ul>
                <li>Full Conference Fees: <b>EUR 800.00</b></li>
                <li>Conference Grant Fees: <b>EUR 400.00</b></li>
                <li>Accompanying Person Fees: <b>EUR 500.00</b></li>
            </ul>
            <p>On the payment page please select:</p>
            <ul>
                <li>Organisation: <b>UNIV.  STUDI MILANO-BICOCCA</b></li>
                <li>Payment reason: <b>ERICE2022</b></li>
            </ul>
            <ol type="A">
                <li>Residents in Italy should click <a target="_blank" href="https://script.google.com/macros/s/AKfycbwcszpM3rjsPH8HLutCmwCBMk6Qk8g3MaKDglyR-EE-NoVUTlY/exec">HERE</a> for payment.</li>
                <li>Residents abroad should click <a target="_blank" href="https://script.google.com/macros/s/AKfycbwcszpM3rjsPH8HLutCmwCBMk6Qk8g3MaKDglyR-EE-NoVUTlY/exec?language=en">HERE</a> for payment.</li>
            </ol>
            <h3>Cancellation Policy and Refunds</h3>
            <p>A registered participant can opt out for a cancellation policy and request a refund of paid registration fees. Request refunds will be subject to the following deadlines:</p>
            <ul>
                <li><b>On or before July 15, 2022</b>: refund subject to a 5% credit card handling fee</li>
                <li><b>July 15 - July 20, 2022</b>: refund subject to a cancellation fee of <b>EUR 200.00</b></li>
                <li><b>After July 20, 2022</b>: no refund will be possible</li>
            </ul>
            <p>Should you need a refund please click <a href="mailto:renzo.ricca@unimib.it?subject=Conference%20Request%20Refund&body=Please%20fill%20in%20the%20requested%20information%20and%20return%20this%20message%20by%20standard%20email%20as%20soon%20as%20possible.%0APlease%20note%20that%20requests%20of%20refunds%20are%20subject%20to%20the%20following%20conditions%3A%20%0A%E2%80%A2%20On%20or%20before%20June%2030%2C%202022%3A%C2%A0refund%20subject%20to%20a%205%25%20credit%20card%20handling%20fee%0A%E2%80%A2%20June%2030%20-%20July%2015%2C%202022%3A%C2%A0refund%20subject%20to%20a%20cancellation%20fee%20of%20EUR%20200.00%0A%E2%80%A2%20After%20July%2015%2C%202022%3A%C2%A0no%20refund%20will%20be%20possible%0A%0ABasic%20information%0A%E2%80%A2%20Family%20name%20%28capital%20letters%29%3A%0A%E2%80%A2%20First%20name%3A%0A%E2%80%A2%20Affiliation%3A%20%0A%E2%80%A2%20Department%3A%0A%E2%80%A2%20Email%20address%3A%0A%0ASupporting%20information%0A%E2%80%A2%20Reasons%20for%20refund%20request%20%28please%20specify%29%3A">REQUEST REFUND</a>.</p>
    */}
        </Background>
    )
}
