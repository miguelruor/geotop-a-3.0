import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
import Card from "../Card/Card.js";

import styles from "./teamStyle.js";

import team1 from "../../public/img/organizers/org1.png";
import team2 from "../../public/img/organizers/org2.png";
import team3 from "../../public/img/organizers/org3.png";
import team4 from "../../public/img/organizers/org4.png";
import team5 from "../../public/img/organizers/org5.png";
import team6 from "../../public/img/organizers/org6.png";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid,
    classes.organizer_img
  );
  return (
    <div className={classes.section}>
      <h1 className={classes.title}>Scientific Committee</h1>
      <div className={classes.team}>
        <GridContainer justify='center' className={classes.grid}>
          <GridItem xs={12} sm={6} md={4}>
            <Card plain>
              <img src={team6} alt="..." className={imageClasses} />
              <h4 className={classes.cardTitle}>
                Alicia Dickenstein
                <br />
                <small className={classes.smallTitle}>University of Buenos Aires, Argentina</small>
              </h4>
              {/*<CardBody>
                <p className={classes.description}>
                  You can write here details about one of your team members. You
                  can give more details about what they do.
                </p>
              </CardBody>*/}
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={4}>
            <Card plain>
              <img src={team1} alt="..." className={imageClasses} />
              <h4 className={classes.cardTitle}>
                José-Carlos Gómez-Larrañaga
                <br />
                <small className={classes.smallTitle}>CIMAT, Mexico</small>
              </h4>
              {/*<CardBody>
                <p className={classes.description}>
                  You can write here details about one of your team members. You
                  can give more details about what they do.
                </p>
              </CardBody>*/}
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={4}>
            <Card plain>
              <img src={team2} alt="..." className={imageClasses} />
              <h4 className={classes.cardTitle}>
                Kathryn Hess
                <br />
                <small className={classes.smallTitle}>École Polytechnique Fédérale de Lausanne, Switzerland</small>
              </h4>
              {/*<CardBody>
                <p className={classes.description}>
                  You can write here details about one of your team members. You
                  can give more details about what they do.
                </p>
              </CardBody>*/}
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={4}>
            <Card plain>
              <img src={team3} alt="..." className={imageClasses} />
              <h4 className={classes.cardTitle}>
                Neza Mramor-Kosta
                <br />
                <small className={classes.smallTitle}>University of Ljubljana, Slovenia</small>
              </h4>
              {/*<CardBody>
                <p className={classes.description}>
                  You can write here details about one of your team members. You
                  can give more details about what they do.
                </p>
              </CardBody>*/}
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={4}>
            <Card plain>
              <img src={team4} alt="..." className={imageClasses} />
              <h4 className={classes.cardTitle}>
                Renzo L. Ricca
                <br />
                <small className={classes.smallTitle}>University of Milano-Bicocca, Italy</small>
              </h4>
              {/*<CardBody>
                <p className={classes.description}>
                  You can write here details about one of your team members. You
                  can give more details about what they do.
                </p>
              </CardBody>*/}
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={4}>
            <Card plain>
              <img src={team5} alt="..." className={imageClasses} />
              <h4 className={classes.cardTitle}>
                De Witt L. Sumners
                <br />
                <small className={classes.smallTitle}>Florida State University, USA</small>
              </h4>
              {/*<CardBody>
                <p className={classes.description}>
                  You can write here details about one of your team members. You
                  can give more details about what they do.
                </p>
              </CardBody>*/}
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
