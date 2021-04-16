import axios from '../axios/axios.service'

const baseDomain = process.env.VUE_APP_DEFIDE_ADMIN_API_BASE_URL
const baseUrl = process.env.BASE_URL
const options = {
    headers: {
        'Content-Type': 'application/json'
    }
}

/**
 * Http GET
 */
export async function get (url, params = {}) {
    const searchParams = new URLSearchParams()
    for (const [key, value] of Object.entries(params)) {
        if (Array.isArray(value)) { // params [1, 2, 3]
            value.forEach(val => {
                searchParams.append(key, val)
            })
        } else if (value !== null) {
            searchParams.append(key, value)
        }
    }
    const newOptions = {
        ...options,
        params: searchParams
    }
    try {
        let requestURL = ''
        if (url.indexOf('.json') === -1) {
            requestURL = `${baseDomain}${url}`
        } else {
            requestURL = `${baseUrl}api/${url}`
        }
        const result = await axios.get(requestURL, newOptions)
        return result.data
    } catch (error) {
        //  handle error
        throw errorWrapper (error)
    }
}

/**
 * Http POST
 */

 export async function post (url, params = {}) {
    const newOptions = {
        ...options
    }
    try {
        let requestURL = ''
        if (url.indexOf('.json') === -1) {
            requestURL = `${baseDomain}${url}`
        } else {
            requestURL = `${baseUrl}api/${url}`
        }
        const result = await axios.post(requestURL, params,  newOptions)
        return result.data
    } catch (error) {
        //  handle error
        throw errorWrapper (error)
    }
}

/**
 * Http PUT
 */

 export async function put (url, params = {}) {
    const newOptions = {
        ...options
    }
    try {
        let requestURL = ''
        if (url.indexOf('.json') === -1) {
            requestURL = `${baseDomain}${url}`
        } else {
            requestURL = `${baseUrl}api/${url}`
        }
        const result = await axios.put(requestURL, params,  newOptions)
        return result.data
    } catch (error) {
        //  handle error
        throw errorWrapper (error)
    }
}

/**
 * Http DELETE
 */
 export async function del (url) {
    const newOptions = {
        ...options
    }

    try {
        let requestURL = ''
        if (url.indexOf('.json') === -1) {
            requestURL = `${baseDomain}${url}`
        } else {
            requestURL = `${baseUrl}api/${url}`
        }
        const result = await axios.delete(requestURL, newOptions)
        return result.data
    } catch (error) {
        throw errorWrapper (error)
    }
}

export function errorWrapper (error) {
    if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
    } else if (error.request) {
        console.log(error.request);
    } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
    }
    return error
}