import { Mail } from 'lucide-react'
import { GithubIcon, LinkedInIcon, XIcon } from '@/components/shared/SocialIcons'
import { SocialIconButton } from '@/components/shared/SocialIconButton'
import Image from 'next/image'
import { profile } from '@/data/portfolio'

const socialLinks = [
  { icon: GithubIcon, href: profile.github, label: 'GitHub' },
  { icon: LinkedInIcon, href: profile.linkedin, label: 'LinkedIn' },
  { icon: XIcon, href: profile.twitter, label: 'Twitter / X' },
  { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
]

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center section-hero"
      aria-label="Hero section"
    >
      <div className="mx-auto w-full max-w-2xl px-4 sm:px-6 pt-28 pb-20 text-center">
        {/* Avatar */}
        <div className="relative mx-auto size-32 sm:size-36 rounded-full overflow-hidden border border-border">
          <Image
            src="/assets/avatar-nobg.png"
            alt={`${profile.name} avatar`}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Name */}
        <h1 className="mt-8 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Rahul <span className="gradient-text">Suthar</span>
        </h1>

        {/* Role */}
        <p className="mt-3 text-base font-medium text-[var(--purple)] tracking-wide sm:text-lg">
          Full Stack Developer · AI Engineer
        </p>

        {/* Tagline */}
        <p className="mx-auto mt-4 max-w-lg text-sm text-muted-foreground leading-relaxed sm:text-base">
          {profile.tagline}
        </p>

        {/* Social links */}
        <div className="mt-8 flex items-center justify-center gap-3">
          {socialLinks.map(({ icon, href, label }) => (
            <SocialIconButton key={label} icon={icon} href={href} label={label} />
          ))}
        </div>
      </div>
    </section>
  )
}
