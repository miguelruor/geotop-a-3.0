import Header from "../../components/Header/Header";
import HeaderLinks from "../../components/Header/HeaderLinks";
import Parallax from '../../components/Parallax/Parallax';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import Footer from '../../components/Footer/Footer';
import ReactHtmlParser from 'react-html-parser';
import Image from 'next/image'
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/css/talkStyle.js";
import classNames from "classnames";
import style from "../../assets/css/talks.module.css"

import backgroundImageHome from '../../public/img/img1.jpg'
import speakers from '../../data/speakers.json';
import talks from '../../data/talks.json';

const useStyles = makeStyles(styles);

export default function SingleTalkPage(props) {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid,
  );

  return (
    <div>
      <Header
        color="blue"
        //routes={dashboardRoutes}
        brand="Seminar GEOTOP-A"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
      />
      <Parallax small filter image={backgroundImageHome}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Previous talks</h1>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)} >
        <div className={classes.containerContent} >
          <GridContainer className={style.grid}>
            <GridItem xs={12} sm={12} md={5} className={classes.nextTalk}>
              <div className={classes.imgContainer}><Image src={props.speakerImage} width={380} height={380} className={imageClasses} /></div>
            </GridItem>
            <GridItem xs={12} sm={12} md={7}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}><h1 className={classes.speaker}>{props.speaker}</h1></GridItem>
                <GridItem xs={12} sm={12} md={12}><p className={classes.smallTitle}><b>{props.date}</b></p></GridItem>
                <GridItem xs={12} sm={12} md={12}><p className={classes.smallTitle}><b>{"Title: "}</b>{props.title}</p></GridItem>
                <GridItem xs={12} sm={12} md={12}><p className={classes.smallTitle}><b>{"Abstract: "}</b> {ReactHtmlParser(props.abstract)}</p></GridItem>
                <GridItem xs={12} sm={12} md={12}><p className={classes.smallTitle}><b>{"Keywords: "}</b> {props.keywords.join(", ")}</p></GridItem>
                {props.slides == null ? null : <><GridItem xs={12} sm={12} md={12}><p className={classes.smallTitle}><b>Slides:</b> <a href={props.slides} target="_blank">Click here</a></p></GridItem></>}
                {props.warning == null ? null : <><GridItem xs={12} sm={12} md={12}><p className={classes.smallTitle}><b>Warning:</b> {props.warning}</p></GridItem></>}
              </GridContainer>
            </GridItem>
          </GridContainer>
        </div>
        <div>
          {props.video ?
            <>
              <h2 className={style.title}><a href={props.video} target="_blank">Video</a></h2>
              <div className={style.video}>
                <iframe src={props.video} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </> :
            <>
              <h2 className={style.title}>Video</h2>
              <p className={style.non_video}>Not available yet.</p>
            </>
          }
        </div>
      </div>
      <Footer />

    </div>
  )
}

export async function getStaticProps(context) {

  var talk_id = context.params.id;

  const speakerID = talks[talk_id].speaker_id;

  return {
    props: {
      speakerImage: '/img/speakers/sp' + speakerID + ".png",
      date: talks[talk_id].date,
      speaker: speakers[speakerID.toString()].completeName,
      title: talks[talk_id].title,
      keywords: talks[talk_id].keywords,
      abstract: talks[talk_id].abstract,
      video: talks[talk_id].video,
      warning: typeof (talks[talk_id].warning) == "undefined" ? null : talks[talk_id].warning,
      slides: typeof (talks[talk_id].slides) == "undefined" ? null : talks[talk_id].slides
    }
  }
}

export async function getStaticPaths() {

  var paths = Object.keys(talks).filter((talk_id) => talks[talk_id].eventId == undefined).map((talk_id) => ({ params: { id: talk_id } }))
  //paths = [{params: {id: "0"}}, {params:{id: "1"}}, {params:{id: "2"}}]

  return {
    paths: paths,
    fallback: false
  };
}
