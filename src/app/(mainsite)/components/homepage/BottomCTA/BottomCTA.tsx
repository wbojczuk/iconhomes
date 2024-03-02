"use client"
import styles from "./bottomcta.module.css"
import Link from "next/link"

export default function BottomCTA() {
  return (
    <section className={styles.bottomCTA}>

        <h1><span className="underline">Get It Done</span> With Us Today!</h1>

        <p>Contact Icon Homes today and let's make it happen! Whether you're looking to upgrade your living space, enhance your business premises, or secure your property with top-notch roofing and construction services, we're here to turn your vision into reality.</p>

        <div className="center">
            <Link style={{backgroundColor: "var(--primary-color)", color: "var(--primary-text-color"}} className="main-link" href="/contact">Get a Quote</Link>
        </div>

        <img src="/img/header-bg.webp" alt="image of man working" className="bg-img" />
        <div className="shader"></div>
    </section>
  )
}
