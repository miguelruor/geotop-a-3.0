import Head from 'next/head';
import React from "react";
import Header from "../../components/Proceedings/Header/Header";
import HeaderLinks from "../../components/Proceedings/Header/HeaderLinks";
import Footer from "../../components/Footer/Footer";
import Parallax from "../../components/Parallax/Parallax.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import { makeStyles } from "@material-ui/core/styles";
import Divider from '@material-ui/core/Divider';
import styles from "../../views/HomePage/HomePageStyle.js";

import data from '../../data/imageData.json';

// nodejs library that concatenates classes
import classNames from "classnames";

import SectionCarousel from "../../components/Carousel/carousel.js";
import TeamSection from '../../components/Proceedings/Team/TeamSection.js';

const useStyles = makeStyles(styles);

export async function getStaticProps(context) {
    const meeting = context.params.meeting;
    const totalImages = data.totalImages

    var images = []

    for (var i = 1; i <= totalImages; i += 1) {
        images.push('/img/imagesCarousel/img' + i.toString() + '.jpg')
    }

    return {
        props: {
            images: images,
            meeting: meeting,
            backgroundColor: "#a7a7a7",
            header: "<<ETTORE MAJORANA>> FOUNDATION AND CENTRE FOR SCIENTIFIC CULTURE</br>TO PAY A PERMANENT TRIBUTE TO ARCHIMEDES AND GALILEO GALILEI, FOUNDERS OF MODERN SCIENCE</br>AND TO ENRICO FERMI, \"THE ITALIAN NAVIGATOR\", FATHER OF THE WEAK FORCES",
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
        <div>
            <Head>
                <title>GEOTOP-A</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="initial-scale=1.0, maximum-scale=1" />
            </Head>
            <div>
                <Header
                    color="blue"
                    brand="Seminar GEOTOP-A"
                    rightLinks={<HeaderLinks menuOptions={
                        [
                            { text: "Homepage", url: "/" + props.meeting },
                            { text: "Keynote Speakers", url: "/" + props.meeting + "/keynote-speakers" },
                            { text: "Deadlines and Registration", url: "/" + props.meeting + "/registration" },
                            { text: "Financial Support", url: "/" + props.meeting + "/financial-support" },
                            { text: "Guidelines for Contribution", url: "/" + props.meeting + "/contribution-guidelines" },
                            { text: "Abstract Submission", url: "/" + props.meeting + "/abstract-submission" },
                            { text: "Venue and Travel Infos", url: "/" + props.meeting + "/venue-and-travel-infos" },
                            { text: "Accomodation and Meals", url: "/" + props.meeting + "/accomodation-and-meals" },
                            { text: "Social Programme", url: "/" + props.meeting + "/social-programme" },
                            { text: "List of Participants", url: "/" + props.meeting + "/list-of-participants" },
                            { text: "Scientific Programme", url: "/" + props.meeting + "/scientific-programme" },
                            { text: "Book of Abstracts", url: "/" + props.meeting + "/book-of-abstracts" },
                            { text: "Group Photo and Gallery", url: "/" + props.meeting + "/group-photo-and-gallery" },
                            { text: "FAQs and Suggestions", url: "/" + props.meeting + "/faqs-and-suggestions" },
                        ]
                    } />}
                    fixed
                    changeColorOnScroll={{
                        height: 400,
                        color: "white"
                    }}
                />

                <Parallax filter image={"/img/meetings/" + props.meeting + "/banner.jpg"}>
                    <div className={classes.container}>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={6}>
                                <h1 className={classes.title}>Seminar GEOTOP-A</h1>
                                <h4>
                                    First presential meeting in Merida, Mexico
                                </h4>
                                <br />
                            </GridItem>
                        </GridContainer>
                    </div>
                </Parallax>

                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div className={classes.containerContent} >
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
                    </div>
                    <h1 className={classes.paragraphTitle}>Conference Venue</h1>
                    <SectionCarousel images={props.images} />
                    <TeamSection title="Scientific Committee" />
                    <TeamSection title="Organising Committee" />
                    <TeamSection title="Supporting Organisations" />
                </div>
                <Footer />
            </div>
            <br />
        </div >
    )
}
