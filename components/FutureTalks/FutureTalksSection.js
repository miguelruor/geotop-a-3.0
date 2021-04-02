import React, {useEffect, useState} from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Hidden from '@material-ui/core/Hidden';
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
import Divider from '@material-ui/core/Divider';

import styles from "./FutureTalksStyle.js";

const useStyles = makeStyles(styles);

export default function FutureTalks(){
    const classes = useStyles();

    const [talks,setTalks] = useState([
        {
            date: "January 22",
            speaker: "Sergei Nechaev",
            tittle: "Interdisciplinary Scientific Center Poncelet (CNRS UMI 2615) - Russia"
        },  
        {
            date: "February 5",
            speaker: "Alice Patania",
            tittle: "Indiana University - USA"
        },
        {
            date: "February 19",
            speaker: "Nina Otter",
            tittle: "UCLA - USA"
        },
        {
            date: "March 5",
            speaker: "Davide Michieletto",
            tittle: "University of Edinburgh - UK"
        },
        {
            date: "March 19",
            speaker: "Daniel Peralta-Salas",
            tittle: "ICMAT - Spain"
        },
        {
            date: "April 9",
            speaker: "Stephen Childress",
            tittle: "NYU - USA"
        },
        {
            date: "April 23",
            speaker: "Andrzej Stasiak",
            tittle: "University of Lausanne - Switzerland"
        },
        {
            date: "May 7",
            speaker: "Aldo Guzmán-Sáenz",
            tittle: "IBM Thomas J. Watson Research Center - USA"
        },
        {
            date: "May 21",
            speaker: "Caroline Uhler",
            tittle: "ETH Zurich - Switzerland"
        },
    ]);

    const [talks2,setTalks2] = useState([
        {
            date: "August 20",
            speaker: "Bei Wang",
            tittle: "University of Utah - USA"
        },  
        {
            date: "September 3",
            speaker: "Yasu Wang",
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
            speaker: "Fazle Hussain",
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
            date: "December 10",
            speaker: "Matthew Kahle",
            tittle: "Ohio State University - USA"
        },
    ]);

    return(
        <>
        <div className={classes.section} style={{paddingTop: 20}}>
            <h1 className={classes.titleFutureTalks}>SPRING 2021 TALKS</h1>
            <div styles={{justifyContent: 'center'}}>
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
                  {talks.map(talk => (
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
        <div className={classes.section} style={{paddingTop: 20}}>
            <h1 className={classes.titleFutureTalks}>FALL 2021 TALKS</h1>
            <div styles={{justifyContent: 'center'}}>
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
        </>
    );
}