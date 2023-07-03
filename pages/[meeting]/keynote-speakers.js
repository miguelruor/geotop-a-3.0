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
            <div className={style.paragraphTitle}>
                <h1>Keynote Speakers</h1>
            </div>
            <div style={{ width: "100%", textAlign: "center", fontSize: "1.4em" }}>
                Cristian Micheletti (DNA)<br />
                Mitchell Berger (PHYS)<br />
                Ismar Volić (CTRS)<br />
                Radmila Sazdanovic (DAMLAI)<br />
                Alexander Dranishnikov (TCLS)<br />
                Yusu Wang (TDA)<br />
            </div>
        </Background>
    )
}
