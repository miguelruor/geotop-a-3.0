import Head from 'next/head';
import SearchBySpeakerPage from '../views/Search/BySpeakerPage/BySpeakerPage'

export default function SearchBySpeaker() {
  return (
    <div>
      <Head>
        <title>GEOTOP-A</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchBySpeakerPage/>
    </div>
  )
}
