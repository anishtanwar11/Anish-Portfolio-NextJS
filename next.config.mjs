/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["assets.aceternity.com",
      'media.licdn.com', // Add other domains as needed
      'ipsf.net',
      'res.cloudinary.com',
      'anishtanwar.netlify.app',
      'asset.cloudinary.com',
      'unpkg.com',
    ],
  },
};

export default nextConfig;
