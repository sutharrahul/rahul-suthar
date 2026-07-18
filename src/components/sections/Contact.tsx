'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Clock } from 'lucide-react'
import { GithubIcon, LinkedInIcon, XIcon } from '@/components/shared/SocialIcons'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { SectionLabel } from '@/components/shared/SectionLabel'
import { ChatWidget } from '@/components/chatbox/ChatWidget'
import { profile } from '@/data/portfolio'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'India · Remote Worldwide',
    href: null,
  },
  {
    icon: Clock,
    label: 'Availability',
    value: 'Open to full-time & freelance',
    href: null,
  },
]

const socials = [
  { icon: GithubIcon, href: profile.github, label: 'GitHub' },
  { icon: LinkedInIcon, href: profile.linkedin, label: 'LinkedIn' },
  { icon: XIcon, href: profile.twitter, label: 'Twitter / X' },
]

export function Contact() {
  return (
    <AnimatedSection id="contact" className="section-padding section-contact section-rule">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionLabel
          label="Contact"
          heading="Let's work together"
          subheading="Have a project in mind, or want to ask my AI assistant instead? Both are just below."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          <motion.div
            className="rounded-3xl border border-border bg-background p-8 lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-foreground">Get in touch</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              My inbox is always open, whether it's a project, an opportunity, or just to say hello.
            </p>

            <div className="mt-6 space-y-1">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4 rounded-xl p-3 transition-colors hover:bg-surface-1">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[var(--purple)]/10">
                    <Icon className="size-4 text-[var(--purple)]" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{label}</p>
                    {href ? (
                      <a href={href} className="text-sm font-medium text-foreground transition-colors hover:text-[var(--purple)]">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-foreground">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t border-border pt-6">
              <p className="mb-3 text-xs text-muted-foreground">Connect on social</p>
              <div className="flex gap-2">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex size-10 items-center justify-center rounded-xl border border-border text-muted-foreground transition-all duration-200 hover:border-[var(--purple)]/30 hover:bg-[var(--purple)]/8 hover:text-[var(--purple)]"
                  >
                    <Icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-3">
            <ChatWidget />
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
