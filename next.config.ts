import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "dcdws.blob.core.windows.net",
      },
      {
        protocol: "https",
        hostname: "imagescf.dealercenter.net",
      },
    ],
  },
};

export default nextConfig;
