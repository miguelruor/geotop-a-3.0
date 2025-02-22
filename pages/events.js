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
