import Axios from 'axios';

export const FetchData = async (url, key, cb) => {
    const result = await Axios.get(url);

    cb(result.data.key);
}