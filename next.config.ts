import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure Next/Turbopack uses this folder as the workspace root
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
