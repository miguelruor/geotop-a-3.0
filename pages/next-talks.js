import Head from 'next/head'
import NextTalksPage from '../views/NextTalksPage/NextTalksPage'
import speakers from '../data/speakers.json';
import talks from '../data/talks.json';

export async function getStaticProps() {
  let next_talks = []

  Object.keys(talks).forEach(talk_id => {
    if (talks[talk_id].eventId != undefined) {
      // Ignore talks for events different than GEOTOP-A
      return;
    }

    var date = talks[talk_id].date2;
    var date_js = new Date(date.slice(0, 4), date.slice(4, 6) - "01", date.slice(6, 8));
    var today = new Date()
    today.setHours(0, 0, 0, 0);
    date_js.setHours(0, 0, 0, 0);

    if (date_js < today) {
      return;
    }

    const speakerID = talks[talk_id].speaker_id.toString();

    next_talks.push({
      speakerImage: speakers[speakerID].image ? '/img/speakers/sp' + speakerID + ".png" : "/img/speakers/no-image.png",
      date: talks[talk_id].date,
      date2: talks[talk_id].date2,
      speaker: speakers[speakerID].completeName,
      title: talks[talk_id].title,
      keywords: talks[talk_id].keywords,
      abstract: talks[talk_id].abstract,
      video: talks[talk_id].video,
      warning: typeof (talks[talk_id].warning) == "undefined" ? null : talks[talk_id].warning,
      slides: typeof (talks[talk_id].slides) == "undefined" ? null : talks[talk_id].slides,
      streamingTime: typeof (talks[talk_id].streaming_time) == "undefined" ? null : talks[talk_id].streaming_time, // this is an integer which means the hour of the day in CDMX time when the talk will be streamed (from 0 to 23)
    })
  });

  // order netx_talks by date
  next_talks.sort((a, b) => {
    if (a.date2 < b.date2) {
      return -1;
    }
    else if (a.date2 > b.date2) {
      return 1;
    }
    else {
      return 0;
    }
  });

  return {
    props: {
      next_talks: next_talks
    }
  }
}

export default function NextTalks(props) {
  return (
    <div>
      <Head>
        <title>GEOTOP-A</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextTalksPage next_talks={props.next_talks} />
    </div>
  )
}
