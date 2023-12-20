/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "images.ctfassets.net",
      "localhost",
      "funny-madeleine-e88430.netlify.app",
      "johnchimezie.online",
      "residentapi.johnchimezie.online",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "residentapi.johnchimezie.online",
        //pathname: "/",
        // protocol: "http",
        // hostname: "localhost:8888",
        // pathname: "/",
      },
    ],
  },
};
//module.exports = { images: { domains: ['example.com'], formats: ['image/avif', 'image/webp'], }, }
