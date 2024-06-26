// next.config.js

module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/objective/:path*", // Adjust the path as needed
        destination: "https://api.objective.inc/v1/:path*", // Replace with your API URL
      },
    ];
  },
};
