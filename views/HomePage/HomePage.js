import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HeaderLinks from "../../components/Header/HeaderLinks";
import Parallax from "../../components/Parallax/Parallax.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./HomePageStyle.js";
import Link from "next/link"

import backgroundImageHome from '../../public/img/img1.jpg';

// nodejs library that concatenates classes
import classNames from "classnames";

import SectionCarousel from "../../components/Carousel/carousel.js";
import FutureTalksSection from '../../components/FutureTalks/FutureTalksSection.js';
import StreamingTimeSection from '../../components/StreamingTime/StreamingTimeSection.js';
import TeamSection from '../../components/Team/TeamSection.js';

const useStyles = makeStyles(styles);

export default function HomePage(props) {
  const classes = useStyles();

  return (
    <div>
      <Header
        color="blue"
        //routes={dashboardRoutes}
        brand="Seminar GEOTOP-A"
        rightLinks={<HeaderLinks/>}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        //{...rest}
      />

      <Parallax filter image={backgroundImageHome}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Seminar GEOTOP-A</h1>
              <h4>
                Web-seminar series on Applications of Geometry and Topology
              </h4>
              <br />
              <Link href={"previous-talks/"+props.last_talk}>
                <Button
                  color= "primary"
                  size="lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-play" />
                  Watch our last seminar!
                </Button>
              </Link>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionCarousel images={props.images}/>
        <div className={classes.container}>
          <FutureTalksSection />
          <StreamingTimeSection />
          <TeamSection />
        </div>
      </div>
      <Footer />          
    </div>
  )
}
