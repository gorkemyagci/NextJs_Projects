import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>NextJs</title>
        <meta name='keywords' content='NextJs'/>
      </Head>
    </>
  )
}
