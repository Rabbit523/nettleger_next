const withPlugins = require('next-compose-plugins')

const nextConfig = {
  env: {
    BACKEND_URL: 'http://localhost:4000',
    NEXT_PUBLIC_BACKEND_URL: 'http://localhost:4000',
    NEXT_PUBLIC_ASSETS_URL: 'http://localhost:3000'
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
