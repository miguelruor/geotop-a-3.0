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
        <div className={classes.containerContent} style={{ color: "black" }}>
          <h2>
            Keynote talks at GEOTOP-A Conference - January 8-13, 2024. Mérida, Yucatán, México
          </h2>
          <p>
            See abstracts and transmissions links on the <Link href={"/merida24/scientific-programme"}>Scientific Programme</Link>
          </p>
          <p>
            <ul>
              <li style={{ marginBottom: "10px" }}>
                Monday January 8. 9:00 - 10:00 am. <br />
                Louis H Kauffman - University of Illinois at Chicago <br />
                <b>Reconnection Numbers of Knotted Vortices</b> <br />
              </li>
              <li style={{ marginBottom: "10px" }}>
                Monday January 8. 3:00 - 4:00 pm. <br />
                Cristian Micheletti - International School for Advanced Studies (SISSA) <br />
                <b>Dynamics and mechanics of knotted DNA and RNAs: insights from molecular dynamics simulations</b> <br />
              </li>
              <li style={{ marginBottom: "10px" }}>
                Monday January 8. 5:00 - 6:00 pm. <br />
                Yuliy Baryshnikov - University of Illinois at Urbana-Champaign <br />
                <b>On Spaces of Coverings</b> <br />
              </li>
              <li style={{ marginBottom: "10px" }}>
                Tuesday January 9. 9:00 - 10:00 am. <br />
                Ismar Volić - Wellesley College <br />
                <b>Simplicial complexes and political structures</b> <br />
              </li>
              <li style={{ marginBottom: "10px" }}>
                Tuesday January 9. 3:00 - 4:00 pm. <br />
                Pablo Soberón - City University of New York <br />
                <b>New results on envy-free distributions</b> <br />
              </li>
              <li style={{ marginBottom: "10px" }}>
                Wednesday January 10. 9:00 - 10:00 am. <br />
                Alexander Dranishnikov - University of Florida <br />
                <b>On some variations of TC and the LS-category</b> <br />
              </li>
              <li style={{ marginBottom: "10px" }}>
                Thursday January 11. 9:00 - 10:00 am. <br />
                Sophie Jackson - University of Cambridge <br />
                <b>The What, Where, How and Why of Topological Knots in Proteins</b> <br />
              </li>
              <li style={{ marginBottom: "10px" }}>
                Thursday January 11. 3:00 - 4:00 pm. <br />
                Mitchell Berger - University of Exeter <br />
                <b>Continuous topological measures: helicity, winding, and higher order winding</b> <br />
              </li>
              <li style={{ marginBottom: "10px" }}>
                Friday January 12. 9:00 - 10:00 am. <br />
                Yusu Wang - UC San Diego <br />
                <b>Graph learning models: theoretical understanding, limitations and enhancements</b> <br />
              </li>
              <li style={{ marginBottom: "10px" }}>
                Saturday January 13. 9:00 - 10:00 am. <br />
                Radmila Sazdanovic - NC State University <br />
                <b>The shape of relations: knots and other stories</b> <br />
              </li>
              <li style={{ marginBottom: "10px" }}>
                Saturday January 13. 5:00 - 6:00 pm. <br />
                Pawel Dlotko - Dioscuri Centre in Topological Data Analysis, Mathematical Institute, Polish Academy of Sciences <br />
                <b>Data, their shape, and beyond</b> <br />
              </li>

            </ul>
          </p>
        </div>

        <div className={classes.container}>
          <StreamingTimeSection />
        </div>
      </div>
      <Footer />

    </div>
  )
}
