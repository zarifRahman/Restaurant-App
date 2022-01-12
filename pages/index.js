import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pizza Restaurant</title>
        <meta name="description" content="restaurant" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      Homepage
      <Footer/>
    </div>
  )
}
