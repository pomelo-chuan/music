import axios from 'axios';

export default function (url, options = {}) {

    const URL = `http://localhost:4000${url}`;

    return axios(Object.assign({ url: URL }, options)).then(response => {
        if (response.status < 200 || response.status > 300) {
            throw new Error('requset error');
        }
        if (!response.data) {
            throw new Error('response nothing');
        }
        const {
            code,
        } = response.data;
        if (code === 200) {
            return response.data;
        } else {
            throw new Error('requset error');
        }
    }).catch(error => {
        throw new Error(error.message);
    });
}
