import Head from 'next/head';
import SearchBySpeakerPage from '../views/Search/BySpeakerPage/BySpeakerPage';
import removeAccents from "remove-accents"
import speakers from "../data/speakers.json";
import talks from "../data/talks.json";
import events from "../data/events.json";

export async function getStaticProps() {
  var speakersID = Object.keys(speakers);

  var speakers_aux = { ...speakers }

  speakersID.sort(function (a, b) {
    if (removeAccents(speakers[a].surname) > removeAccents(speakers[b].surname)) {
      return 1;
    }
    if (removeAccents(speakers[a].surname) < removeAccents(speakers[b].surname)) {
      return -1;
    }
    return 0;
  });

  let lettersInSurname = new Set();
  let speakersWithLetter = {};

  speakersID.forEach(speaker => {
    const letter = removeAccents(speakers[speaker].surname.charAt(0));
    lettersInSurname.add(letter);
    speakersWithLetter[letter] = [];

    speakers_aux[speaker].talks = speakers_aux[speaker].talks.map(talkId => ({
      color: talks[talkId.toString()].eventId ? "danger" : "primary",
      url: talks[talkId.toString()].eventId ? `event-talks/${talkId}` : `previous-talks/${talkId}`,
      year: talks[talkId.toString()].date2.slice(0, 4)
    }));
  })

  speakersID.forEach(speaker => {
    const letter = removeAccents(speakers[speaker].surname.charAt(0));
    speakersWithLetter[letter].push(speaker);
  })

  var auxLetterSet = [...lettersInSurname] // convertir set a lista
  auxLetterSet.sort()

  return {
    props: {
      speakers: speakers_aux,
      lettersInSurname: auxLetterSet,
      speakersListByLetter: speakersWithLetter
    }
  }
}

export default function SearchBySpeaker(props) {
  return (
    <div>
      <Head>
        <title>GEOTOP-A</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchBySpeakerPage speakers={props.speakers} lettersInSurname={props.lettersInSurname} speakersListByLetter={props.speakersListByLetter} />
    </div>
  )
}

/*   const speaker0 = {
    name: "Juan",
    surname: "Perez",
    middle_initial: null,
    completeName: "Juan Perez",
    talks: [{
      "url": "previous-talks/talk_id",
      "year": "2014"
    },
    {
      "url": "event-talks/talk_id",
      "year": "2020
    }]
  }

  const speakers = {
    '0': speaker0
  }

 */