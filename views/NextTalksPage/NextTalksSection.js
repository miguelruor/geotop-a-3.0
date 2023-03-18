import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import 'katex/dist/katex.min.css'
import Latex from "react-latex-next";
import Image from 'next/image'

// @material-ui/icons

// core components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";

import styles from "../../assets/css/talkStyle.js";
import style from "../../assets/css/talks.module.css"

const useStyles = makeStyles(styles);

export default function NextTalksSection(props) {

    const classes = useStyles();
    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRoundedCircle,
        classes.imgFluid,
    );

    return (
        <>
            {props.next_talks.map((talk) => (
                <GridContainer className={style.grid}>
                    <GridItem xs={12} sm={12} md={5} className={classes.nextTalk}>
                        <div className={classes.imgContainer}>
                            {talk.image ?
                                <Image src={'/img/speakers/sp' + talk.speaker_id.toString() + ".png"} width={335} height={335} className={imageClasses} /> :
                                null}
                        </div>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={7}>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={12}><h1 className={classes.speaker}>{talk.speaker}</h1></GridItem>
                            <GridItem xs={12} sm={12} md={12}><p className={classes.smallTitle}><b>{talk.date}</b></p></GridItem>
                            <GridItem xs={12} sm={12} md={12}><p className={classes.smallTitle}><b>Title: </b> <Latex>{talk.title}</Latex></p></GridItem>
                            <GridItem xs={12} sm={12} md={12}><p className={classes.smallTitle}><b>Abstract: </b> <Latex>{talk.abstract}</Latex></p></GridItem>
                            <GridItem xs={12} sm={12} md={12}><p className={classes.smallTitle}><b>Keywords: </b> {talk.keywords.join(", ")}.</p></GridItem>
                        </GridContainer>
                    </GridItem>
                </GridContainer>
            ))}
        </>
    );
}