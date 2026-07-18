'use client'

import { useState } from 'react'
import { AnimatedSection } from '@/components/shared/AnimatedSection'
import { SectionLabel } from '@/components/shared/SectionLabel'
import { skills } from '@/data/portfolio'
import { cn } from '@/lib/utils'

export function Skills() {
  const [activeTab, setActiveTab] = useState(0)
  const activeCategory = skills[activeTab]

  return (
    <AnimatedSection id="skills" className="section-padding section-skills section-rule">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionLabel
          label="Skills"
          heading="Technology expertise"
          subheading="An interactive explorer of the tools and technologies I work with."
        />

        {/* Category tabs */}
        <div className="mt-10 flex flex-wrap gap-2">
          {skills.map((cat, i) => (
            <button
              key={cat.category}
              onClick={() => setActiveTab(i)}
              className={cn(
                'flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-colors duration-200',
                activeTab === i
                  ? 'bg-[var(--purple)] text-white'
                  : 'border border-border bg-background text-muted-foreground hover:text-foreground hover:border-[var(--purple)]/30 hover:bg-[var(--purple)]/6'
              )}
              id={`skills-tab-${cat.category.toLowerCase()}`}
              aria-selected={activeTab === i}
              role="tab"
            >
              <span>{cat.icon}</span>
              {cat.category}
            </button>
          ))}
        </div>

        {/* Skill cards */}
        <div key={activeTab} className="tab-fade-in mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4" role="tabpanel">
          {activeCategory.items.map((skill) => (
            <div
              key={skill.name}
              className="rounded-2xl border border-border bg-background p-5 transition-all duration-200 hover:border-[var(--purple)]/30 hover:shadow-card-hover hover:-translate-y-0.5"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-foreground">{skill.name}</h4>
                <span className="text-xs font-mono text-[var(--purple)] bg-[var(--purple)]/8 px-2 py-0.5 rounded-md">
                  {skill.years}yr{skill.years !== 1 ? 's' : ''}
                </span>
              </div>

              {/* Proficiency bar */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Proficiency</span>
                  <span className="font-medium text-foreground">{skill.level}%</span>
                </div>
                <div className="relative h-1.5 rounded-full bg-muted overflow-hidden">
                  <div
                    className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[var(--purple)] to-[var(--purple-light)]"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>

              {/* Level label */}
              <p className="mt-3 text-xs text-muted-foreground">
                {skill.level >= 90
                  ? '🏆 Expert'
                  : skill.level >= 80
                  ? '⭐ Advanced'
                  : skill.level >= 70
                  ? '✅ Proficient'
                  : '📈 Intermediate'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
