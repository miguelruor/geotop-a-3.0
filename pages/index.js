import Head from 'next/head';
import HomePage from '../views/HomePage/HomePage';
import data from '../data/imageData.json'


export async function getStaticProps(){
  const totalImages = data.totalImages

  var images = []

  for(var i=1; i<=totalImages; i+=1){
    images.push('/img/imagesCarousel/img'+i.toString()+'.jpg')
  }
  
  return {
    props: {
      images
    }
  }
}

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>GEOTOP-A</title>
        <link rel="icon" href="/favicon.ico"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HomePage images={props.images}/>
      <br/>
    </div>
  )
}
