import { LoginData } from "../models/Common";

const axios = require('axios');

export const baseURL = 'http://10.124.0.7:3000';
//export const baseURL = 'https://acc-delight.herokuapp.com';

axios.defaults.baseURL = baseURL;

/**
 * Функция логин.
 */
export function login (loginData: LoginData) {
    return axios.post("/users/login", {"enterpriseId": loginData.username, "password": loginData.password});
}

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
