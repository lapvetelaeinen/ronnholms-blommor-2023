/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["ronnholms-blommor-bilder.s3.eu-west-2.amazonaws.com"],
  },
}

module.exports = nextConfig
