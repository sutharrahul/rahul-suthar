'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { SectionLabel } from '@/components/shared/SectionLabel'
import { testimonials } from '@/data/portfolio'

export function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [direction, setDirection] = useState(0)

  const navigate = useCallback(
    (dir: number) => {
      setDirection(dir)
      setActiveIdx((prev) => (prev + dir + testimonials.length) % testimonials.length)
    },
    []
  )

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => navigate(1), 6000)
    return () => clearInterval(timer)
  }, [navigate])

  const active = testimonials[activeIdx]

  return (
    <AnimatedSection id="testimonials" className="section-padding section-testimonials section-rule">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionLabel
          label="Testimonials"
          heading="What people say"
          centered
        />

        <div className="mt-14 relative">
          {/* Background quote */}
          <Quote
            className="absolute -top-4 left-0 size-24 text-[var(--purple)]/6 pointer-events-none"
            aria-hidden="true"
          />

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeIdx}
              custom={direction}
              variants={{
                enter: (d: number) => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
                center: { opacity: 1, x: 0 },
                exit: (d: number) => ({ opacity: 0, x: d > 0 ? -60 : 60 }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl border border-border bg-background p-10 text-center"
            >
              <blockquote className="text-lg sm:text-xl text-foreground leading-relaxed font-light italic max-w-3xl mx-auto">
                "{active.content}"
              </blockquote>

              <div className="mt-8 flex flex-col items-center gap-2">
                {/* Avatar */}
                <div
                  className={`size-14 rounded-2xl ${active.avatarColor} flex items-center justify-center text-white font-bold text-lg shadow-sm`}
                >
                  {active.avatar}
                </div>
                <p className="font-semibold text-foreground">{active.author}</p>
                <p className="text-sm text-muted-foreground">
                  {active.role} · <span className="text-[var(--purple)]">{active.company}</span>
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="size-10 rounded-xl border border-border bg-background text-muted-foreground hover:text-[var(--purple)] hover:border-[var(--purple)]/30 hover:bg-[var(--purple)]/8 flex items-center justify-center transition-all duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="size-4" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2" role="tablist" aria-label="Testimonial navigation">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > activeIdx ? 1 : -1)
                    setActiveIdx(i)
                  }}
                  role="tab"
                  aria-selected={i === activeIdx}
                  aria-label={`Testimonial ${i + 1}`}
                  className="relative overflow-hidden rounded-full transition-all duration-300"
                >
                  <motion.div
                    className="rounded-full bg-[var(--purple)]"
                    animate={{
                      width: i === activeIdx ? 24 : 8,
                      height: 8,
                      opacity: i === activeIdx ? 1 : 0.3,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </button>
              ))}
            </div>

            <button
              onClick={() => navigate(1)}
              className="size-10 rounded-xl border border-border bg-background text-muted-foreground hover:text-[var(--purple)] hover:border-[var(--purple)]/30 hover:bg-[var(--purple)]/8 flex items-center justify-center transition-all duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
