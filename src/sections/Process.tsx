import GlassCard from '../components/GlassCard'
import SectionHeader from '../components/SectionHeader'
import styles from './Process.module.css'

const STEPS = [
  {
    num:   '01',
    title: 'Descubrimiento',
    desc:  'Entiendo tu negocio, objetivos y público objetivo. Una llamada de 30 minutos define el alcance completo.',
  },
  {
    num:   '02',
    title: 'Propuesta',
    desc:  'Recibes presupuesto detallado, timeline y wireframe básico antes de comprometerte con un solo centavo.',
  },
  {
    num:   '03',
    title: 'Diseño & Build',
    desc:  'Construyo de forma iterativa. Ves avances reales en un staging link antes del lanzamiento final.',
  },
  {
    num:   '04',
    title: 'Entrega',
    desc:  'Deploy, configuración de dominio y capacitación incluida. Sales sabiendo manejar tu propia web.',
  },
]

export default function Process() {
  return (
    <div id="process" className={styles.wrapper}>
      <div className={styles.inner}>
        <SectionHeader
          tag="PROCESO"
          title={<>De idea a producto,<br />en pasos claros.</>}
        />

        <div className={styles.steps}>
          {STEPS.map((step) => (
            <GlassCard key={step.num} className={`${styles.step} reveal`}>
              <div className={styles.num}>{step.num}</div>
              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.desc}>{step.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  )
}
