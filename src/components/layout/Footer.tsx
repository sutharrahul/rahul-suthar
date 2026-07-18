'use client'

import Image from 'next/image'
import { Mail, Heart } from 'lucide-react'
import { GithubIcon, LinkedInIcon, XIcon } from '@/components/shared/SocialIcons'
import { SocialIconButton } from '@/components/shared/SocialIconButton'
import { profile } from '@/data/portfolio'
import { smoothScrollTo } from '@/lib/utils'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  { icon: GithubIcon, href: profile.github, label: 'GitHub' },
  { icon: LinkedInIcon, href: profile.linkedin, label: 'LinkedIn' },
  { icon: XIcon, href: profile.twitter, label: 'Twitter / X' },
  { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-surface-1/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Image src="/assets/logo.png" alt="Rahul Suthar" width={32} height={32} className="size-8 object-contain" />
              <span className="font-bold text-foreground">Rahul Suthar</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-48">
              Full Stack Developer · AI Engineer · Based in India
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap justify-start sm:justify-center gap-x-6 gap-y-2" aria-label="Footer navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-[var(--purple)] transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  smoothScrollTo(link.href)
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex justify-start sm:justify-end gap-2">
            {socialLinks.map(({ icon, href, label }) => (
              <SocialIconButton key={label} icon={icon} href={href} label={label} size="sm" />
            ))}
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {currentYear} Rahul Suthar. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with{' '}
            <Heart className="size-3 text-[var(--purple)] fill-current" aria-label="love" />{' '}
            using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
