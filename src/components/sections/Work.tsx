import { experiences } from '@/data/portfolio'
import { FadeIn } from '@/components/shared/FadeIn'

export function Work() {
  return (
    <section id="work" className="scroll-mt-20 pt-16">
      <FadeIn>
        <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">Work</h2>
      </FadeIn>

      <div className="mt-6 divide-y divide-border">
        {experiences.map((exp) => {
          const hasLink = exp.link && exp.link !== '#'
          return (
            <FadeIn key={exp.id}>
              <article className="py-7 first:pt-0">
                {/* Company heading + timeline */}
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                    {hasLink ? (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline-offset-4 hover:underline"
                      >
                        {exp.company}
                      </a>
                    ) : (
                      exp.company
                    )}
                  </h3>
                  <span className="text-xs text-muted-foreground">{exp.timeline}</span>
                </div>

                {/* Role · type · location */}
                <p className="mt-1.5 text-sm text-[var(--purple)]">
                  {exp.role} · {exp.type} · {exp.location}
                </p>

                {/* Description */}
                <p className="font-display mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>

                {/* Tech */}
                <p className="mt-3 text-[11px] text-muted-foreground/80">
                  {exp.technologies.join(' · ')}
                </p>
              </article>
            </FadeIn>
          )
        })}
      </div>
    </section>
  )
}
