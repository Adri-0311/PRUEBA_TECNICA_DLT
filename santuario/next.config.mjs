import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(process.cwd(), 'styles')],
  },
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/',
        destination: '/login',
        permanent: true,
      },]
  },
};

export default nextConfig;
