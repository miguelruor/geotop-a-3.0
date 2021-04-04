import Head from 'next/head';
import HomePage from '../views/HomePage/HomePage';
import fs from 'fs';
import path from 'path';
import Database from "../data";

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>GEOTOP-A</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <HomePage data={props}/>
      <br/>
    </div>
  )
}

export async function getStaticProps(){
  const imagesDirectory = path.join(process.cwd(), 'public/img/')
  const geometryImages = fs.readdirSync(imagesDirectory+'Pics_Geometry');
  const topologyImages = fs.readdirSync(imagesDirectory+'Pics_Topology');
  var cont=0;
  for(var i = 0, max = Database.seminarData.length; i<max; i+=1){
    if(Database.seminarData[i].Previous == 'true'){
      cont = i;
    }
  }
  var dataObj = new Object(Database.seminarData[cont]);
  return {
    props: {
      geometryImages, 
      topologyImages,
      dataObj
    }
  }
}
