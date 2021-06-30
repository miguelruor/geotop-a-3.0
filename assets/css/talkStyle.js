import { container, title } from "../jss/material-kit-react.js";
import imagesStyle from "../jss/material-kit-react/imagesStyles";

const landingPageStyle = {
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container
  },
  containerContent: {
    zIndex: "12",
    color: "#FFFFFF",
    paddingRight: "15px",
    paddingTop: "50px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
    width: "100%",
    "@media (min-width: 576px)": {
      maxWidth: "540px"
    },
    "@media (min-width: 768px)": {
      maxWidth: "720px"
    },
    "@media (min-width: 992px)": {
      maxWidth: "960px"
    },
    "@media (min-width: 1200px)": {
      maxWidth: "1640px"
    }
  },
  ...imagesStyle,
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "40px", //32px
    color: "#FFFFFF",
    textDecoration: "none",
    fontSize: "50px"
  },
  speaker: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0"
  },
  smallTitle: {
    color: "black"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
  },
  mainRaised: {    
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    "@media (max-width: 480px)": {
      margin: "-60px 20px 0px"
    }
  },
  imgContainer:{
    display: "block",
    textAlign: "center"
  },
  nextTalk: {
    padding: '5%',
  },
};

export default landingPageStyle;
