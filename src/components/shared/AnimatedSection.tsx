'use client'

import { cn } from '@/lib/utils'
import { useInView } from '@/lib/useInView'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export function AnimatedSection({ children, className, id }: AnimatedSectionProps) {
  const { ref, isVisible } = useInView<HTMLElement>()

  return (
    <section
      ref={ref}
      id={id}
      className={cn('relative fade-in-up', isVisible && 'is-visible', className)}
    >
      {children}
    </section>
  )
}
