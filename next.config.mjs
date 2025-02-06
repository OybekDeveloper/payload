import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'https://vm4983125.25ssd.had.wf:5000',
      'https://www.shutterstock.com',
      'https://joinposter.com',
      'https://rolling-202741958960.asia-south1.run.app',
    ],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'www.shutterstock.com',
      },
      {
        protocol: 'https',
        hostname: 'joinposter.com',
      },
    ],
  },
}

export default withPayload(nextConfig)
