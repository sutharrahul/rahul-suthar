'use client'

import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Briefcase, Lightbulb } from 'lucide-react'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { SectionLabel } from '@/components/shared/SectionLabel'
import { education, funFacts } from '@/data/portfolio'

const highlights = [
  { label: 'Years coding', value: '3+', icon: '💻' },
  { label: 'Projects shipped', value: '15+', icon: '🚀' },
  { label: 'Technologies', value: '20+', icon: '⚡' },
  { label: 'Satisfied clients', value: '5+', icon: '🌟' },
]

const storyParagraphs = [
  "I'm a self-driven Full Stack Developer who fell in love with web development during college. What started as building small HTML pages evolved into architecting full-stack AI-powered platforms.",
  'I specialize in the intersection of modern web engineering and artificial intelligence — building systems that are not just functional but genuinely intelligent and user-centric.',
  'Currently freelancing for The Proven Club, where I build real-time coding environments with AI-powered assistance, and actively exploring the frontier of LLM-powered applications.',
]

export function About() {
  return (
    <AnimatedSection id="about" className="section-padding section-about section-rule">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionLabel
          label="About Me"
          heading="The story behind the code"
          subheading="A curious engineer constantly pushing the boundary between ideas and implementation."
        />

        <div className="mt-16 grid lg:grid-cols-12 gap-6">
          {/* My Story */}
          <motion.div
            className="lg:col-span-5 space-y-5 rounded-3xl border border-border bg-background p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-2">
              <div className="size-8 rounded-xl bg-[var(--purple)]/10 flex items-center justify-center">
                <Lightbulb className="size-4 text-[var(--purple)]" />
              </div>
              <h3 className="font-semibold text-foreground">My Story</h3>
            </div>
            <div className="space-y-4">
              {storyParagraphs.map((p, i) => (
                <p key={i} className="text-sm text-muted-foreground leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Right column grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {/* Highlights row */}
            {/* <motion.div
              className="sm:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="flex flex-col items-center justify-center gap-1 rounded-2xl border border-border bg-background p-4 text-center hover:border-[var(--purple)]/30 hover:bg-[var(--purple)]/4 transition-all duration-200"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-2xl font-bold text-foreground">{item.value}</span>
                  <span className="text-[11px] text-muted-foreground leading-tight">{item.label}</span>
                </motion.div>
              ))}
            </motion.div> */}

            {/* Education */}
            <motion.div
              className="sm:col-span-2 rounded-3xl border border-border bg-background p-6 space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center gap-2">
                <div className="size-8 rounded-xl bg-[var(--purple)]/10 flex items-center justify-center">
                  <GraduationCap className="size-4 text-[var(--purple)]" />
                </div>
                <h3 className="font-semibold text-foreground">Education</h3>
              </div>
              <div className="space-y-3">
                {education.map((edu) => (
                  <div
                    key={edu.id}
                    className="flex gap-4 p-3 rounded-xl bg-surface-1 hover:bg-surface-2 transition-colors"
                  >
                    <div className="size-10 shrink-0 rounded-xl bg-[var(--purple)]/10 flex items-center justify-center text-sm">
                      🎓
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">{edu.institution}</p>
                      <p className="text-xs text-muted-foreground">{edu.degree} · {edu.field}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[11px] text-muted-foreground">{edu.timeline}</span>
                        {'gpa' in edu && edu.gpa && (
                          <span className="text-[11px] font-medium text-[var(--purple)]">GPA: {edu.gpa}</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Fun facts
            <motion.div
              className="sm:col-span-2 rounded-3xl border border-border bg-background p-6 space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center gap-2">
                <div className="size-8 rounded-xl bg-[var(--purple)]/10 flex items-center justify-center">
                  <Briefcase className="size-4 text-[var(--purple)]" />
                </div>
                <h3 className="font-semibold text-foreground">Fun Facts</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {funFacts.map((fact, i) => (
                  <motion.div
                    key={fact.label}
                    className="flex items-center gap-3 p-3 rounded-xl bg-surface-1 hover:bg-[var(--purple)]/8 transition-colors group"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.08 }}
                  >
                    <span className="text-lg shrink-0">{fact.emoji}</span>
                    <div>
                      <p className="text-xs font-semibold text-foreground">{fact.value}</p>
                      <p className="text-[10px] text-muted-foreground leading-tight">{fact.label}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div> */}

            {/* Location card */}
            <motion.div
              className="sm:col-span-2 rounded-3xl border border-border bg-[var(--purple)]/6 p-6 flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="size-12 rounded-2xl bg-[var(--purple)] flex items-center justify-center shadow-purple-sm">
                <MapPin className="size-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Based in India</p>
                <p className="text-sm text-muted-foreground">Available for remote work globally</p>
              </div>
              <div className="ml-auto">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                  <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Open to work
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
