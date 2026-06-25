import SectionHeader from "../components/SectionHeader"
import styles from "./Stack.module.css"

const TECHNOLOGIES = [
  "React / Next.js",
  "Supabase",
  "Tailwind CSS",
  "TypeScript",
  "Vercel",
  "PostgreSQL",
  "Node.js",
  "Stripe / SINPE",
  "Figma",
  "GitHub",
  "WhatsApp API",
  "Row Level Security",
  "SEO",
  "Mobile First",
]

export default function Stack() {
  return (
    <section id="stack" className={styles.section}>
      <SectionHeader
        tag="TECNOLOGÍAS"
        title={
          <>
            Stack moderno,
            <br />
            costos controlados.
          </>
        }
        subtitle="Herramientas profesionales que escalan sin explotar tu presupuesto. El tier gratuito de Supabase cubre la mayoría de proyectos de inicio."
      />

      <div className={styles.chips}>
        {TECHNOLOGIES.map((tech) => (
          <div key={tech} className={`${styles.chip} reveal`}>
            <span className={styles.dot} />
            {tech}
          </div>
        ))}
      </div>

      <div className={`${styles.note} reveal`}>
        <span className={styles.noteLabel}>SUPABASE FREE TIER INCLUYE:</span>
        <span className={styles.noteItems}>
          500 MB DB · 1 GB Storage · 50k MAU Auth · Edge Functions · Realtime ·
          2GB Bandwidth
        </span>
      </div>
      <div className={`${styles.note} ${styles.notePro} reveal`}>
        <span className={styles.noteLabel}>SUPABASE PRO — $25/MES:</span>
        <span className={styles.noteItems}>
          100k MAU · 8 GB DB · 100 GB Storage · 250 GB Bandwidth · Backups
          diarios 7 días · Soporte por email · Log Drains
        </span>
      </div>
    </section>
  )
}
