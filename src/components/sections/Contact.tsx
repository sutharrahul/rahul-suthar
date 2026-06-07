'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Clock, Bot, ArrowUpRight } from 'lucide-react'
import { GithubIcon, LinkedInIcon, XIcon } from '@/components/shared/SocialIcons'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { SectionLabel } from '@/components/shared/SectionLabel'
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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionLabel
          label="Contact"
          heading="Let's work together"
          subheading="Have a project in mind or want to discuss opportunities? I'd love to hear from you."
        />

        <div className="mt-14 mx-auto max-w-xl space-y-6">
          <motion.div
            className="rounded-3xl border border-border bg-background p-8 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 className="text-xl font-bold text-foreground">Get in touch</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Whether you have a project idea, job opportunity, or just want to say hello — my inbox is always open.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4 p-3 rounded-xl hover:bg-surface-1 transition-colors">
                  <div className="size-10 shrink-0 rounded-xl bg-[var(--purple)]/10 flex items-center justify-center">
                    <Icon className="size-4 text-[var(--purple)]" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{label}</p>
                    {href ? (
                      <a href={href} className="text-sm font-medium text-foreground hover:text-[var(--purple)] transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-foreground">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <p className="text-xs text-muted-foreground mb-3">Connect on social</p>
              <div className="flex gap-2">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="size-10 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:text-[var(--purple)] hover:border-[var(--purple)]/30 hover:bg-[var(--purple)]/8 transition-all duration-200"
                  >
                    <Icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* AI assistant redirect */}
          <motion.a
            href={profile.aiAssistantUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-3xl border border-[var(--purple)]/20 bg-[var(--purple)]/6 p-6 hover:border-[var(--purple)]/40 hover:bg-[var(--purple)]/10 transition-all duration-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="size-12 shrink-0 rounded-2xl bg-[var(--purple)] flex items-center justify-center shadow-purple-sm">
              <Bot className="size-6 text-white" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-foreground">Prefer to ask an AI?</p>
              <p className="text-sm text-muted-foreground">Chat with my AI assistant, trained on my portfolio</p>
            </div>
            <ArrowUpRight className="size-5 text-[var(--purple)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </div>
      </div>
    </AnimatedSection>
  )
}
