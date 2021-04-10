import { FormatPaintRounded } from "@material-ui/icons";
import React, {useState, useEffect} from "react";
// @material-ui/core components

// core components
import NavPills from "./NavPills_Modified.js";

export default function LeftMenuSection(props){

    var tabs = []
    var seasons = Object.keys(props.previousTalks).reverse();

    seasons.forEach(season => tabs.push({tabButton: season}));

    return(
        <NavPills
            color="primary"
            horizontal={{
                tabsGrid: { xs: 12, sm: 2, md: 2 },
                contentGrid: { xs: 12, sm: 10, md: 10 }
            }}
            content={props.previousTalks}
            tabs={tabs}
            speakerImages={props.speakerImages}
            />
    );
}
