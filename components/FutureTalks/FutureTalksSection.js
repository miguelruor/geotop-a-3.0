import React, {useEffect, useState} from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Hidden from '@material-ui/core/Hidden';
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
import Divider from '@material-ui/core/Divider';
import styles2 from "./FutureTalksSection.module.css"
import styles from "./FutureTalksStyle.js";

const useStyles = makeStyles(styles);

export default function FutureTalks(){
    const classes = useStyles();

    const talks2 = [
        {
            date: "August 20",
            speaker: "Bei Wang",
            tittle: "University of Utah - USA"
        },  
        {
            date: "September 3",
            speaker: "Yusu Wang",
            tittle: "UC San Diego - USA"
        },
        {
            date: "September 17",
            speaker: "Enzo Orlandini", 
            tittle: "Physics U. Padova - Italy"
        },
        {
            date: "October 1",
            speaker: "Lynn Zechiedrich",
            tittle: "Baylor College of Medicine - USA"
        },
        {
            date: "October 15",
            speaker: "Janet M. Thornton",
            tittle: "EMBL-EBI - UK"
        },
        {
            date: "October 29",
            speaker: "Jie Yao and Fazle Hussain",
            tittle: "Texas Tech University - USA"
        },
        {
            date: "November 12",
            speaker: "Paweł Dłotko",
            tittle: "Dioscuri Center - Poland"
        },
        {
            date: "November 19",
            speaker: "Antonio Rieser",
            tittle: "CIMAT - Mexico"
        },
        {
            date: "December 3",
            speaker: "Jacob Leygonie",
            tittle: "University of Oxford - UK"
        },
        {
            date: "December 10",
            speaker: "Matthew Kahle",
            tittle: "Ohio State University - USA"
        },
    ];

    const talks3 = [
        {
            date: "January 21",
            speaker: "Tudor Ratiu",
            tittle: "EPFL & Shanghai Jiao Tong University - Switzerland and China"
        },  
        {
            date: "February 4",
            speaker: "Jesús Rodríguez-Viorato",
            tittle: "CIMAT - México"
        },
        {
            date: "February 18",
            speaker: "Marco Tulio Angulo", 
            tittle: "UNAM - México"
        },
        {
            date: "March 4",
            speaker: "Kevin Knudson",
            tittle: "University of Florida - USA"
        },
        {
            date: "March 18",
            speaker: "Randall Kamien",
            tittle: "University of Pennsylvania - USA"
        },
        {
            date: "April 1",
            speaker: "Carina Curto",
            tittle: "The Pennsylvania State University - USA"
        },
        {
            date: "April 22",
            speaker: "Yang-Hui He",
            tittle: "City, University of London and University of Oxford - UK"
        },
        {
            date: "May 6",
            speaker: "Alexander Grosberg",
            tittle: "NYU - USA"
        },
        {
            date: "May 20",
            speaker: "Claudia Landi",
            tittle: "Università di Modena e Reggio Emilia - Italy"
        },
        {
            date: "June 3",
            speaker: "Xiao-Gang Wen",
            tittle: "MIT - USA"
        },
    ];

    return(
        <>
        <div className={styles2.titleFutureTalks} style={{paddingTop: 20}}>
            <h1>FALL 2021 TALKS</h1>
            <div className={styles2.talks} styles={{justifyContent: 'center'}}>
                <GridContainer>
                  <Hidden only="xs">
                     <GridItem sm={3} md={2}>
                        <h3 className={classes.subtitle}>DATE</h3>
                     </GridItem>
                  
                     <GridItem xs={6} sm={3} md={2}>
                        <h3 className={classes.subtitle}>SPEAKER</h3>
                     </GridItem>
                     <GridItem xs={6} sm={6} md={8}>
                        <h3 className={classes.subtitle}>INSTITUTION</h3>
                     </GridItem>
                  </Hidden>
                    {talks2.map(talk => (
                        <>
                        <Hidden xsDown>
                           <GridItem sm={3} md={2}>
                                 <p className={classes.nextTalks}>{talk.date}</p>
                           </GridItem>
                           <GridItem sm={3} md={2}>
                                 <p className={classes.nextTalks}>{talk.speaker}</p>
                           </GridItem>
                           <GridItem sm={6} md={8}>
                                 <p className={classes.nextTalks}>{talk.tittle}</p>
                           </GridItem>
                           <GridItem sm={12} md={12}>
                              <Divider variant="fullWidth"/>
                           </GridItem>
                        </Hidden>
                        {/* Seccion Movil */}
                        <Hidden smUp>
                           <GridItem xs={12} sm={3} md={2}>
                                 <p className={classes.nextTalks}><b>{talk.speaker}</b> - {talk.date}</p>
                           </GridItem>
                           <GridItem xs={12}>
                                 <p className={classes.nextTalks}>{talk.tittle}</p>
                           </GridItem>
                           <GridItem xs={12} sm={12} md={12}>
                              <Divider variant="fullWidth"/>
                           </GridItem>
                        </Hidden>
                        </>
                    ))}
                </GridContainer>
            </div>
        </div>
        <div className={styles2.titleFutureTalks} style={{paddingTop: 20}}>
            <h1>SPRING 2022 TALKS</h1>
            <div className={styles2.talks} styles={{justifyContent: 'center'}}>
               <GridContainer>
                  <Hidden only="xs">
                     <GridItem sm={3} md={2}>
                        <h3 className={classes.subtitle}>DATE</h3>
                     </GridItem>
                  
                     <GridItem xs={6} sm={3} md={2}>
                        <h3 className={classes.subtitle}>SPEAKER</h3>
                     </GridItem>
                     <GridItem xs={6} sm={6} md={8}>
                        <h3 className={classes.subtitle}>INSTITUTION</h3>
                     </GridItem>
                  </Hidden>
                  {talks3.map(talk => (
                     <>
                     <Hidden xsDown>
                        <GridItem sm={3} md={2}>
                              <p className={classes.nextTalks}>{talk.date}</p>
                        </GridItem>
                        <GridItem sm={3} md={2}>
                              <p className={classes.nextTalks}>{talk.speaker}</p>
                        </GridItem>
                        <GridItem sm={6} md={8}>
                              <p className={classes.nextTalks}>{talk.tittle}</p>
                        </GridItem>
                        <GridItem sm={12} md={12}>
                           <Divider variant="fullWidth"/>
                        </GridItem>
                     </Hidden>
                     {/* Seccion Movil */}
                     <Hidden smUp>
                        <GridItem xs={12} sm={3} md={2}>
                              <p className={classes.nextTalks}><b>{talk.speaker}</b> - {talk.date}</p>
                        </GridItem>
                        <GridItem xs={12}>
                              <p className={classes.nextTalks}>{talk.tittle}</p>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={12}>
                           <Divider variant="fullWidth"/>
                        </GridItem>
                     </Hidden>
                     </>
                  ))}
               </GridContainer>
            </div>
        </div>
        </>
    );
}