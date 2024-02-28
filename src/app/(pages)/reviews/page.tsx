import type { Metadata } from "next"
import ReviewHeader from "../../(mainsite)/components/reviewspage/ReviewHeader/ReviewHeader"
import Reviews from "@/app/(mainsite)/components/reviewspage/Reviews/Reviews"

export const metadata: Metadata = {
    title: "Our Reviews",
    description: ""
}

export default function ReviewPage(){
    return(
        <>
            <main style={{position: "relative"}}>
            <ReviewHeader />
            <Reviews />
                <img src="/img/brick-bg.webp" alt="brick background" className="bg-img" style={{opacity:0.2}} />
            </main>
            
        </>
    )
}