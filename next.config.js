/** @type {import('next').NextConfig} */
const nextConfig={output:process.env.STANDALONE?'standalone':undefined};
export default nextConfig;
