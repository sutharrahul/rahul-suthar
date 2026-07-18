import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { GithubIcon, LinkedInIcon } from '@/components/shared/SocialIcons'
import { SiteNav } from '@/components/nav/SiteNav'
import { Work } from '@/components/sections/Work'
import { Creation } from '@/components/sections/Creation'
import { profile } from '@/data/portfolio'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      <div className="mx-auto w-full max-w-2xl px-6">
        {/* Profile */}
        <main id="top" className="scroll-mt-14 pt-12">
          {/* Avatar */}
          <div className="relative size-28 overflow-hidden rounded-full border border-border">
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
            {profile.name}
          </h1>

          {/* Role */}
          <p className="font-display mt-5 text-lg text-muted-foreground sm:text-xl">
            Full Stack Developer
          </p>

          {/* Bio */}
          <p className="font-display mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {profile.bio}
          </p>

          {/* Meta lines */}
          <div className="mt-8 space-y-2.5 text-sm text-muted-foreground">
            <p className="flex items-center gap-2.5">
              <GithubIcon className="size-4 shrink-0" />
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                github.com/sutharrahul
              </a>
            </p>
            <p className="flex items-center gap-2.5">
              <LinkedInIcon className="size-4 shrink-0" />
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                linkedin.com/in/suthar-rahul
              </a>
            </p>
          </div>

          {/* Sections */}
          <Work />
          <Creation />
        </main>

        {/* Footer */}
        <footer className="mt-20 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-t border-border py-8 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Rahul Suthar</span>
          <span className="flex items-center gap-2">
            <MapPin className="size-3.5 shrink-0" />
            {profile.location} · {profile.availability}
          </span>
        </footer>
      </div>
    </div>
  )
}
