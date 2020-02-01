module.exports = {
    outputDir: process.env.NODE_ENV === 'production'
        ? "/var/www/html/cashier/dist"
        : '/',
    publicPath: "./"
}
