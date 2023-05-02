import Background from '../../components/Proceedings/Background/Background';
import Divider from '@material-ui/core/Divider';
import style from "../../assets/css/meetings.module.css";

// nodejs library that concatenates classes
import SectionCarousel from "../../components/Carousel/carousel.js";
import ImageCardGrid from '../../components/Proceedings/ImageCardGrid/ImageCardGrid.js';

import meetingData from "../../data/meeting.json";


export async function getStaticProps(context) {
    const meeting = context.params.meeting;
    const totalImages = 4

    var images = []

    for (var i = 1; i <= totalImages; i += 1) {
        images.push('/img/meetings/' + meeting + '/conference venue/img' + i.toString() + '.png')
    }

    return {
        props: {
            images: images,
            meeting: meeting,
            ...meetingData,
        }
    }
}


export async function getStaticPaths() {

    var paths = [{ params: { meeting: meetingData.meetingId } }]
    //paths = [{params: {meeting: "0"}}, {params:{meeting: "1"}}, {params:{meeting: "2"}}]

    return {
        paths: paths,
        fallback: false
    };
}

export default function Home(props) {

    return (
        <Background title={props.meetingTitle} meetingId={props.meeting} shortDescription={props.shortDescription}>

            <div className={style.paragraphTitle}>
                <h1>GEOTOP-A International Conference</h1>
                <h2>Applications of Geometry and Topology</h2>
            </div>
            <h2>January 8-12, 2024<br />Mérida (Yucatán), México</h2>
            <p>
                Some of the leading experts in applications of geometric and topological methods will gather in Mérida to present and discuss some of the most recent advances in various areas of mathematical sciences. Six thematic sessions will focus on hot topics that are marking current progress in active research areas, from topological data analysis to applications in artificial intelligence, from topological methods in field theory to applications of geometry and topology to DNA biology.
            </p>
            <p>
                This conference will also provide a wonderful occasion to celebrate five years of activity of the international web-seminar series GEOTOP-A, launched in August 2018.
            </p>
            <h3>Thematic Sessions</h3>
            <ul>
                <li>Applications of Geometry and Topology to Biology (DNA)</li>
                <li>Applications in Physical Sciences (PHYS)</li>
                <li>Combinatorial Topology of Relational Structures (CTRS)</li>
                <li>Data Analysis, Machine Learning and AI (DAMLAI)</li>
                <li>Topological Complexity and LS Category (TCLS)</li>
                <li>Topological Data Analysis (TDA)</li>
            </ul>
            <h3>Format</h3>
            <p>
                Keynote lectures (45 minutes, including questions), Oral contributions (25 minutes, including questions) and Poster presentations (5 minutes)
            </p>
            <Divider variant="fullWidth" />
            <h1 className={style.paragraphTitle}>Conference Venue</h1>
            <SectionCarousel images={props.images} />
            <p>Universidad Autónoma de Yucatán (UADY, Edificio Central), Mérida</p>
            <Divider variant="fullWidth" />

            <h1 className={style.paragraphTitle}>Scientific Committee</h1>
            <ul style={{ fontStyle: "italic" }}>
                <li>Paweł Dłotko (Dioscuri Centre, Poland)</li>
                <li>Michael Farber (Queen Mary University of London, UK)</li>
                <li>José-Carlos Gómez-Larrañaga (CIMAT-Mérida, México)</li>
                <li>Jesús González-Espino-Barros (CINVESTAV, México)</li>
                <li>Eric Goubault (École Polytechnique, France)</li>
                <li>Ingrid Membrillo-Solís (University of Southampton, UK)</li>
                <li>Neza Mramor-Kosta (U Ljubljana, Slovenia)</li>
                <li>Sergio Rajsbaum-Gorodezky (Instituto de Matemáticas, UNAM, México)</li>
                <li>Renzo L. Ricca (U Milano-Bicocca, Italy)</li>
                <li>Radmila Sazdanovic (North Carolina State U, USA)</li>
                <li>De Witt Sumners (Florida State U, USA)</li>
            </ul>
            <Divider variant="fullWidth" />

            <h1 className={style.paragraphTitle}>Local Organizing Committee</h1>
            <ul style={{ fontStyle: "italic" }}>
                <li>Martha-Gabriela Araujo-Pardo (Sociedad Matemática Mexicana & IM-UNAM, México)</li>
                <li>Luis-Celso Chan-Palomo (FMAT-UADY, México)</li>
                <li>José-Carlos Gómez-Larrañaga (CIMAT-Mérida, México)</li>
                <li>Ernesto-Antonio Guerrero-Lara (FMAT-UADY, México)</li>
                <li>Ingrid Membrillo-Solís (University of Southampton, UK)</li>
                <li>Jesús-Rogelio Pérez-Buendía (CIMAT-Mérida, México)</li>
                <li>Antonio Rieser (CIMAT-Guanajuato, México)</li>
                <li>Jesús Rodríguez-Viorato (CIMAT-Guanajuato, México)</li>
                <li>Pablo Suárez-Serrato (IM-UNAM, México)</li>
            </ul>
            <Divider variant="fullWidth" />

            <ImageCardGrid title="Supporting Organizations" cardProps={[
                { image: '/img/meetings/' + props.meeting + '/supporting organizations/CIMAT.jpg', title: "" },
                { image: '/img/meetings/' + props.meeting + '/supporting organizations/CINVESTAV.jpg', title: "" },
                { image: '/img/meetings/' + props.meeting + '/supporting organizations/CONACYT.jpg', title: "" },
                { image: '/img/meetings/' + props.meeting + '/supporting organizations/UNAM.jpg', title: "" },
                { image: '/img/meetings/' + props.meeting + '/supporting organizations/SMM.jpg', title: "" },
                { image: '/img/meetings/' + props.meeting + '/supporting organizations/UAY.jpg', title: "" }
            ]} />
        </Background >
    )
}
