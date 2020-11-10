import { createStore } from 'vuex'
import FetchAPI from '../api/newService'

export default createStore({
  state: {
    services:null,
    vendors:null,
    allservices:null
  },
  mutations: {
    addService: (state,data) => {
      state.services = data;
    },

    addVendors:(state,data) =>{
      state.vendors = data
    },

    addAllServices: (state,data)=>{
      state.allservices = data
    }
  },
  actions: {
    async fetchServices(state){
      try {
        const featureService = new FetchAPI(process.env.VUE_APP_baseURL);
        const response =await featureService.getData(process.env.VUE_APP_featureURL) //await axios.get(process.env.VUE_APP_baseURL+process.env.VUE_APP_featureURL);

        state.commit('addService', response.data.data)
      } catch (error) {
        console.log(error);
      }
    },

    async fetchVendors(state){
      try {
        const vendor = new FetchAPI(process.env.VUE_APP_baseURL);
        const response = await vendor.getData(process.env.VUE_APP_vendorURL);

        state.commit('addVendors', response.data.data)
      } catch (error) {
        console.log(error);
      }
    },

    async allServices(state){
      try {
        const allService = new FetchAPI(process.env.VUE_APP_baseURL);
        const response = await allService.getData(process.env.VUE_APP_allServiceURL);

        state.commit('addAllServices', response.data.data)
      } catch (error) {
        console.log(error);
      }
    }
  },
  getters:{
    returnServices : state => state.services,
    returnVendors: state => state.vendors,
    returnAllServices : state => state.allservices
  },
  modules: {
  }
})
