import Head from 'next/head';
import SearchBySpeakerPage from '../views/Search/BySpeakerPage/BySpeakerPage';
import removeAccents from "remove-accents"
import talks from "../data/talks";
import speakers from "../data/speakers";;

export async function getStaticProps(){
  const speaker0 = {
    name: "Juan",
    surname: "Perez",
    middle_initial: null,
    completeName: "Juan Perez",
    talks: ['0'],
    years: ['2014']
  }

  const speaker1 = {
    name: "Juan",
    surname: "Uribe",
    middle_initial: null,
    completeName: "Juan Uribe",
    talks: ['1'],
    years: ['2015']
  }

  const speaker2 = {
    name: "Juan",
    surname: "Ruiz",
    middle_initial: null,
    completeName: "Juan Ruiz",
    talks: ['2'],
    years: ['2016']
  }

  const speaker3 = {
    name: "Juan",
    surname: "Ortiz",
    middle_initial: null,
    completeName: "Juan Ortiz",
    talks: ['3'],
    years: ['2017']
  }

  const speaker4 = {
    name: "Juan",
    surname: "Acosta",
    middle_initial: null,
    completeName: "Juan Acosta",
    talks: ['4'],
    years: ['2018']
  }

  const speakers = {
    '0': speaker0,
    '1': speaker1,
    '2': speaker2,
    '3': speaker3,
    '4': speaker4
  }

  var speakersID = ['0', '1', '2', '3', '4'];
  
  speakersID.sort(function(a,b){
    if(removeAccents(speakers[a].surname) > removeAccents(speakers[b].surname)){
        return 1;
    }
    if(removeAccents(speakers[a].surname) < removeAccents(speakers[b].surname)){
        return -1;
    }
    return 0;
  });

  const talk0 = {
    speakerID: "0",
    year: "2014",
    video: "https://www.youtube.com/watch?v=-gDinVAmtA0",
    date: "21/03/2014",
    season: "Spring 2014",
    title: "Mecanica Cuantica",
    keywords: ["DNA"],
    abstract: "Hablaremos sobre los principios de Mecanica Cuantica"
  };
  
  const talk1 = {
    speakerID: "1",
    year: "2015",
    video: "https://www.youtube.com/watch?v=-gDinVAmtA0",
    date: "21/03/2015",
    season: "Spring 2015",
    title: "Mecanica Clasica",
    keywords: ["DNA"],
    abstract: "Hablaremos sobre los principios de Mecanica Clasica"
  };

  const talk2 = {
    speakerID: "2",
    year: "2016",
    video: "https://www.youtube.com/watch?v=-gDinVAmtA0",
    date: "21/03/2016",
    season: "Spring 2016",
    title: "Mecanica Clasica",
    keywords: ["DNA"],
    abstract: "Hablaremos sobre los principios de Mecanica Clasica"
  };

  const talk3 = {
    speakerID: "3",
    year: "2017",
    video: "https://www.youtube.com/watch?v=-gDinVAmtA0",
    date: "21/03/2017",
    season: "Spring 2017",
    title: "TDA",
    keywords: ["TDA"],
    abstract: "Hablaremos sobre los principios de TDA"
  };

  const talk4 = {
    speakerID: "4",
    year: "2018",
    video: "https://www.youtube.com/watch?v=-gDinVAmtA0",
    date: "21/03/2018",
    season: "Spring 2018",
    title: "Homologia",
    keywords: ["TDA"],
    abstract: "Hablaremos sobre los principios de Homologia"
  };

  const talks = {
    '0': talk0,
    '1': talk1,
    '2': talk2, 
    '3': talk3,
    '4': talk4
  };

  let lettersInSurname = new Set();
  let speakersWithLetter = {};

  speakersID.forEach(speaker => {
      const letter = removeAccents(speakers[speaker].surname.charAt(0));
      lettersInSurname.add(letter);
      speakersWithLetter[letter] = [];
  });

  speakersID.forEach(speaker => {
      const letter = removeAccents(speakers[speaker].surname.charAt(0));
      speakersWithLetter[letter].push(speaker);
  });

  return{
    props:{
      talks: talks,
      speakers: speakers,
      speakersID: speakersID,
      lettersInSurname: [...lettersInSurname], // convertir set a lista
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
      <SearchBySpeakerPage talks={props.talks} speakers={props.speakers} speakersIDList={props.speakersID}
       lettersInSurname={props.lettersInSurname} speakersListByLetter={props.speakersListByLetter} />
    </div>
  )
}
