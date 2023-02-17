import Head from 'next/head'
import NextTalksPage from '../views/NextTalksPage/NextTalksPage'
import speakers from '../data/speakers.json';
import talks from '../data/talks.json';

export async function getStaticProps() {
  let next_talks = []

  Object.keys(talks).forEach(key => {
    if (talks[key].eventId != undefined) {
      // Ignore talks for events different than GEOTOP-A
      return;
    }

    var date = talks[key].date2;
    var date_js = new Date(date.slice(0, 4), date.slice(4, 6) - "01", date.slice(6, 8));
    var today = new Date()
    today.setHours(0, 0, 0, 0);
    date_js.setHours(0, 0, 0, 0);

    if (date_js < today) {
      return;
    }

    next_talks.push({
      ...talks[key],
      speaker: speakers[talks[key]["speaker_id"].toString()].completeName,
      image: speakers[talks[key]["speaker_id"].toString()].image
    });
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
