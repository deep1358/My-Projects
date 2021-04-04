import Head from 'next/head'
import Contact from '../Comp/Contact'
import Header from '../Comp/Header'
import Projects from '../Comp/Projects'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
   <>
   <Head>
     <link rel="shortcut icon" href="favicon1.png" />
     <title>MyProjects</title>
   </Head>
    <Header/>
    <Projects/>
   </>
  )
}
