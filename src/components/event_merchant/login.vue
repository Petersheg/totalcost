<template>
  
  <main class="main_content_area">
        <section class="section_block saturate-primary">
            <div class="container section_wrapper">
                <div class="entry_content centered">
                    <div class="block_panel auth_panel bg-white">
                       <div class="hr_line"></div>
                        <header class="block_header text-center">
                            <h2 class="color-primary pane_title">Log into your account</h2>
                        </header>
                        <div class="content_inner">
                            <div class="error_message" v-if="errors">
                                <p v-for="error in errors" :key="error">{{error}}</p>
                            </div>
                            <form  @submit.prevent="initiateLogIn"><!---->
                                <div class="form-group funky_form">
                                    <label class="control-label">
                                        Email
                                    </label>
                                    <input type="email" class="form-control" v-model="form.email" placeholder="Email">
                                </div>
                                <div class="form-group funky_form field_pass">
                                    <label class="control-label">
                                        Password
                                    </label>
                                    <input type="password" class="form-control" v-model="form.password" placeholder="Password">
                                </div>
                                <div class="auth_meta clearfix">
                                    <label for="rem_me" class="checkbox-inline">
                                       <input type="checkbox" id="rem_me">
                                       <span class="font-regular ">Remember me</span>
                                    </label>
                                    <router-link to="/f_password" class="btn-link">Forgot Password?</router-link>
                               </div>
                               <div class="section_cto text-center">
                                <button type="submit" class="btn btn-inverse">Log In</button>
                                <!-- <router-link to="/vendor_profile" class="btn btn-inverse">Login?</router-link> -->
                                </div>
                               
                            </form>
                            
                            <p class="">Don't have an account? <router-link to="/signup" class="btn-link font-bold">Sign Up</router-link></p>
                        </div>
                        <div class="content_footer">
                            <div class="social_prop">
                                <span class="info_title font-md">or Continue with - </span>
                                <div class="social_btn_icons">
                                    <button @click="submitFacebookLogIn" class="social_btn bg_fb">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="cust_icon icon_xs" viewBox="0 0 64 64">
                                            <path d="M45.1,31.8l-8.4,0.1L37,62.6l-12.7,0.1L24,32l-6,0.1l-0.1-10.8l6-0.1l-0.1-7c-0.1-5,2.2-12.8,12.7-13l9.4-0.1L46,11.7l-6.8,0.1c-1.1,0-2.7,0.6-2.7,3l0.1,6.4l9.5-0.1L45.1,31.8z M45.1,31.8"/>
                                        </svg>
                                    </button>
                                    <a href="#" class="social_btn bg_tw">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="cust_icon icon_xs" viewBox="0 0 64 64">
                                            <path d="M64,12.2c-2.4,1-4.9,1.8-7.5,2.1c2.7-1.6,4.8-4.2,5.8-7.3c-2.5,1.5-5.3,2.6-8.3,3.2C51.5,7.6,48.1,6,44.3,6c-7.3,0-13.1,5.9-13.1,13.1c0,1,0.1,2,0.3,3C20.6,21.6,10.9,16.3,4.5,8.4c-1.1,1.9-1.8,4.2-1.8,6.6c0,4.6,2.3,8.6,5.8,10.9c-2.2-0.1-4.2-0.7-5.9-1.6c0,0.1,0,0.1,0,0.2c0,6.4,4.5,11.7,10.5,12.9c-1.1,0.3-2.3,0.5-3.5,0.5c-0.8,0-1.7-0.1-2.5-0.2c1.7,5.2,6.5,9,12.3,9.1C15,50.2,9.3,52.3,3.1,52.3c-1.1,0-2.1-0.1-3.1-0.2C5.8,55.8,12.7,58,20.1,58c24.1,0,37.4-20,37.4-37.4c0-0.6,0-1.1,0-1.7C60,17.1,62.2,14.8,64,12.2L64,12.2z M64,12.2"/>
                                        </svg>
                                    </a>
                                    <a href="#" class="social_btn bg_goog">
                                        <svg class="cust_icon icon_xs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58.5 58.5">
                                            <path d="M29.25,23.4V35.1H45.8A17.55,17.55,0,1,1,29.25,11.7a17.29,17.29,0,0,1,11.37,4.24L48.3,7.11A29,29,0,0,0,29.25,0,29.25,29.25,0,1,0,58.5,29.25V23.4Z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import jwt_decode from "jwt-decode";

import axios from 'axios'
export default {
  name: 'Login',
  data:function(){
      return{
          form:{
            email:"",
            password:""
          },
        token : localStorage.getItem('token')//get token from LS
      }
  },
    
    computed:{
    ...mapGetters({
        errors:'returnMessage',success:'returnData',
         auth:'isAuthenticated', id:"getUserId", role:"getUserRole"
         }),
    result: function(){return this.$store.getters.getUserInfo},
    Id: function(){return this.$store.getters.getUserId}
  },
  
  methods: {
    ...mapActions(["fbLogin","LogIn",'loadFacebookSDK','initFacebook','getUserDetails','decodeJWTToken','getVendorDetails']),
    
    // this function will make the token available
    async initiateLogIn() { 
        try {
            const User={
                email: this.form.email,
                password: this.form.password
            }
            await this.LogIn(User);
            await this.submitFormLogin();
        } catch (error) {
            console.log(error);
        }
    },
    routePath(path){
        return this.$router.push({name:path});
    },

    // While this function make use of the token.
    async submitFormLogin(){
      //await this.initiateLogIn()
        try {
            const token = localStorage.getItem('token');//get token from LS
            await this.decodeJWTToken(token);

            const userCredentials={
                userId: this.id,
                bearerToken: token,
            };

            if(this.success === "success" && this.role.toLowerCase() === "user"){
                await this.getUserDetails(userCredentials)
                this.routePath("UserProfile")
            }else if(this.success === "success" && this.role.toLowerCase() === "vendor"){
                await this.getVendorDetails(userCredentials)
                this.routePath("VendorProfile")
            }else{
                this.routePath('Login')
            }
        } catch (error) {
            console.log(error);
        }
        
    },
    
    async submitFacebookLogIn() {
        
        try {
            FB.login(async (response) => {
            if (response.authResponse) {
                const returnToken = await this.fbLogin(response.authResponse.accessToken);// return Totalcost Token
                setTimeout(async () => {
                     await this.decodeJWTToken(returnToken);
                const userCredentials={
                    userId: this.id,
                    bearerToken: returnToken,
                };
                
                if(this.role === 'User'){    
                    //await this.getUserDetails(userCredentials);
                    console.log(this.role);
                    //this.routePath("UserProfile");
                }else if(this.role === 'Vendor'){
                    //console.log('admin login');
                    this.routePath("VendorProfile");
                }else{
                    this.routePath("Login");
                }
                
                return response.authResponse
                }, 2000);
                    // Now you can redirect the user or do an AJAX request to
                    // a PHP script that grabs the signed request from the cookie.
            } else {
                alert("User cancelled login or did not fully authorize.");
            }
        });
            return false;
        } catch (error) {
            //console.log(error);
        }
    },
  },

  mounted(){
      
  },
  created(){
      this.loadFacebookSDK();
      this.initFacebook();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
