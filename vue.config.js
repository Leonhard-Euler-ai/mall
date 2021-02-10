module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': 'src/common',
                'components': 'src/components',
                'network': 'src/network',
                'views': 'src/views',
            }
        }
    }
}