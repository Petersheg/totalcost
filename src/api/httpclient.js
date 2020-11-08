import axios from 'axios';

const httpClient = axios.create({
    baseURL : process.env.VUE_APP_baseURL
});

export default httpClient;