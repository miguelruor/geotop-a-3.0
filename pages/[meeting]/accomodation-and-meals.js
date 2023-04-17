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
            <h1 className={classes.paragraphTitle}>Accomodation and Meals</h1>
            <h2>TBA</h2>
            {/*
            <br />
            <h2>Registration, Accomodation and Badge</h2>
            <p>
                Upon arrival all the participants will be registered at the Secretariat of the Centre located in the San Rocco
                monastery (the Isidor Rabi Institute). With their welcome package they will be assigned lodging at one of the
                monasteries of the Centre and they will receive a personal badge. This identification badge must be worn at all
                times, also at restaurants (outside the Centre) for meals.
            </p>
            <h2>Breakfast</h2>
            <p>
                Residents living in one of the Majorana monasteries will have their breakfast readily available on a self-service
                basis in the coffee room of the San Rocco monastery. The coffee room is located in the back of the courtyard on
                the right-hand side under the staircase.
            </p>
            <p>
                A selection of coffee, tea, milk, mineral water, fruit and sandwiches will be available (free of charge) in the coffee
                room of the San Rocco monastery every day, at any time.
            </p>
            <h2>Lunch and dinner</h2>
            <p>
                Meals are included in the registration fees package and are offered by a selected list of recommended restaurants; this
                list is displayed in the entrance hall of the San Rocco monastery. Opening and closing times of each restaurant are also
                annotated. It is the participant’s responsibility to wear the personal badge for identification when visting the chosen
                restaurant. The restaurant’s owner will ask the participant to sign a form, where the appropriate event must be indicated
                (School & Workshop on Topological Methods in Mathematical Physics) as well as the participant’s name. Please make your
                signature legible! Accompanying persons must fill and sign this form too.
            </p>
            <p>
                To avoid queuing and have a faster service at the chosen restaurant (particularly over the short time interval for lunch)
                participants are warmly invited to distribute themselves in small groups among the various recommended restaurants.
            </p>
    */}
        </Background>
    )
}
