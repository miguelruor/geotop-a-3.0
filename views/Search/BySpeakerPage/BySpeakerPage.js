import Header from "../../../components/Header/Header";
import HeaderLinks from "../../../components/Header/HeaderLinks";
import Parallax from '../../../components/Parallax/Parallax';
import GridContainer from '../../../components/Grid/GridContainer';
import GridItem from '../../../components/Grid/GridItem';
import Footer from '../../../components/Footer/Footer';
import ListSpeakersSection from './ListSpeakersSection';

import { makeStyles } from "@material-ui/core/styles";
import styles from "./BySpeakerPageStyle.js";
import classNames from "classnames";

import backgroundImageHome from '../../../public/img/img2.jpg';

const useStyles = makeStyles(styles);

export default function BySpeakerPage(props) {
  const classes = useStyles();
  return (
    <div>
      <Header
        color="blue"
        //routes={dashboardRoutes}
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
              <h1 className={classes.title}>List of speakers</h1>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container} style={{ paddingTop: "10px", paddingBottom: "10px" }}>
          <div style={{ color: "black", display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
            <span style={{ display: "flex", alignItems: "center" }}>
              <span style={{ height: "10px", width: "10px", backgroundColor: "purple", marginRight: "10px" }}></span>
              <h3>GEOTOP-A seminar</h3>
            </span>
            <span style={{ display: "flex", alignItems: "center" }}>
              <span style={{ height: "10px", width: "10px", backgroundColor: "red", marginRight: "10px" }}></span>
              <h3>Other events</h3>
            </span>
          </div>
          <ListSpeakersSection speakers={props.speakers} lettersInSurname={props.lettersInSurname} speakersListByLetter={props.speakersListByLetter} />
        </div>
      </div>
      <Footer />
    </div>
  )
}
