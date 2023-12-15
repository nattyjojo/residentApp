/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "images.ctfassets.net",
      "localhost",
      "funny-madeleine-e88430.netlify.app",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "funny-madeleine-e88430.netlify.app",
        pathname: "/",
      },
    ],
  },
};
//module.exports = { images: { domains: ['example.com'], formats: ['image/avif', 'image/webp'], }, }
