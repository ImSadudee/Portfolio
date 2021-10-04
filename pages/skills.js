import Head from 'next/head'
import styles from '../styles/skills.module.css'
import React, { useState } from 'react'
import Image from 'next/image'

import js from '../public/js.png'
import django from '../public/django.png'
import css from '../public/css.png'
import c from '../public/c.svg'
import reactJs from '../public/reactJs.svg'
import nextJs from '../public/nextJs.svg'
import python from '../public/python.svg'
import scratch from '../public/scratch.png'

// import {MdLock} from 'react-icons/md'

export default function Skills() {
    // const mySkills = ["javascript", "django", "css", "python", "c", "c++", "c#", "java", "php"]
    const [skills, setSkills] = useState("js");


  return (
    <div className={styles.container}>
      <Head>
        <title>Skills</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className={styles.text}>
        <div className={styles.title}>Skills</div>

        <div className={styles.skills_container}>
          <table className={styles.skills}>
            <tr className={styles.js} onClick={()=> setSkills("js")}>
              <td className={styles.name}>Javascript</td>
              <td className={styles.level}>5</td>
            </tr>
            <tr className={styles.django} onClick={()=> setSkills("django")}>
              <td className={styles.name}>Django</td>
              <td className={styles.level}>3</td>
            </tr>
            <tr className={styles.css} onClick={()=> setSkills("css")}>
              <td className={styles.name}>CSS</td>
              <td className={styles.level}>5</td>
            </tr>
            <tr className={styles.css} onClick={()=> setSkills("reactjs")}>
              <td className={styles.name}>ReactJs</td>
              <td className={styles.level}>5</td>
            </tr>
            <tr className={styles.python} onClick={()=> setSkills("nextjs")}>
              <td className={styles.name}>NextJs</td>
              <td className={styles.level}>3</td>
            </tr>
            <tr className={styles.c}>
              <td className={styles.name} onClick={()=> setSkills("c")}>C</td>
              <td className={styles.level}>2</td>
            </tr>
            <tr className={styles.python} onClick={()=> setSkills("python")}>
              <td className={styles.name}>Python</td>
              <td className={styles.level}>3</td>
            </tr>
            <tr className={styles["cpp", "dumb"]}>
              <td className={styles.name}>C++</td>
              <td className={styles.level}>0</td>
            </tr>
            <tr className={styles["csharp", "dumb"]}>
              <td className={styles.name}>C#</td>
              <td className={styles.level}>0</td>
            </tr>
            <tr className={styles["java", "dumb"]}>
              <td className={styles.name}>Java</td>
              <td className={styles.level}>0</td>
            </tr>
            <tr className={styles["php", "dumb"]}>
              <td className={styles.name}>php</td>
              <td className={styles.level}>0</td>
            </tr>
            <tr className={styles.scratch}>
              <td className={styles.name} onClick={()=> setSkills("scratch")}>scratch</td>
              <td className={styles.level}>3</td>
            </tr>
          </table>
        </div>
      </div>

      <div className={styles.contents}>
          {skills === "js" && 
            <div className={styles.description_container}>
              <div className={styles.image}>
                <Image src={js} className={styles.jsImage} objectFit="contain" layout="fill"/>
              </div>
              <div className={styles.description}>
                Javascript is probably the programming language I’m the most familiar with, I’ve used it to make many websites and it’s also the one I’ve been working with at the moment.
              </div>
              <div className={styles.level_bar_full}>
                Level 5/10
              </div>
            </div>}

          {skills === "django" && 
          <div className={styles.description_container}>
            <div className={styles.image}>
              <Image src={django} className={styles.djangoImage} objectFit="contain" layout="fill"/>
            </div>
            <div className={styles.description}>
              I’ve used Django quite a lot in my earlier stages when I was first introduced to web development. Now, I don’t really use it as much, but it definitely holds a special place in my heart being one of the first framework I’ve learnt.
            </div>
            <div className={styles.level_bar_half}>
                Level 3/10
            </div>
          </div>}

          {skills === "css" && 
          <div className={styles.description_container}>
            <div className={styles.image}>
              <Image src={css} className={styles.cssImage} objectFit="contain" layout="fill"/>
            </div>
            <div className={styles.description}>
              CSS is used in practically every web project I’ve ever made so I’ve gotten a bit familiar with it. However, there are still so much more I need to learn about this programming language.
            </div>
            <div className={styles.level_bar_full}>
                Level 5/10
            </div>
          </div>}

          {skills === "reactjs" && 
          <div className={styles.description_container}>
            <div className={styles.image}>
              <Image src={reactJs} className={styles.cssImage} objectFit="contain" layout="fill"/>
            </div>
            <div className={styles.description}>
              React was the language I used a lot at the end of learning my web development course. I still use this language a lot and it is a base for other languages involving javascript that I use now and ones that I’m looking forward to learning.
            </div>
            <div className={styles.level_bar_full}>
                Level 5/10
            </div>
          </div>}

          {skills === "nextjs" && 
          <div className={styles.description_container}>
            <div className={styles.image}>
              <Image src={nextJs} className={styles.cssImage} objectFit="contain" layout="fill"/>
            </div>
            <div className={styles.description}>
              This is the programming language I used to make this website! It’s actually my first time every using it, but to be honest I really like it, and I look forward to using it in upcomming websites that I want to make.
            </div>
            <div className={styles.level_bar_half}>
                Level 3/10
            </div>
          </div>}

          {skills === "python" && 
          <div className={styles.description_container}>
            <div className={styles.image}>
              <Image src={python} className={styles.pythonImage} objectFit="contain" layout="fill"/>
            </div>
            <div className={styles.description}>
              To be honest, I don’t really have much experience with python itself so I’m not very confident with it. I’ve only ever used this in my school works and projects.
            </div>
            <div className={styles.level_bar_half}>
                Level 3/10
            </div>
          </div>}

          {skills === "c" && 
          <div className={styles.description_container}>
            <div className={styles.image}>
              <Image src={c} className={styles.cImage} objectFit="contain" layout="fill"/>
            </div>
            <div className={styles.description}>
              I’ve really been enjoying c at the moment since I’ve been learning CS50’s computer science course. I might actually prefer this style of coding more than python.
            </div>
            <div className={styles.level_bar_half}>
                Level 2/10
            </div>
          </div>}

          {skills === "scratch" && 
          <div className={styles.description_container}>
            <div className={styles.image}>
              <Image src={scratch} className={styles.scratchImage} objectFit="contain" layout="fill"/>
            </div>
            <div className={styles.description}>
              I’m putting this here solely for respect as this is probably the first &quot;programming&quot; language I’ve ever been introduced to as a child.
            </div>
            <div className={styles.level_bar_scratch}>
                Level 69/420
            </div>
          </div>}
        </div>

    </div>
  )
}
