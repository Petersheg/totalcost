import {FetchAPI} from '../../api/newService'
import axios from 'axios'
import jwt_decode from "jwt-decode";

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
  
    userData:{
        city :null,
        state : null,
        country :null,
        firstName : null,
        lastName : null,
        gender : null,
        address :null,
        age : null,
        contactEmail : null,
        contactPhoneNumber : null,
        DBO : null,
        userId : null,
        userRole : null,
        dateJoined : null,
        description : null,
        website : null,
        socialMediaHandles:{
          facebook:null,
          twitter:null,
          instagram:null,
          pinInterest:null
        }
    },

    userInfo: null,
    vendorInfo : null,
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
        state.userData.userId = "";
        state.userData.role = "";
        state.userInfo = "";
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
    },

    // Mutating user information
    mutateState(state,data){
      state.userData.state = data;
    },
    mutateCity(state,data){
      state.userData.city = data;
    },
    mutateCountry(state,data){
      state.userData.country = data;
    },
    mutateFirstName(state,data){
      state.userData.firstName = data;
    },
    mutateLastName(state,data){
      state.userData.lastName = data;
    },
    mutateGender (state,data){
      state.userData.gender = data;
    },
    mutateAddress(state,data){
      state.userData.address = data;
    },
    mutateAge(state,data){
      state.userData.address = data;
    },
    mutateContactEmail(state,data){
      state.userData.contactEmail = data;
    },
    mutateContactPhoneNumber(state,data){
      state.userData.contactPhoneNumber = data;
    },
    mutateDBO(state,data){
      state.userData.DBO = data;
    },
    mutateDateJoined(state,data){
      state.userData.dateJoined = data;
    },
    mutateDescription(state,data){
      state.userData.description = data;
    },
    mutateWebsite(state,data){
      state.userData.website = data;
    },
    mutateFacebook(state,data){
      state.userData.socialMediaHandles.facebook = data;
    },
    mutateTwitter(state,data){
      state.userData.socialMediaHandles.twitter = data;
    },
    mutateInstagram(state,data){
      state.userData.socialMediaHandles.instagram = data;
    },
    mutatePinInterest(state,data){
      state.userData.socialMediaHandles.pinInterest = data;
    },
    mutateUserId(state,data){
      state.userData.userId = data;
    },
    mutateUserRole(state,data){
      state.userData.userRole = data;
    },
    mutateUserInfo(state,data){
      state.userInfo = data;
    },
    mutateVendorInfo(state,data){
      state.vendorInfo = data;
    }
  };

