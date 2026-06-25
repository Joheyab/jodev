import { useEffect, useRef } from 'react'
import styles from './Cursor.module.css'

export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let mx = 0, my = 0
    let rx = 0, ry = 0
    let rafId: number

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      if (dotRef.current) {
        dotRef.current.style.left  = `${mx - 6}px`
        dotRef.current.style.top   = `${my - 6}px`
      }
    }

    const animateRing = () => {
      rx = lerp(rx, mx, 0.12)
      ry = lerp(ry, my, 0.12)
      if (ringRef.current) {
        ringRef.current.style.left = `${rx - 18}px`
        ringRef.current.style.top  = `${ry - 18}px`
      }
      rafId = requestAnimationFrame(animateRing)
    }

    const onEnter = () => {
      if (dotRef.current)  dotRef.current.style.transform  = 'scale(1.8)'
      if (ringRef.current) ringRef.current.style.transform = 'scale(1.5)'
    }
    const onLeave = () => {
      if (dotRef.current)  dotRef.current.style.transform  = 'scale(1)'
      if (ringRef.current) ringRef.current.style.transform = 'scale(1)'
    }

    document.addEventListener('mousemove', onMove)
    document.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })
    rafId = requestAnimationFrame(animateRing)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className={styles.dot}  />
      <div ref={ringRef} className={styles.ring} />
    </>
  )
}
