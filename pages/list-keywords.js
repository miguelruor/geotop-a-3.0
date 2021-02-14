import Head from 'next/head'
import SearchByKeywordPage from '../views/Search/ByKeywordPage/ByKeywordPage'

export default function SearchByKeyword() {
  return (
    <div>
      <Head>
        <title>GEOTOP-A</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <SearchByKeywordPage/>
    </div>
  )
}
