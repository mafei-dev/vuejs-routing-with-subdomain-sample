module.exports = {
    outputDir: process.env.NODE_ENV === 'production'
        ? "/var/www/html/admin/dist"
        : '/dist',
    publicPath: "./"
}
