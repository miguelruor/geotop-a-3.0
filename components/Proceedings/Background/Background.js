import Head from 'next/head';
import React from "react";
import Header from "../Header/Header";
import HeaderLinks from "../Header/HeaderLinks";
import Footer from "../../Footer/Footer";
import Parallax from "../../Parallax/Parallax.js";
import GridContainer from "../../Grid/GridContainer.js";
import GridItem from "../../Grid/GridItem.js";
import { makeStyles } from "@material-ui/core/styles";
import Divider from '@material-ui/core/Divider';
import styles from "../../../views/HomePage/HomePageStyle.js";

// nodejs library that concatenates classes
import classNames from "classnames";

import SectionCarousel from "../../Carousel/carousel.js";
import TeamSection from '../Team/TeamSection.js';

const useStyles = makeStyles(styles);

export default function Background(props) {
    const { title, meetingId, shortDescription, children } = props;

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
                    brand="Proceedings GEOTOP-A"
                    rightLinks={<HeaderLinks menuOptions={
                        [
                            { text: "Homepage", url: "/" + meetingId },
                            { text: "Keynote Speakers", url: "/" + meetingId + "/keynote-speakers" },
                            { text: "Deadlines and Registration", url: "/" + meetingId + "/registration" },
                            { text: "Financial Support", url: "/" + meetingId + "/financial-support" },
                            { text: "Guidelines for Contribution", url: "/" + meetingId + "/contribution-guidelines" },
                            { text: "Abstract Submission", url: "/" + meetingId + "/abstract-submission" },
                            { text: "Venue and Travel Infos", url: "/" + meetingId + "/venue-and-travel-infos" },
                            { text: "Accomodation and Meals", url: "/" + meetingId + "/accomodation-and-meals" },
                            { text: "Social Programme", url: "/" + meetingId + "/social-programme" },
                            { text: "List of Participants", url: "/" + meetingId + "/list-of-participants" },
                            { text: "Scientific Programme", url: "/" + meetingId + "/scientific-programme" },
                            { text: "Book of Abstracts", url: "/" + meetingId + "/book-of-abstracts" },
                            { text: "Group Photo and Gallery", url: "/" + meetingId + "/group-photo-and-gallery" },
                            { text: "FAQs and Suggestions", url: "/" + meetingId + "/faqs-and-suggestions" },
                        ]
                    } />}
                    fixed
                    changeColorOnScroll={{
                        height: 400,
                        color: "white"
                    }}
                />

                <Parallax filter image={"/img/meetings/" + meetingId + "/banner.jpg"}>
                    <div className={classes.container}>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={6}>
                                <h1 className={classes.title}>{title}</h1>
                                <h4>
                                    {shortDescription}
                                </h4>
                                <br />
                            </GridItem>
                        </GridContainer>
                    </div>
                </Parallax>

                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div className={classes.containerContent} >
                        {children}
                    </div>
                </div>
                <Footer />
            </div>
            <br />
        </div >
    )
}