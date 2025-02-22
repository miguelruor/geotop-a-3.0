import 'katex/dist/katex.min.css'
import Latex from "react-latex-next";
import Image from 'next/image'
import { makeStyles } from "@material-ui/core/styles";
import classNames from "classnames";

import GridContainer from '../Grid/GridContainer';
import GridItem from '../Grid/GridItem';
import style from "../../assets/css/talks.module.css"
import styles from "../../assets/css/talkStyle.js";

const useStyles = makeStyles(styles);

const formatStreamingTime = (cdmxHour) => {
    const UTCMexicoCity = 360;
    const StreamingTimeMexicoCity = cdmxHour * 60; //Sin considerar el cambio de horario de verano. Restar 60 en ese caso

    const d = new Date();
    const localOffset = d.getTimezoneOffset();

    const timeLeftInMinutes = (StreamingTimeMexicoCity + UTCMexicoCity - localOffset + 1440) % 1440;

    let hour = Math.floor(timeLeftInMinutes / 60);
    if (hour < 10) hour = '0' + hour;

    let minute = timeLeftInMinutes - 60 * hour;
    if (minute < 10) minute = '0' + minute;

    var timeZone = `${Intl.DateTimeFormat().resolvedOptions().timeZone.replace("_", " ")}`

    return `${hour}:${minute} (${timeZone})`;
}


export default function TalkLayout(props) {
    const classes = useStyles();
    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRoundedCircle,
        classes.imgFluid,
    );

    var srcSplitted = props.speakerImage.split("/");
    var showImage = srcSplitted[srcSplitted.length - 1] != "no-image.png";

    return (
        <div className={classes.containerContent} >
            <GridContainer className={style.grid}>
                <GridItem xs={12} sm={12} md={5} className={classes.nextTalk}>
                    <div className={classes.imgContainer}>{showImage && <Image src={props.speakerImage} width={380} height={380} className={imageClasses} />}</div>
                </GridItem>
                <GridItem xs={12} sm={12} md={7}>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={12}><h1 className={classes.speaker}>{props.speaker}</h1></GridItem>
                        <GridItem xs={12} sm={12} md={12}><p className={classes.smallTitle}><b>{props.date}</b></p></GridItem>
                        <GridItem xs={12} sm={12} md={12}><p className={classes.smallTitle}><b>Title: </b><Latex>{props.title}</Latex></p></GridItem>
                        <GridItem xs={12} sm={12} md={12}><p className={classes.smallTitle}><b>Abstract: </b> <Latex>{props.abstract}</Latex></p></GridItem>
                        <GridItem xs={12} sm={12} md={12}><p className={classes.smallTitle}><b>Keywords: </b> {props.keywords.join(", ")}.</p></GridItem>
                        {props.slides == null ? null : <><GridItem xs={12} sm={12} md={12}><p className={classes.smallTitle}><b>Slides:</b> <a href={props.slides} target="_blank">Click here</a></p></GridItem></>}
                        {props.warning == null ? null : <><GridItem xs={12} sm={12} md={12}><p className={classes.smallTitle}><b>Warning:</b> {props.warning}</p></GridItem></>}
                        {props.streamingTime == null ? null : <><GridItem xs={12} sm={12} md={12}><p className={classes.smallTitle}><b>Special streaming time:</b> {formatStreamingTime(props.streamingTime)}</p></GridItem></>}
                    </GridContainer>
                </GridItem>
            </GridContainer>
            <div>
                {props.video && !Array.isArray(props.video) ?
                    <>
                        <h2 className={style.title}><a href={props.video} target="_blank">Video</a></h2>
                        <div className={style.video}>
                            <iframe src={props.video} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div style={{ height: "50px" }}></div>
                    </> : (props.video && Array.isArray(props.video) ?
                        props.video.map((video, idx) => <>
                            <h2 className={style.title}><a href={video} target="_blank">Video {idx + 1}</a></h2>
                            <div className={style.video}>
                                <iframe src={video} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <div style={{ height: "50px" }}></div>
                        </>)
                        :
                        <>
                            <h2 className={style.title}>Video</h2>
                            <p className={style.non_video}>Not available yet.</p>
                        </>)
                }
            </div>
        </div>
    )
}