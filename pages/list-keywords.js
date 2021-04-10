import { ThumbDownAltOutlined } from '@material-ui/icons';
import Head from 'next/head';
import SearchByKeywordPage from '../views/Search/ByKeywordPage/ByKeywordPage';
import speakers from '../data/speakers.json';
import talks from '../data/talks.json';

export async function getStaticProps(){
  
  var keywords = {};
  var keywordsListByLetter = {};
  let letterSet = new Set(); // Set con primeras letras de keywords en mayusculas
  let visitLetters = {}; // 
  let keywordsWithLetter = {}; 
  // keywordsWithLetter[a] = [{keyword1_con_a: [talk1_id, talk2_id, ...]}, 
  // {keyword2_con_a: [talk3_id, ...]}, ...]

  // Función que revisa las letras que existen para hacer listas
  function handleLettersInKeyWords(){       
    for(var k in keywords){
        var letter = k.charAt(0).toUpperCase();
        letterSet.add(letter);
        visitLetters[letter] = false;
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
  }  

  var lettersInKeywords = [...letterSet]; // convertir a lista el set 
  lettersInKeywords.sort(); // ordenar

  return{
    props:{
      keywords: keywords,
      keywordsListByLetter: keywordsWithLetter,
      lettersInKeywords: lettersInKeywords,
      talks: talks
    }
  }
}

/* 

        await db.collection("talks").get()
        .then(function(querySnapshot){
            querySnapshot.forEach(async function(doc){
                
                let keys = doc.data().keywords;
                let keys_len = keys.length;
                for(let i=0; i<keys_len; i++){
                    // Checo si encuentro una keyword nueva
                    if(!(keys[i] in keywords_aux)){
                        keywords_aux[keys[i]] = []
                    }
                    keywords_aux[keys[i]].push(doc.id); 
                }
                var idx = doc.data().speaker;
                var date = doc.data().date.toDate();
                talks[doc.id] = {
                    surname: speakers[idx].surname,
                    speaker: speakers[idx].completeName,
                    year: date.getFullYear(),
                    video: doc.data().video,
                    date: month[date.getMonth()] + " " + date.getDate().toString() + ", " + date.getFullYear().toString(),
                    title: doc.data().title,
                    keywords: doc.data().keywords,
                    slides: doc.data().presentation,
                    abstract: doc.data().abstract,
                    warning: doc.data().warning,
                };
                
            });
        })
        .catch(function(error){
            alert("Cannot load some talk")
        });
        setKeywords(keywords_aux);
        setTalks(talks);
    },[]);

    // Al modificar speakers list con el contenido se actualiza
    useEffect(() => {
        handleLettersInKeyWords();
    },[keywords]);

    */

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
