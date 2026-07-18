import { Mail, MapPin, Clock } from 'lucide-react'
import { GithubIcon, LinkedInIcon, XIcon } from '@/components/shared/SocialIcons'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { SectionLabel } from '@/components/shared/SectionLabel'
import { Card } from '@/components/shared/Card'
import { IconBadge } from '@/components/shared/IconBadge'
import { SocialIconButton } from '@/components/shared/SocialIconButton'
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
          <Card className="lg:col-span-2">
            <h3 className="text-xl font-bold text-foreground">Get in touch</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              My inbox is always open, whether it's a project, an opportunity, or just to say hello.
            </p>

            <div className="mt-6 space-y-1">
              {contactInfo.map(({ icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4 rounded-xl p-3 transition-colors hover:bg-surface-1">
                  <IconBadge icon={icon} />
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
                {socials.map(({ icon, href, label }) => (
                  <SocialIconButton key={label} icon={icon} href={href} label={label} />
                ))}
              </div>
            </div>
          </Card>

          <div className="lg:col-span-3">
            <ChatWidget />
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