const actions= {
    async fetchServices(state){
      try {
        const featureService = new FetchAPI();
        const response =await featureService.getData(process.env.VUE_APP_FEATURE_URL)

        state.commit('addService', response.data.data)
      } catch (error) {
        //console.log(error);
      }
    },

    async fetchVendors(state){
      try {
        const vendor = new FetchAPI();
        const response = await vendor.getData(process.env.VUE_APP_VENDOR_URL );

        state.commit('addVendors', response.data.data)
      } catch (error) {
        //console.log(error);
      }
    },

    async allServices(state){
      try {
        const allService = new FetchAPI();
        const response = await allService.getData(process.env.VUE_APP_ALL_SERVICE_URL );

        state.commit('addAllServices', response.data.data)
      } catch (error) {
        //console.log(error);
      }
    },

    async Register({commit}, form) {
        //const res = await axios.post('/vendor/new', form)
        const register = new FetchAPI();
        const res = await register.authUser(process.env.VUE_APP_VENDOR_REG , form)
        try {
          commit('addregSuccess', res.data.data);
          commit('addregError', res.data.error_messages);
        } catch (error) {
          //console.log(error);
        }

        //await commit('userEmail',form.email);
        // await commit('setUser', form.fullName);
      
    },

    async LogIn({commit}, form) {
        //const res = await axios.post('/identity/login', form)
        const login = new FetchAPI();
        const res = await login.authUser(process.env. VUE_APP_LOGIN, form);
        try {
          commit('addMessage', res.data.error_messages);
          commit('addData', res.data.status);

          const token = res.data.data.token;
          if(res.data.status === 'success'){
            localStorage.setItem('token',token);
            axios.defaults.headers.common['Authorization'] = token
          }
        } catch (error) {
          //console.log(error);
        }  
    },
     
    async Verification({commit},verify){
        //const res = await axios.post('/identity/verify',verify);
        const varify = new FetchAPI();
        const res = await varify.authUser(process.env. VUE_APP_VERIFY,verify)
        try {
          commit('addveryError',res.data.error_messages);
          commit('addverySuccess',res.data.status);
        } catch (error) {
          //console.log(error);
        }
    },

    async fbLogin({commit},token){
      try {
        const fbLogIn = new FetchAPI();
        const res = await fbLogIn.authUser(process.env. VUE_APP_FB_LOGIN,{token:token});

        localStorage.setItem('token',res.data.data.token);
        //commit('mutateUserRole', res.data.data.token.role)
        return res.data.data.token
        //const token = localStorage.setItem('token',res.token)
      } catch (error) {
        //console.log(error);
      }
    },

    // load facebook SDK for login
    loadFacebookSDK() {
      var js,
        fjs = document.getElementsByTagName("script")[0];
      if (document.getElementById("facebook-jssdk")) {
        return;
      }
      js = document.createElement("script");
      js.id = "facebook-jssdk";
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    },

    // Initiate facebaook App
    initFacebook() {
      window.fbAsyncInit = function() {
        window.FB.init({
          appId:"677190916279332", //You will need to change this
          cookie: true, // This is important, it's not enabled by default
          version: "v13.0"
        });
      };
    },

    async LogOut({commit}){
        //let user = null;
        commit('logOut')
        localStorage.removeItem('token');
        delete axios.defaults.headers.common['Authorization']
    },
    
    async decodeJWTToken({commit},token){
      
      const decodeToken = jwt_decode(token);//decode the token
      commit('mutateUserId',decodeToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/sid'][1]);
      localStorage.setItem('userId',decodeToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/sid'][1])
      commit('mutateUserRole', decodeToken.role);
    },
    
    // User information
    async getUserDetails({commit},Id){
      const getUser = new FetchAPI();
      try {
      const res =await getUser.getData(`/users/${Id.userId}/profile`, {headers:{'Authorization': `Bearer ${Id.bearerToken}`}})
        
        let result = res.data.data;
        //localStorage.setItem('userData', JSON.stringify(result));
        //result = await JSON.parse(localStorage.getItem('userData'));
        commit('mutateUserInfo', result)

        commit('mutateCity',result.city);
        commit('mutateState',result.state);
        commit('mutateCountry',result.country);
        commit('mutateFirstName',result.firstName);
        commit('mutateLastName',result.lastName);
        commit('mutateGender',result.gender);
        commit('mutateAddress',result.address);
        commit('mutateAge',result.age);
        commit('mutateContactEmail',result.contactEmail);
        commit('mutateContactPhoneNumber',result.contactPhoneNumber);
        commit('mutateDBO',result.DBO);
        commit('mutateDateJoined',result.epochDateJoined);
        commit('mutateDescription',result.description);
        commit('mutateFacebook',result.socialMediaHandles.facebook);
        commit('mutateTwitter',result.socialMediaHandles.twitter);
        commit('mutateInstagram',result.socialMediaHandles.instagram);
        commit('mutatePinInterest',result.socialMediaHandles.pinInterest);
    } catch (error) {
        //console.log(error);
    }

  },

    // Vendor information
    async getVendorDetails({commit},Id){
      
      const getUser = new FetchAPI();
      try {
      const res =await getUser.getData(`/vendor/${Id.userId}/profile`, {headers:{'Authorization': `Bearer ${Id.bearerToken}`}})
        
        let vendorDetails = res.data.data;
        commit('mutateVendorInfo', vendorDetails);
    } catch (error) {
       // console.log(error);
    }

  },

  //Cloudinary image upload
  

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
    returnUserEmail: state => state.userEmail,

    // get user information
    getCity :state => state.userData.city,
    getState : state => state.userData.state ,
    getCountry :state => state.userData.country,
    getFirstName : state => state.userData.firstName ,
    getLastName : state => state.userData.lastName ,
    getGender : state => state.userData.gender ,
    getAddress :state => state.userData.address,
    getAge : state => state.userData.age ,
    getContactEmail : state => state.userData.contactEmail ,
    getContactPhoneNumber : state => state.userData.contactPhoneNumber ,
    getDBO : state => state.userData.DBO ,
    getDateJoined : state => state.userData.dateJoined ,
    getDescription : state => state.userData.description ,
    getWebsite : state => state.userData.website,
    getFacebook : state => state.userData.socialMediaHandles.facebook,
    getTwitter : state => state.userData.socialMediaHandles.twitter,
    getInstagram : state => state.userData.socialMediaHandles.instagram,
    getPinInterest : state => state.userData.socialMediaHandles.pinInterest,
    getUserId : state => state.userData.userId,
    getUserRole : state => state.userData.userRole,
    getUserInfo : state => state.userInfo,
    getVendorInfo : state => state.vendorInfo
};


  export default {
    state,
    getters,
    actions,
    mutations
  };