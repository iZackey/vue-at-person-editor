function getPublicPath() {
    if (process.env.NODE_ENV === 'production') {
        // return 'https://izackey.github.io/vue-at-person-editor/';
        return '/'
    } else {
        return '/';
    }
}

module.exports = {
    publicPath: getPublicPath(),
    css: {
        extract: false,
    },
}
