import React, { useEffect, useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ReactHtmlParser from 'react-html-parser';
import Image from 'next/image'

// @material-ui/icons

// core components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";

import styles from "../../assets/css/talkStyle.js";
import style from "../../assets/css/talks.module.css"

const useStyles = makeStyles(styles);

export default function NextTalksSection() {

    const [talks, setTalks] = useState([
        {
            date: "August 20, 2021",
            speaker: "Bei Wang",
            title: "Sheaf-Theoretic Stratification Learning From Geometric and Topological Perspectives",
            keywords: [
                "topological data analysis (TDA)",
                "sheaf",
                "stratification learning"
            ],
            abstract: "We investigate a sheaf-theoretic interpretation of stratification learning from geometric and topological perspectives. Our main result is the construction of stratification learning algorithms framed in terms of a sheaf on a partially ordered set with the Alexandroff topology. We prove that the resulting decomposition is the unique minimal stratification for which the strata are homogeneous and the given sheaf is constructible. In particular, when we choose to work with the local homology sheaf, our algorithm gives an alternative to the local homology transfer algorithm given in Bendich et al. (2012), and the cohomology stratification algorithm given in Nanda (2020). Additionally, we give examples of stratifications based on the geometric techniques of Breiding et al. (2018), illustrating how the sheaf-theoretic approach can be used to study stratifications from both topological and geometric perspectives. This approach also points toward future applications of sheaf theory in the study of topological data analysis by illustrating the utility of the language of sheaf theory generalizing existing algorithms. This is joint work with Adam Brown (<a href=https://doi.org/10.1007/s00454-020-00206-y>click here</a>).",
            image: "/img/speakers/sp50.png"
        },
    ]);

    const classes = useStyles();
    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRoundedCircle,
        classes.imgFluid,
    );

    return (
        <>
            {talks.map((talk) => (
                <GridContainer className={style.grid}>
                    <GridItem xs={12} sm={12} md={5} className={classes.nextTalk}>
                        <div className={classes.imgContainer}><Image src={talk.image} width={380} height={380} className={imageClasses} /></div>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={7}>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={12}><h1 className={classes.speaker}>{talk.speaker}</h1></GridItem>
                            <GridItem xs={12} sm={12} md={12}><p className={classes.smallTitle}><b>{talk.date}</b></p></GridItem>
                            <GridItem xs={12} sm={12} md={12}><p className={classes.smallTitle}><b>{"Title: "}</b>{talk.title}</p></GridItem>
                            <GridItem xs={12} sm={12} md={12}><p className={classes.smallTitle}><b>{"Abstract: "}</b> {ReactHtmlParser(talk.abstract)}</p></GridItem>
                            <GridItem xs={12} sm={12} md={12}><p className={classes.smallTitle}><b>{"Keywords: "}</b> {talk.keywords.join(", ")}</p></GridItem>
                        </GridContainer>
                    </GridItem>
                </GridContainer>
            ))}
        </>
    );
}