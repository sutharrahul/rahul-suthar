import { GraduationCap, MapPin, Lightbulb } from 'lucide-react'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { SectionLabel } from '@/components/shared/SectionLabel'
import { Card } from '@/components/shared/Card'
import { IconBadge } from '@/components/shared/IconBadge'
import { education } from '@/data/portfolio'

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
          <Card className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-2">
              <IconBadge icon={Lightbulb} size="sm" />
              <h3 className="font-semibold text-foreground">My Story</h3>
            </div>
            <div className="space-y-4">
              {storyParagraphs.map((p, i) => (
                <p key={i} className="text-sm text-muted-foreground leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </Card>

          {/* Right column grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {/* Education */}
            <Card className="sm:col-span-2 space-y-4 p-6">
              <div className="flex items-center gap-2">
                <IconBadge icon={GraduationCap} size="sm" />
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
            </Card>

            {/* Location card */}
            <Card className="sm:col-span-2 flex items-center gap-4 bg-[var(--purple)]/6 p-6">
              <IconBadge icon={MapPin} size="lg" variant="solid" />
              <div>
                <p className="font-semibold text-foreground">Based in India</p>
                <p className="text-sm text-muted-foreground">Available for remote work globally</p>
              </div>
              <div className="ml-auto">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                  <span className="size-1.5 rounded-full bg-emerald-500" />
                  Open to work
                </span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
