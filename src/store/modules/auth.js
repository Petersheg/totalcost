import FetchAPI from '../../api/newService'
import axios from 'axios'

const state= {
    services:null,
    vendors:null,
    allservices:null,
    user: null,
    message:null,
    data:null,
    regSuccess:null,
    regError:null,
    verySuccess:null,
    veryError:null,
    userEmail:null,
    token: localStorage.getItem('token') || '',

  };

const mutations={
    addService: (state,data) => {
      state.services = data;
    },

    addVendors:(state,data) =>{
      state.vendors = data
    },

    addAllServices: (state,data)=>{
      state.allservices = data
    },
    setUser(state, username, token){
        state.user = username
        state.token = token
    },

    logOut(state){
        state.user = null
    },
    addMessage(state,data){
        state.message = data
    },
    addData(state,data){
        state.data = data
    },
    addregSuccess(state,data){
        state.regSuccess = data
    },
    addregError(state,data){
        state.regError = data
    },
    addverySuccess(state,data){
        state.verySuccess = data
    },
    addveryError(state,data){
        state.veryError = data
    },
    adduserEmail(state,data){
        state.userEmail = data
    }
  };

const actions= {
    async fetchServices(state){
      try {
        const featureService = new FetchAPI();
        const response =await featureService.getData(process.env.VUE_APP_featureURL)

        state.commit('addService', response.data.data)
      } catch (error) {
        console.log(error);
      }
    },

    async fetchVendors(state){
      try {
        const vendor = new FetchAPI();
        const response = await vendor.getData(process.env.VUE_APP_vendorURL);

        state.commit('addVendors', response.data.data)
      } catch (error) {
        console.log(error);
      }
    },

    async allServices(state){
      try {
        const allService = new FetchAPI();
        const response = await allService.getData(process.env.VUE_APP_allServiceURL);

        state.commit('addAllServices', response.data.data)
      } catch (error) {
        console.log(error);
      }
    },

    async Register({commit}, form) {
        //const res = await axios.post('/vendor/new', form)
        const register = new FetchAPI();
        const res = await register.authUser(process.env.VUE_APP_vendorReg, form)
        try {
          commit('addregSuccess', res.data.data);
          commit('addregError', res.data.error_messages);
        } catch (error) {
          console.log(error);
        }

        await commit('userEmail',form.email);
        await commit('setUser', form.fullName);
      
    },

    async LogIn({commit}, form) {
        //const res = await axios.post('/identity/login', form)
        const login = new FetchAPI();
        const res = await login.authUser(process.env.VUE_APP_login, form);
        try {
          commit('addMessage', res.data.error_messages);
          commit('addData', res.data.status);

          const token = res.data.data.token;
          if(res.data.status === 'success'){
              localStorage.setItem('token',token);
              axios.defaults.headers.common['Authorization'] = token
          }
        } catch (error) {
          console.log(error)
          localStorage.removeItem('token')
        }  
    },
     
    async Verification({commit},verify){
        //const res = await axios.post('/identity/verify',verify);
        const varify = new FetchAPI();
        const res = await varify.authUser(process.env.VUE_APP_verify,verify)
        try {
          commit('addveryError',res.data.error_messages);
          commit('addverySuccess',res.data.status);
        } catch (error) {
          console.log(error);
        }

    },
      
    async LogOut({commit}){
        let user = null;
        localStorage.removeItem('token');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('regEmail');
        localStorage.removeItem('vuex');
        delete axios.defaults.headers.common['Authorization']
        commit('logOut',user)
      }
      
  };

const getters={
    returnServices : state => state.services,
    returnVendors: state => state.vendors,
    returnAllServices : state => state.allservices,
    isAuthenticated: state => !!state.token,
    returnUser: state => state.user,
    returnMessage: state => state.message,
    returnData: state => state.data,
    returnRegS: state => state.regSuccess,
    returnRegE: state => state.regError,
    returnVeryS: state => state.verySuccess,
    returnVeryE: state => state.veryError,
    returnUserEmail: state => state.userEmail
  };


  export default {
    state,
    getters,
    actions,
    mutations
  };