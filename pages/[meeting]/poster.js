import Background from '../../components/Proceedings/Background/Background';
import style from "../../assets/css/meetings.module.css";
import Image from "next/image";
import DownloadIcon from '@mui/icons-material/Download';

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
            <h1 className={style.paragraphTitle}>Poster </h1>
            <DownloadButton />

            <div className={style.poster}>
                <Image src="/img/meetings/merida24/poster.jpeg" objectFit='contain' layout="fill" />
            </div>
        </Background>
    )
}

const DownloadButton = () => {
    return <a href='https://drive.google.com/file/d/1jbc5hgU2bfN88ibyIhDHshFrxKYBYHeM/view?usp=drive_link' target='_blank'>
        <DownloadIcon
            fontSize='large'
            style={{
                border: "1px solid rgba(0, 0, 0, 0.1)",
                padding: "5px",
                boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
                position: "absolute",
                top: "70px",
                right: "30px"
            }}
        />
    </a>
}
