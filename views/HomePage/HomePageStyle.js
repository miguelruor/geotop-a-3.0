import { container, title } from "../../assets/jss/material-kit-react.js";

const landingPageStyle = {
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container
  },
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
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0"
  },
  containerContent: {
    zIndex: "12",
    paddingRight: "15px",
    paddingTop: "50px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
    paddingBottom: "50px",
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
  paragraphTitle: {
    marginRight: "5%",
    minHeight: "30px",
    textAlign: "center",
    color: "#3C4858 !important",
    margin: "1.75rem 0 0.875rem",
    fontWeight: "bold !important",
    fontFamily: "'Times New Roman', serif !important",
    width: "100%",
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  }
};

export default landingPageStyle;
