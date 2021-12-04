import Head from 'next/head'
import { Header } from '../components/Header/Header'
import { MainCarrossel } from '../components/MainCarrossel/MainCarrossel'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | MeetAr</title>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <Header />
      <MainCarrossel />
    </>
  )
}
