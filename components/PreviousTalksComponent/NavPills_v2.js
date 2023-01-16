import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

// core components
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
import styles from "../../assets/jss/material-kit-react/components/navPillsStyle.js";
import Card from "../Card/Card.js";
import Button from "../CustomButtons/Button.js";
import Image from "next/image";
import Link from "next/link";
import 'katex/dist/katex.min.css'
import Latex from "react-latex-next";

const useStyles = makeStyles(styles);

export default function NavPills(props) {
  var { content, speakerImages } = props;
  const keySeason = Object.keys(content).reverse();

  const [active, setActive] = React.useState(props.active);
  const handleChange = (event, active) => {
    setActive(active);
    //alert('cambio');
  };
  const handleChangeIndex = (index) => {
    setActive(index);
  };
  const classes = useStyles();
  const { tabs, direction, color, horizontal, alignCenter } = props;
  const flexContainerClasses = classNames({
    [classes.flexContainer]: true,
    [classes.horizontalDisplay]: horizontal !== undefined,
  });

  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRounded,
    classes.imgFluid
  );
  const tabButtons = (
    <Tabs
      classes={{
        root: classes.root,
        fixed: classes.fixed,
        flexContainer: flexContainerClasses,
        indicator: classes.displayNone,
      }}
      value={active}
      onChange={handleChange}
      centered={alignCenter}
    >
      {tabs.map((prop, key) => {
        var icon = {};
        if (prop.tabIcon !== undefined) {
          icon["icon"] = <prop.tabIcon className={classes.tabIcon} />;
        }
        const pillsClasses = classNames({
          [classes.pills]: true,
          [classes.horizontalPills]: horizontal !== undefined,
          [classes.pillsWithIcons]: prop.tabIcon !== undefined,
        });
        return (
          <Tab
            label={prop.tabButton}
            key={key}
            {...icon}
            classes={{
              root: pillsClasses,
              selected: classes[color],
              wrapper: classes.tabWrapper,
            }}
          />
        );
      })}
    </Tabs>
  );

  const tabContent = (
    <div className={classes.contentWrapper}>
      <SwipeableViews
        axis={direction === "rtl" ? "x-reverse" : "x"}
        index={active}
        onChangeIndex={handleChangeIndex}
      >
        {tabs.map((prop, key) => {
          return (
            <div className={classes.tabContent} key={key}>
              <GridContainer style={{ justifyItems: "stretch" }}>
                {keySeason.length > 0 &&
                  content[keySeason[key]].map((talk) => {
                    return (
                      <GridItem xs={12} sm={6} md={4}>
                        <Card plain className={classes.layout}>
                          <div className={classes.layoutItem}>
                            <h4
                              className={classes.cardTitle}
                              style={{ textAlign: "left" }}
                            >
                              <small className={classes.smallTitle}>
                                {talk["date"]}
                              </small>
                            </h4>
                          </div>
                          {/* Antes la imagen estaba dentro de un GridItem con clase classes.itemGrid*/}
                          <div className={classes.layoutItem}>
                            <Image
                              src={speakerImages[talk["speakerID"]]}
                              width={230}
                              height={230}
                              className={imageClasses}
                            />
                          </div>
                          <div className={classes.layoutItem}>
                            <h4 className={classes.cardTitle}>
                              {talk["speaker"]}
                              <br />
                              <small className={classes.smallTitle}>
                                <Latex>{talk["title"]}</Latex>
                              </small>
                            </h4>
                          </div>
                          <div className={classes.layoutItem}>
                            <Link href={"/previous-talks/" + talk["talkID"]}>
                              <Button
                                round
                                color="primary"
                                className={classes.button}
                              >
                                Details
                              </Button>
                            </Link>
                          </div>
                        </Card>
                      </GridItem>
                    );
                  })}
              </GridContainer>
            </div>
          );
        })}
      </SwipeableViews>
    </div>
  );
  return horizontal !== undefined ? (
    <GridContainer>
      <GridItem {...horizontal.tabsGrid}>{tabButtons}</GridItem>
      <GridItem {...horizontal.contentGrid}>{tabContent}</GridItem>
    </GridContainer>
  ) : (
    <div>
      {tabButtons}
      {tabContent}
    </div>
  );
}

NavPills.defaultProps = {
  active: 0,
  color: "primary",
};

NavPills.propTypes = {
  // index of the default active pill
  active: PropTypes.number,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      tabButton: PropTypes.string,
      tabIcon: PropTypes.object,
      tabContent: PropTypes.node,
    })
  ).isRequired,
  color: PropTypes.oneOf([
    "primary",
    "warning",
    "danger",
    "success",
    "info",
    "rose",
  ]),
  direction: PropTypes.string,
  horizontal: PropTypes.shape({
    tabsGrid: PropTypes.object,
    contentGrid: PropTypes.object,
  }),
  alignCenter: PropTypes.bool,
};
