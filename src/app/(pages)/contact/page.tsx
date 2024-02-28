import type { Metadata } from "next"
import styles from "./contact.module.css"
import ContactFormAndText from "@/app/(mainsite)/components/contactpage/ContactFormAndText/ContactFormAndText"

export const metadata: Metadata = {
    title: "Contact Page",
    description: ""
}

export default function ContactPage(){
    return(
    <main style={{position: "relative"}}>
        <ContactFormAndText />
        <img src="/img/brick-bg.webp" alt="brick background" className="bg-img" style={{opacity:0.2}} />
    </main>
    )
}