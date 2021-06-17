import { title } from "../../assets/jss/material-kit-react.js";

const workStyle = {
  section: {
    padding: "70px 0"
  },
  title: {
    ...title,
    marginBottom: "30px",
    margin: "10px",
    minHeight: "30px",
    textDecoration: "none",
    textAlign: "center",
    "@media (max-width: 400px)": {
      fontSize: "23px"
    },
  },
  description: {
    color: "black",
    textAlign: "left",
    //marginLeft: "10px",
  },
  nextTalks:{
    color: "black",
    textAlign: "left",
    marginLeft: "10px",
    margin: "12px"
  },
  textCenter: {
    textAlign: "center"
  },
  textArea: {
    marginRight: "15px",
    marginLeft: "15px"
  }
};

export default workStyle;
