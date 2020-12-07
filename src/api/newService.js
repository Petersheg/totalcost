import axios from 'axios'

axios.defaults.withCredentials = true
axios.defaults.baseURL = process.env.VUE_APP_baseURL;//set axios base url
  
export default class FetchAPI{
    //base method For all Get requests
    async getData(Uri){
        const response = await axios.get(Uri);
        return response;
    }
    //base method For all Post request
    async authUser(Uri,form){
        const res = await axios.post(Uri,form);
        return res;
    }
}