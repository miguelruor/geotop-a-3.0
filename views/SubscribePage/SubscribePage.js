import Header from "../../components/Header/Header";
import HeaderLinks from "../../components/Header/HeaderLinks";
import Parallax from '../../components/Parallax/Parallax';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import SubscribeSection from './SubscribeSection';
import Footer from '../../components/Footer/Footer';

import { makeStyles } from "@material-ui/core/styles";
import styles from "./SubscribePageStyle.js";
// nodejs library that concatenates classes
import classNames from "classnames";

import backgroundImageHome from "../../public/img/img1.jpg"

const useStyles = makeStyles(styles);

export default function SubscribePage(props) {
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

      <Parallax filter image={backgroundImageHome}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Subscribe to our seminar!</h1>
              <h4>
                Get regularly updated of upcoming web-seminars
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}> 
          <SubscribeSection />
        </div>
      </div>

      <Footer />
    </div>
  )
}
