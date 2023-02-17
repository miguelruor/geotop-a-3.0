import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "../../Grid/GridContainer.js";
import GridItem from "../../Grid/GridItem.js";
import Card from "../../Card/Card.js";

import styles from "./ImageCardGridStyle.js";

const useStyles = makeStyles(styles);

export default function ImageCardGrid(props) {
  const { title, cardProps } = props;
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid,
    classes.organizer_img
  );
  return (
    <div className={classes.section}>
      <h1 className={classes.title}>{title}</h1>
      <div className={classes.team}>
        <GridContainer justify='center' className={classes.grid}>
          {cardProps.map((cardProp) => (
            <GridItem xs={12} sm={6} md={4}>
              <Card plain>
                <img src={cardProp.image} className={imageClasses} />
                <h4 className={classes.cardTitle}>
                  {cardProp.title}
                  <br />
                  <small className={classes.smallTitle}>{cardProp.subtitle}</small>
                </h4>
              </Card>
            </GridItem>
          ))}
        </GridContainer>
      </div>
    </div>
  );
}
