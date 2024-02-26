"use client"
import styles from "./bottomcta.module.css"
import Link from "next/link"

export default function BottomCTA() {
  return (
    <section className={styles.bottomCTA}>

        <h1><span className="underline">Get It Done</span> With Us Today!</h1>

        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem </p>

        <div className="center">
            <Link style={{backgroundColor: "var(--primary-color)", color: "var(--primary-text-color"}} className="main-link" href="/contact">Get a Quote</Link>
        </div>

        <img src="/img/header-bg.png" alt="image of man working" className="bg-img" />
        <div className="shader"></div>
    </section>
  )
}
