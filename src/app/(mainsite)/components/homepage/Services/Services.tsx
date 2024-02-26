"use client"

import { servicesModuleType } from "../../../../../../globals"
import styles from "./services.module.css"
import Service from "./Service"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function Services(props: servicesModuleType) {

  const [isOnMobile, setisOnMobile] = useState(false)
  const [isHidden, setIsHidden] = useState(true)

    const serviceElems = props.services.map((service, i)=>{
        return <Service hidden={((i+1) > 3)} {...service} key={i} />
    })

    function showMoreHandler(evt: any){

      evt.currentTarget.classList.add("hidden")

      const hiddenElems = document.querySelectorAll(`.${styles.services} .mobile-hidden`)

      hiddenElems.forEach((elem)=>{
        elem.classList.remove("mobile-hidden")
      })
      setIsHidden(false)
    }

    useEffect(()=>{
      if(typeof window !== "undefined"){
        setisOnMobile(window.matchMedia("(max-width: 649px)").matches)
      }
    }, [])

  return (
    <section className={styles.services}>
            <h4>Our Services</h4>
            <h2>Commercial and Residential Construction Services</h2>
            <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, eum. Quasi natus quas animi saepe, harum deleniti officiis unde perspiciatis quo vel vitae nulla soluta molestias odio quis! Ipsam, ut. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam consequatur ea nihil itaque. Accusamus similique itaque officia vero autem debitis eligendi nemo ut quisquam quo cumque, sequi iusto. Blanditiis, reiciendis!</p>

            <div className={styles.servicesWrapper}>
                {serviceElems}
            </div>
            <div className={`center ${styles.ctaWrapper}`}>
              {(isOnMobile && isHidden) && 
                  <button onClick={showMoreHandler} className="main-link">Show More</button>
              }
              {(!isOnMobile || !isHidden) && 
               <Link className="main-link" href="/contact">Get a Quote!</Link>
              }
            </div>
    </section>
  )
}
