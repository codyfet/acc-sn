const axios = require('axios');

axios.defaults.baseURL = 'http://10.124.0.7:3000';

/**
 * Получить список всех пользователей.
 */
export function getUsers () {
    return axios.get("/users")
        .then(function (response: any) {
            // handle success
            console.log('response');
            console.log(response);
        })
        .catch(function (error: any) {
            // handle error
            console.log('error');
            console.log(error);
        })
        .then(function () {
            // always executed
        });
}
