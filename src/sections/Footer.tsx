import styles from './Footer.module.css'

const LINKS = [
  { label: 'Servicios', href: '#services' },
  { label: 'Proceso',   href: '#process'  },
  { label: 'Planes',    href: '#pricing'  },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="#hero" className={styles.logo}>
        JO<span className={styles.dot}>.</span>DEV
      </a>

      <nav className={styles.links} aria-label="Footer navigation">
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} className={styles.link}>
            {l.label}
          </a>
        ))}
      </nav>

      <span className={styles.copy}>© {new Date().getFullYear()} · Costa Rica</span>
    </footer>
  )
}
