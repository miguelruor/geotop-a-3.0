import Background from '../../components/Proceedings/Background/Background';
import style from "../../assets/css/meetings.module.css";
import Image from 'next/image';
import Hidden from '@material-ui/core/Hidden';

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

export default function KeynoteSpeakers(props) {

    return (
        <Background title={props.meetingTitle} meetingId={props.meeting} shortDescription={props.shortDescription}>
            <div className={style.paragraphTitle}>
                <h1>Keynote Speakers</h1>
            </div>
            <Hidden mdUp>
                <div className={style.centeredImage}>
                    <Image src="/img/meetings/merida24/others/merida_letras.png" objectFit='contain' width={500} height={350} />
                </div>
            </Hidden>
            <div className={style.imageAndText}>
                <Hidden smDown className={style.sideImage}>
                    <Image src="/img/meetings/merida24/others/merida_letras.png" objectFit='contain' width={500} height={400} />
                </Hidden>
                <p className={style.textSideImages}>
                    <strong>Sophie Jackson</strong><br />
                    <strong>Cristian Micheletti</strong><br />
                    (DNA)<br /><br />

                    <strong>Mitchell Berger</strong><br />
                    <strong>Louis Kauffman</strong><br />
                    (PHYS)<br /><br />

                    <strong>Ismar Volić</strong><br />
                    (CTRS)<br /><br />

                    <strong>Paweł Dłotko</strong><br />
                    <strong>Radmila Sazdanovic</strong><br />
                    (DAMLAI)<br /><br />

                    <strong>Alexander Dranishnikov</strong><br />
                    (TCLS)<br /><br />

                    <strong>Yusu Wang</strong><br />
                    (TDA)<br /><br />

                </p>
                <Hidden smDown className={style.sideImage}>
                    <Image src="/img/meetings/merida24/others/cenote.jpg" objectFit='contain' width={500} height={400} />
                </Hidden>
            </div>
            <Hidden mdUp>
                <div className={style.centeredImage}>
                    <Image src="/img/meetings/merida24/others/cenote.jpg" objectFit='contain' width={500} height={350} />
                </div>
            </Hidden>
        </Background>
    )
}
