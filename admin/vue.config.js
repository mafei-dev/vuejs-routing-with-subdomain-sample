module.exports = {
    outputDir: process.env.NODE_ENV === 'production'
        // ? "/var/www/html/admin/dist" /*if you want you can change*/
        ? "/dist"
        : '/dist',
    publicPath: "./"
}
