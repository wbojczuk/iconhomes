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

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem suscipit, nam aliquid vero tenetur doloribus quas distinctio maxime doloremque et. Consequatur, odio velit ipsam quod placeat accusamus mollitia optio laudantium?
            <br /><br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, nihil. Sit, animi similique voluptatibus corporis saepe aliquam accusantium autem sunt quasi ut pariatur, eum dolorum soluta ad obcaecati, asperiores et.
            </p>
            <Link href="/contact" className="main-link">Get A Quote</Link>
        </div>
    </section>
  )
}
