import Background from '../../components/Proceedings/Background/Background';
import { makeStyles } from "@material-ui/core/styles";
import Divider from '@material-ui/core/Divider';
import styles from "../../views/HomePage/HomePageStyle.js";

// nodejs library that concatenates classes
import SectionCarousel from "../../components/Carousel/carousel.js";
import ImageCardGrid from '../../components/Proceedings/ImageCardGrid/ImageCardGrid.js';

const useStyles = makeStyles(styles);

export async function getStaticProps(context) {
    const meeting = context.params.meeting;
    const totalImages = 6

    var images = []

    for (var i = 1; i <= totalImages; i += 1) {
        images.push('/img/meetings/' + meeting + '/conference venue/img' + i.toString() + '.jpg')
    }

    return {
        props: {
            images: images,
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

export default function Home(props) {

    const classes = useStyles();

    return (
        <Background title={props.meetingTitle} meetingId={props.meeting} shortDescription={props.shortDescription}>
            <h2>International School of Mathematics {"«Guido Stampacchia»"}</h2>
            <div className={classes.paragraphTitle}>
                <h1>Topological Methods in Mathematical Physics</h1>

            </div>
            <h2>Erice, Italy</h2>
            <p>
                This worskhop wants to provide an international forum for discussion and presentation of some of the most recent advances in applications of geometric and
                topological methods in various fields of modern mathematical physics. Particular emphasis will be put on applications of technicques from knot theory and
                low dimensional topology to understand physical aspects of knotted fields and complex systems. Focus will be put on the study of kinetic and magnetic helicity,
                role of geometric and topological phases, minimal surfaces, energy-complexity relations and topological change due to reconnection mechanisms in physical and
                biological systems, topological cascade and energy relaxation in dynamical systems. Applications will range from vortex dynamics, magnetohydrodynamics and
                superfluids to geometric optics, defect dynamics, string theory and DNA topology, with the aim to present the most updated results in rapidly growing fields that
                are at the forefront of current research in topological field theory.
            </p>
            <p>
                The Workshop will host keynote lectures by renowned experts in the field, and several oral contributions from young researchers. The scientific programme will
                include 33 presentations given in person, and 5 given virtually by remote connections from USA, Russia and China.
            </p>
            <h2>Main Topics</h2>
            <ul>
                <li>Multi-valued gauge theory</li>
                <li>Physical knot theory and homological techniques</li>
                <li>Kinetic and magnetic helicity of fluid flows</li>
                <li>Geometric and topological phases</li>
                <li>Seifert surfaces and minimal surfaces</li>
                <li>Energy bounds by topological complexity</li>
                <li>Topological changes due to reconnection</li>
                <li>Topological cascade and energy relaxation</li>
            </ul>
            <h2>Formats</h2>
            <p>
                Keynote Lectures (60 minutes, including questions) and Oral Contributions (30 minutes, including questions).
            </p>
            <Divider variant="fullWidth" />
            <h1 className={classes.paragraphTitle}>Conference Venue</h1>
            <SectionCarousel images={props.images} />
            <ImageCardGrid title="Scientific Committee" cardProps={[
                { image: "img/organizers/org6.png", title: "Alicia Dickenstein", subtitle: "University of Buenos Aires, Argentina" },
                { image: "img/organizers/org1.png", title: "José-Carlos Gómez-Larrañaga", subtitle: "CIMAT, Mexico" },
                { image: "img/organizers/org2.png", title: "Kathryn Hess", subtitle: "École Polytechnique Fédérale de Lausanne, Switzerland" },
                { image: "img/organizers/org3.png", title: "Neza Mramor-Kosta", subtitle: "University of Ljubljana, Slovenia" },
                { image: "img/organizers/org4.png", title: "Renzo L. Ricca", subtitle: "University of Milano-Bicocca, Italy" },
                { image: "img/organizers/org5.png", title: "De Witt L. Sumners", subtitle: "Florida State University, USA" }
            ]} />
            <ImageCardGrid title="Organising Committee" cardProps={[
                { image: "img/organizers/org6.png", title: "Alicia Dickenstein", subtitle: "University of Buenos Aires, Argentina" },
                { image: "img/organizers/org1.png", title: "José-Carlos Gómez-Larrañaga", subtitle: "CIMAT, Mexico" },
                { image: "img/organizers/org2.png", title: "Kathryn Hess", subtitle: "École Polytechnique Fédérale de Lausanne, Switzerland" },
                { image: "img/organizers/org3.png", title: "Neza Mramor-Kosta", subtitle: "University of Ljubljana, Slovenia" },
                { image: "img/organizers/org4.png", title: "Renzo L. Ricca", subtitle: "University of Milano-Bicocca, Italy" },
                { image: "img/organizers/org5.png", title: "De Witt L. Sumners", subtitle: "Florida State University, USA" }
            ]} />
            <ImageCardGrid title="Supporting Organisations" cardProps={[
                { image: '/img/meetings/' + props.meeting + '/supporting organizations/organization1.png', title: "Department of Mathematics and Applications of UniMiB" },
                { image: '/img/meetings/' + props.meeting + '/supporting organizations/organization2.png', title: "University of Milano-Bicocca (UniMiB)" },
                { image: '/img/meetings/' + props.meeting + '/supporting organizations/organization3.png', title: "Gruppo Nazionale per la Fisica Matematica (GNFM), Istituto Nazionale di Alta Matematica (INdAM)" },
                { image: '/img/meetings/' + props.meeting + '/supporting organizations/organization4.png', title: "Ettore Majorana Foundation and Centre for Scientific Culture (EMFCSC)" }
            ]} />
        </Background>
    )
}
