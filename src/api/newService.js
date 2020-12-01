import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.baseURL = process.env.VUE_APP_baseURL;
  
export default class FetchAPI{
    async getData(Uri){
        const response = await axios.get(Uri);
        return response;
    }

    async authUser(Uri,form){
        await axios.post(Uri);
        return form;
    }
}