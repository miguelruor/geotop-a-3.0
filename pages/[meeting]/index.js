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
            <h2>January 8-13, 2024<br />Mérida (Yucatán), México</h2>
            <p>
                Some of the leading experts in applications of geometric and topological methods will gather in Mérida to present and discuss some of the most recent advances in various areas of mathematical sciences. Six thematic sessions will focus on hot topics that are marking current progress in active research areas, from topological data analysis to applications in artificial intelligence, from topological methods in field theory to applications of geometry and topology to DNA biology.
            </p>
            <p>
                This conference will also provide a wonderful occasion to celebrate five years of activity of the international web-seminar series GEOTOP-A, launched in August 2018.
            </p>
            <h3>Thematic Sessions</h3>
            <h4 style={{ textAlign: "center" }}>Applications of Geometry and Topology to Biology (DNA)</h4>
            <p>
                This session will present modern applications of geometry and topology to the structure and mechanism of DNA, proteins and viruses.
            </p>
            <h4 style={{ textAlign: "center" }}>Applications in Physical Sciences (PHYS)</h4>
            <p>
                In recent years there has been an increased interest in applications of geometric and topological techniques to physical systems, especially in the mathematical formalism of dynamical systems, in the study of vortex flows, magnetic fields, polymer physics and complex systems. Some of the most prominent advances in these various research areas will be presented and discussed in this session.
            </p>
            <h4 style={{ textAlign: "center" }}>Combinatorial Topology of Relational Structures (CTRS)</h4>
            <p>
                Simplicial complexes have been used very successfully in more and more situations recently, as a model where objects interact in some way. The reason is that they are higher dimensional generalizations of graphs, that can represent relations not only about pairs of objects, but of sets of objects of any cardinality.
                <br />Once a situation is modeled as a simplicial complex, or even a more general relational structure such as a simplicial set, it emerges that topological properties about the object capture properties about the underlying application, such as agents in a political structure, species in an ecological system, neurons in the brain, or computers interacting through a network or multicore shared memory system. The session will gather researchers that have already worked on the topology of relational structures, as well as others that are interesting in learning about these fascinating applications.
            </p>
            <h4 style={{ textAlign: "center" }}>Data Analysis, Machine Learning and AI (DAMLAI)</h4>
            <p>
                Modern and novel applications of Data Analysis, Machine Learning and AI to the sciences and in particular to pure mathematics will be presented.
            </p>
            <h4 style={{ textAlign: "center" }}>Topological Complexity and LS Category (TCLS)</h4>
            <p>
                Topological complexity is a numerical homotopy invariant of a topological space that gives a measure of the complexity of motion planning algorithms in robotics. This recently created research area is located within the burgeoning field of applied algebraic topology. With an originally applied motivation and, at the same time, a strong connection to classical subjects of algebraic topology like Lusternik-Schnirelmann category, this field has rapidly evolved due to contributions of many topologists. Recently, more applied flavoured results have begun to emerge, and nowadays the subject is a vibrant, highly active and fruitful ground for scientific activity, ready to face the current technological needs of our society. This session aims at bringing together specialists as well as early career mathematicians to discuss recent advances, and to set future lines of research in the area.
            </p>
            <h4 style={{ textAlign: "center" }}>Topological Data Analysis (TDA)</h4>
            <p>
                The 21st century witnessed the emergence of synergy between topology and data science. The two-way relation between the two lead to successful applications and new data driven theoretical results. The goal of this session is to facilitate conversations and new collaborations between researchers on the whole theoretical-applied continuum.
            </p>

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

            <h1 className={style.paragraphTitle}>Organizing Committee</h1>
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
                { image: '/img/meetings/' + props.meeting + '/supporting organizations/CONAHCYT.png', title: "" },
                { image: '/img/meetings/' + props.meeting + '/supporting organizations/UNAM.jpg', title: "" },
                { image: '/img/meetings/' + props.meeting + '/supporting organizations/SMM.jpg', title: "" },
                { image: '/img/meetings/' + props.meeting + '/supporting organizations/UAY.jpg', title: "" }
            ]} />
        </Background >
    )
}
