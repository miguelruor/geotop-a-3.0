import Header from "../../components/Header/Header";
import HeaderLinks from "../../components/Header/HeaderLinks";
import Parallax from "../../components/Parallax/Parallax";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Footer from "../../components/Footer/Footer";
import PreviousTalksComponent from "../../components/PreviousTalksComponent/LeftMenuSection";

import backgroundImageHome from "../../public/img/img2.jpg"

import { makeStyles } from "@material-ui/core/styles";
import styles from "./PreviousTalksPageStyle.js";
import classNames from "classnames";

const useStyles = makeStyles(styles);

export default function PreviousTalksPage(props) {
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
        //{...rest}
      />
      <Parallax filter small image={backgroundImageHome}>
          <div className={classes.container}>
              <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                      <h1 className={classes.title}>Previous talks</h1>
                      <br />
                  </GridItem>
              </GridContainer>
          </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <PreviousTalksComponent previousTalks={props.previousTalksBySeason}/>
          </div>
      </div>
      <Footer />
    </div>
  )
}
