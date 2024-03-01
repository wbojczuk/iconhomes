"use client"
import { CSSProperties } from "react"
import styles from "./aboutus.module.css"
import Link from "next/link"

export default function AboutUs() {
  //@ts-check
  const cssProps = {"--width": "90%"} as CSSProperties
  return (
    <section className={styles.aboutUs}>
        <div className={styles.textWrapper}>
            <h1>About Icon Homes <span style={cssProps} className="underline">Construction</span></h1>

            <p>At Icon Homes, we're not your average builders. We're your partners in creating spaces that truly reflect who you are and what you need. Whether it's a cozy nest for your family or a sleek new office space, we've got the skills and the smiles to make it happen. So, if you're ready to turn those ideas into bricks and mortar, let's chat!</p>

            <Link style={{backgroundColor: "var(--primary-color-3)"}} className="main-link" href="/contact">Get a Quote</Link>
        </div>


        <div className={styles.imgWrapper}>
          <div className={styles.imgContainer}>
            <img src="/img/aboutus-main.webp" alt="image of crane" className={styles.mainImg} />
            <div className={styles.imgStyle}></div>
          </div>
        </div>
        <img src="/img/aboutus-bg.webp" alt="icon homes logo" className={styles.bgImg} />
    </section>
  )
}
