import { useState } from "react"
import styles from "./Projects.module.css"

const PROJECTS = [
  {
    name: "Culture Studios",
    tag: "E-commerce + Dashboard",
    desc: "Tienda de ropa urbana con catálogo de productos, control de inventario y sistema de compra directo por WhatsApp. Panel administrativo para gestión de stock en tiempo real.",
    url: "https://www.culture-studios.com",
    initials: "CS",
    testimonial: {
      author: "Leonardo",
      role: "Fundador, Culture Studios",
      text: "Johey entendió exactamente lo que necesitaba. El dashboard me ahorra horas cada semana y mis clientes pueden ver el catálogo y contactarme directo. Muy profesional y entregó antes de lo prometido.",
    },
  },
  {
    name: "Inbox Logistics",
    tag: "Landing Page + Tracker",
    desc: "Página institucional para empresa casillero con sistema de tracking integrado. Los clientes ingresan su número de pedido y obtienen el estado de su paquete en tiempo real.",
    url: "https://www.inboxlogisticscr.com",
    initials: "IL",
    testimonial: {
      author: "Equipo Inbox",
      role: "Inbox Logistics CR",
      text: "Necesitábamos algo rápido, limpio y que funcionara bien en móvil. Johey lo logró. El tracker redujo las consultas por WhatsApp a la mitad y la página refleja exactamente la imagen que queríamos.",
    },
  },
]

export default function Projects() {
  const [active, setActive] = useState(0)
  const project = PROJECTS[active]

  return (
    <section id="projects" className={styles.section}>
      {/* Header */}
      <div className={styles.header}>
        <span className={styles.tag}>PROYECTOS & TESTIMONIOS</span>
        <h2 className={styles.title}>
          Trabajo real,
          <br />
          <span className={styles.accent}>resultados reales.</span>
        </h2>
        <p className={styles.sub}>
          Cada proyecto es una solución construida desde cero para un negocio
          real.
        </p>
      </div>

      {/* Tabs */}
      <div className={styles.tabs}>
        {PROJECTS.map((p, i) => (
          <button
            key={p.name}
            className={`${styles.tab} ${active === i ? styles.tabActive : ""}`}
            onClick={() => setActive(i)}
          >
            <span className={styles.tabInitials}>{p.initials}</span>
            <span className={styles.tabName}>{p.name}</span>
          </button>
        ))}
      </div>

      {/* Card principal */}
      <div className={styles.card} key={active}>
        {/* Info del proyecto */}
        <div className={styles.projectInfo}>
          <div className={styles.projectHeader}>
            <div className={styles.avatar}>{project.initials}</div>
            <div>
              <div className={styles.projectName}>{project.name}</div>
              <div className={styles.projectTag}>{project.tag}</div>
            </div>
          </div>
          <p className={styles.projectDesc}>{project.desc}</p>
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className={styles.visitBtn}
          >
            <span>Ver proyecto</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 7h10M7 2l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Testimonio */}
        <div className={styles.testimonial}>
          <div className={styles.quoteIcon}>"</div>
          <p className={styles.quoteText}>{project.testimonial.text}</p>
          <div className={styles.quoteAuthor}>
            <div className={styles.authorAvatar}>
              {project.testimonial.author[0]}
            </div>
            <div>
              <div className={styles.authorName}>
                {project.testimonial.author}
              </div>
              <div className={styles.authorRole}>
                {project.testimonial.role}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dots navegación */}
      <div className={styles.dots}>
        {PROJECTS.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${active === i ? styles.dotActive : ""}`}
            onClick={() => setActive(i)}
            aria-label={`Proyecto ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
