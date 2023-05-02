import Background from '../../components/Proceedings/Background/Background';
import style from "../../assets/css/meetings.module.css";

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

    return (
        <Background title={props.meetingTitle} meetingId={props.meeting} shortDescription={props.shortDescription}>
            <h1 className={style.paragraphTitle}>Social Programme</h1>
            <h2>TBA</h2>
            {/*
            <br />
            <p>
                A half-day excursion to visit the wonderful archeological site of Segesta will take place on Sunday afternoon,
                September 4. The excursion is part of the social programme covered by the Registration Fees package. A special
                bus will collect the participants at the Trapani Gate car park (see the map HERE).
            </p>
            <p><b>
                The bus will depart from the Trapani Gate at 2:45 PM, so don't be late over lunch!
            </b></p>
            <p>
                In preparing for the trip pay attention to the wheather conditions. The trip to Segesta will take about 1hr, and to have an idea of the journey have a look at the Google map HERE. Once there, the participants will be guided through the site to visit several ancient remains, including the doric temple and the spectacular theatre (on the top of Mount Barbaro), remarkable and unique examples of the Hellenic civilisation of the area more than 800 years BC! The archeological site is quite rich of monuments and quite extended: to have an idea see the map HERE, so be prepared for an interesting guided tour on an organised local bus. People with walking difficulties can still enjoy the remains staying on the local bus. At the end of the visit all the participants will return to Erice, expecting to arrive at about 7:15 pm. The social dinner, also included in the Registration Fees package, will be held at the Ulisse Restaurant, a short stroll away from the Dirac Lecture Hall, and it will start at about 8:30 pm.
            </p>
    */}
        </Background>
    )
}
