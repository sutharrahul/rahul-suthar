import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        domains: ['avatars.githubusercontent.com', 'drive.google.com'],
    },
    env: {
        RESUME_THUMBNAIL_URL: process.env.RESUME_THUMBNAIL_URL,
        RESUME_URL: process.env.RESUME_URL,
    },
    async headers() {
        return [
            {
                source: '/iframe',
                headers: [
                    {
                        key: 'Content-Security-Policy',
                        value: "frame-src 'self' https://binc-frontend.vercel.app",
                    },
                ],
            },
        ]
    },
}

export default nextConfig
