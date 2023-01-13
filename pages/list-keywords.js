import Head from 'next/head';
import SearchByKeywordPage from '../views/Search/ByKeywordPage/ByKeywordPage';
import speakers from '../data/speakers.json';
import talks from '../data/talks.json';
import events from '../data/events.json';

import removeAccents from "remove-accents";

export async function getStaticProps() {

  var keywords = {};
  let letterSet = new Set(); // Set con primeras letras de keywords en mayusculas
  let keywordsWithLetter = {};

  /* Ejemplo
  const keywords = {
    "DNA": [{"surname": "", "year": "", "url": "", color: ""},...],
    "TDA": [{"surname": "", "year": "", "url": "", color: ""},...]
  };

  const keywordsListByLetter = {
    "D": ["DNA", ...],
    "T": ["TDA", ...]
  };

  const lettersInKeywords = ["D", "T"];
  */

  Object.keys(talks).forEach(talk_id => {
    talks[talk_id].keywords.forEach(keyword => {
      // Checo si encuentro una keyword nueva
      if (!(keyword in keywords)) {
        keywords[keyword] = []
      }
      keywords[keyword].push({
        surname: speakers[talks[talk_id].speaker_id.toString()].surname,
        year: talks[talk_id].date2.slice(0, 4),
        url: talks[talk_id].eventId ? `event-talks/${talk_id}` : `previous-talks/${talk_id}`,
        color: talks[talk_id].eventId ? "danger" : "primary"
      });
    })
  })

  // Función que revisa las letras que existen para hacer listas  
  for (var k in keywords) {
    var letter = k.charAt(0).toUpperCase();
    if (!letterSet.has(letter)) {
      // if new letter, add letter to set and add keyword to that letter
      letterSet.add(letter);
      keywordsWithLetter[letter] = [k];
    }
    else {
      keywordsWithLetter[letter].push(k);
    }
  }

  for (var letter in keywordsWithLetter) {
    // ordenar keywords que empiezan con letter sin considerar acentos (removeAccents) ni mayusculas
    keywordsWithLetter[letter].sort(function (a, b) {
      if (removeAccents(a).toLowerCase() > removeAccents(b).toLowerCase()) {
        return 1;
      }
      if (removeAccents(a).toLowerCase() < removeAccents(b).toLowerCase()) {
        return -1;
      }
      return 0;
    });
  }

  var lettersInKeywords = [...letterSet]; // convertir a lista el set 
  lettersInKeywords.sort(); // ordenar

  return {
    props: {
      keywords: keywords,
      keywordsListByLetter: keywordsWithLetter,
      lettersInKeywords: lettersInKeywords
    }
  }
}

export default function SearchByKeyword(props) {
  return (
    <div>
      <Head>
        <title>GEOTOP-A</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchByKeywordPage keywords={props.keywords} keywordsListByLetter={props.keywordsListByLetter}
        lettersInKeywords={props.lettersInKeywords} talks={props.talks} />
    </div>
  )
}
