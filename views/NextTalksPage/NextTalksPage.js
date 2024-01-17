import Header from "../../components/Header/Header";
import HeaderLinks from "../../components/Header/HeaderLinks";
import Parallax from '../../components/Parallax/Parallax';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import Footer from '../../components/Footer/Footer';
import TalkLayout from "../../components/TalkLayout/TalkLayout";
import StreamingTimeSection from '../../components/StreamingTime/StreamingTimeSection.js';
import Link from 'next/link';

import backgroundImageHome from '../../public/img/img2.jpg'

import { makeStyles } from "@material-ui/core/styles";
import styles from "./NextTalksPageStyle.js";
import classNames from "classnames";


const useStyles = makeStyles(styles);

export default function NextTalksPage(props) {
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
      <Parallax small filter image={backgroundImageHome}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Next talks</h1>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)} >
        {
          props.next_talks.length > 0 ?
            props.next_talks.map((talk, i) => (<TalkLayout key={i} {...talk} />))
            :
            <></>}

        <div className={classes.container}>
          <StreamingTimeSection />
        </div>
      </div>
      <Footer />

    </div>
  )
}
