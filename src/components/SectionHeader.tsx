import styles from './SectionHeader.module.css'

interface SectionHeaderProps {
  tag: string
  title: string | JSX.Element
  subtitle?: string
}

export default function SectionHeader({ tag, title, subtitle }: SectionHeaderProps) {
  return (
    <div className={styles.wrapper}>
      <span className={styles.tag}>{tag}</span>
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.sub}>{subtitle}</p>}
    </div>
  )
}
