import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/data/portfolio'
import { FadeIn } from '@/components/shared/FadeIn'

export function Creation() {
  return (
    <section id="creation" className="scroll-mt-20 pt-16">
      <FadeIn>
        <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">Creation</h2>
      </FadeIn>

      <div className="mt-6 divide-y divide-border">
        {projects.map((project) => {
          const hasLive = project.liveUrl && project.liveUrl.startsWith('http')
          return (
            <FadeIn key={project.id}>
              <article className="py-7 first:pt-0">
                {/* Title + live link */}
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                    {hasLive ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1 underline-offset-4 hover:underline"
                      >
                        {project.title}
                        <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-foreground" />
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>
                </div>

                {/* Subtitle */}
                <p className="mt-1.5 text-sm text-[var(--purple)]">{project.subtitle}</p>

                {/* Description */}
                <p className="font-display mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {/* Tech */}
                <p className="mt-3 text-[11px] text-muted-foreground/80">
                  {project.technologies.join(' · ')}
                </p>
              </article>
            </FadeIn>
          )
        })}
      </div>
    </section>
  )
}
