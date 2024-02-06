import axios from 'axios';

export default class APIWrapper {
    static async get(url: string) {
        if (process.env.REACT_APP_REACT_ENV === 'development') {
            console.log('APIWrapper.get', url);
            return await axios.get(url);
        }
        return await axios.get(url);
    }
    static async post(url: string, data: any) {
        if (process.env.REACT_APP_REACT_ENV === 'development') {
            console.log('APIWrapper.post', url, data);
            return await axios.post(url, data);
        }
        return await axios.post(url, data);
    }
    static async put(url: string, data: any) {
        if (process.env.REACT_APP_REACT_ENV === 'development') {
            console.log('APIWrapper.put', url, data);
            return await axios.put(url, data);
        }
        return await axios.put(url, data);
    }
    static async delete(url: string) {
        if (process.env.REACT_APP_REACT_ENV === 'development') {
            console.log('APIWrapper.delete', url);
            return await axios.delete(url);
        }
        return await axios.delete(url);
    }

}