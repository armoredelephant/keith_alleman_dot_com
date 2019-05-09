import Axios from 'axios';

const FetchData = async (url, key, cb) => {
  const result = await Axios.get(url);

  cb(result.data.key);
};

export default FetchData;
