import { ExternalLink, MapPin, Calendar } from 'lucide-react'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { SectionLabel } from '@/components/shared/SectionLabel'
import { Card } from '@/components/shared/Card'
import { experiences } from '@/data/portfolio'

export function Experience() {
  return (
    <AnimatedSection id="experience" className="section-padding section-experience section-rule">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionLabel
          label="Experience"
          heading="Professional journey"
          subheading="The roles that shaped my engineering philosophy and sharpened my craft."
        />

        <div className="mt-16 relative">
          {/* Timeline spine */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-[var(--purple)]/25 hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative md:pl-20">
                {/* Timeline dot */}
                <div className="absolute left-0 top-6 hidden md:flex items-center justify-center">
                  <div className="size-12 rounded-2xl bg-[var(--purple)] flex items-center justify-center text-white text-lg font-bold">
                    {exp.company.charAt(0)}
                  </div>
                </div>

                {/* Card */}
                <Card hover className="p-7">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-lg font-bold text-foreground">{exp.role}</h3>
                        <span className="rounded-full border border-[var(--purple)]/20 bg-[var(--purple)]/8 px-2.5 py-0.5 text-xs font-medium text-[var(--purple)]">
                          {exp.type}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 mt-1.5 flex-wrap">
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sm font-semibold text-[var(--purple)] hover:underline"
                        >
                          {exp.company}
                          <ExternalLink className="size-3" />
                        </a>
                        <span className="text-border">·</span>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <MapPin className="size-3" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 rounded-xl border border-border bg-surface-1 px-3 py-1.5 text-xs text-muted-foreground whitespace-nowrap">
                      <Calendar className="size-3" />
                      {exp.timeline}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{exp.description}</p>

                  {/* Highlights */}
                  <ul className="mt-4 space-y-2">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-0.5 size-1.5 rounded-full bg-[var(--purple)] shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Tech badges */}
                  <div className="mt-5 flex flex-wrap gap-1.5 pt-4 border-t border-border">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-border bg-surface-1 px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
