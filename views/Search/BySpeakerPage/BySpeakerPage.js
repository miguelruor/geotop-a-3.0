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
  const { ...rest } = props;
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
        {...rest}
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
        <div className={classes.container} style={{paddingTop:"10px", paddingBottom:"10px"}}>
            <ListSpeakersSection talks={props.talks} speakers={props.speakers} speakersIDList={props.speakersID}
       lettersInSurname={props.lettersInSurname} speakersListByLetter={props.speakersListByLetter} />
        </div>
      </div>
      <Footer />
    </div>
  )
}
