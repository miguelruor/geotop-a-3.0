import Head from 'next/head'
import events from '../data/events.json';
import Header from "../components/Header/Header";
import HeaderLinks from "../components/Header/HeaderLinks";
import Parallax from '../components/Parallax/Parallax';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';
import Footer from '../components/Footer/Footer';
import EventsGrid from "../components/EventsGrid/EventsGrid";
import backgroundImageHome from '../public/img/img2.jpg'

import { makeStyles } from "@material-ui/core/styles";
import styles from "../views/NextTalksPage/NextTalksPageStyle";

const useStyles = makeStyles(styles);

export async function getStaticProps() {

    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    return {
        props: {
            events: events
        }
    }
}


export default function Events(props) {
    const classes = useStyles();

    return (
        <div>
            <Head>
                <title>GEOTOP-A</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <Header
                    color="blue"
                    //routes={dashboardRoutes}
                    brand="Seminar GEOTOP-A"
                    rightLinks={<HeaderLinks />}
                    fixed
                    changeColorOnScroll={{
                        height: 400,
                        color: "white"
                    }}
                />
                <Parallax small filter image={backgroundImageHome}>
                    <div className={classes.container}>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={6}>
                                <h1 className={classes.title}>Events</h1>
                                <br />
                            </GridItem>
                        </GridContainer>
                    </div>
                </Parallax>

                <EventsGrid events={props.events} />

                <Footer />

            </div>
        </div>
    )
}
