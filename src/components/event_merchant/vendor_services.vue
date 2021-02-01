<template>

    <div class="modal" id="update_bio">
        <div class="modal-dialog">
                <div class="modal-content">
                    <header class="modal-header">
                        <h4 class="modal-title font-bold color-primary">About Me</h4>
                        <button class="close_dialog" data-dismiss="modal" aria-hidden="true"></button>
                    </header>
                    <div class="modal-body">
                        <form @submit.prevent="updateVendorContact">
                            <div class="input_grid row">
                                <div class="col-sm-6 input_block">
                                    <label class="control-label font-bold">Profile Image
                                    </label>
                                    <p class="help-block"><strong>TIP:</strong>We recommend a .Jpg or .png image of 1:1 aspect ration, e.g 128px by 128px</p>
                                </div>
                                <div class="col-sm-6">
                                    <div class="mediaUploadControl">
                                        <figure class="mediaUploadPreview" v-if="results && results.secure_url">
                                            <div class="user_avatar">
                                                <img :src="getcloudinaryIMG(results.secure_url)" alt="David Olaniyi">
                                            </div>
                                        </figure>

                                        <figure class="mediaUploadPreview" v-else>
                                        <div class="user_avatar" >
                                            <img :src="getcloudinaryIMG(vendorResult.picture)" alt="results.public_id">
                                        </div>
                                        </figure>
                                        <div class="mediaUploadInfo">
                                            <div class="file_upload">
                                                <label for="profile_image" class="btn btn-sm btn-primary">
                                                <input type="file" name="file" id="profile_image" class="inputfile" @change="selectImg($event)">
                                                    <span>Change Image</span>
                                                </label>

                                                <!-- <progress max="100" :value.prop="uploadPercentage"></progress> -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="input_grid row">
                                <div class="col-sm-6 input_block">
                                <label class="control-label font-bold">
                                    Profile Banner
                                </label>
                                <p class="help-block"><strong>TIP:</strong> Uplaod a cover image that best communicate who you are.</p>
                                </div>
                                <div class="col-sm-6">
                                    <figure class="banner_preview" v-if="bannerResult && bannerResult.secure_url">
                                        <div class="preview_holder" :style ="{backgroundImage: `url(${this.getcloudinaryIMG(bannerResult.secure_url)})`}"> <!--style="background-image: url(./img/banners/bridal_gown.jpg);"-->
                                        </div>
                                    </figure>
                                    <figure class="banner_preview" v-else>
                                        <div class="preview_holder" :style ="{backgroundImage: `url(${this.getcloudinaryIMG(vendorResult.banner)})`}">
                                        </div>
                                    <!-- getSrc('/img/banners/merchant_hold.jpg') -->
                                    </figure>
                                    <div class="file_upload">
                                        <label for="banner_image" class="btn btn-sm btn-primary">
                                        <input type="file" name="file" id="banner_image" class="inputfile" @change="selectBanner($event)">
                                            <span>Change Image</span>
                                        </label>
                                        <progress max="100" :value.prop="uploadPercentage"></progress>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="form-check form-check-inline">
                                    <label for="gender_fml" class="control-label">
                                        <input type="radio" value="Female" id="gender_fml" name="us_gender" v-model="vendorResult.gender">
                                        <span>Female</span>
                                    </label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <label for="gender_ml" class="control-label">
                                        <input type="radio" value="Male" id="gender_ml" name="us_gender" v-model="vendorResult.gender">
                                        <span>Male</span>
                                    </label>
                                </div>
                            </div>
                            <div class="form-horizontal">
                                <div class="form-group funky_form col-sm-6">
                                    <label class="control-label">First Name</label>
                                    <input type="text" class="form-control" placeholder="First Name" v-model="vendorResult.firstName">
                                </div>
                                <div class="form-group funky_form col-sm-6">
                                    <label class="control-label">Last Name</label>
                                    <input type="text" class="form-control" placeholder="Last Name" v-model="vendorResult.lastName">
                                </div>
                            </div>
                            <div class="form-group funky_form">
                                <label class="control-label">About Me</label>
                                <textarea rows="5" class="form-control" placeholder="Tell us a little about yourself" v-model="vendorResult.description"></textarea>
                            </div>
                            <p class="control-label">Date of Birth</p>
                            <div class="form-horizontal">
                                <div class="form-group funky_form col-sm-4">
                                    <label class="control-label">Day</label>
                                    <input type="number" class="form-control" placeholder="Day" v-model="day">
                                    <!-- <select class="form-control" v-model="day">
                                        <option>Day</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                    </select> -->
                                </div>
                                <div class="form-group funky_form col-sm-4">
                                    <label class="control-label">Month</label>
                                    <input type="number" class="form-control" placeholder="Month" v-model="month">
                                    <!-- <select class="form-control" v-model="month">
                                        <option>Month</option>
                                        <option>January</option>
                                        <option>February</option>
                                        <option>March</option>
                                        <option>April</option>
                                        <option>May</option>
                                        <option>June</option>
                                        <option>July</option>
                                        <option>August</option>
                                        <option>September</option>
                                        <option>October</option>
                                        <option>Novermber</option>
                                        <option>December</option>
                                    </select> -->
                                </div>
                                <div class="form-group funky_form col-sm-4">
                                    <label class="control-label">Year</label>
                                    <input type="number" class="form-control" placeholder="Year" v-model="year">
                                    <!-- <select class="form-control" v-model="year">
                                        <option>Year</option>
                                        <option>2000</option>
                                        <option>1999</option>
                                        <option>1998</option>
                                        <option>1997</option>
                                        <option>1996</option>
                                        <option>1995</option>
                                        <option>1994</option>
                                        <option>1993</option>
                                        <option>1992</option>
                                        <option>1991</option>
                                        <option>1990</option>
                                        <option>1989</option>
                                        <option>1988</option>
                                        <option>1987</option>
                                        <option>1986</option>
                                        <option>1985</option>
                                        <option>1984</option>
                                        <option>1983</option>
                                        <option>1982</option>
                                        <option>1981</option>
                                    </select> -->
                                </div>
                            </div>
                            <button class="btn btn-sm btn-inverse" type="submit" id="close_Modal">
                                Save Changes
                            </button>
                             <button type="button " class="btn btn-default" data-dismiss="modal" aria-hidden="true" >Ok</button>
                        </form>
                    </div>
                    <div class="modal-footer">
                        
                    </div>
                </div>
        </div>
    </div>

    <main class="main_content_area bg-off-white">
        <VendorBanner/>
        <section class="section_block">
            <div class="container">
                <div class="content_wrapper merchant_content_area">
                    <header class="user_infoHeader">
                        <h3 class="pane_title text-caps color-primary">My Services</h3>
                        <div class="header_cto">
                            <router-link to="/new_service_category" class="btn btn-sm btn-inverse">New Service</router-link>
                        </div>
                    </header>
                    <div class="empty_state d-none">
                        <div class="def_wrapper text-center">
                            <h4 class="title font-bold color-primary">No Service found</h4>
                            <p class="">You have no listed services. Start by creating a service, and submiting it for verification.</p>
                            <div class="section_cto">
                                <router-link to="new_service_category" class="btn btn-inverse">
                                New Service</router-link>
                            </div>
                        </div>
                    </div>
                    <div class="content_inner">
                        <div class="prd_card_list row">
                            <article class="prd_card col-sm-6 col-md-4">
                                <div class="prd_card_wrapper bg-white">
                                    <header class="prd_card_hd">
                                        <div class="prd_card_meta meta_type">
                                            <span class="prd_program_type" title="Catering">
                                                Catering
                                            </span>
                                        </div>
                                    </header>
                                    <router-link to="/mng_service" class="prd_card_banner">
                                        <div class="prd_card_img" :style ="{backgroundImage: `url(${this.getSrc('/img/banners/merchant_hold.jpg')})`}">
                                        </div>
                                        <div class="card_gradient"></div>
                                    </router-link>
                                    <div class="prd_card_bd">
                                        <h4 class="prd_title">
                                            <router-link title="Thyme & Again Creative Catering" to="/mng_service">Thyme & Again Creative Catering</router-link>
                                        </h4>
                                        <div class="prd_support_info">
                                            <div class="rating_ind">
                                                <div class="rateit" data-rateit-value="4.5" data-rateit-ispreset="true" 
                                            data-rateit-readonly="true"></div>
                                                <span class="rating_space" title="4.5 from 10 reviews">10</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="prd_card_support">
                                        <router-link to="/mng_service" class="btn btn-block btn-sm btn-default ">
                                            Manage Service
                                        </router-link>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

