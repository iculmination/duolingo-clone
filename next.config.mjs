/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only small local SVG/PNG assets are used; serving them as-is disables the
  // /_next/image optimizer endpoint and its known CVEs on Next 14.
  images: { unoptimized: true },
  async headers() {
    return [
      {
        source: "/api/(.*)",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization",
          },
          {
            key: "Content-Range",
            value: "bytes : 0-9/*",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
