//import axios
import axios from 'axios';

const Api = axios.create({
  //set endpoint API
  // baseURL: 'http://localhost:8000',
  baseURL: 'https://desa-api.appdev.my.id',

  //set header axios
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default Api;
