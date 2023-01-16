import Head from 'next/head';
import PreviousTalksPage from '../views/PreviousTalksPage/PreviousTalksPage';
import speakers from '../data/speakers.json';
import talks from '../data/talks.json';

export async function getStaticProps() {
  var seasons_aux = {};

  Object.keys(talks).forEach(key => {
    if ("eventId" in talks[key]) {
      return;
    }
    var date = talks[key].date2;
    date = new Date(date.slice(0, 4), date.slice(4, 6) - "01", date.slice(6, 8));

    if (date > new Date()) {
      return;
    }

    var dateString = talks[key].date;

    var sea = talks[key].season;

    if (!(sea in seasons_aux)) {
      seasons_aux[sea] = []
    }

    const speakerID = talks[key].speaker_id;

    seasons_aux[sea].push(
      {
        speakerID: speakerID,
        talkID: key,
        speaker: speakers[speakerID.toString()].completeName,
        title: talks[key].title,
        keywords: talks[key].keywords,
        date: dateString,
        abstract: talks[key].abstract,
        video: talks[key].video,
        presentation: typeof (talks[key].slides) == "undefined" ? null : talks[key].slides,
        warning: typeof (talks[key].warning) == "undefined" ? null : talks[key].warning,
      }
    );
  });

  var speakerImages = []
  Object.keys(speakers).forEach(id => speakerImages.push('/img/speakers/sp' + id + ".png"))


  for (var season in seasons_aux) {
    seasons_aux[season].reverse()
  }

  return {
    props: {
      seasons: seasons_aux,
      speakerImages: speakerImages
    }
  }
}

export default function PreviousTalks(props) {
  return (
    <div>
      <Head>
        <title>GEOTOP-A</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PreviousTalksPage previousTalks={props.seasons} speakerImages={props.speakerImages} />
    </div>
  )
}

/* Ejemplo
  const example = {
    abstract: 'Descripcion',
    date : 'fecha dada',
    speaker: 'Pablo Meré',
    title: 'DNA topology',
    video: 'https://www.youtube.com/embed/0EqHqPvXcMU',
    keywords: ['DNA','subject']
  };

  const example2 = {
    abstract: 'Descripcion 2',
    date : 'fecha dada 2',
    speaker: 'Pablo Meré 2',
    title: 'DNA topology 2',
    video: 'https://www.youtube.com/embed/zs8zmeWzC4M',
    keywords: ['DNA 2','subject 2']
  };
  
  var seasons_aux_example = {
    'FALL 2020': [example2, example, example2],
    'SUMMER 2020': [example, example2, example, example2, example],
    'SPRING 2020': [example2, example, example2],
    'FALL 2019': [example, example2, example, example2, example],
    'SPRING 2019': [example2, example, example2],
    'FALL 2018': [example, example2, example, example2, example],
  }; */