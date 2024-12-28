import React from 'react'
type BadgeProps = {
    label: string
}
export default function Badge({ label }: BadgeProps) {
    return (
        <span className="py-px px-2 rounded-[5px] bg-[#fff]/90 font-semibold backdrop-blur-sm font-mono text-xs text-[#252525]">
            {label}
        </span>
    )
}
