// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/products",
        destination: "https://quickwindowswash.loca.lt",
      },
    ];
  },
};

module.exports = nextConfig;
