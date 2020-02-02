module.exports = {
    outputDir: process.env.NODE_ENV === 'production'
        // ? "/var/www/html/admin/dist" /*if you want you can change*/
        ? __dirname + "/dist"
        : '/dist',
    publicPath: "../admin",
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    publicPath: './',
                },
            },
        ],
    },
}
