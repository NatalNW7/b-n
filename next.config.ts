import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "a-static.mlcdn.com.br" },
      { protocol: "https", hostname: "imgs.casasbahia.com.br" },
      { protocol: "https", hostname: "m.magazineluiza.com.br" },
      { protocol: "https", hostname: "m.media-amazon.com" },
      { protocol: "https", hostname: "http2.mlstatic.com" },
      { protocol: "https", hostname: "product-hub-prd.madeiramadeira.com.br" },
    ],
  },
};

export default nextConfig;
