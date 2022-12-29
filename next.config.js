/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["ronnholms-blommor-bilder.s3.eu-west-2.amazonaws.com"],
  },
  i18n: {
    // The locales you want to support in your app
    locales: ["se", "fi"],
    // The default locale you want to be used when visiting a non-locale prefixed path e.g. `/hello`
    defaultLocale: "se",
  },
}

module.exports = nextConfig
