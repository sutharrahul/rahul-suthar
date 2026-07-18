'use client'

import { useState } from 'react'
import { ExternalLink, Layers, ChevronRight } from 'lucide-react'
import { GithubIcon } from '@/components/shared/SocialIcons'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { SectionLabel } from '@/components/shared/SectionLabel'
import { projects } from '@/data/portfolio'
import { cn } from '@/lib/utils'

export function Projects() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null)

  const featured = projects.find((p) => p.featured) || projects[0]
  const rest = projects.filter((p) => p.id !== featured?.id)

  return (
    <AnimatedSection id="projects" className="section-padding section-projects section-rule">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionLabel
          label="Projects"
          heading="Work I'm proud of"
          subheading="Production applications built with modern tooling, real users, and measurable impact."
        />

        <div>
            {/* Featured project */}
            {featured && (
              <div className="mt-10 rounded-3xl border border-border bg-background overflow-hidden transition-all duration-200 hover:border-[var(--purple)]/30 hover:shadow-card-hover hover:-translate-y-0.5">
                <div className="grid lg:grid-cols-2">
                  {/* Hero panel */}
                  <div
                    className={cn(
                      'relative min-h-52 lg:min-h-72 flex items-center justify-center p-8',
                      featured.heroColor
                    )}
                  >
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="relative text-center">
                      <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-white mb-4">
                        <Layers className="size-3.5" />
                        Featured Project
                      </div>
                      <h3 className="text-3xl font-bold text-white">{featured.title}</h3>
                      <p className="text-white/80 text-sm mt-2">{featured.subtitle}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col justify-between gap-6">
                    <div className="space-y-4">
                      <p className="text-muted-foreground text-sm leading-relaxed">{featured.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {featured.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-lg bg-[var(--purple)]/8 border border-[var(--purple)]/15 px-2.5 py-0.5 text-xs font-medium text-[var(--purple)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Expandable details */}
                    <div>
                      <button
                        onClick={() => setExpandedProject(expandedProject === featured.id ? null : featured.id)}
                        className="flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-[var(--purple)] transition-colors mb-3"
                      >
                        <ChevronRight
                          className={cn(
                            'size-3.5 transition-transform',
                            expandedProject === featured.id ? 'rotate-90' : ''
                          )}
                        />
                        {expandedProject === featured.id ? 'Hide' : 'Show'} details
                      </button>
                      <div
                        className={cn(
                          'grid transition-all duration-300 ease-out',
                          expandedProject === featured.id ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                        )}
                      >
                        <div className="overflow-hidden space-y-3">
                          <div className="rounded-xl bg-surface-1 p-3">
                            <p className="text-xs font-semibold text-foreground mb-1">Challenge</p>
                            <p className="text-xs text-muted-foreground">{featured.challenges}</p>
                          </div>
                          <div className="rounded-xl bg-emerald-500/8 border border-emerald-500/15 p-3">
                            <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-1">Results</p>
                            <p className="text-xs text-muted-foreground">{featured.results}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 pt-2 border-t border-border">
                      <a
                        href={featured.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--purple)] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[var(--purple-dark)] transition-all duration-200"
                      >
                        <ExternalLink className="size-3.5" />
                        Live Demo
                      </a>
                      <a
                        href={featured.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted transition-all duration-200"
                      >
                        <GithubIcon className="size-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Rest of projects grid */}
            {rest.length > 0 && (
              <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {rest.map((project) => (
                  <div
                    key={project.id}
                    className="group rounded-2xl border border-border bg-background overflow-hidden transition-all duration-200 hover:border-[var(--purple)]/30 hover:shadow-card-hover hover:-translate-y-0.5"
                  >
                    {/* Color hero */}
                    <div className={cn('h-32 relative flex items-end p-4', project.heroColor)}>
                      <div className="absolute inset-0 bg-black/10" />
                      <h3 className="relative text-base font-bold text-white">{project.title}</h3>
                    </div>

                    {/* Content */}
                    <div className="p-5 space-y-4">
                      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="rounded-md bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>
                      <div className="flex gap-2 pt-1 border-t border-border">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-[var(--purple)]/8 hover:bg-[var(--purple)] px-3 py-2 text-xs font-semibold text-[var(--purple)] hover:text-white transition-all duration-200"
                        >
                          <ExternalLink className="size-3" />
                          Demo
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-border px-3 py-2 text-xs text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
                        >
                          <GithubIcon className="size-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
        </div>
      </div>
    </AnimatedSection>
  )
}
