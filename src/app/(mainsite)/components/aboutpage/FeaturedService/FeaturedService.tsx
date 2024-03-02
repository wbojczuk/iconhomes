"use client"
import Link from "next/link"
import styles from "./featuredservice.module.css"
import Image from "next/image"

export default function FeaturedService(props: {imgSrc: string}) {
  return (
    <section className={styles.section}>
        <div className={styles.imgWrapper}>
            <Image className={styles.img} src={props.imgSrc} width={360} height={600} alt="Featured Service Image" />
        </div>
        

        <div className={styles.content}>
            <h4>Who We Are</h4>
            <h2>About Icon Homes Construction</h2>

            <p>At Icon Homes, we're not your average builders. We're your partners in creating spaces that truly reflect who you are and what you need. Whether it's a cozy nest for your family or a sleek new office space, we've got the skills and the smiles to make it happen. So, if you're ready to turn those ideas into bricks and mortar, let's chat!
            </p>
            <Link href="/contact" className="main-link">Get A Quote</Link>
        </div>
    </section>
  )
}
