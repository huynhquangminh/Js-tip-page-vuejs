import axios from 'axios'

const instance = axios.create();

//  all request
instance.interceptors.request((config) => {
    const idToken = 'my token'
    if (idToken) config.headers.Authorization = 'Bearer ' + idToken
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