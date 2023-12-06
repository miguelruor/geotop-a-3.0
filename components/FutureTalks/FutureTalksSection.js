import React, { Fragment } from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Hidden from '@material-ui/core/Hidden';
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
import Divider from '@material-ui/core/Divider';
import styles2 from "./FutureTalksSection.module.css"
import styles from "./FutureTalksStyle.js";
import future_talks from "../../data/future_talks.json";
import Link from "next/link";

const useStyles = makeStyles(styles);

export default function FutureTalks() {
    const classes = useStyles();

    return (
        <>
            {Object.keys(future_talks).map((key) => (
                <div key={key} className={styles2.titleFutureTalks} style={{ paddingTop: 20 }}>
                    <h3 className={classes.subtitle} style={{ "textAlign": "center" }}><Link href="/merida24" target="_blank">January 8-13, 2024. Mérida, Yucatán, México</Link></h3>

                    <h1>{key} TALKS</h1>
                    <div className={styles2.talks} styles={{ justifyContent: 'center' }}>
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
                            {future_talks[key].map(talk => (
                                <Fragment key={talk.speaker}>
                                    <Hidden xsDown>
                                        <GridItem sm={3} md={2}>
                                            <p className={classes.nextTalks}>{talk.date}</p>
                                        </GridItem>
                                        <GridItem sm={3} md={2}>
                                            <p className={classes.nextTalks}>{talk.speaker}</p>
                                        </GridItem>
                                        <GridItem sm={6} md={8}>
                                            <p className={classes.nextTalks}>{talk.institution}</p>
                                        </GridItem>
                                        <GridItem sm={12} md={12}>
                                            <Divider variant="fullWidth" />
                                        </GridItem>
                                    </Hidden>
                                    {/* Seccion Movil */}
                                    <Hidden smUp>
                                        <GridItem xs={12} sm={3} md={2}>
                                            <p className={classes.nextTalks}><b>{talk.speaker}</b> - {talk.date}</p>
                                        </GridItem>
                                        <GridItem xs={12}>
                                            <p className={classes.nextTalks}>{talk.institution}</p>
                                        </GridItem>
                                        <GridItem xs={12} sm={12} md={12}>
                                            <Divider variant="fullWidth" />
                                        </GridItem>
                                    </Hidden>
                                </Fragment>
                            ))}
                        </GridContainer>
                    </div>
                </div>
            ))}
        </>
    );
}