/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["192.168.38.21", "localhost"],
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "ss5vlswhqmiddtca.public.blob.vercel-storage.com",
      },
    ],
  },
}

export default nextConfig
