import rootApi from '../apiRoot';

import api_path from '../../config/config';

export function authLogin(data, callback) {
    rootApi
        .post(api_path.login, data)
        .then(res => {
            return callback(null, res.data);
        })
        .catch(err => {
            return callback(err);
        });
}

export function authRegister(data, callback) {
    rootApi
        .post(api_path.auth.register, data)
        .then(res => {
            return callback(res.data);
        })
        .catch(err => {
            return callback(err);
        });
}
