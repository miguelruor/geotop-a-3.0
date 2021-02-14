import Head from 'next/head'
import PreviousTalksPage from '../views/PreviousTalksPage/PreviousTalksPage'

export default function PreviousTalks() {
  return (
    <div>
      <Head>
        <title>GEOTOP-A</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <PreviousTalksPage/>
    </div>
  )
}
