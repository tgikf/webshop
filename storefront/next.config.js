const { withStoreConfig } = require("./store-config")
const store = require("./store.config.json")

module.exports = withStoreConfig({
  features: store.features,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "medusa-public-images.s3.eu-west-1.amazonaws.com",
      },
      {
        protocol: "http",
        hostname: "**",
        port: "3000",
        pathname: "/webshop/**",
      },
    ],
  },
})

console.log("next.config.js", JSON.stringify(module.exports, null, 2))
