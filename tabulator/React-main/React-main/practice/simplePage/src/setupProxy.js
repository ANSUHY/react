const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(createProxyMiddleware('/v1', {
        target: 'https://openapi.naver.com',
        changeOrigin: true,
    }))
};

// http://localhost:3000/v1/search/movie.json?query=%ED%95%B4%EB%A6%AC%ED%8F%AC%ED%84%B0&start=1