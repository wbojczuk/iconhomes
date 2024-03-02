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
    "Amajuba Park, KZN",
    "Amiel Park, KZN",
    "Arbor Park, KZN",
    "Aviary Hill, KZN",
    "Barry Hertzog Park, KZN",
    "Hutten Heights, KZN",
    "Ncandu Park, KZN",
    "Newcastle Central, KZN",
    "Pioneer Park, KZN",
    "Schuinshoogte, KZN",
    "Signal Hill, KZN",
    "Sunnyridge, KZN"
]

  const services: serviceType[] = [
    {
      icon: toolIcon,
      title: "Roofing",
      description: "Whether it's patching up a pesky leak or giving your home a complete roofing makeover, our team is here to ensure you stay dry and cozy through any weather.",
      backgroundImageUrl: "/img/placeholder-vertical.webp"
    },
    {
      icon: toolIcon,
      title: "Waterproofing",
      description: "Whether it's sealing up cracks or applying weather-resistant coatings, we've got the expertise to ensure your home or business stays leak-free, rain or shine.",
      backgroundImageUrl: "/img/placeholder-vertical.webp"
    },
    {
      icon: toolIcon,
      title: "Renovations",
      description: "From updating your kitchen, revamping your bathroom, to transforming your entire home, our team of experts is here to turn your vision into reality, one hammer swing at a time. ",
      backgroundImageUrl: "/img/placeholder-vertical.webp"
    },
    {
      icon: toolIcon,
      title: "Extensions",
      description: "If you're dreaming of a sunlit kitchen extension or a cozy extra bedroom, we'll work closely with you to design and build the perfect addition to your home.",
      backgroundImageUrl: "/img/placeholder-vertical.webp"
    },
    {
      icon: toolIcon,
      title: "Concrete Works",
      description: "From sturdy foundations to decorative finishes, we're here to bring durability and style to your projects. Let's turn your visions into concrete reality!",
      backgroundImageUrl: "/img/placeholder-vertical.webp"
    },
    {
      icon: toolIcon,
      title: "Paving",
      description: "Driveways to pathways, our skilled team will lay down the perfect foundation to enhance your property's curb appeal and functionality.",
      backgroundImageUrl: "/img/placeholder-vertical.webp"
    },
    {
      icon: toolIcon,
      title: "Steelworks",
      description: "From custom metal fabrication to structural steel installations, we're here to provide durable solutions for your construction needs.",
      backgroundImageUrl: "/img/placeholder-vertical.webp"
    },
    {
      icon: toolIcon,
      title: "Underpinning",
      description: "Using advanced techniques and top-notch materials, we'll ensure your property stands tall and secure for years to come.",
      backgroundImageUrl: "/img/placeholder-vertical.webp"
    },
    {
      icon: toolIcon,
      title: "Plumbing",
      description: "Our expert plumbing service is here to keep your pipes flowing smoothly and your fixtures in top shape.",
      backgroundImageUrl: "/img/placeholder-vertical.webp"
    },
    {
      icon: toolIcon,
      title: "Gate and Garage Motors",
      description: "With Icon Homes' Gate and Garage Motors service, our expert installation ensures smooth operation at the touch of a button, adding security and ease to your daily routine.",
      backgroundImageUrl: "/img/placeholder-vertical.webp"
    },
    {
      icon: toolIcon,
      title: "Pump Systems",
      description: "From water pumps for irrigation to sewage pumps for waste management, we provide top-notch solutions tailored to your needs.",
      backgroundImageUrl: "/img/placeholder-vertical.webp"
    },
    {
      icon: toolIcon,
      title: "ECO Solutions",
      description: "From energy-efficient designs to eco-friendly materials, we're committed to creating spaces that are not only beautiful but also kind to the planet.",
      backgroundImageUrl: "/img/placeholder-vertical.webp"
    },
    {
      icon: toolIcon,
      title: "Thermal Insulation",
      description: "We specialize in keeping your home warm in the winter and cool in the summer by installing top-notch insulation materials.",
      backgroundImageUrl: "/img/placeholder-vertical.webp"
    },
    {
      icon: toolIcon,
      title: "Pool Renovations",
      description: "Whether your pool needs a facelift, repairs, or a complete makeover, our expert team will breathe new life into your swimming space.",
      backgroundImageUrl: "/img/placeholder-vertical.webp"
    },
    {
      icon: toolIcon,
      title: "Backup Water Tanks",
      description: "We'll install reliable tanks on your property, ensuring you always have a backup water supply for your household or business needs.",
      backgroundImageUrl: "/img/placeholder-vertical.webp"
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
      <ServiceArea areaData={areaData} mapURL="https://www.google.com/maps/d/u/0/embed?mid=1hQFAr9T7L44WZHm1KIXSUzsE32NgQSQ&ehbc=2E312F&noprof=1" />
      <PastWork />
      <BottomCTA />
    </>
  )
}
