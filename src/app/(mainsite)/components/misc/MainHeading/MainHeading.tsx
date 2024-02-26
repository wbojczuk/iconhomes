import styles from "./mainheading.module.css"
export default function MainHeading(props: {title: string, subtitle: string, underline?: boolean}) {
  return (
    <div className={styles.heading}>
        <h4>{props.subtitle}</h4>
        <h2 className={`${(props.underline != undefined && props.underline == true) ? "underline" : "" }`}><span>{props.title}</span></h2>
    </div>
  )
}
