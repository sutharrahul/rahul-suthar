import type { Config } from 'tailwindcss'
import { IconLocation } from '@tabler/icons-react'

const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const {
    default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette')
export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
            },
            cursor: {
                fancy: '',
            },
        },
        keyframes: {
            shimmer: {
                '100%': {
                    transform: 'translateX(100%)',
                },
            },
        },
        // fontFamily: {
        //   serif: ['ui-serif', 'Georgia'],
        //   poppins: ['Poppins', 'sans-serif'],
        //   georgia: ['Georgia', 'serif'],
        //   mono : ['']
        // },
    },
    plugins: [addVariablesForColors],
} satisfies Config

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
    let allColors = flattenColorPalette(theme('colors'))
    let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
    )

    addBase({
        ':root': newVars,
    })
}
