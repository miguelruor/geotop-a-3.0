import Header from "../../components/Header/Header";
import HeaderLinks from "../../components/Header/HeaderLinks";
import Parallax from '../../components/Parallax/Parallax';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import Footer from '../../components/Footer/Footer';
import TalkLayout from '../../components/TalkLayout/TalkLayout';

import { makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/css/talkStyle.js";
import classNames from "classnames";

import backgroundImageHome from '../../public/img/img1.jpg'
import speakers from '../../data/speakers.json';
import talks from '../../data/talks.json';
import events from '../../data/events.json';

const useStyles = makeStyles(styles);

export default function SingleTalkPage(props) {
    const classes = useStyles();
    const eventName = props.eventName;

    return (
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
            <div className={classNames(classes.main, classes.mainRaised)} >
                <TalkLayout {...props} />
            </div>
            <Footer />

        </div>
    )
}

export async function getStaticProps(context) {
    var talk_id = context.params.id;

    const speakerID = talks[talk_id].speaker_id.toString();

    return {
        props: {
            eventName: events[talks[talk_id].eventId].eventName,
            speakerImage: speakers[speakerID].image ? '/img/speakers/sp' + speakerID + ".png" : "/img/speakers/no-image.png",
            date: talks[talk_id].date,
            speaker: speakers[speakerID].completeName,
            title: talks[talk_id].title,
            keywords: talks[talk_id].keywords,
            abstract: talks[talk_id].abstract,
            video: talks[talk_id].video,
            warning: typeof (talks[talk_id].warning) == "undefined" ? null : talks[talk_id].warning,
            slides: typeof (talks[talk_id].slides) == "undefined" ? null : talks[talk_id].slides
        }
    }
}

export async function getStaticPaths() {

    var paths = Object.keys(talks).filter((talk_id) => talks[talk_id].eventId != undefined).map((talk_id) => ({ params: { id: talk_id } }))
    //paths = [{params: {id: "0"}}, {params:{id: "1"}}, {params:{id: "2"}}]

    return {
        paths: paths,
        fallback: false
    };
}