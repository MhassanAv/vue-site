import Head from 'next/head'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>Vue</title>
        <meta name="description" content="vue digital solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Hero/>
      </>
  )
}
