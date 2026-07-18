import { cn } from '@/lib/utils'

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
      <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--purple)]/20 bg-[var(--purple)]/8 px-3 py-1 text-xs font-medium text-[var(--purple)] tracking-wider uppercase">
        <span className="size-1.5 rounded-full bg-[var(--purple)] inline-block" />
        {label}
      </span>
      <h2
        className={cn(
          'mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl',
          centered && 'mx-auto'
        )}
      >
        {heading}
      </h2>
      {subheading && (
        <p
          className={cn(
            'mt-4 text-base text-muted-foreground max-w-xl leading-relaxed',
            centered && 'mx-auto'
          )}
        >
          {subheading}
        </p>
      )}
    </div>
  )
}
