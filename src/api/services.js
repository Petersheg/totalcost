import httpClient from './httpclient'

const endPoint = process.env.VUE_APP_featureURL;

const getServices = () => httpClient.get(endPoint);

export{
    getServices
}