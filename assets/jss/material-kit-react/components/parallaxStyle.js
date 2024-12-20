const parallaxStyle = {
  parallax: {
    height: "70vh",
    maxHeight: "1000px",
    overflow: "hidden",
    position: "relative",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    margin: "0",
    padding: "0",
    border: "0",
    display: "flex",
    alignItems: "center"
  },
  parallaxHome: {
    height: "70vh",
    "@media (max-width: 1550px)": {
      height: "60vh"
    },
    "@media (max-width: 1300px)": {
      height: "50vh"
    },
    "@media (max-width: 900px)": {
      height: "40vh"
    },
    "@media (max-width: 550px)": {
      height: "27vh"
    },
    "@media (max-width: 420px)": {
      height: "25vh"
    },
    maxHeight: "1000px",
    overflow: "hidden",
    position: "relative",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    margin: "70px 0 0 0",
    padding: "0",
    border: "0",
    display: "flex",
    alignItems: "center"
  },
  filter: {
    "&:before": {
      background: "rgba(0, 0, 0, 0.5)"
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''"
    }
  },
  small: {
    height: "380px"
  }
};

export default parallaxStyle;
