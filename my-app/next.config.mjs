/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["drive.google.com", "images.pexels.com"], // Corrected array
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
  
  