import { Fragment } from 'react';

import Background from '../../components/Proceedings/Background/Background';
import style from "../../assets/css/meetings.module.css";

import Hidden from '@material-ui/core/Hidden';
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Divider from '@material-ui/core/Divider';

export async function getStaticProps(context) {
    const meeting = context.params.meeting;

    return {
        props: {
            meeting: meeting,
            meetingTitle: "Seminar GEOTOP-A",
            shortDescription: "First presential meeting in Merida, Mexico",
            submissions: [
                {
                    participantNum: 1,
                    familyName: "ALEXANDER",
                    firstName: "Gareth",
                    affiliation: "Warwick U.",
                    country: "UK",
                    arrival: "PA - 1",
                    arrivalTime: "17:50",
                    departure: "PA - 7",
                    departureTime: "13:35",
                },
                {
                    participantNum: 2,
                    familyName: "BALE",
                    firstName: "Arron",
                    affiliation: "Durham U.",
                    country: "UK",
                    arrival: "PA - 1",
                    arrivalTime: "21:15",
                    departure: "TR - 7",
                    departureTime: "18:40",
                },
                {
                    participantNum: 3,
                    familyName: "BARENGHI",
                    firstName: "Carlo",
                    affiliation: "Newcastle U.",
                    country: "UK",
                    arrival: "PA - 1",
                    arrivalTime: "10:35",
                    departure: null,
                    departureTime: null,
                },
                {
                    participantNum: 4,
                    familyName: "BELLONI",
                    firstName: " Andrea",
                    affiliation: "Newcastle U.",
                    country: "UK",
                    arrival: "TR - 1",
                    arrivalTime: "7:35",
                    departure: "PA - 7",
                    departureTime: "20:20",
                },

            ]
        }
    }
}


export async function getStaticPaths() {

    var paths = [{ params: { meeting: "merida24" } }]
    //paths = [{params: {meeting: "0"}}, {params:{meeting: "1"}}, {params:{meeting: "2"}}]

    return {
        paths: paths,
        fallback: false
    };
}

export default function AbstractSubmission(props) {

    const { submissions } = props;

    return (
        <Background title={props.meetingTitle} meetingId={props.meeting} shortDescription={props.shortDescription}>
            <h1 className={style.paragraphTitle}>List of Participants</h1>
            <h2>TBA</h2>
            {/*
            <br />
            <p>Lecturers and accompanying persons present at EMFCSC</p>
            <GridContainer>
                <Hidden only="xs">
                    <GridItem sm={1}>
                        <h4>#</h4>
                    </GridItem>
                    <GridItem sm={4}>
                        <h4>FAMILY NAME<br />First Name</h4>
                    </GridItem>
                    <GridItem sm={3}>
                        <h4>Affiliation<br />Country</h4>
                    </GridItem>
                    <GridItem sm={2}>
                        <h4>Arrival<br />at - dd time</h4>
                    </GridItem>
                    <GridItem sm={2}>
                        <h4>Departure<br />at - dd time</h4>
                    </GridItem>
                </Hidden>
                {submissions.map(talk => (
                    <Fragment key={talk.speaker}>
                        <Hidden xsDown>
                            <GridItem sm={1}>
                                <p>{talk.participantNum}</p>
                            </GridItem>
                            <GridItem sm={4}>
                                <p>{talk.familyName} <br /> {talk.firstName}</p>
                            </GridItem>
                            <GridItem sm={3}>
                                <p>{talk.affiliation}<br />{talk.country}</p>
                            </GridItem>
                            <GridItem sm={2}>
                                <p>{talk.arrival}<br />{talk.arrivalTime}</p>
                            </GridItem>
                            <GridItem sm={2}>
                                <p>{talk.departure ? <>{talk.departure}<br />{talk.departureTime}</> : "-"}</p>
                            </GridItem>
                            <GridItem sm={12}>
                                <Divider variant="fullWidth" />
                            </GridItem>
                        </Hidden>
                        {/* Seccion Movil
                        <Hidden smUp>
                            <GridItem xs={12}>
                                <p>{talk.participantNum}. {talk.familyName} {talk.firstName} - {talk.affiliation}, {talk.country}</p>
                            </GridItem>
                            <GridItem xs={12}>
                                <Divider variant="fullWidth" />
                            </GridItem>
                        </Hidden>
                    </Fragment>
                ))}
            </GridContainer>
                */}
        </Background>
    )
}
