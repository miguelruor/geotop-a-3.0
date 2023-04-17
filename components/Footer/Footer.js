/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import styles from "../../assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  var style = {}
  if (props.image !== undefined) {
    var style = {
      height: "100px",
      backgroundImage: "url(" + props.image + ")",
      backgroundSize: "auto 100%",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      backgroundColor: "black"
    }
  }
  return (
    <footer style={style} className={footerClasses}>
      <div className={classes.container} >
        <div className={classes.right}>
          {props.image === undefined ? "Seminar GEOTOP-A: Applications of geometry and topology" : null}
        </div>
      </div >
    </footer >
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
