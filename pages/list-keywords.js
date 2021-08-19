import Head from 'next/head';
import SearchByKeywordPage from '../views/Search/ByKeywordPage/ByKeywordPage';
import speakers from '../data/speakers.json';
import talks from '../data/talks.json';

export async function getStaticProps(){
  
  var keywords = {};
  let letterSet = new Set(); // Set con primeras letras de keywords en mayusculas
  let visitLetters = {}; // 
  let keywordsWithLetter = {}; 
  // keywordsWithLetter[a] = [{keyword1_con_a: [talk1_id, talk2_id, ...]}, 
  // {keyword2_con_a: [talk3_id, ...]}, ...]

  var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";

  var talks_ext = {}

  Object.keys(talks).forEach(talk_id => {
    
    var date = talks[talk_id].date2;
    date = new Date(date.slice(0, 4), date.slice(4, 6)-"01", date.slice(6,8));

    if(date > new Date()){
      return;
    }
    
    let keys = talks[talk_id].keywords;
    let keys_len = keys.length;

    for(let i=0; i<keys_len; i++){
        // Checo si encuentro una keyword nueva
        if(!(keys[i] in keywords)){
            keywords[keys[i]] = []
        }
        keywords[keys[i]].push(talk_id); 
    }

    var idx = talks[talk_id].speaker_id.toString();
    var year = date.getFullYear();
    var stringDate = talks[talk_id].date;
    
    talks_ext[talk_id] = {
        ...talks[talk_id],
        surname: speakers[idx].surname,
        speaker: speakers[idx].completeName,
        year: year,
        date: stringDate
    };
  })

  // Función que revisa las letras que existen para hacer listas  
  for(var k in keywords){
      var letter = k.charAt(0).toUpperCase();
      letterSet.add(letter);
      keywordsWithLetter[letter] = [];
  }

  for(var k in keywords){
      var letter = k.charAt(0).toUpperCase() ;
      var copy = {};
      copy[k] = keywords[k];
      keywordsWithLetter[letter].push(copy);
  }
  var auxLetterSet = [...letterSet]; // convertir a lista el set 
  auxLetterSet.sort(); // ordenar

  var lettersInKeywords = [...letterSet]; // convertir a lista el set 
  lettersInKeywords.sort(); // ordenar

  return{
    props:{
      keywords: keywords,
      keywordsListByLetter: keywordsWithLetter,
      lettersInKeywords: lettersInKeywords,
      talks: talks_ext
    }
  }
}

export default function SearchByKeyword(props) {
  return (
    <div>
      <Head>
        <title>GEOTOP-A</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <SearchByKeywordPage  keywords={props.keywords} keywordsListByLetter={props.keywordsListByLetter}
               lettersInKeywords={props.lettersInKeywords} talks= {props.talks}/>
    </div>
  )
}


/* Ejemplo
  const keywords = {
    "DNA": ['0','1','2'],
    "TDA": ['3','4']
  };

  const keywordsListByLetter = {
    "D": [{"DNA": [0,1,2]}],
    "T": [{"TDA": [3,4]}]
  };

  const lettersInKeywords = ["D", "T"];
  const talk0 = {
    surname: "Perez",
    speaker: "Juan Perez",
    year: "2014",
    video: "https://www.youtube.com/watch?v=-gDinVAmtA0",
    date: "21/03/2014",
    title: "Mecanica Cuantica",
    keywords: ["DNA"],
    abstract: "Hablaremos sobre los principios de Mecanica Cuantica"
  };
  
  const talk1 = {
    surname: "Uribe",
    speaker: "Juan Uribe",
    year: "2015",
    video: "https://www.youtube.com/watch?v=-gDinVAmtA0",
    date: "21/03/2015",
    title: "Mecanica Clasica",
    keywords: ["DNA"],
    abstract: "Hablaremos sobre los principios de Mecanica Clasica"
  };

  const talk2 = {
    surname: "Ruiz",
    speaker: "Juan Ruiz",
    year: "2016",
    video: "https://www.youtube.com/watch?v=-gDinVAmtA0",
    date: "21/03/2016",
    title: "Mecanica Clasica",
    keywords: ["DNA"],
    abstract: "Hablaremos sobre los principios de Mecanica Clasica"
  };

  const talk3 = {
    surname: "Ortiz",
    speaker: "Juan Ortiz",
    year: "2017",
    video: "https://www.youtube.com/watch?v=-gDinVAmtA0",
    date: "21/03/2017",
    title: "TDA",
    keywords: ["TDA"],
    abstract: "Hablaremos sobre los principios de TDA"
  };

  const talk4 = {
    surname: "Acosta",
    speaker: "Juan Acosta",
    year: "2018",
    video: "https://www.youtube.com/watch?v=-gDinVAmtA0",
    date: "21/03/2018",
    title: "Homologia",
    keywords: ["TDA"],
    abstract: "Hablaremos sobre los principios de Homologia",
    slide: null,
    warning: null
  };

  const talks = {
    '0': talk0,
    '1': talk1,
    '2': talk2, 
    '3': talk3,
    '4': talk4
  };

  */
