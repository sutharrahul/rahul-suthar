'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { ThemeToggle } from '@/components/shared/ThemeToggle'

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-colors duration-300',
        scrolled ? 'glass border-b border-border' : 'border-b border-transparent'
      )}
    >
      <div className="mx-auto flex h-14 w-full max-w-2xl items-center justify-between px-6">
        <a href="#top" className="text-sm lowercase tracking-wide text-foreground">
          rahul suthar
        </a>
        <nav className="flex items-center gap-x-5 text-sm text-muted-foreground">
          <a href="#work" className="lowercase transition-colors hover:text-foreground">
            work
          </a>
          <a href="#creation" className="lowercase transition-colors hover:text-foreground">
            creation
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
