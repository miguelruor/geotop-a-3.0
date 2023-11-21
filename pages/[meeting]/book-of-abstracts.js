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

export default function BookOfAbstracts(props) {

    return (
        <Background title={props.meetingTitle} meetingId={props.meeting} shortDescription={props.shortDescription}>
            <h1 className={style.paragraphTitle}>Book of Abstracts</h1>
            <br />
            <p>
                The Book of Abstracts collects titles and abstracts of the presentations in a single document. You can download the PDF directly from <a href="https://drive.google.com/file/d/19nXbr7KG4MaLH9nuqC89cg7tEmmall9k/view?usp=sharing" target='_blank'>HERE</a>.
            </p>
        </Background>
    )
}
