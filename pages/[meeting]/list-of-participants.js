import Background from '../../components/Proceedings/Background/Background';
import style from "../../assets/css/meetings.module.css";

export async function getStaticProps(context) {
    const meeting = context.params.meeting;

    return {
        props: {
            meeting: meeting,
            meetingTitle: "Seminar GEOTOP-A",
            shortDescription: "First presential meeting in Merida, Mexico",
            submissions: [
                {
                    participantNum: 1,
                    familyName: "ALEXANDER",
                    firstName: "Gareth",
                    affiliation: "Warwick U.",
                    country: "UK",
                    arrival: "PA - 1",
                    arrivalTime: "17:50",
                    departure: "PA - 7",
                    departureTime: "13:35",
                },
                {
                    participantNum: 2,
                    familyName: "BALE",
                    firstName: "Arron",
                    affiliation: "Durham U.",
                    country: "UK",
                    arrival: "PA - 1",
                    arrivalTime: "21:15",
                    departure: "TR - 7",
                    departureTime: "18:40",
                },
                {
                    participantNum: 3,
                    familyName: "BARENGHI",
                    firstName: "Carlo",
                    affiliation: "Newcastle U.",
                    country: "UK",
                    arrival: "PA - 1",
                    arrivalTime: "10:35",
                    departure: null,
                    departureTime: null,
                },
                {
                    participantNum: 4,
                    familyName: "BELLONI",
                    firstName: " Andrea",
                    affiliation: "Newcastle U.",
                    country: "UK",
                    arrival: "TR - 1",
                    arrivalTime: "7:35",
                    departure: "PA - 7",
                    departureTime: "20:20",
                },

            ]
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

    const { submissions } = props;

    return (
        <Background title={props.meetingTitle} meetingId={props.meeting} shortDescription={props.shortDescription}>
            <h1 className={style.paragraphTitle}>List of Participants</h1>
            <br />
            <h3>Applications of Geometry and Topology to Biology (DNA)</h3>
            <ul>
                <li>Sophie Jackson</li>
                <li>Cristian Micheletti</li>
                <li>Davide Michieletto</li>
                <li>Ken Millett</li>
                <li>Lynn Zechiedrich</li>
            </ul>
            <h3>Applications in Physical Sciences (PHYS)</h3>
            <h3>Combinatorial Topology of Relational Structures (CTRS)</h3>
            <h3>Data Analysis, Machine Learning and AI (DAMLAI)</h3>
            <ul>
                <li>Ingrid Membrillo-Solís</li>
                <li>Radmila Sazdanovic</li>
            </ul>
            <h3>Topological Complexity and LS Category (TCLS)</h3>
            <ul>
                <li>Dan Cohen</li>
                <li>Jose Manuel García-Calcines</li>
                <li>Dan Guralnik</li><li>Norio Iwase</li>
                <li>Ben Knudsen</li>
                <li>Stephan Mescher</li>
                <li>Amit Kumar Paul</li>
                <li>Petar Pavesic</li>
                <li>Rekha Santhanam</li>
                <li>Lucile Vandembroucq</li>
            </ul>
            <h3>Topological Data Analysis (TDA)</h3>

        </Background>
    )
}
