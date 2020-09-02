import Head from 'next/head'
import styles from '../styles/index.module.css'

export default function Home() {
  return (
    <body className={styles.container}>
      <Head>
        <title>Amiel Monasterial</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>
      <div className={styles.content}>
        <span className={styles.title}>
          Hi, my name's Amiel!
        </span>
        <p className={styles.body}>
          I'm a fourth year computer science major at Northeastern University. I love building applications that put user experience first and heavily believe in using software for  
          <a href="https://blmtimeline.com/" target="_blank"> social good</a>.
         </p>
        <p className={styles.body}>
          In my free time, I work with <a href="https://www.sandboxnu.com/" target="_blank"> Sandbox Northeastern</a> to develop impactful <a href="https://searchneu.com/" target="_blank"> community-centric projects</a> . 
          I also play lead guitar in a six piece shoegaze outfit (<a href="https://www.instagram.com/emailanxietyband/" target="_blank">new music coming soon</a>). 
        </p>
        <p className={styles.body}>
          If you want to chat, feel free to shoot me an  <a href="mailto:monasterial.a@northeastern.edu"> email</a>. My resume can be found <a href="/resume.pdf" target="_blank"> here</a>.
        </p>
      </div>
    </body>
  )
}
