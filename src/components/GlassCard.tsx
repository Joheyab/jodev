import { ReactNode } from 'react'
import styles from './GlassCard.module.css'

interface GlassCardProps {
  children: ReactNode
  className?: string
  featured?: boolean
}

export default function GlassCard({ children, className = '', featured = false }: GlassCardProps) {
  return (
    <div className={`${styles.card} ${featured ? styles.featured : ''} ${className}`}>
      {children}
    </div>
  )
}
