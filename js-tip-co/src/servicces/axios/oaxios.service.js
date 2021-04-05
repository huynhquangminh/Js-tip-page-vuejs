import axios from 'axios'

const instance = axios.create();

//  all request
instance.interceptors.request((config) => {
    return config;
}), (error) => {
    return Promise.reject(error)
}

// all response
instance.interceptors.response((response) => {
    return response;
}), (error) => {
    return Promise.reject(error)
}

export default instance