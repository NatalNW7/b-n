import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "brastemp.vtexassets.com" },
      { protocol: "https", hostname: "images.tcdn.com.br" },
      { protocol: "https", hostname: "cdn.awsli.com.br" },
      { protocol: "https", hostname: "images-americanas.b2w.io" },
    ],
  },
};

export default nextConfig;
