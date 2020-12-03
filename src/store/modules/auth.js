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

    async Register({dispatch,commit}, form) {
        await axios.post('/vendor/new', form)
        .then(response=>{
            console.log(response.data);
            commit('addregSuccess', response.data.data);
            commit('addregError', response.data.error_messages);
            
            // let userEmail = new FormData()
            // userEmail.append('email', form.email);
            // userEmail.append('name', form.fullName);
            //await dispatch('Verification', userEmail)
            commit('setUser', form.fullName);
            
        })
        .catch(err => {
            console.log(err);
        })
    //   const registration = new FetchAPI();
    //   form = registration.authUser('/register', form)
      
    },

    async LogIn({commit}, form) {
        await axios.post('/identity/login', form)
        .then(response=>{
            commit('addMessage', response.data.error_messages);
            commit('addData', response.data.data);

            const token = response.data.data.token
            if(response.data.status === 'success'){
                localStorage.setItem('token',token);
                localStorage.removeItem('userToken');
                axios.defaults.headers.common['Authorization'] = token
            }
            commit('setUser', form.email, token )
        })
        .catch(err => {
            console.log(err)
            localStorage.removeItem('token')
        })
        // const login = new FetchAPI();
        // // form = login.authUser('/login', form)
        // await commit('setUser', form.get('name'))
        
    },
     
    async Verification({commit},verify){
        await axios.post('/identity/verify',verify)
        .then(response=>{
            commit('addveryError',response.data.error_messages);
            commit('addverySuccess',response.data.status);

        }).catch(err => console.log(err))

    },
      
    async LogOut({commit}){
        let user = null;
        localStorage.removeItem('token');
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