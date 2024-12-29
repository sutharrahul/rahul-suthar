import React from 'react'
import { IconArrowUpRight } from '@tabler/icons-react'
import Link from 'next/link'
import Badge from './Badge'

type Project = {
    id: string
    title: string
    link: string
    description: string
    technologies: (string | null | undefined)[]
}

type Prop = {
    projects: Project[]
}

export default function Project({ projects }: Prop) {
    return (
        <div className="flex flex-col gap-2 mt-9">
            <h3 className="text-xl font-medium">Projects</h3>
            <div className="h-[0.5px] bg-[#e0e0e088]"></div>
            {projects?.map(({ id, link, title, description, technologies }) => (
                <div
                    key={id}
                    className="flex flex-col gap-2 p-4 border-[0.5px] border-[#e0e0e088] rounded-lg bg-[#111111] mt-3"
                >
                    <Link
                        target="_blank"
                        href={link}
                        className="text-xl font-semibold flex items-center gap-1"
                    >
                        {title} <IconArrowUpRight className="h-5" />
                    </Link>
                    <p>{description}</p>
                    <div className="mt-4 flex flex-wrap gap-1">
                        {technologies?.map(
                            (tech) =>
                                tech && (
                                    <Badge
                                        key={tech}
                                        label={tech?.toLowerCase()}
                                    />
                                ),
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}
