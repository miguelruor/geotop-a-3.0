import React, {useState, useEffect} from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HeaderLinks from "../../components/Header/HeaderLinks";
import Parallax from "../../components/Parallax/Parallax.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Close from "@material-ui/icons/Close";
import styles from "./HomePageStyle.js";
import Database from "../../data"
import Slide from "@material-ui/core/Slide";
import backgroundImageHome from '../../public/img/img1.jpg';
// nodejs library that concatenates classes
import classNames from "classnames";
import SectionCarousel from "../../components/Carousel/SectionCarousel.js";
import FutureTalksSection from '../../components/FutureTalks/FutureTalksSection.js';
import StreamingTimeSection from '../../components/StreamingTime/StreamingTimeSection.js';
import TeamSection from '../../components/Team/TeamSection.js';


const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function HomePage(data) {
  const classes = useStyles();
  const [modal, setModal] = React.useState(false);
  console.log(data.data.dataObj.Title)
  return (
    <div>
      <Header
        color="rose"
        //routes={dashboardRoutes}
        brand="Seminar GEOTOP-A"
        rightLinks={<HeaderLinks/>}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        //{...rest}
      />

      <Parallax filter image={backgroundImageHome}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Seminar GEOTOP-A</h1>
              <h4>
                Web-seminar series on Applications of Geometry and Topology
              </h4>
              <br />
              <Button
                color= "primary"
                size="lg"
                //href="https://www.youtube.com/watch?v=lpgcG4ZdmNc&feature=emb_logo"
                target="_blank"
                rel="noopener noreferrer"
                onClick={()=>setModal(true)}
              >
                <i className="fas fa-play" />
                Watch our last seminar!
              </Button>
              <Dialog
                classes={{
                  root: classes.center,
                  paper: classes.modal
                }}
                open={modal}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => setModal(false)}
                aria-labelledby="modal-slide-title"
                aria-describedby="modal-slide-description"
              >
                <DialogTitle
                  id="classic-modal-slide-title"
                  disableTypography
                  className={classes.modalHeader}
                >
                  <IconButton
                    className={classes.modalCloseButton}
                    key="close"
                    aria-label="Close"
                    color="inherit"
                    onClick={() => setModal(false)}
                  >
                    <Close className={classes.modalClose} />
                  </IconButton>
                  <h2 className={classes.modalTitle} >Talk Details</h2>
                </DialogTitle>
                <DialogContent
                  id="modal-slide-description"
                  className={classes.modalBody}
                >
                  <p><b>Speaker: </b> {data.data.dataObj.Speaker} </p>
                  <p><b>Title: </b>{data.data.dataObj.Title} </p>
                  <p><b>Video: </b> {data.data.dataObj.Video === null ? 'Not available yet.' : <a href={data.data.dataObj.Video} target="_blank">Click here</a>} </p>
                  {/*Cuando una talk no tiene presentacion, talkSlides es undefined, y en otro caso string*/}
                  {/*typeof(talkSlides) == "undefined" ? null : <><p><b>Slides:</b> <a href={talkSlides} target="_blank">Click here</a></p></>*/}
                  <p><b>Date: </b>{data.data.dataObj.Date} </p>
                  <p><b>Keywords: </b> {data.data.dataObj.Keywords}</p>
                  <p><b>Abstract: </b>{data.data.dataObj.Abstract}</p>
                </DialogContent>
                <DialogActions className={classes.modalFooter}>
                  <Button
                    onClick={() => setModal(false)}
                    color="danger"
                    simple
                  >
                    Close
                  </Button>
                </DialogActions>
              </Dialog>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      {/* <div>{data.data.geometryImages}</div> */}
      <div className={classNames(classes.main, classes.mainRaised)}>
        {/*<SectionCarousel geometryImages={props.geometryImages} topologyImages={props.topologyImages}/>*/}
        <div className={classes.container}>
          <FutureTalksSection />
          <StreamingTimeSection />
          <TeamSection />
        </div>
      </div>
      <Footer />          
    </div>
  )
}
