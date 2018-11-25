import {baseURL} from "../../../services/services";
import {IQuestion} from "./Models";

const axios = require('axios');

axios.defaults.baseURL = baseURL;

/**
 * Получить список всех вопросов.
 */
export function getQuestions (onSuccess: (result: IQuestion[]) => void, onError: () => void) {
    return axios.get("/questions")
        .then(onSuccess, onError);
}

/**
 * добавить вопрос.
 */
export function addQuestion (question: IQuestion, onSuccess: () => void, onError: () => void) {
    return axios.post("/questions", question).then(onSuccess, onError);
}
