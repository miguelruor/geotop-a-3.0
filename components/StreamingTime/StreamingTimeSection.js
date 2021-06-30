import React from 'react';

// Lines for Clock's
import 'react-clock/dist/Clock.css';

import { makeStyles } from "@material-ui/core/styles";
import styles from "./StreamingTimeSectionStyle.js";
import Times from "../Clock/Times.js";

//https://material-ui.com/es/components/grid/
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";

const useStyles = makeStyles(styles);

export default function StreamingTime(){
    const classes = useStyles();

    const UTCMexicoCity = 360;
    const StreamingTimeMexicoCity = 540; //antes del cambio de horario de verano: 600

    const d = new Date();
    const localOffset = d.getTimezoneOffset();

    const StreamingTimeLocal = (StreamingTimeMexicoCity + UTCMexicoCity - localOffset + 1440)%1440;


    return(
        <div style={{paddingLeft: "10%", paddingRight:"10%", paddingTop:"5%", color: "#fff"}} justify = "left">
            <div>
                <h1 className={classes.title}>Streaming time</h1>
            </div>

            <div>
                <Times 
                    timeLabel={"CDMX time"}
                    timeLeftInMinutes={StreamingTimeLocal}
                    color='#282c34'
                    bordercolor='#9c27b0'
                />
            </div>
        </div>
    );
}