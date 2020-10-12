const withCSS = require('@zeit/next-css')

module.exports = {
    plugins: withCSS({
        cssLoaderOptions: {
            cssModules: true
        }
    }),
    publicRuntimeConfig: {
        API: 'http://localhost:8000',
        DOMAIN: 'http://localhost:3000',
    }
}