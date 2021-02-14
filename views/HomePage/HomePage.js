import React, {useState, useEffect} from "react";
import Header from "../../components/Header/Header";
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

const useStyles = makeStyles(styles);
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function HomePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  var cont=0;
  for(var i = 0, max = Database.seminarData.length; i<max; i+=1){
    if(Database.seminarData[i].Previous){
      cont = i;
    }
  }
  const talkTitle = Database.seminarData[cont].Title;
  const talkDescription = Database.seminarData[cont].Abstract;
  const talkVideo  = Database.seminarData[cont].Video;
  const talkKeywords = Database.seminarData[cont].Keywords;
  const speaker =  Database.seminarData[cont].Speaker;
  const [modal, setModal] = React.useState(false);


  return (
    <div>
      <Header
        color="blue"
        //routes={dashboardRoutes}
        brand="Seminar GEOTOP-A"
        rightLinks={<HeaderLinks/>}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />

      <Parallax filter>
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
                  <p>
                    <b>Speaker: </b>{speaker}
                    <br/>
                    <b>Title: </b>{talkTitle}
                    <br/>
                    <b>Keywords: </b> {talkKeywords}
                    <br/>
                    <b>Abstract: </b>{talkDescription}
                    <br/>
                    <b>Video: </b> <a href={talkVideo}>Click here</a>
                  </p>
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
    </div>
  )
}
