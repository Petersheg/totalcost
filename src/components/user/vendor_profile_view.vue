<template>
  
  <main class="main_content_area bg-off-white">
       <section class="user_banner_area" :style ="{backgroundImage: `url(${getImg('/img/banners/merchant_hold.jpg')})`}">
            <div class="container">
                <div class="merchant_profile_details">
                    <div class="pr_info_block">
                        <figure class="merchant_logo">
                            <div class="user_avatar">
                                <img src="../../assets/img/icons/user_default.png" alt="David Olaniyi">
                            </div>
                        </figure>
                        <div class="prof_header">
                            <h4 class="prof_title d-inline-block ">David Olaniyi</h4>
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
                            <span class="meta_value">Lagos, Nigeria</span>
                        </div>
                        <div class="info_meta meta_date">
                            <p class="meta_label">Joined <strong>2 Months ago</strong></p>
                        </div>
                    </div>
                    <div class="pr_info_block">
                        <a href="#" class="btn btn-sm btn-primary">
                            Send Message
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <section class="section_block">
            <div class="container">
                <div class="content_wrapper merchant_content_area">
                    <div class="content_inner">
                        <div class="row">
                            <article class="random_info_card col-md-6">
                            <div class="card_wrapper">
                                <header class="infoCard_header">
                                    <h4 class="infoTitle">
                                        A little about me
                                    </h4>
                                </header>
                                <div class="infoCard_content">
                                    <div class="info_list">
                                        <div class="info_list_item">
                                            <div class="info_container">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore ipsam assumenda quod fugit perspiciatis, amet accusamus, hic, inventore in sint accusantium id, voluptate magni totam voluptates expedita odit tempora unde.</p>
                                            </div>
                                        </div>
                                        <div class="info_list_item">
                                            <div class="info_container">
                                                <p>Male</p>
                                            </div>
                                        </div>
                                        <div class="info_list_item">
                                            <div class="info_container">
                                                <p>43 Years Old</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                            <article class="random_info_card col-md-6">
                            <div class="card_wrapper">
                                <header class="infoCard_header">
                                    <h4 class="infoTitle">
                                        How to reach me
                                    </h4>
                                </header>
                                <div class="infoCard_content">
                                    <div class="info_list">
                                        <div class="info_list_item">
                                            <div class="info_image">
                                                <i class="cust_icon map_pin"></i>
                                            </div>
                                            <div class="info_container">
                                                <address>
                                                    <span>4, Olayiwola Street, Off kudirat Abiola Road,</span> 
                                                    <span>10213 Oregun, Ikeja,</span>
                                                    <span>Lagos State</span>
                                                </address>
                                            </div>
                                        </div>
                                        
                                        <div class="info_list_item">
                                            <div class="info_image">
                                                <i class="cust_icon phone"></i>
                                            </div>
                                            <div class="info_container">
                                                <p>
                                                    <span>Call</span>
                                                    <strong>
                                                        <a href="tel:08033752311" >08033752311
                                                        </a>
                                                    </strong>
                                                </p>
                                            </div>
                                        </div>
                                        
                                        <div class="info_list_item">
                                            <div class="info_image">
                                                <i class="cust_icon link"></i>
                                            </div>
                                            <div class="info_container">
                                                <p>
                                                    <strong>
                                                        <a href="#" >Visit Website
                                                        </a>
                                                    </strong>
                                                </p>
                                            </div>
                                        </div>
                                        
                                        <div class="info_list_item">
                                            <div class="info_image">
                                                <i class="cust_icon email"></i>
                                            </div>
                                            <div class="info_container">
                                                <p>
                                                   <span>E-Mail</span>
                                                    <strong>
                                                        <a href="mailto:daniely_01@gmail.com" >daniely_01@gmail.com
                                                        </a>
                                                    </strong>
                                                </p>
                                            </div>
                                        </div>
                                        
                                        <div class="info_list_item">
                                            <div class="info_image">
                                                <i class="cust_icon globe"></i>
                                            </div>
                                            <div class="info_container">
                                               <div class="social_links">
                                                    <a href="#" class="link_item">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="cust_icon icon_xs" viewBox="0 0 64 64">
                                                            <path d="M45.1,31.8l-8.4,0.1L37,62.6l-12.7,0.1L24,32l-6,0.1l-0.1-10.8l6-0.1l-0.1-7c-0.1-5,2.2-12.8,12.7-13l9.4-0.1L46,11.7l-6.8,0.1c-1.1,0-2.7,0.6-2.7,3l0.1,6.4l9.5-0.1L45.1,31.8z M45.1,31.8"/>
                                                        </svg>
                                                    </a>
                                                    <a href="#" class="link_item">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="cust_icon icon_xs" viewBox="0 0 64 64">
                                                            <path d="M64,12.2c-2.4,1-4.9,1.8-7.5,2.1c2.7-1.6,4.8-4.2,5.8-7.3c-2.5,1.5-5.3,2.6-8.3,3.2C51.5,7.6,48.1,6,44.3,6c-7.3,0-13.1,5.9-13.1,13.1c0,1,0.1,2,0.3,3C20.6,21.6,10.9,16.3,4.5,8.4c-1.1,1.9-1.8,4.2-1.8,6.6c0,4.6,2.3,8.6,5.8,10.9c-2.2-0.1-4.2-0.7-5.9-1.6c0,0.1,0,0.1,0,0.2c0,6.4,4.5,11.7,10.5,12.9c-1.1,0.3-2.3,0.5-3.5,0.5c-0.8,0-1.7-0.1-2.5-0.2c1.7,5.2,6.5,9,12.3,9.1C15,50.2,9.3,52.3,3.1,52.3c-1.1,0-2.1-0.1-3.1-0.2C5.8,55.8,12.7,58,20.1,58c24.1,0,37.4-20,37.4-37.4c0-0.6,0-1.1,0-1.7C60,17.1,62.2,14.8,64,12.2L64,12.2z M64,12.2"/>
                                                        </svg>
                                                    </a>
                                                    <a href="#" class="link_item">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="cust_icon icon_xs" viewBox="0 0 64 64">
                                                            <path d="M51.6,1H12.4C6.1,1,1,6.1,1,12.4v39.3C1,57.9,6.1,63,12.4,63h39.3C57.9,63,63,57.9,63,51.6V12.4
                                                                C63,6.1,57.9,1,51.6,1L51.6,1z M32,52.4c-11.3,0-20.4-9.2-20.4-20.4c0-11.3,9.2-20.4,20.4-20.4c11.3,0,20.4,9.2,20.4,20.4
                                                                C52.4,43.2,43.2,52.4,32,52.4L32,52.4z M53.1,15.8c-2.7,0-4.8-2.2-4.8-4.8c0-2.7,2.2-4.8,4.8-4.8c2.7,0,4.8,2.2,4.8,4.8
                                                                C57.9,13.6,55.7,15.8,53.1,15.8L53.1,15.8z M53.1,15.8"/>
                                                            <path d="M32,20.2c-6.5,0-11.8,5.3-11.8,11.8c0,6.5,5.3,11.8,11.8,11.8c6.5,0,11.8-5.3,11.8-11.8
                                                                C43.8,25.5,38.5,20.2,32,20.2L32,20.2z M32,20.2"/>
                                                        </svg>
                                                    </a>
                                                    <a href="#" class="link_item">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="cust_icon icon_xs" viewBox="0 0 61.11 43.76">
                                                            <path d="M60.14,7a8,8,0,0,0-2.38-4.2,7.29,7.29,0,0,0-4.26-2A224.27,224.27,0,0,0,30.57,0,224.26,224.26,0,0,0,7.63.85a7.21,7.21,0,0,0-4.24,2A8,8,0,0,0,1,7,109.06,109.06,0,0,0,1,36.71a7.94,7.94,0,0,0,2.38,4.2,7.29,7.29,0,0,0,4.26,2,224,224,0,0,0,22.94.85A224,224,0,0,0,53.5,42.9a7.21,7.21,0,0,0,4.24-2,8,8,0,0,0,2.36-4.2C61.49,28.64,61.38,16.18,60.14,7ZM42.67,23.72,25.17,34.66a4.08,4.08,0,0,1-2.22.07,2,2,0,0,1-1.13-1.91V10.94A2,2,0,0,1,22.94,9a2.06,2.06,0,0,1,2.22.07L42.67,20a2,2,0,0,1,1,1.85A2,2,0,0,1,42.67,23.72Z"/>
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </article>
                        </div>
                        <div class="v_pad_md">
                            <header class="infoCard_header">
                                <h4 class="infoTitle">
                                    My Services
                                </h4>
                            </header>
                            <div class="empty_state d-none">
                                <div class="def_wrapper text-center">
                                    <p class="">This vendor does not have any service.</p>
                                </div>
                            </div>
                            <div class="prd_card_list row">
                                <article class="prd_card col-sm-6 col-md-4">
                                    <div class="prd_card_wrapper bg-white">
                                        <router-link to="/service_details_view" class="prd_card_banner">
                                            <div class="prd_card_img" :style ="{backgroundImage: `url(${getImg('/img/banners/merchant_hold.jpg')})`}">
                                            </div>
                                            <div class="card_gradient"></div>
                                        </router-link>
                                        <div class="prd_card_bd">
                                            <h4 class="prd_title">
                                                <router-link title="Thyme & Again Creative Catering" to="/service_details_view">Thyme & Again Creative Catering</router-link>
                                            </h4>
                                            <p class="card_subtitle">Photography</p>
                                            <div class="prd_support_info">
                                                <div class="rating_ind">
                                                    <div class="rateit" data-rateit-value="4.5" data-rateit-ispreset="true" 
                                                data-rateit-readonly="true"></div>
                                                    <span class="rating_space" title="4.5 from 10 reviews">10</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
export default {
  name: 'Vendorprofileview',
  data(){
      return{
          servicesList:null,
          packages:null,
          baseURL : process.env.VUE_APP_BASE_URL,
          listURL : `/api/v1/services/${this.id}/vendors`,
      }
  },
  props:{
      id:String
  },
    methods:{
      getImg(src){
          return require(`../../assets${src}`);
      },
      getUrl(endPoint){
        const url = this.baseURL+endPoint;
        axios.get(url)
        .then(res => {
            this.servicesList = res.data.data;
            this.packages = res.data.data[0].packages;
        })
        .catch(err => console.log(err));

    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
