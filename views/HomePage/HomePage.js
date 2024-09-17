import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HeaderLinks from "../../components/Header/HeaderLinks";
import Parallax from "../../components/Parallax/Parallax.js";
import Button from "../../components/CustomButtons/Button.js";
import Link from "next/link"
import { makeStyles } from "@material-ui/core/styles";
import styles from "./HomePageStyle.js";

import backgroundImageHome from '../../public/img/banner.jpg';

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
        brand="Seminar GEOTOP-A"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
      />

      <Parallax home image={backgroundImageHome} />

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: "20px 0px" }}>
          <Link href={"previous-talks/" + props.last_talk}>
            <Button
              color="primary"
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-play" />
              Watch our last seminar!
            </Button>
          </Link>
        </div>
        <SectionCarousel images={props.images} />
        <FutureTalksSection />
        <StreamingTimeSection />
        <TeamSection />
      </div>
      <Footer />
    </div>
  )
}
