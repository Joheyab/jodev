import emailjs from "@emailjs/browser"
import { FormEvent, useState } from "react"
import styles from "./CtaFinal.module.css"

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const EMAIL = "contactojodev@gmail.com"

export default function CtaFinal() {
  const INSTAGRAM = "https://www.instagram.com/jjd.ev/?hl=es"
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [name, setName] = useState("")
  const [senderEmail, setSenderEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle")

  const fallbackMailto = () => {
    const subject = encodeURIComponent("Nuevo proyecto desde portfolio")
    const body = encodeURIComponent(
      `Nombre: ${name}\nEmail: ${senderEmail}\n\nProyecto:\n${message}`,
    )

    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      fallbackMailto()
      return
    }

    setStatus("sending")

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: name,
          from_email: senderEmail,
          message,
          reply_to: senderEmail,
        },
        PUBLIC_KEY,
      )

      setStatus("success")
      setName("")
      setSenderEmail("")
      setMessage("")
    } catch (error) {
      console.error("EmailJS error:", error)
      setStatus("error")
    }
  }

  return (
    <section id="cta" className={styles.section}>
      <div className={`${styles.box} reveal`}>
        <div className={styles.redGlow} aria-hidden="true" />

        <div className={styles.eyebrow}>
          <span className={styles.dot} />
          LISTO PARA ARRANCAR
        </div>

        <h2 className={styles.title}>
          Tu proyecto merece
          <br />
          <span className={styles.accent}>más que un template.</span>
        </h2>

        <p className={styles.sub}>
          Cuéntame en qué estás trabajando. En menos de 24 horas tienes una
          propuesta real con presupuesto incluido.
        </p>

        <div className={styles.actions}>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noreferrer"
            className={styles.btnSecondary}
          >
            Instagram
          </a>
          <button
            type="button"
            className={styles.btnPrimary}
            onClick={() => setIsFormOpen((current) => !current)}
          >
            {isFormOpen ? "Cerrar formulario" : "Enviar email →"}
          </button>
        </div>

        {isFormOpen && (
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <label className={styles.field}>
              Nombre
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Tu nombre"
                required
              />
            </label>

            <label className={styles.field}>
              Correo electrónico
              <input
                type="email"
                value={senderEmail}
                onChange={(event) => setSenderEmail(event.target.value)}
                placeholder="tunombre@ejemplo.com"
                required
              />
            </label>

            <label className={styles.field}>
              Cuéntame del proyecto
              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Describe tu idea o necesidad"
                rows={5}
                required
              />
            </label>

            <button
              type="submit"
              className={styles.btnPrimary}
              disabled={status === "sending"}
            >
              {status === "sending" ? "Enviando..." : "Enviar mensaje →"}
            </button>

            {status === "success" && (
              <p className={styles.statusMessage} aria-live="polite">
                Mensaje enviado correctamente. Te contacto en breve.
              </p>
            )}
            {status === "error" && (
              <p className={styles.statusMessageError} aria-live="polite">
                Ocurrió un error al enviar. Intenta de nuevo o escríbeme
                directo.
              </p>
            )}
          </form>
        )}

        <p className={styles.hint}>
          Sin compromiso · Sin spam · Solo una conversación.
        </p>
      </div>
    </section>
  )
}
