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

  var lastTalk = Object.keys(talks).length - 1;

  while (
    talks[lastTalk.toString()].eventId != undefined | talks[lastTalk.toString()].video == null
  ) {
    lastTalk -= 1;
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
