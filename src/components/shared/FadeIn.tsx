'use client'

import { cn } from '@/lib/utils'
import { useInView } from '@/lib/useInView'

interface FadeInProps {
  children: React.ReactNode
  className?: string
}

/** Fades its children up into view the first time they're scrolled to. */
export function FadeIn({ children, className }: FadeInProps) {
  const { ref, isVisible } = useInView<HTMLDivElement>('-40px')

  return (
    <div ref={ref} className={cn('fade-in-up', isVisible && 'is-visible', className)}>
      {children}
    </div>
  )
}
