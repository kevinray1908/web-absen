/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['nextui-docs-v2.vercel.app'],
    },
    productionBrowserSourceMaps: false, // Disable source maps in production
};

export default nextConfig;
