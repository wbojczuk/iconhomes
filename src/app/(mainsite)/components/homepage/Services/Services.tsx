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
            <p className={styles.desc}>We're your one-stop destination for all things construction in Newcastle, KZN. Whether it's bringing businesses to life with sleek office complexes and vibrant retail spaces, or building dream homes that reflect your unique style and visions, we've got you covered. Our team of skilled professionals is dedicated to delivering top-notch commercial projects that inspire success and residential spaces that feel like home sweet home. From concept to completion, we're here to turn your vision into reality with a perfect blend of expertise and a personal touch. Let's build something amazing together!</p>

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
