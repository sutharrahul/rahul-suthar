import React from 'react'

export default function page() {
  return (
    <div className="w-full h-screen">
      <iframe 
        src="https://binc-frontend.vercel.app/pricing-calculator/iframe" 
        className="w-full h-full border-0"
        title="Pricing Calculator"
      />
    </div>
  )
}
