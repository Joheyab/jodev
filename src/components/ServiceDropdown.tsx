import {
  useEffect,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
} from "react"
import styles from "./ServiceDropdown.module.css"

const SERVICES = [
  "Landing Page",
  "Dashboard + Supabase",
  "Tienda / E-commerce",
  "Mantenimiento Web",
  "Rediseño Web",
  "Otro",
]

interface Props {
  value: string
  onChange: (value: string) => void
  disabled?: boolean
}

export default function ServiceDropdown({ value, onChange, disabled }: Props) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Cierra al hacer click fuera
  useEffect(() => {
    const handler = (e: globalThis.MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("click", handler)
    return () => document.removeEventListener("click", handler)
  }, [])

  const handleSelect = (s: string, event: ReactMouseEvent<HTMLLIElement>) => {
    event.preventDefault()
    event.stopPropagation()
    onChange(s)
    setOpen(false)
  }

  return (
    <div
      ref={ref}
      className={`${styles.wrapper} ${disabled ? styles.disabled : ""}`}
    >
      <button
        type="button"
        className={`${styles.trigger} ${open ? styles.triggerOpen : ""} ${!value ? styles.placeholder : ""}`}
        onClick={() => !disabled && setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span>{value || "Seleccioná un servicio..."}</span>
        <svg
          className={`${styles.chevron} ${open ? styles.chevronOpen : ""}`}
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
        >
          <path
            d="M3 5l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <ul className={styles.list} role="listbox">
          {SERVICES.map((s) => (
            <li
              key={s}
              role="option"
              aria-selected={value === s}
              className={`${styles.option} ${value === s ? styles.optionSelected : ""}`}
              onClick={(event) => handleSelect(s, event)}
            >
              {value === s && <span className={styles.checkmark}>✓</span>}
              {s}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
