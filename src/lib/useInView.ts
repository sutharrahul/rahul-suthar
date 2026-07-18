'use client'

import { useEffect, useRef, useState } from 'react'

export function useInView<T extends HTMLElement>(margin = '-80px') {
  const ref = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: margin, threshold: 0.1 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [margin])

  return { ref, isVisible }
}
