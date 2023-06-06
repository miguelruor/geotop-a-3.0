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

  let found = false; // flag to know when I found the last talk

  while (!found) {
    const currentTalkId = lastTalk.toString();

    if (talks[currentTalkId] == undefined) {
      lastTalk -= 1;
      continue;
    }
    else if (talks[currentTalkId].eventId != undefined) {
      lastTalk -= 1;
      continue;
    }
    else if (talks[lastTalk.toString()].video == null) {
      lastTalk -= 1;
      continue;
    }
    else {
      found = true;
    }
  }

  const talk_id = lastTalk.toString();

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
