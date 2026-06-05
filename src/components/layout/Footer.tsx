'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Mail, Heart } from 'lucide-react'
import { GithubIcon, LinkedInIcon, XIcon } from '@/components/shared/SocialIcons'
import { profile } from '@/data/portfolio'

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
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex justify-start sm:justify-end gap-2">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className="size-9 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:text-[var(--purple)] hover:border-[var(--purple)]/30 hover:bg-[var(--purple)]/8 transition-all duration-200"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {currentYear} Rahul Suthar. All rights reserved.</p>
          <motion.p
            className="flex items-center gap-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Built with{' '}
            <Heart className="size-3 text-[var(--purple)] fill-current" aria-label="love" />{' '}
            using Next.js, Tailwind & Framer Motion
          </motion.p>
        </div>
      </div>
    </footer>
  )
}
