import Head from 'next/head';
import HomePage from '../views/HomePage/HomePage';
import fs from 'fs'
import path from 'path'


export async function getStaticProps(){
  const imagesDirectory = path.join(process.cwd(), 'public/img/')

  const geometryImages = fs.readdirSync(imagesDirectory+'Pics_Geometry');
  const topologyImages = fs.readdirSync(imagesDirectory+'Pics_Topology');
  

  return {
    props: {
      geometryImages, 
      topologyImages
    }
  }
}

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>GEOTOP-A</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <HomePage geometryImages={props.geometryImages} topologyImages={props.topologyImages}/>
      <br/>
    </div>
  )
}
