'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Mail, ChevronDown, ArrowRight } from 'lucide-react'
import { GithubIcon, LinkedInIcon, XIcon } from '@/components/shared/SocialIcons'
import Image from 'next/image'
import { profile } from '@/data/portfolio'

const socialLinks = [
  { icon: GithubIcon, href: profile.github, label: 'GitHub' },
  { icon: LinkedInIcon, href: profile.linkedin, label: 'LinkedIn' },
  { icon: XIcon, href: profile.twitter, label: 'Twitter / X' },
  { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
]

export function Hero() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden flex items-center section-hero "
      aria-label="Hero section"
    >
      {/* Content */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-center">
          {/* Left: Text (3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            {/* Name */}
            <motion.div
              className="flex items-center justify-between gap-4 lg:block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95]">
                Rahul
                <br />
                <span className="gradient-text">Suthar</span>
              </h1>

              {/* Mobile avatar, shown to the right of the name */}
              <div className="relative size-28 sm:size-24 shrink-0 rounded-full overflow-hidden border-4 border-[var(--purple)]/30 shadow-purple lg:hidden">
                <Image
                  src="/assets/avatar-nobg.png"
                  alt={`${profile.name} avatar`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            {/* Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex items-center gap-3"
            >
              <div className="h-px w-10 bg-[var(--purple)]" />
              <p className="text-lg font-medium text-[var(--purple)] tracking-wide">
                Full Stack Developer · AI Engineer
              </p>
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="text-lg text-muted-foreground leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              {profile.tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-3 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
            >
              {/* <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 rounded-2xl bg-[var(--purple)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--purple-dark)] transition-all duration-200 hover:shadow-purple hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-[var(--purple)]"
                id="hero-contact-btn"
              >
                Get in touch
                <ArrowRight className="size-4" />
              </button> */}
            </motion.div>

            {/* Social links */}
            <motion.div
              className="flex items-center gap-3 pt-1"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
            >
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="flex size-10 items-center justify-center rounded-xl border border-border text-muted-foreground hover:text-[var(--purple)] hover:border-[var(--purple)]/30 hover:bg-[var(--purple)]/8 transition-all duration-200"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: Avatar (2 cols), desktop only — mobile shows a compact avatar next to the name */}
          <div className="hidden lg:col-span-2 lg:flex lg:justify-end">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Outer pulse ring */}
              <motion.div
                className="absolute -inset-4 rounded-full border-2 border-[var(--purple)]/20"
                animate={{ scale: [1, 1.04, 1], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
              {/* Inner ring */}
              <motion.div
                className="absolute -inset-1.5 rounded-full border-2 border-[var(--purple)]/40"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              />

              {/* Avatar image */}
              <div className="relative size-64 sm:size-72 lg:size-80 rounded-full overflow-hidden border-4 border-[var(--purple)]/30 shadow-purple">
                <Image
                  src="/assets/avatar-nobg.png"
                  alt={`${profile.name} avatar`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        aria-hidden="true"
      >
        <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="size-4 text-muted-foreground" />
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade into About section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--section-about))' }}
        aria-hidden="true"
      />
    </section>
  )
}
