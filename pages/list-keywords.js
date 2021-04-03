import { ThumbDownAltOutlined } from '@material-ui/icons';
import Head from 'next/head';
import SearchByKeywordPage from '../views/Search/ByKeywordPage/ByKeywordPage';

export async function getStaticProps(){
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
    abstract: "Hablaremos sobre los principios de Homologia"
  };

  const talks = {
    '0': talk0,
    '1': talk1,
    '2': talk2, 
    '3': talk3,
    '4': talk4
  };

  return{
    props:{
      keywords: keywords,
      keywordsListByLetter: keywordsListByLetter,
      lettersInKeywords: lettersInKeywords,
      talks: talks
    }
  }
}

/*
keywords={props.keywords} keywordsListByLetter={props.keywordsListByLetter}
               lettersInKeywords={props.lettersInKeywords} talks= {props.talks}
               
talks[talk_id] = objecto con llaves surname, speaker, year, video, date, title, slides, keywords, abstract, warning
speaker es el nombre completo
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
