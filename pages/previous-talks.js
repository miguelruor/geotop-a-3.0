import Head from 'next/head';
import PreviousTalksPage from '../views/PreviousTalksPage/PreviousTalksPage';
import talks from "../data/talks";
import speakers from "../data/speakers"
//import {db} from '../ConfigFirebase';

export async function getStaticProps(){

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

  var speakers_aux = {};
  var seasons_aux = {};

  for(var i = 0, max = 49; i<max; i+=1){
    console.log(speakers[0][i].surname);
  }
  
  var sea = speakers;

  /*
  await db.collection("speakers").get()
    .then(function(querySnapshot){
        querySnapshot.forEach(function(doc){
            var idSpeaker = doc.id;
            var mi = doc.data().middle_initial;

            speakers_aux[idSpeaker] = doc.data().name + " " + 
                (mi != null ? mi : "") + " " + doc.data().surname;
        });
        console.log("Carga de speakers exitosa")
    })
    .catch(function(error){
        console.log("Cannot load some speaker");
    });
  await db.collection("talks").orderBy("date", "desc")
  .get()
  .then(function(querySnapshot){
      querySnapshot.forEach(function(doc){

        // si la platica tiene fecha mayor o igual que la fecha actual, no tomarla en cuenta
          if(doc.data().date.toDate() > new Date()){
              return;
          }

          var sea = doc.data().season;
          if(!(sea in seasons_aux)){
              seasons_aux[sea] = []
          }
          
          const speakerID = doc.data().speaker;
          const date = doc.data().date.toDate();
          seasons_aux[sea].push(
              {
                  speakerID: speakerID,
                  speaker: speakers_aux[speakerID],
                  title: doc.data().title,
                  keywords: doc.data().keywords,
                  date: month[date.getMonth()] + " " + date.getDate().toString() + ", " + date.getFullYear().toString(),
                  abstract: doc.data().abstract,
                  video: doc.data().video,
                  presentation: doc.data().presentation,
                  warning: doc.data().warning,
              }
          );
      });
      console.log("Carga de speakers exitosa")
  })
  .catch(function(error){
      console.log(error);
  });
  */

  
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
  
  seasons_aux = {
    'FALL 2020': [example2, example, example2],
    'SUMMER 2020': [example, example2, example, example2, example],
    'SPRING 2020': [example2, example, example2],
    'FALL 2019': [example, example2, example, example2, example],
    'SPRING 2019': [example2, example, example2],
    'FALL 2018': [example, example2, example, example2, example],
  };

  return{
    props:{
      seasons_aux
    }
  }
}

export default function PreviousTalks(props) {
  return (
    <div>
      <Head>
        <title>GEOTOP-A</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <PreviousTalksPage previousTalksBySeason = {props.seasons_aux}/>
    </div>
  )
}
