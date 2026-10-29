import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Old page URLs from the previous site layout.
  async redirects() {
    return [
      { source: "/services", destination: "/platforms", permanent: true },
      { source: "/mandates", destination: "/sectors", permanent: true },
      { source: "/partnerships", destination: "/why-syndicate", permanent: true },
    ];
  },
};

export default nextConfig;
