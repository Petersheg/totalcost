<template>
    
    <section class="user_banner_area" :style ="{backgroundImage:`url(${this.getcloudinaryIMG(vendorResult.banner)})`}">
        <div class="container">
            <div class="merchant_profile_details">
                <div class="pr_info_block">
                    <figure class="merchant_logo">
                        <div class="user_avatar">
                            <img :src="vendorResult.picture" alt="David Olaniyi">
                        </div>
                    </figure>
                    <div class="prof_header">
                        <h4 class="prof_title d-inline-block">{{vendorResult.firstName}} {{vendorResult.lastName}}</h4>
                        <span class="vend_status" title="Verified Vendor" data-toggle="tooltip">
                            <i class="cust_icon user_verified"></i>
                        </span>
                    </div>
                    <div class="info_meta meta_loc">
                        <span class="meta_icon color-grey-light">
                            <svg class="cust_icon icon_xs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.94 20">
                                <path d="M7,0A7,7,0,0,0,0,7c0,3.65,5.52,12,5.75,12.32A1.47,1.47,0,0,0,7,20a1.47,1.47,0,0,0,1.21-.7c.24-.35,5.76-8.68,5.76-12.33A7,7,0,0,0,7,0ZM7,11.27A4.3,4.3,0,1,1,11.27,7,4.3,4.3,0,0,1,7,11.27Z"/>
                            </svg>
                        </span>
                        <span class="meta_value">{{vendorResult.city}}, {{vendorResult.state}}</span>
                    </div>
                    <div class="info_meta meta_date">
                        <p class="meta_label">Joined <strong>{{vendorResult.epochDateJoined}}</strong></p>
                    </div>
                </div>
                <div class="pr_info_block">
                    <a href="#update_bio" data-toggle="modal" class="btn btn-sm btn-secondary">
                        Update Profile
                    </a>
                </div>
            </div>
        </div>
        <nav class="user_context_nav">
            <div class="container">
                <div class="merchant_content_area">
                    <ul class="nav nav-tabs">
                        <li class="active"><router-link to="/vendor_profile">Overview</router-link></li>
                        <!-- <li><router-link to="/user_event">Events</router-link></li> -->
                        <li><router-link to="/vendor_services">Services</router-link></li>
                    </ul>
                </div>
            </div>
        </nav>
    </section>

</template>

<script>
import { mapGetters, mapActions } from "vuex";
import axios from 'axios';
import {httpClient } from '../../api/newService';

export default {
  name: 'VendorBanner',
  data(){
      return{
        day:null,
        month:null,
        year:null,

          userCre:{
            userId:localStorage.getItem('userId'),
            bearerToken: localStorage.getItem('token'),
          },

           // Data for Cloudinary Upload
          results:null,
          file:null,
          modaFade:true,
          cloudName: process.env.VUE_APP_CLOUD_NAME,
          preset:process.env.VUE_APP_PRESET,
          //fileContents:null,
          profileBase64:null,
          bannerBase64:null,
          bannerResult:null,
          banner:null,
          tags: process.env.VUE_APP_TAGS,
          formData: null,
          uploadPercentage: 0,
      }
  },
  computed:{
      //dateOfBirth:function(){return this.calculateDOB(this.year)},
      vendorResult: function(){return this.$store.getters.getVendorInfo},
      ...mapGetters({
            success:'returnData', 
            auth:'isAuthenticated',
            id: 'getUserId',
        }),
  },
  methods:{
      ...mapActions(["getVendorDetails"]),
      getSrc(src){
          return require('@/assets'+src);
      },
    //   calculateDOB(yearOfBirth){
    //      const currentYear = new Date().getFullYear()
    //       const age = currentYear - yearOfBirth;
    //       return age;
    //   },
      getcloudinaryIMG(src){
        return src
     },
       
      async returnVendorDetails(){
          try {
              await this.getVendorDetails(this.userCre);
          } catch (error) {
              console.log(error);
          }
      }
  },

  mounted(){
      //console.log(this.vendorResult);
      this.returnVendorDetails();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
