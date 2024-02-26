import styles from "./contact.module.css"
import FreeEstimateForm from "../FreeEstimateForm/FreeEstimateForm"

export default function ContactFormAndText() {
  return (
    <section className={styles.contact}>
        <div className={styles.text}>
            <h1>Talk To Us About Your <span>Construction Needs</span></h1>
            <p>We strive to be in constant communication with our customers until the job is done. To get a free quote, or if you have questions or special requests, dont hesitate to reach out. We look forward to serving you!</p>
            <div className={styles.divider}></div>
            <h4>Any problem about your booking?<br />You can contact us at :</h4>
            <div>
            <a className={styles.backupContact} href="mailto:example@example.com">- example@example.com</a>
            </div>
            <div>
            <a className={styles.backupContact} href="tel:0000000000">- (000) 000-0000</a>
            </div>
        </div>
        <div className={styles.form}>
            <FreeEstimateForm />
        </div>
        <img src="/img/header-bg.png" alt="image of man working" className="bg-img" />
        <div className="shader"></div>
    </section>
  )
}
