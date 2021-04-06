import '../styles/globals.css'
import {AnimateSharedLayout} from "framer-motion"
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="author" content="Deep Shah" />
        <meta name="description" content="This is My Portfolio website where my all projects are uploaded" />
        <meta name="keywords" content="Deep Shah,Portfolio,Nextjs" />
      </Head>
      <AnimateSharedLayout>
      <Component {...pageProps} />
    </AnimateSharedLayout>
    </>
  )
}

export default MyApp
