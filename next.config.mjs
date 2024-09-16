/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['i.ibb.co'], // Add this line if you still want to use external images
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'i.ibb.co',
          port: '',
          pathname: '/**',
        },
      ],
    },
  }

export default nextConfig;
