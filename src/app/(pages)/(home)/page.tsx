import Header from "@/app/(mainsite)/components/homepage/Header/Header"
import HorizontalFreeQuoteForm from "@/app/(mainsite)/components/homepage/HorizontalFreeQuoteForm/HorizontalFreeQuoteForm"
import InlineReviews from "@/app/(mainsite)/components/homepage/InlineReviews/InlineReviews"
import StatsRibbon from "@/app/(mainsite)/components/homepage/StatsRibbon/StatsRibbon"
import AboutUs from "@/app/(mainsite)/components/homepage/AboutUs/AboutUs"
import InfiniteRibbon from "@/app/(mainsite)/components/homepage/InfiniteRibbon/InfiniteRibbon"
import Services from "@/app/(mainsite)/components/homepage/Services/Services"
import { serviceType } from "../../../../globals"
import ServiceArea from "@/app/(mainsite)/components/homepage/ServiceArea/ServiceArea"
import PastWork from "@/app/(mainsite)/components/homepage/PastWork/PastWork"
import BottomCTA from "@/app/(mainsite)/components/homepage/BottomCTA/BottomCTA"

export default function Home() {

  const toolIcon = <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="m21.71 20.29l-1.42 1.42a1 1 0 0 1-1.41 0L7 9.85A3.81 3.81 0 0 1 6 10a4 4 0 0 1-3.78-5.3l2.54 2.54l.53-.53l1.42-1.42l.53-.53L4.7 2.22A4 4 0 0 1 10 6a3.81 3.81 0 0 1-.15 1l11.86 11.88a1 1 0 0 1 0 1.41M2.29 18.88a1 1 0 0 0 0 1.41l1.42 1.42a1 1 0 0 0 1.41 0l5.47-5.46l-2.83-2.83M20 2l-4 2v2l-2.17 2.17l2 2L18 8h2l2-4Z"></path></svg>;


  const areaData: string[] = [
    "Acworth, GA", "Adairsville, GA", "Atlanta, GA", "Calhoun, GA", "Cartersville, GA", "Cedartown, GA", "Dallas, GA", "Dalton, GA", "Douglasville, GA", "Euharlee, GA", "Fairmount, GA", "Hiram, GA", "Kennesaw, GA", "Marietta, GA", "Resaca, GA", "Rockmart, GA", "Rome, GA", "Roswell, GA", "Sandy Springs, GA", "Summerville, GA", "Taylorsville, GA", "White, GA", "Woodstock, GA"
]

  const services: serviceType[] = [
    {
      icon: toolIcon,
      title: "Example Service",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,",
      backgroundImageUrl: "/img/placeholder-vertical.png"
    },
    {
      icon: toolIcon,
      title: "Example Service",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,",
      backgroundImageUrl: "/img/placeholder-vertical.png"
    },
    {
      icon: toolIcon,
      title: "Example Service",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,",
      backgroundImageUrl: "/img/placeholder-vertical.png"
    },
    {
      icon: toolIcon,
      title: "Example Service",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,",
      backgroundImageUrl: "/img/placeholder-vertical.png"
    },
    {
      icon: toolIcon,
      title: "Example Service",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,",
      backgroundImageUrl: "/img/placeholder-vertical.png"
    },
    {
      icon: toolIcon,
      title: "Example Service",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,",
      backgroundImageUrl: "/img/placeholder-vertical.png"
    },
    {
      icon: toolIcon,
      title: "Example Service",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,",
      backgroundImageUrl: "/img/placeholder-vertical.png"
    },
    {
      icon: toolIcon,
      title: "Example Service",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,",
      backgroundImageUrl: "/img/placeholder-vertical.png"
    },
  ]

  return (
    <>
      <Header />
      <InlineReviews />
      <StatsRibbon />
      <AboutUs />
      <InfiniteRibbon />
      <Services services={services}/>
      <ServiceArea areaData={areaData} mapURL="https://www.google.com/maps/d/u/0/embed?mid=1bCgL0sSznR3U5MsP3am2gxbN_te7m74&ehbc=2E312F&noprof=1" />
      <PastWork />
      <BottomCTA />
    </>
  )
}
