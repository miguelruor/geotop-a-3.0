import { cardTitle, title } from "../../../assets/jss/material-kit-react.js";
import imagesStyle from "../../../assets/jss/material-kit-react/imagesStyles.js";

const teamStyle = {
  section: {
    textAlign: "center"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    "@media (max-width: 400px)": {
      fontSize: "23px"
    },
    color: "#000000",
  },
  ...imagesStyle,
  cardTitle,
  smallTitle: {
    color: "black"
  },
  description: {
    color: "#999"
  },
  justifyCenter: {
    justifyContent: "center !important"
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999"
  },
  margin5: {
    margin: "5px"
  },
  nextTalk: {
    //backgroundColor: 'black',
    //  paddingLeft: '10%',
    // paddingTop: '10%',
    padding: '5%',
    //border: 0,
  },
  team: {
    paddingLeft: '10%',
    paddingRight: '10%'
  },
  organizer_img: {
    width: "150px",
    height: "150px",
    alignSelf: "center"
  },
  grid: {
    margin: "0px"
  },
  searchBy: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    fontSize: '20px',
    fontStyle: 'normal'
  },
  buttonList: {
    padding: "2px 10px"
  }
};

export default teamStyle;
