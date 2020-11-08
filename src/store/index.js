import { createStore } from 'vuex'
import getServices from '../api/services'
import axios from 'axios'


export default createStore({
  state: {
    services:null,
  },
  mutations: {
    addService: (state,data) => {
      state.services = data;
    },
  },
  actions: {
     async fetchServices(state){
      try {
        const service = await axios.get(process.env.VUE_APP_baseURL+process.env.VUE_APP_featureURL);

        state.commit('addService',service.data.data)
        console.log(service.data.data);
      } catch (error) {
        console.log(error);
      }
    }
  },
  getters:{
    returnServices : state => state.services
  },
  modules: {
  }
})
