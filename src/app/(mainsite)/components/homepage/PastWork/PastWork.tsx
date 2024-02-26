"use client"
import styles from "./pastwork.module.css"
import MainHeading from "../../misc/MainHeading/MainHeading"
import { Swiper, SwiperSlide } from "swiper/react"
import galleryImgs from "@/app/(mainsite)/data/galleryimgs"
import 'swiper/css/effect-coverflow';
import { EffectCoverflow } from 'swiper/modules';
import { useRef } from "react"

export default function PastWork() {

  const swiperRef: any = useRef()

  const slideElems = galleryImgs.map((imgSrc, i)=>{
    return(
      <SwiperSlide key={i} className="center">
        <img src={imgSrc} alt="Portfolio Image" className={styles.img} />
      </SwiperSlide>
    )
  })


  return (
    <div className={styles.pastWork}>
        <MainHeading title="Past Work" subtitle="Portfolio" underline={true} />
        <div className={styles.carouselWrapper}>
          <Swiper
          loopAdditionalSlides={1}
          ref={swiperRef}
          modules={[EffectCoverflow]}
          effect={'coverflow'}
          slidesPerView={3}
          breakpoints={{
            0: {
              slidesPerView: "auto"
            },
            649: {
              slidesPerView: 2,
            },
            990: {
              slidesPerView: 3,
            }
           }}
          centeredSlides
          loop
          initialSlide={1}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          >
            {slideElems}
          </Swiper>
        </div>
        <div className={`center ${styles.buttonWrapper}`}>
          <div onClick={()=>{swiperRef.current.swiper.slidePrev()}} className={styles.button}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m12 19l-7-7l7-7m7 7H5"></path></svg>
          </div>
          
          <div onClick={()=>{swiperRef.current.swiper.slideNext()}} className={styles.button}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7l-7 7"></path></svg>
          </div>
        </div>
        
    </div>
  )
}
