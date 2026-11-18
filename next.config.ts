/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/velezhinskaya-site',
  assetPrefix: '/velezhinskaya-site',
  trailingSlash: true,
  outputFileTracingRoot: __dirname, // <--- Вот эта строчка уберет предупреждение
};

export default nextConfig;