</template>

<script>
import {mapGetters,mapActions} from 'vuex'
import VendorBanner from './vendor_banners'
import axios from 'axios';
import {httpClient } from '../../api/newService';

export default {
  name: 'VendorServices',
  components:{
      VendorBanner
  },
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
      ...mapGetters({
            success:'returnData', 
            auth:'isAuthenticated',
            id: 'getUserId',
            //result: 'getUserInfo',
        }),
       dateOfBirth:function(){return this.calculateDOB(this.year)},
      vendorResult: function(){return this.$store.getters.getVendorInfo},
  },
  methods:{
       ...mapActions(["getVendorDetails"]),
    getSrc(src){
        return require('@/assets'+src);
    },
    calculateDOB(yearOfBirth){
        const currentYear = new Date().getFullYear();
        const age = currentYear - yearOfBirth;
        return age;
    },
    getcloudinaryIMG(src){
        return src
    },
    selectImg:function(event) {
      //console.log("SelectImg", event.target.files);
      this.file = event.target.files[0];
      console.log(this.file);
      this.upload(this.file,this.profileBase64,this.results);

       setTimeout(() => {
             const cloudResult = JSON.parse(localStorage.getItem('cloudResult'));
            if(cloudResult){
                console.log(this.profileBase64)
                this.results = cloudResult;
                localStorage.setItem('image',this.results.secure_url);
                localStorage.removeItem('cloudResult');
            }
         }, 3000);
    },

    selectBanner: function(event) {
      //console.log("SelectBanner", event.target.files);
      this.banner = event.target.files[0];
        this.upload(this.banner,this.bannerBase64,this.bannerResult);
        setTimeout(() => {
            const cloudResult = JSON.parse(localStorage.getItem('cloudResult'));
            if(cloudResult){
                
                this.bannerResult = cloudResult;
                localStorage.setItem('banner',this.bannerResult.secure_url);
                localStorage.removeItem('cloudResult');
            }
        }, 3000);
    
    },

    prepareFormData: function(base64File) {
      this.formData = new FormData();
      this.formData.append("upload_preset", this.preset);
      this.formData.append("tags", this.tags); // Optional - add tag for image admin in Cloudinary
      this.formData.append("file", base64File);
    },
    
        // function to handle image upload
    upload: function(uploadFile, base64File, axioResponse) {
        
        let reader = new FileReader();
        // attach listener to be called when data from file
        reader.addEventListener(
            "load",
            function() {
            base64File = reader.result;
            this.prepareFormData(base64File);
            let cloudinaryUploadURL = `/${this.cloudName}/upload`;

            let requestObj = {
                url: cloudinaryUploadURL,
                method: "POST",
                data: this.formData,
                onUploadProgress: function( progressEvent ) {
                    this.uploadPercentage = parseInt( Math.round( ( progressEvent.loaded / progressEvent.total ) * 100 ))
                }.bind(this),
            };
            
                const axiosInstance = axios.create({
                    baseURL:'https://api.cloudinary.com/v1_1', headers:false
                })

                axiosInstance(requestObj)
                .then(response => {
                    axioResponse = response.data;
                    //console.log("secure_url", cloudResult.secure_url);
                    //return cloudResult
                    //localStorage.setItem("public_id", cloudResult.public_id);
                    localStorage.setItem("cloudResult", JSON.stringify(axioResponse));
                    return axioResponse;
                    
                })
                .catch(error => {
                    console.log(error);
                });
            }.bind(this),
            false
        );

        // call for file read if there is a file
        if (uploadFile && uploadFile.name) {
            reader.readAsDataURL(uploadFile);
        }
        
    },

    async updateVendorContact(){
            
           try {
                const res = await httpClient.put(`/vendor/${this.userCre.userId}/profile`, 
                {
                    firstName: this.vendorResult.firstName,
                    lastName: this.vendorResult.lastName,
                    city: this.vendorResult.city,
                    state: this.vendorResult.state,
                    address : this.vendorResult.address,
                    age: this.dateOfBirth,
                    contactEmail : this.vendorResult.contactEmail,
                    country : this.vendorResult.country,
                    contactPhoneNumber : this.vendorResult.contactPhoneNumber,
                    description : this.vendorResult.description,
                    gender : this.vendorResult.gender,
                    website: this.vendorResult.website,
                    postalCode :this.vendorResult.postalCode,
                    picture:localStorage.getItem('image'),
                    banner:localStorage.getItem('banner'),
                    imageData: {
                        name: localStorage.getItem('dpName'),
                        data: null,
                        mimeType: localStorage.getItem('dpType'),
                        fileType: null,
                        base64String: this.profileBase64,
                    },
                    socialMediaHandles:{
                        facebook:"this.vendorResult.socialMediaHandles.facebook",
                        twitter:"this.vendorResult.socialMediaHandles.twitter",
                        instagram:"this.vendorResult.socialMediaHandles.instagram",
                        pinInterest:"his.vendorResult.socialMediaHandles.pinInterest"
                    },
                }, 
           { headers:
                {
                    'Authorization': `Bearer ${this.userCre.bearerToken}`,
                    'Content-Type': "application/json",
                    'Accept': "application/json"
                }
            });
            console.log(res);
             if(res && res.data.status === "success"){
                this.returnVendorDetails();

                // Toast a mesaage after data successfully updated
                const Toast = this.$swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 4000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', this.$swal.stopTimer)
                        toast.addEventListener('mouseleave', this.$swal.resumeTimer)
                }
                });
                Toast.fire({
                    icon: 'success',
                    title: 'Data Successfully Saved.'
                });

                const btn_id = document.getElementById('update_bio');
                btn_id.modal('hide');
                // btn_id.setAttribute("data-dismiss","modal");
                // btn_id.setAttribute("aria-hidden",true);
                
            }
         } catch (error) {
            console.log(error);
         }
      },

      async returnVendorDetails(){
          try {
              await this.getVendorDetails(this.userCre);
          } catch (error) {
              console.log(error);
          }
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
