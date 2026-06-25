import GlassCard from "../components/GlassCard"
import SectionHeader from "../components/SectionHeader"
import styles from "./Services.module.css"

interface Service {
  icon: string
  title: string
  desc: string
  price: string
}

const SERVICES: Service[] = [
  {
    icon: "⚡",
    title: "Landing Page",
    desc: "Páginas de aterrizaje optimizadas para conversión. Diseño impactante, carga rápida y mobile-first para maximizar leads desde el primer día.",
    price: "Desde $350",
  },
  {
    icon: "📊",
    title: "Dashboard + Supabase",
    desc: "Paneles administrativos con base de datos en tiempo real. Autenticación, roles y CRUD completo usando el tier gratuito de Supabase.",
    price: "Desde $700",
  },
  {
    icon: "🛒",
    title: "Tienda / E-commerce",
    desc: "Catálogo, carrito, checkout y panel admin. El precio varía según productos, métodos de pago e inventario. Cotización gratis en 24h.",
    price: "Desde $800",
  },
  {
    icon: "🔍",
    title: "SEO Básico",
    desc: "Configuro tu sitio para que Google lo encuentre. Analytics, Search Console, meta tags, sitemap y auditoría de velocidad. Más visibilidad sin pagar publicidad.",
    price: "Desde $150",
  },
  {
    icon: "♻️",
    title: "Mantenimiento Web",
    desc: "Soporte continuo, actualizaciones de seguridad, mejoras de rendimiento y cambios de contenido. Sin sorpresas al final del mes.",
    price: "Desde $80/mes",
  },
  {
    icon: "🎨",
    title: "Rediseño Web",
    desc: "Transformo tu sitio desactualizado en una experiencia moderna que refleja el nivel real de tu negocio y atrae a los clientes correctos.",
    price: "Desde $350",
  },
]

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <SectionHeader
        tag="SERVICIOS"
        title={
          <>
            Lo que puedo construir
            <br />
            para tu negocio.
          </>
        }
        subtitle="Soluciones web desde la primera impresión hasta plataformas funcionales completas."
      />

      <div className={styles.grid}>
        {SERVICES.map((svc) => (
          <GlassCard key={svc.title} className={`${styles.card} reveal`}>
            <div className={styles.topLine} aria-hidden="true" />
            <div className={styles.icon}>{svc.icon}</div>
            <h3 className={styles.title}>{svc.title}</h3>
            <p className={styles.desc}>{svc.desc}</p>
            <span className={styles.price}>{svc.price}</span>
          </GlassCard>
        ))}
      </div>

      <p className={styles.disclaimer}>
        <span>*</span> Proyectos con Supabase pueden aumentar el precio en caso
        de requerir el tier Pro
        <br />
        <span>*</span> Los precios son referenciales y pueden variar según la
        complejidad del proyecto.
      </p>
    </section>
  )
}
