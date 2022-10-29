import axios from "axios";
import queryString from "query-string";

const axiosReact = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'content-type': 'application/json',
        },
        paramsSerializer: params => queryString.stringify(params),
});

export default axiosReact;