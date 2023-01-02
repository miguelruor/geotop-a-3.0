import Head from 'next/head'
import Header from "../components/Header/Header";
import HeaderLinks from "../components/Header/HeaderLinks";
import Parallax from '../components/Parallax/Parallax';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';
import Footer from '../components/Footer/Footer';
import CardsGrid from "../components/CardsGrid/CardsGrid";
import backgroundImageHome from '../public/img/img2.jpg'
import events from "../data/events.json"

import { makeStyles } from "@material-ui/core/styles";
import styles from "../views/NextTalksPage/NextTalksPageStyle";

const useStyles = makeStyles(styles);

export async function getStaticProps() {

    var seasons_aux = {};

    Object.keys(events).forEach(key => {
        var sea = events[key].season;

        if (!(sea in seasons_aux)) {
            seasons_aux[sea] = []
        }

        seasons_aux[sea].push(
            {
                eventId: key,
                topNote: events[key].topNote,
                title: events[key].eventName,
                subtitle: events[key].category,
                link: `/events/${key}`,
                image: "/img/events/event" + key + ".png"
            }
        );
    });

    for (var season in seasons_aux) {
        seasons_aux[season].reverse()
    }

    const eventName = "Topological Methods in Mathematical Physics 2022"
    const eventId = 0
    const event = {
        topNote: "September 2-6, 2022",
        title: eventName,
        subtitle: "International Conference",
        link: `/events/${eventId}`,
        image: "/img/events/" + eventId + "/event_image.jpg"
    }

    const content = {
        "2022": [
            {
                eventId: 0,
                ...event
            },
            {
                eventId: 2,
                ...event
            }
        ],
        "2021": [
            {
                eventId: 1,
                ...event
            }
        ]
    }

    return {
        props: {
            cardsContent: seasons_aux,
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

                <CardsGrid
                    cardsContent={props.cardsContent}
                    tabsOrdered={Object.keys(props.cardsContent).reverse()}
                    button_text={"See talks"}
                />

                <Footer />

            </div>
        </div>
    )
}
