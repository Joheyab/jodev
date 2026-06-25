import styles from "./Metrics.module.css"

const METRICS = [
  { num: "2", suffix: "+", label: "PROYECTOS ENTREGADOS" },
  { num: "48", suffix: "h", label: "TIEMPO DE RESPUESTA" },
  { num: "100", suffix: "%", label: "CÓDIGO PROPIO" },
  { num: "100", suffix: "%", label: "PROYECTOS ENTREGADOS A TIEMPO" },
]

export default function Metrics() {
  return (
    <div className={styles.strip}>
      {METRICS.map((m) => (
        <div key={m.label} className={`${styles.metric} reveal`}>
          <div className={styles.num}>
            {m.num}
            <span className={styles.suffix}>{m.suffix}</span>
          </div>
          <div className={styles.label}>{m.label}</div>
        </div>
      ))}
    </div>
  )
}
