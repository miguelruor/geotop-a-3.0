import Head from 'next/head'
import NextTalksPage from '../views/NextTalksPage/NextTalksPage'

export default function NextTalks() {
  return (
    <div>
      <Head>
        <title>GEOTOP-A</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <NextTalksPage/>
    </div>
  )
}
