// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     reactStrictMode: true,
//     images: {
//       domains: ['cloud.appwrite.io'], 
//     },
// };

// export default nextConfig;

import withBundleAnalyzer from '@next/bundle-analyzer';

const bundleAnalyzerConfig = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cloud.appwrite.io'], 
  },
};

export default bundleAnalyzerConfig(nextConfig);

