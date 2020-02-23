import axios from 'axios';

/**
 *
 * @returns {string|*}
 */
function getToken() {
    try {
        let state = localStorage.getItem('state');
        if (state) {
            let userInfo = JSON.parse(state).user;
            if (!!userInfo) {
                return userInfo.authToken;
            } else {
                return 'none';
            }
        } else {
            return 'none';
        }
    } catch (e) {
        return 'none';
    }
}

/**
 *
 * @type {{headers: {"Content-Type": string}}}
 */
const defaultOptions = {
    headers: {
        'Content-Type': 'application/json'
    }
};

/**
 *
 * @type {Object}
 */
let rootApi = axios.create(defaultOptions);

// rootApi.interceptors.request.use(function (config) {
//         const token = localStorage.getItem('token');
//         config.headers.Authorization = token ? `Bearer ${getToken()}` : '';
//         return config;
//     }
// );

rootApi.interceptors.response.use(undefined, function(error) {
    console.log(error);
    return Promise.reject(error);
});

export default rootApi;
