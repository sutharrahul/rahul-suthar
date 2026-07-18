import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
            { protocol: 'https', hostname: 'drive.google.com' },
        ],
    },
    env: {
        RESUME_THUMBNAIL_URL: process.env.RESUME_THUMBNAIL_URL,
        RESUME_URL: process.env.RESUME_URL,
    },
}

export default nextConfig
