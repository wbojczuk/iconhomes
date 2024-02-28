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

            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>

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
