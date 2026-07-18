import { cn } from '@/lib/utils'
import { ComponentType } from 'react'

interface SocialIconButtonProps {
  icon: ComponentType<{ className?: string }>
  href: string
  label: string
  size?: 'sm' | 'md'
  className?: string
}

const sizeClasses = {
  sm: 'size-9 [&_svg]:size-4',
  md: 'size-10 [&_svg]:size-4',
}

export function SocialIconButton({ icon: Icon, href, label, size = 'md', className }: SocialIconButtonProps) {
  const isExternal = href.startsWith('http')

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      aria-label={label}
      className={cn(
        'flex items-center justify-center rounded-xl border border-border text-muted-foreground transition-colors duration-200 hover:border-[var(--purple)]/30 hover:bg-[var(--purple)]/8 hover:text-[var(--purple)]',
        sizeClasses[size],
        className
      )}
    >
      <Icon />
    </a>
  )
}
