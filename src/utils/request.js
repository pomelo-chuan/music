import axios from 'axios';
const REACT_APP_API_ROOT = process.env.REACT_APP_API_ROOT;

async function request(url, opt = {}) {
    try {
        const response = await axios(Object.assign(opt, {
            url: REACT_APP_API_ROOT + url,
        }));
        const {
            code,
            msg,
            ...other
        } = response.data;
        if (Number(code) === 200) {
            return other;
        } else {
            throw new Error(msg);
        }
    } catch (error) {
        throw new Error(error.message);
    }
}

export default request;
