import Head from 'next/head'
import HomePage from '../views/HomePage/HomePage'

export default function Home() {
  return (
    <div>
      <Head>
        <title>GEOTOP-A</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <HomePage/>
    </div>
  )
}
