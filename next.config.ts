import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    ppr: 'incremental',
    reactCompiler: true,
  },
};

export default nextConfig;
