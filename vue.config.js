module.exports = {
    pwa: {
      manifestOptions: {
        background_color: 'hotpink'
      },
      name: 'Info App',
      themeColor: 'steelblue',
      workboxOptions: {
        runtimeCaching: [
          {
            handler: 'NetworkFirst',
            options: {
              networkTimeoutSeconds: 5
            },
            urlPattern: 'https://game-of-thrones-quotes.herokuapp.com/v1/random/20'
          }
        ]
      }

    }
  }