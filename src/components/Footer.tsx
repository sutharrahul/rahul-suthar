import Link from 'next/link'
import React from 'react'

import Image from 'next/image'
import { BULT_WITH_TECH, SOCIAL_MEDIA_LINKS } from './const'

export default function Footer() {
    return (
        <div className="my-10 max-w-[680px] mx-auto">
            <div className="h-[0.5px] bg-[#e0e0e088]"></div>
            <div className="flex justify-between my-5">
                <div className="flex flex-col gap-2">
                    {SOCIAL_MEDIA_LINKS?.map((links) => (
                        <Link
                            className="flex items-center gap-2 w-fit hover:text-[#0088f2] duration-150"
                            target="_blank"
                            key={links?.title}
                            href={links?.href}
                        >
                            {links?.icon}
                            {links?.title}
                        </Link>
                    ))}
                </div>
                <Image
                    className="h-20"
                    width={80}
                    height={80}
                    src="/assets/logoForDarkMode.png"
                    alt="logo"
                />
                {/* <img className="h-20" src="assets/logoForDarkMode.png" alt="logo" /> */}
            </div>
            <div className="h-[0.5px] bg-[#e0e0e088]"></div>
            <div className="flex justify-between mt-3">
                <div className="text-xs flex flex-wrap gap-1">
                    Built with{' '}
                    {BULT_WITH_TECH?.map(({ title, href }) => (
                        <>
                            {title == 'Vercel' && (
                                <span>{' and Deployed on '}</span>
                            )}
                            <Link
                                target="_blank"
                                className="hover:text-[#0088f2] duration-150"
                                key={title}
                                href={href}
                            >
                                {title}
                            </Link>
                        </>
                    ))}
                </div>
                <span className="text-xs text-end">Crafted by Rahul</span>
            </div>
        </div>
    )
}
