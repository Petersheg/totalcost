import axios from 'axios';
import store from '../store';
import router from '../router'

const token = localStorage.getItem('token');

export const httpClient = axios.create({
    baseURL: process.env.VUE_APP_baseURL,//set axios base url
    withCredentials : true,
    headers:{
        'Authorization':token
    }
})

//axios.defaults.withCredentials = false
//axios.defaults.baseURL = process.env.VUE_APP_baseURL;//set axios base url

httpClient.interceptors.response.use((res)=> res, function (error) {
    if (error) {
      const originalRequest = error.config;
      if (error.response.status === 401 && !originalRequest._retry) {
        console.log('There is error');
          originalRequest._retry = true;
          store.dispatch('LogOut')
          return router.go('/login')
      }
    }
})
  
export class FetchAPI{
    //base method For all Get requests
    async getData(Uri,config){
        const response = await httpClient.get(Uri,config);
        return response;
    }
    //base method For all Post request
    async authUser(Uri,form){
        const res = await httpClient.post(Uri,form);
        return res;
    }
}