import React from 'react'
type BadgeProps = {
    label: string;
  };
export default function Badge({label}: BadgeProps) {
  return (
    <span className='border py-px px-2 rounded-[5px] bg-[#EAEAEA] text-sm font-semibold text-[#252525] '>{label}</span>
  )
}
