const withCSS = require('@zeit/next-css')

module.exports = {
    plugins: withCSS({
        cssLoaderOptions: {
            cssModules: true
        }
    }),
    publicRuntimeConfig: {
        API: 'http://localhost:3000/api',
        DOMAIN: 'http://localhost:3000',
        MONGO_DB: process.env.MONGO_DB
    },
    
}