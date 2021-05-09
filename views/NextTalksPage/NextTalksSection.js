import React, {useState} from "react";
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

import styles from "./NextTalksPageStyle";

const useStyles = makeStyles(styles);

export default function NextTalksSection(){

    const image1 = '/img/speakers/sp47.png';
    const image2 = '/img/speakers/sp48.png';
    
    
    const [talks, setTalks] = useState([
        {
            date: "May 21, 2021",
            speaker: "Caroline Uhler",
            title: "TBA",
            keywords: ["TBA"],
            abstract: "<p>TBA</p>",
        },
    ]);

    const [talks2, setTalks2] = useState([
        {
            date: "April 23, 2021",
            speaker: "Dimos Gkountaroulis",
            title: "Knotoids and protein structure",
            keywords: ["knotoids", "proteins", "topology", "folding", "knots"],
            abstract: "<p>Approximately 6% of proteins deposited in the Protein Data Bank are known to fold into conformations that are non-trivially entangled. The vast majority of knotted proteins form simple knot-like structures with up to three crossings. However, there are a few examples of proteins having up to six crossings. Interestingly, even though they are not ubiquitous, knots in proteins have been conserved within species that are separated by millions of years of evolution. This might imply that knottiness provides some advantages to proteins but this theory is still being contested. Besides the role of knotting in proteins, the pathway that the backbone of a knotted protein follows to reach its native folded state is still an open question.  To this date, researchers have suggested several mechanisms for protein self-tying that are based on wet lab experiments, numerical simulations, mathematical theory or a combination of all the above.</p><p>In this talk, I will discuss how the theory of knotoids can be applied to characterize the topology of linear proteins. I will present the basics of the theory, some knotoids invariants, the computational pipeline that we developed for this, as well as our tabulation of knotoids. I will also present a statistical distance that we define on distributions of projections of a protein backbone seen as knotoids and I will show how this distance allows us to infer possible folding pathways of trefoil knotted proteins. I will close this talk by briefly discussing applications of knot theory to genomics. </p>",
        },
    ]);

    const classes = useStyles();
    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRoundedCircle,
        classes.imgFluid,
      );
      
    return(
        <GridContainer>
            <GridItem xs={12} sm={12} md={5} className={classes.nextTalk}>
                {/*<div className={classes.imgContainer}><Image src={image1} width={380} height={380} className={imageClasses}/></div>*/}
            </GridItem>
            <GridItem xs={12} sm={12} md={7}>
                <GridContainer>
                    {talks.map(talk => (
                        <>
                        <GridItem xs={12} sm={12} md={12}><h1 className={classes.speaker}>{talk.speaker}</h1></GridItem>
                        <GridItem xs={12} sm={12} md={12}><p className={classes.smallTitle}><b>{talk.date}</b></p></GridItem>
                        <GridItem xs={12} sm={12} md={12}><p className={classes.smallTitle}><b>{"Title: "}</b>{talk.title}</p></GridItem>
                        <GridItem xs={12} sm={12} md={12}><p className={classes.smallTitle}><b>{"Abstract: "}</b> {ReactHtmlParser (talk.abstract)}</p></GridItem>
                        <GridItem xs={12} sm={12} md={12}><p className={classes.smallTitle}><b>{"Keywords: "}</b> {talk.keywords.join(", ")}</p></GridItem>
                        </>
                    ))}
                </GridContainer>
            </GridItem>
            {/*<GridItem xs={12} sm={12} md={5} className={classes.nextTalk}>
            <div className={classes.imgContainer}><Image src={image1} width={380} height={380} className={imageClasses}/></div>
            </GridItem>
            <GridItem xs={12} sm={12} md={7}>
                <GridContainer>
                    {talks2.map(talk => (
                        <>
                        <GridItem xs={12} sm={12} md={12}><h1 className={classes.speaker}>{talk.speaker}</h1></GridItem>
                        <GridItem xs={12} sm={12} md={12}><p className={classes.smallTitle}><b>{talk.date}</b></p></GridItem>
                        <GridItem xs={12} sm={12} md={12}><p className={classes.smallTitle}><b>{"Title: "}</b>{talk.title}</p></GridItem>
                        <GridItem xs={12} sm={12} md={12}><p className={classes.smallTitle}><b>{"Abstract: "}</b> {ReactHtmlParser (talk.abstract)}</p></GridItem>
                        <GridItem xs={12} sm={12} md={12}><p className={classes.smallTitle}><b>{"Keywords: "}</b> {talk.keywords.join(", ")}</p></GridItem>
                        </>
                    ))}
                </GridContainer>
            </GridItem>*/}
        </GridContainer>
    );
}