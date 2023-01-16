import Header from "../../../components/Header/Header";
import HeaderLinks from "../../../components/Header/HeaderLinks";
import Parallax from '../../../components/Parallax/Parallax';
import GridContainer from '../../../components/Grid/GridContainer';
import GridItem from '../../../components/Grid/GridItem';
import Footer from '../../../components/Footer/Footer';
import ListKeywordsSection from './ListKeywordsSection';

import { makeStyles } from "@material-ui/core/styles";
import styles from "./ByKeywordPageStyle.js";

import backgroundImageHome from '../../../public/img/img2.jpg';

import classNames from "classnames";

const useStyles = makeStyles(styles);

export default function ByKeywordsPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
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
        {...rest}
      />
      <Parallax small filter image={backgroundImageHome}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>List of keywords</h1>
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
          <ListKeywordsSection keywords={props.keywords} keywordsListByLetter={props.keywordsListByLetter} lettersInKeywords={props.lettersInKeywords} />
        </div>
      </div>
      <Footer />
    </div>
  )
}
