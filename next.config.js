/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "images.ctfassets.net",
      "localhost",
      "johnchimezie.online",
      "residentapi.johnchimezie.online",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "residentapi.johnchimezie.online",
        pathname: "/userFiles",
        // protocol: "http",
        // hostname: "localhost:8888",
        //pathname: "/",
      },
    ],
  },
};
// host
//module.exports = { images: { domains: ['example.com'], formats: ['image/avif', 'image/webp'], }, }
