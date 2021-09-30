import Head from 'next/head'
import React from 'react'
import styles from '../styles/contacts.module.css'
import {BsPhone} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import line from '../public/line.png'
import Image from 'next/image'


export default function Contacts() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contacts</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className={styles.contents}>
        <div className={styles.title}>Contacts Page</div>

        <div className={styles.card}>

          <div className={styles.left_side}>
            <div className={styles.forms_container}>
              <form action="#" className={styles.forms}>
                <div className={styles.blocks}>
                  <span className={styles.name}>Full Name</span><br/>
                  <input type="text" name="full_name" className={styles.form}></input>
                </div>
                <div className={styles.blocks}>
                  <span className={styles.name}>E-Mail</span><br/>
                  <input type="text" name="email" className={styles.form}></input>
                </div>
                <div className={styles.blocks}>
                  <span className={styles.name}>Message</span><br/>
                  <textarea className={styles.message}></textarea>
                </div>
                <div className={styles.blocks}>
                  <button className={styles.button}>Send</button>
                </div>
              </form>
            </div>
          </div>

          <div className={styles.right_side}>
            <div className={styles.ty}>
              Thank You!
            </div>
            <div className={styles.icons}>
              <div className={styles.icon1}>
                <BsPhone/><br/>
                <div className={styles.text}>Tel. 0957962223</div>
              </div>
              <div className={styles.icon2}>
                <div className={styles.line_container}>
                  <Image className={styles.line} src={line}/>
                </div>
                <div className={styles.text}>ID. imsadudee</div>
              </div>
              <div className={styles.icon3}>
                <AiFillGithub/><br/>
                <div className={styles.text}>IHasDiabetes</div>
              </div>
            </div>
            <div className={styles.footer}>
                <div className={styles.contact}>
                  <div className={styles.footer_title}>Contact</div>
                  <div className={styles.footer_description}>Sadudee.the@student.sk.ac.th</div>
                </div>
                <div className={styles.base}>
                  <div className={styles.footer_title}>Based In</div>
                  <div className={styles.footer_description}>Bangkok, Thailand</div>
                </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
