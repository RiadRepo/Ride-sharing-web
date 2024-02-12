/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "dummyimage.com",

    ],
    dangerouslyAllowSVG: true,
    imageSizes: [48, 64, 88, 96, 128, 256, 384, 416],
  },
};

export default nextConfig;
