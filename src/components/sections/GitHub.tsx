'use client'

import { motion } from 'framer-motion'
import { Star, GitFork, Activity, Code2 } from 'lucide-react'
import { GithubIcon } from '@/components/shared/SocialIcons'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { SectionLabel } from '@/components/shared/SectionLabel'
import { githubStats } from '@/data/portfolio'

// Deterministic seeded PRNG (mulberry32) — produces identical output on server & client
function seededRandom(seed: number) {
  return function () {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

// Generate a heat-map grid of 52 weeks × 7 days (deterministic, seed = 42)
function generateHeatMap(): number[] {
  const rand = seededRandom(42)
  const cells: number[] = []
  for (let i = 0; i < 364; i++) {
    const r = rand()
    const level = r < 0.45 ? 0 : r < 0.65 ? 1 : r < 0.82 ? 2 : r < 0.93 ? 3 : 4
    cells.push(level)
  }
  return cells
}

const heatMap = generateHeatMap()


const levelColors = [
  'bg-surface-2',
  'bg-[var(--purple)]/20',
  'bg-[var(--purple)]/40',
  'bg-[var(--purple)]/70',
  'bg-[var(--purple)]',
]

const statCards = [
  { icon: GithubIcon, label: 'Public Repos', value: githubStats.repos, color: 'bg-[var(--purple)]' },
  { icon: Star, label: 'Total Stars', value: githubStats.stars, color: 'bg-[var(--purple-dark)]' },
  { icon: Activity, label: 'Contributions', value: githubStats.contributions, color: 'bg-surface-3' },
  { icon: GitFork, label: 'Day Streak', value: githubStats.streak, color: 'bg-surface-2' },
]

export function GitHub() {
  return (
    <AnimatedSection id="github" className="section-padding section-github section-rule">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionLabel
          label="GitHub"
          heading="Open source activity"
          subheading="A snapshot of my development activity and code contributions."
        />

        {/* Stats cards */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {statCards.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="rounded-2xl border border-border bg-background p-5 hover:border-[var(--purple)]/30 hover:shadow-card-hover transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -3 }}
            >
              <div className={`size-10 rounded-xl ${stat.color} flex items-center justify-center mb-3 shadow-sm`}>
                <stat.icon className="size-5 text-white" />
              </div>
              <p className="text-2xl font-bold text-foreground">{stat.value.toLocaleString()}+</p>
              <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 grid lg:grid-cols-3 gap-6">
          {/* Contribution heatmap */}
          <motion.div
            className="lg:col-span-2 rounded-3xl border border-border bg-background p-6 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-foreground">Contribution Graph</h3>
              <a
                href={`https://github.com/${githubStats.username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-[var(--purple)] hover:underline"
              >
                <GithubIcon className="size-3" />
                View on GitHub
              </a>
            </div>

            {/* Heat map grid */}
            <div className="overflow-x-auto pb-2">
              <div
                className="grid gap-0.5"
                style={{ gridTemplateColumns: 'repeat(52, minmax(0, 1fr))', gridTemplateRows: 'repeat(7, minmax(0, 1fr))' }}
                aria-label="GitHub contribution heatmap"
              >
                {heatMap.map((level, i) => (
                  <motion.div
                    key={i}
                    className={`size-2.5 rounded-sm ${levelColors[level]} cursor-default`}
                    title={`${level} contributions`}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.0005 }}
                  />
                ))}
              </div>
            </div>

            {/* Legend */}
            <div className="flex items-center justify-end gap-1.5 text-[11px] text-muted-foreground">
              <span>Less</span>
              {levelColors.map((c, i) => (
                <div key={i} className={`size-2.5 rounded-sm ${c}`} />
              ))}
              <span>More</span>
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            className="rounded-3xl border border-border bg-background p-6 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-2">
              <div className="size-8 rounded-xl bg-[var(--purple)]/10 flex items-center justify-center">
                <Code2 className="size-4 text-[var(--purple)]" />
              </div>
              <h3 className="font-semibold text-foreground">Top Languages</h3>
            </div>

            {/* Donut using conic-gradient */}
            <div className="flex justify-center">
              <div
                className="size-36 rounded-full shadow-sm"
                style={{
                  background: `conic-gradient(${githubStats.languages
                    .map((l, i) => {
                      const prev = githubStats.languages.slice(0, i).reduce((acc, l) => acc + l.percentage, 0)
                      return `${l.color} ${prev}% ${prev + l.percentage}%`
                    })
                    .join(', ')})`,
                }}
                aria-label="Language distribution chart"
              >
                <div className="size-full rounded-full bg-background m-auto flex items-center justify-center"
                  style={{ margin: '16px', width: 'calc(100% - 32px)', height: 'calc(100% - 32px)' }}>
                </div>
              </div>
            </div>

            <div className="space-y-2.5">
              {githubStats.languages.map((lang) => (
                <div key={lang.name} className="flex items-center gap-2">
                  <div
                    className="size-2.5 rounded-full shrink-0"
                    style={{ background: lang.color }}
                  />
                  <span className="flex-1 text-xs text-foreground">{lang.name}</span>
                  <span className="text-xs font-medium text-muted-foreground">{lang.percentage}%</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Recent activity */}
        {/* <motion.div
          className="mt-6 rounded-3xl border border-border bg-background p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="font-semibold text-foreground mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {githubStats.recentActivity.map((activity, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-surface-1 transition-colors"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.08 }}
              >
                <div className="size-8 rounded-xl bg-[var(--purple)]/10 flex items-center justify-center shrink-0">
                  <GithubIcon className="size-4 text-[var(--purple)]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-foreground">
                    <span className="font-medium">{activity.action}</span>{' '}
                    <span className="text-[var(--purple)] font-mono text-xs">{activity.repo}</span>
                  </p>
                  <p className="text-xs text-muted-foreground truncate">{activity.message}</p>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">{activity.time}</span>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </AnimatedSection>
  )
}
