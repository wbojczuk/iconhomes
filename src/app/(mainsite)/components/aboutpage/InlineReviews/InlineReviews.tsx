"use client"
import styles from "./inlinereviews.module.css"
import MainHeading from "../../misc/MainHeading/MainHeading"
import Review from "../../reviewspage/Reviews/Review"
import { reviewType } from "../../../../../../globals"
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from "swiper/modules"
import Link from "next/link"
import reviewData from "@/app/(mainsite)/data/reviewData"

export default function InlineReviews() {
    
    const reviewElems = reviewData.map((data, i)=>{
        return <SwiperSlide className={styles.reviewSlider} key={i}><Review className={styles.review} {...data}  /></SwiperSlide>
    })
   
  return (
    <section className={styles.inlineReviews}>


        <MainHeading subtitle="Our Reviews" title="What People Say" />
        <div className={styles.reviewsWrapper}>
           
           <Swiper
            slidesPerView={"auto"}
            spaceBetween={40}
            centeredSlides
            initialSlide={2}
            loop
            autoplay={{delay: 5000}}
            modules={[Autoplay]}
           >
            {reviewElems}
           </Swiper>
        </div>
        <div className={`center ${styles.cta}`}>
            <Link className="main-link" href={"/reviews"}>View More</Link>
        </div>
        <img style={{opacity: 0.3}} src="/img/brick-bg.webp" aria-hidden className="bg-img" />
    </section>
  )
}
