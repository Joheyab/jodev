import emailjs from "@emailjs/browser"
import { FormEvent, useState } from "react"
import ServiceDropdown from "../components/ServiceDropdown"
import styles from "./CtaFinal.module.css"

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string

type Status = "idle" | "sending" | "success" | "error"

export default function CtaFinal() {
  const INSTAGRAM = "https://www.instagram.com/jjd.ev/?hl=es"

  const [isFormOpen, setIsFormOpen] = useState(false)
  const [name, setName] = useState("")
  const [senderEmail, setSenderEmail] = useState("")
  const [service, setService] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<Status>("idle")
  const [honeypot, setHoneypot] = useState("")

  const isValidEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())

  const isFormValid =
    name.trim().length > 0 &&
    service.trim().length > 0 &&
    message.trim().length > 0 &&
    isValidEmail(senderEmail)

  const emailIsInvalid =
    senderEmail.trim().length > 0 && !isValidEmail(senderEmail)

  const resetForm = () => {
    setName("")
    setSenderEmail("")
    setService("")
    setMessage("")
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (honeypot) return
    setStatus("sending")
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: name,
          from_email: senderEmail,
          service,
          message,
          reply_to: senderEmail,
        },
        PUBLIC_KEY,
      )
      setStatus("success")
      resetForm()
    } catch (err) {
      console.error("EmailJS error:", err)
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
            onClick={() => {
              setIsFormOpen((c) => !c)
              setStatus("idle")
            }}
          >
            {isFormOpen ? "Cerrar formulario" : "Enviar email →"}
          </button>
        </div>

        {isFormOpen && (
          <form
            className={styles.contactForm}
            onSubmit={handleSubmit}
            noValidate
          >
            <div className={styles.row}>
              <label className={styles.field}>
                <span className={styles.label}>Nombre</span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Tu nombre"
                  required
                  disabled={status === "sending"}
                />
              </label>

              <label className={styles.field}>
                <span className={styles.label}>Correo electrónico</span>
                <input
                  type="email"
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  placeholder="tu@correo.com"
                  aria-invalid={emailIsInvalid}
                  required
                  disabled={status === "sending"}
                />
                {emailIsInvalid && (
                  <p className={styles.fieldError}>
                    Ingresa un correo válido antes de enviar.
                  </p>
                )}
              </label>
            </div>

            <label className={styles.field}>
              <span className={styles.label}>Servicio de interés</span>
              <ServiceDropdown
                value={service}
                onChange={setService}
                disabled={status === "sending"}
              />
            </label>

            <label className={styles.field}>
              <span className={styles.label}>Cuéntame del proyecto</span>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe tu idea, qué necesitás y cuándo lo necesitás..."
                rows={5}
                required
                disabled={status === "sending"}
              />
            </label>
            <label
              style={{
                position: "absolute",
                left: "-9999px",
                opacity: 0,
                pointerEvents: "none",
              }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="website"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
              />
            </label>

            <button
              type="submit"
              className={styles.btnSubmit}
              disabled={status === "sending" || !isFormValid}
            >
              {status === "sending" ? (
                <>
                  <span className={styles.spinner} /> Enviando...
                </>
              ) : (
                "Enviar mensaje →"
              )}
            </button>

            {status === "success" && (
              <p className={styles.statusOk} aria-live="polite">
                ✓ Mensaje enviado. Te contacto en menos de 48 horas.
              </p>
            )}
            {status === "error" && (
              <p className={styles.statusErr} aria-live="polite">
                Ocurrió un error al enviar. Intentá de nuevo.
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
