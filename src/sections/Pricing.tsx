import GlassCard from '../components/GlassCard'
import SectionHeader from '../components/SectionHeader'
import styles from './Pricing.module.css'

interface Plan {
  name:     string
  price:    string
  suffix?:  string
  desc:     string
  features: string[]
  featured: boolean
  cta:      string
  ctaStyle: 'outline' | 'solid'
}

const PLANS: Plan[] = [
  {
    name:  'STARTER',
    price: '$350',
    desc:  'Para negocios que necesitan presencia digital profesional rápida.',
    features: [
      'Landing page hasta 5 secciones',
      'Diseño 100% personalizado',
      'Mobile responsive',
      'Formulario de contacto',
      'Deploy + configuración de dominio',
      '1 ronda de revisiones',
    ],
    featured: false,
    cta:      'Empezar →',
    ctaStyle: 'outline',
  },
  {
    name:   'GROWTH',
    price:  '$700',
    desc:   'Ideal para negocios que necesitan funcionalidad real y datos propios.',
    features: [
      'Todo lo del Starter',
      'Dashboard completo con Supabase',
      'Autenticación de usuarios',
      'Panel de administración',
      '3 rondas de revisiones',
      'Soporte por 60 días',
    ],
    featured: true,
    cta:      'Empezar →',
    ctaStyle: 'solid',
  },
  {
    name:   'E-COMMERCE',
    price:  'Desde $700',
    desc:   'Precio según alcance. Cotización gratis en 24h — el costo real depende de productos, pagos e inventario.',
    features: [
      'Catálogo de productos',
      'Carrito + checkout completo',
      'Stripe o SINPE integrado',
      'Panel admin para productos',
      'Gestión de órdenes y estados',
      'Notificaciones al cliente',
    ],
    featured: false,
    cta:      'Cotizar gratis →',
    ctaStyle: 'outline',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className={styles.section}>
      <SectionHeader
        tag="PLANES"
        title={<>Inversión transparente.<br />Sin letras pequeñas.</>}
        subtitle="Precios en USD. Todos incluyen código fuente, deploy y garantía de 30 días."
      />

      <div className={styles.grid}>
        {PLANS.map((plan) => (
          <GlassCard
            key={plan.name}
            featured={plan.featured}
            className={`${styles.card} reveal`}
          >
            {plan.featured && (
              <div className={styles.badge}>⭐ MÁS POPULAR</div>
            )}

            <div className={styles.name}>{plan.name}</div>

            <div className={styles.price}>
              {plan.price}
              {plan.suffix && <span className={styles.priceSuffix}>{plan.suffix}</span>}
            </div>

            <p className={styles.desc}>{plan.desc}</p>

            <ul className={styles.features}>
              {plan.features.map((f) => (
                <li key={f}>
                  <span className={styles.check}>✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#cta"
              className={`${styles.planBtn} ${plan.ctaStyle === 'solid' ? styles.solid : styles.outline}`}
            >
              {plan.cta}
            </a>
          </GlassCard>
        ))}
      </div>
    </section>
  )
}
