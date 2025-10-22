import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Removed 'output: export' to enable server-side rendering on Vercel
  images: {
    unoptimized: false,
  },
};

export default nextConfig;
