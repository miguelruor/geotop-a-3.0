import { Fragment } from 'react';

import Background from '../../components/Proceedings/Background/Background';
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../views/HomePage/HomePageStyle.js";

import Hidden from '@material-ui/core/Hidden';
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Divider from '@material-ui/core/Divider';

// nodejs library that concatenates classes

const useStyles = makeStyles(styles);

export async function getStaticProps(context) {
    const meeting = context.params.meeting;

    return {
        props: {
            meeting: meeting,
            meetingTitle: "Seminar GEOTOP-A",
            shortDescription: "First presential meeting in Merida, Mexico",
            submissions: [
                {
                    speaker_num: 1,
                    speaker: "ALEXANDER Gareth",
                    link: "http://www.renzoricca.com/Erice/abstracts/ALEXANDER.pdf",
                    presentation_type: "Keynote, 1hr",
                    email: "G.P.Alexander@warwick.ac.uk",
                },
                {
                    speaker_num: 2,
                    speaker: "BALE Arron",
                    link: "http://www.renzoricca.com/Erice/abstracts/BALE.pdf",
                    presentation_type: "30 mins",
                    email: "arron.n.bale@durham.ac.uk",
                },
                {
                    speaker_num: 3,
                    speaker: "BARENGHI Carlo",
                    link: "http://www.renzoricca.com/Erice/abstracts/BARENGHI.pdf",
                    presentation_type: "Keynote, 1hr",
                    email: "Carlo.barenghi@newcastle.ac.uk",
                },
                {
                    speaker_num: 4,
                    speaker: "BELLONI Andrea",
                    link: "http://www.renzoricca.com/Erice/abstracts/BELLONI.pdf",
                    presentation_type: "30 mins",
                    email: "a.belloni17@outlook.it",
                }
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

    const classes = useStyles();

    return (
        <Background title={props.meetingTitle} meetingId={props.meeting} shortDescription={props.shortDescription}>
            <h1 className={classes.paragraphTitle}>Abstract Submission</h1>
            <br />
            <h2>Lectures</h2>
            <GridContainer>
                <Hidden only="xs">
                    <GridItem sm={1}>
                        <h4>#</h4>
                    </GridItem>
                    <GridItem sm={3}>
                        <h4>Name</h4>
                    </GridItem>
                    <GridItem sm={4}>
                        <h4>Presentation type</h4>
                    </GridItem>
                    <GridItem sm={4}>
                        <h4>Email</h4>
                    </GridItem>
                </Hidden>
                {submissions.map(talk => (
                    <Fragment key={talk.speaker}>
                        <Hidden xsDown>
                            <GridItem sm={1}>
                                <p>{talk.speaker_num}</p>
                            </GridItem>
                            <GridItem sm={3}>
                                <p><a href={talk.link} target="_blank">{talk.speaker}</a></p>
                            </GridItem>
                            <GridItem sm={3}>
                                <p>{talk.presentation_type}</p>
                            </GridItem>
                            <GridItem sm={4}>
                                <p>{talk.email}</p>
                            </GridItem>
                            <GridItem sm={12}>
                                <Divider variant="fullWidth" />
                            </GridItem>
                        </Hidden>
                        {/* Seccion Movil */}
                        <Hidden smUp>
                            <GridItem xs={12}>
                                <p><a href={talk.link} target="_blank">{talk.speaker}</a> - {talk.presentation_type}</p>
                            </GridItem>
                            <GridItem xs={12}>
                                <p>{talk.email}</p>
                            </GridItem>
                            <GridItem xs={12}>
                                <Divider variant="fullWidth" />
                            </GridItem>
                        </Hidden>
                    </Fragment>
                ))}
            </GridContainer>
        </Background>
    )
}
