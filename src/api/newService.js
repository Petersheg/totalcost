import axios from 'axios'

export default class FetchAPI{
    constructor(baseURL){
        this.baseURL = baseURL
    }
    async getData(Uri){
        const response = await axios.get(this.baseURL+Uri);
        return response;
    }
}