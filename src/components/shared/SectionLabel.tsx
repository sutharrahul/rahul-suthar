'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface SectionLabelProps {
  label: string
  heading: string
  subheading?: string
  className?: string
  centered?: boolean
}

export function SectionLabel({
  label,
  heading,
  subheading,
  className,
  centered = false,
}: SectionLabelProps) {
  return (
    <div className={cn(centered ? 'text-center' : '', className)}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--purple)]/20 bg-[var(--purple)]/8 px-3 py-1 text-xs font-medium text-[var(--purple)] tracking-wider uppercase">
          <span className="size-1.5 rounded-full bg-[var(--purple)] inline-block" />
          {label}
        </span>
      </motion.div>
      <motion.h2
        className={cn(
          'mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl',
          centered && 'mx-auto'
        )}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {heading}
      </motion.h2>
      {subheading && (
        <motion.p
          className={cn(
            'mt-4 text-base text-muted-foreground max-w-xl leading-relaxed',
            centered && 'mx-auto'
          )}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {subheading}
        </motion.p>
      )}
    </div>
  )
}
