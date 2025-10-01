import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    remotePatterns: [
      // Add remote image hosts here later if needed
      // { protocol: "https", hostname: "images.unsplash.com" }
    ],
  },
};

export default nextConfig;
