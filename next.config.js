const withPlugins = require('next-compose-plugins')

const nextConfig = {
  env: {
    BACKEND_URL: 'http://localhost:4000',
    NEXT_PUBLIC_BACKEND_URL: 'http://localhost:4000',
    NEXT_PUBLIC_ASSETS_URL: 'http://localhost:3000',
    APP_CHECKOUT_KEY: process.env.NODE_ENV == 'development' ? 'test-checkout-key-52dd3e36d8a041009e14c31eae9a7525' : 'live-checkout-key-e29012ad2c0647d2b0b33253da9abc25'
  },
}

module.exports = withPlugins(
  [
    [
      // withCSS,
      {
        cssLoaderOptions: {
          url: false,
        },
      },
    ],
    // withTM,
  ],
  nextConfig
)
