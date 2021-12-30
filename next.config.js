module.exports = {
  pageExtensions: ['jsx'],
  async redirects() {
    return [
      {
        source: '/',
        destination: '/frontend',
        permanent: false,
      },
    ]
  },

  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Unset client-side javascript that only works server-side
      // https://github.com/vercel/next.js/issues/7755#issuecomment-508633125
      config.node = { fs: 'empty', module: 'empty' }
    }

    // svgr config
    // import svg using inline react element.
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}
