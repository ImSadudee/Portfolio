import Head from 'next/head'
import styles from '../styles/about.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className={styles.text}>

        <div className={styles.title}>About Me</div>

        <div className={styles.me}>
          <div className={styles.subtitle}>Hi, I&apos;m Im</div>
          <div className={styles.description}>
          My full name is Sadudee Theparree, I&apos;m 17 years old and I am currently studying at the English Program 
          of Suankularb Wittayalai School in Mathayom 5. <br />
          I&apos;m a big fan of puzzles and videogames and I didn&apos;t 
          know I wanted to learn programming and do a lot more of it until about 2 years ago. <p />
          This website represents a progress bar of my journey in the development world, and it&apos;ll be constantly updated to show the skills 
          and achievements I&apos;ve learnt and gathered moving forward  over time.
          </div>
        </div>

        <div className={styles.programming}>
          <div className={styles["subtitle", "subtitle2"]}>Programming</div>
          <div className={styles.description}>
          It&apos;s not been long since I first picked up programming, which was only a bit more than about 1 and a half years ago.
          Sure, there has been some programming that is required to be learnt by students in the curriculum, but in all honesty, they don&apos;t really teach you much. <p />
          However, since around the end of last year, me and some of my friends have been taking programming courses non stop. As of the time of writing this, I&apos;ve finished Harvard&apos;s CS50w web development course and am now currently taking their CS50x course which is about computer science. Me and my friend specifically chose this course since our interest in A.I. and Machine Learning have peaked recently.
          </div>
        </div>

      </div>

    </div>
  )
}
