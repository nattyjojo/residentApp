/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ["lh3.googleusercontent.com", "images.ctfassets.net", "localhost"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "5000",
        pathname: "/",
      },
    ],
  },
};
//module.exports = { images: { domains: ['example.com'], formats: ['image/avif', 'image/webp'], }, }
