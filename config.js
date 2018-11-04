module.exports = {
    ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || 3000,
    URL: process.env.BASE_URL || 'http//localhost',
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://qwerty1234:qwerty1234@ds151453.mlab.com:51453/restify_api'
}