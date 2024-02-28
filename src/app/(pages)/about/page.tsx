import type { Metadata } from "next"
import styles from "./about.module.css"
import FeaturedService from "@/app/(mainsite)/components/aboutpage/FeaturedService/FeaturedService"
import InlineReviews from "@/app/(mainsite)/components/aboutpage/InlineReviews/InlineReviews"
import StatsRibbon from "@/app/(mainsite)/components/homepage/StatsRibbon/StatsRibbon"

export const metadata: Metadata = {
    title: "About Page",
    description: ""
}

export default function AboutPage(){
    return(
        <>
            <FeaturedService imgSrc="/img/header-bg.webp" />
            <StatsRibbon />
            <InlineReviews />
        </>
    )
}