const API = {
    ajax: {
        // https://goldk11.github.io/React/
        query: "/v1/search/movie.json",
        // query: "https://openapi.naver.com/v1/search/movie.json",
        key: {
            // 배포
            // CLIENT_ID: "FF2k3AmMFj8V0HvU6ul8",
            // CLIENT_SECRET: "JxTaiRkztJ",
            // 개발
            CLIENT_ID: "DXGGyoy_R6h_AXjrehxL",
            CLIENT_SECRET: "oYB51nGp7j",
        },
        config: {
            headers: {
                'X-Naver-Client-Id': "DXGGyoy_R6h_AXjrehxL",
                'X-Naver-Client-Secret': "oYB51nGp7j"
            },
            mode: {
                CORS: "cors"
            }
        },
        get: {
            // 
        },
        post: {
            // 
        }
    },

    default: {
        image: "https://via.placeholder.com/100"
    }


};

export default API