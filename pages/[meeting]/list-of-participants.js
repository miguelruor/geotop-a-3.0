import Background from '../../components/Proceedings/Background/Background';
import { FirebaseProvider } from '../../firebase/FirebaseContext';
import ListOfParticipants from '../../components/Proceedings/ListParticipants/list-of-participants';

export async function getStaticProps(context) {
    const meeting = context.params.meeting;

    return {
        props: {
            meeting: meeting,
            meetingTitle: "Seminar GEOTOP-A",
            shortDescription: "First presential meeting in Merida, Mexico",
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

export default function ParticipantsPage(props) {

    return (
        <FirebaseProvider>
            <Background title={props.meetingTitle} meetingId={props.meeting} shortDescription={props.shortDescription}>
                <ListOfParticipants meetingId={props.meeting} />
            </Background>
        </FirebaseProvider>
    )
}
