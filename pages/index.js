import Head from 'next/head';
import HomePage from '../views/HomePage/HomePage';
import data from '../data/imageData.json';
import talks from '../data/talks.json';

export async function getStaticProps() {
  const totalImages = data.totalImages

  var images = []

  for (var i = 1; i <= totalImages; i += 1) {
    images.push('/img/imagesCarousel/img' + i.toString() + '.jpg')
  }

  var lastTalk = Object.keys(talks).length; // WARNING; this is the last index because 89 index is missing in talks json

  // search last video (sorted by date) in the last 20 records, because we assume there will not be more than 20 talks in a semester
  var MAX_TALKS_IN_SEMESTER = 20;
  var talksIDToSearch = [];

  while (talksIDToSearch.length < MAX_TALKS_IN_SEMESTER) {
    const currentTalkId = lastTalk.toString();

    if (talks[currentTalkId] == undefined) {
      lastTalk -= 1;
      continue;
    }
    else if (talks[currentTalkId].eventId != undefined) {
      lastTalk -= 1;
      continue;
    }
    else if (talks[currentTalkId].video == null) {
      lastTalk -= 1;
      continue;
    }
    else {
      lastTalk -= 1;
      talksIDToSearch.push(currentTalkId);
    }
  }

  talksIDToSearch.sort((talkID1, talkID2) => talks[talkID1].date2 < talks[talkID2].date2 ? 1 : -1);

  const talk_id = talksIDToSearch[0];

  return {
    props: {
      images: images,
      last_talk: talk_id
    }
  }
}

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>GEOTOP-A</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, maximum-scale=1" />
      </Head>
      <HomePage {...props} />
      <br />
    </div>
  )
}
