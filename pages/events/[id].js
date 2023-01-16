import Head from 'next/head'
import Header from "../../components/Header/Header";
import HeaderLinks from "../../components/Header/HeaderLinks";
import Parallax from '../../components/Parallax/Parallax';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import Footer from '../../components/Footer/Footer';
import CardsGridNoTabs from "../../components/CardsGrid/CardsGridNoTabs.js";
import backgroundImageHome from '../../public/img/img2.jpg'
import events from "../../data/events.json"
import talks from "../../data/talks.json"
import speakers from "../../data/speakers.json"

import { makeStyles } from "@material-ui/core/styles";
import styles from "../../views/NextTalksPage/NextTalksPageStyle";

const useStyles = makeStyles(styles);

export async function getStaticProps(context) {
    const eventId = context.params.id;
    const talksIds = events[eventId].talksIds;

    const eventTalks = talksIds.map((talkId) => (
        {
            topNote: talks[talkId].date,
            title: talks[talkId].title,
            subtitle: speakers[`${talks[talkId].speaker_id}`].completeName,
            link: `/event-talks/${talkId}`,
            image: speakers[`${talks[talkId].speaker_id}`].image ? "/img/speakers/sp" + `${talks[talkId].speaker_id}` + ".png" : "/img/speakers/no-image.png"
        }
    ))

    return {
        props: {
            eventName: events[eventId].eventName,
            eventTalks: eventTalks
        }
    }
}


export default function Events({ eventName, eventTalks }) {
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
                                <h1 className={classes.title}>{eventName}</h1>
                                <br />
                            </GridItem>
                        </GridContainer>
                    </div>
                </Parallax>

                <CardsGridNoTabs
                    cardsContent={eventTalks}
                    button_text={"Details"}
                />

                <Footer />

            </div>
        </div>
    )
}

export async function getStaticPaths() {
    const paths = Object.keys(events).map((talk_id) => ({ params: { id: talk_id } }))
    //paths = [{params: {id: "0"}}, {params:{id: "1"}}, {params:{id: "2"}}]

    return {
        paths: paths,
        fallback: false
    };
}