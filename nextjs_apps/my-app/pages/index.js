import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <title>Home</title>
      <meta name='descripton' content="Home page"/>
      <meta name='author' content='Rıfat'/>
    </Head>
     Home
    </>
  )
}
