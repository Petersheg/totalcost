import httpClient from './httpclient'

const endPoint = process.env.VUE_APP_FEATURE_URL;

const getServices = () => httpClient.get(endPoint);

export{
    getServices
}