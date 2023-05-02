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
            <h1 className={style.paragraphTitle}>Group Photo and Gallery</h1>
            <h2>TBA</h2>
            {/*
            <br />
            <p>
                A high-resolution Group Photo, taken on Sunday September 4, can be downloaded from HERE.
            </p>
            <p>
                The Group Photo complete with all the names of the participants present either in person or virtually on-line (shown here below) can be downloaded as a PDF file (4.9 MB) HERE, or as a JPG file (1 MB) HERE.
            </p>
    */}
        </Background>
    )
}
