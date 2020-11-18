const withCSS = require('@zeit/next-css')

module.exports = {
    plugins: withCSS({
        cssLoaderOptions: {
            cssModules: true
        }
    }),
    publicRuntimeConfig: {
        API: process.env.API,
        DOMAIN: process.env.DOMAIN,
        MONGO_DB: process.env.MONGO_DB
    },
    
}