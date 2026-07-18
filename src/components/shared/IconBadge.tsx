import { cn } from '@/lib/utils'
import { ComponentType } from 'react'

const sizeClasses = {
  sm: 'size-8 rounded-xl [&_svg]:size-4',
  md: 'size-10 rounded-xl [&_svg]:size-4',
  lg: 'size-12 rounded-2xl [&_svg]:size-5',
}

const variantClasses = {
  solid: 'bg-[var(--purple)] text-white',
  subtle: 'bg-[var(--purple)]/10 text-[var(--purple)]',
}

interface IconBadgeProps {
  icon: ComponentType<{ className?: string }>
  size?: keyof typeof sizeClasses
  variant?: keyof typeof variantClasses
  className?: string
}

export function IconBadge({ icon: Icon, size = 'md', variant = 'subtle', className }: IconBadgeProps) {
  return (
    <div
      className={cn(
        'flex shrink-0 items-center justify-center',
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      <Icon />
    </div>
  )
}
