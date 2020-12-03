<template>
    
   <div class="vendor_info_card" id="pinned_bar" v-for="card in servicesDetail" :key="card.id">
        <div class="card_wrapper">
            <div class="brand_info_block text-center">
                <figure class="brand_logo">
                    <router-link to="/vendor_profile" class="avatar">
                    <img :src="getIMG(card.serviceLogo)" :alt="card.businessName">
                    </router-link>
                </figure>
                <div class="prof_header">
                    <h4 class="prof_title ">{{card.businessName}}</h4>
                    <span class="meta_value" v-for="contact in contacts" :key="contact.id">
                        {{contact.state}},{{contact.country}} 
                    </span>
                </div>
            </div>
            <div class="info_list">
                <div class="info_list_item">
                    <div class="info_image">
                        <i class="cust_icon map_pin"></i>
                    </div>
                    <div class="info_container">
                        <address v-for="contact in contacts" :key="contact.id">
                            <span>{{contact.address}},</span> 
                            <span>{{contact.zip}},{{contact.city}},</span>
                            <span>{{contact.state}}, State</span>
                        </address>
                    </div>
                </div>
                
                <div class="info_list_item">
                    <div class="info_image">
                        <i class="cust_icon duration"></i>
                    </div>
                    <div class="info_container">
                        <p>
                            <span>{{card.yearsOfOperation}} Year(s) of experience</span>
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
                                <a :href="getAhref(card.contactEmail)" >Visit Website</a>
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
                            <a :href="getAhref(card.socialMediaHandles.facebook)" class="link_item">
                               <svg xmlns="http://www.w3.org/2000/svg" class="cust_icon icon_xs" viewBox="0 0 64 64">
                                    <path d="M45.1,31.8l-8.4,0.1L37,62.6l-12.7,0.1L24,32l-6,0.1l-0.1-10.8l6-0.1l-0.1-7c-0.1-5,2.2-12.8,12.7-13l9.4-0.1L46,11.7l-6.8,0.1c-1.1,0-2.7,0.6-2.7,3l0.1,6.4l9.5-0.1L45.1,31.8z M45.1,31.8"/>
                                </svg> 
                               
                            </a>
                            <a :href="getAhref(card.socialMediaHandles.twitter)" class="link_item">
                                <svg xmlns="http://www.w3.org/2000/svg" class="cust_icon icon_xs" viewBox="0 0 64 64">
                                    <path d="M64,12.2c-2.4,1-4.9,1.8-7.5,2.1c2.7-1.6,4.8-4.2,5.8-7.3c-2.5,1.5-5.3,2.6-8.3,3.2C51.5,7.6,48.1,6,44.3,6c-7.3,0-13.1,5.9-13.1,13.1c0,1,0.1,2,0.3,3C20.6,21.6,10.9,16.3,4.5,8.4c-1.1,1.9-1.8,4.2-1.8,6.6c0,4.6,2.3,8.6,5.8,10.9c-2.2-0.1-4.2-0.7-5.9-1.6c0,0.1,0,0.1,0,0.2c0,6.4,4.5,11.7,10.5,12.9c-1.1,0.3-2.3,0.5-3.5,0.5c-0.8,0-1.7-0.1-2.5-0.2c1.7,5.2,6.5,9,12.3,9.1C15,50.2,9.3,52.3,3.1,52.3c-1.1,0-2.1-0.1-3.1-0.2C5.8,55.8,12.7,58,20.1,58c24.1,0,37.4-20,37.4-37.4c0-0.6,0-1.1,0-1.7C60,17.1,62.2,14.8,64,12.2L64,12.2z M64,12.2"/>
                                </svg>
                            </a>
                            <a :href="getAhref(card.socialMediaHandles.instagram)" class="link_item">
                                <svg xmlns="http://www.w3.org/2000/svg" class="cust_icon icon_xs" viewBox="0 0 64 64">
                                    <path d="M51.6,1H12.4C6.1,1,1,6.1,1,12.4v39.3C1,57.9,6.1,63,12.4,63h39.3C57.9,63,63,57.9,63,51.6V12.4
                                        C63,6.1,57.9,1,51.6,1L51.6,1z M32,52.4c-11.3,0-20.4-9.2-20.4-20.4c0-11.3,9.2-20.4,20.4-20.4c11.3,0,20.4,9.2,20.4,20.4
                                        C52.4,43.2,43.2,52.4,32,52.4L32,52.4z M53.1,15.8c-2.7,0-4.8-2.2-4.8-4.8c0-2.7,2.2-4.8,4.8-4.8c2.7,0,4.8,2.2,4.8,4.8
                                        C57.9,13.6,55.7,15.8,53.1,15.8L53.1,15.8z M53.1,15.8"/>
                                    <path d="M32,20.2c-6.5,0-11.8,5.3-11.8,11.8c0,6.5,5.3,11.8,11.8,11.8c6.5,0,11.8-5.3,11.8-11.8
                                        C43.8,25.5,38.5,20.2,32,20.2L32,20.2z M32,20.2"/>
                                </svg>
                            </a>
                            <a :href="getAhref(card.socialMediaHandles.pinInterest)" class="link_item">
                                <svg xmlns="http://www.w3.org/2000/svg" class="cust_icon icon_xs" viewBox="0 0 61.11 43.76">
                                    <path d="M60.14,7a8,8,0,0,0-2.38-4.2,7.29,7.29,0,0,0-4.26-2A224.27,224.27,0,0,0,30.57,0,224.26,224.26,0,0,0,7.63.85a7.21,7.21,0,0,0-4.24,2A8,8,0,0,0,1,7,109.06,109.06,0,0,0,1,36.71a7.94,7.94,0,0,0,2.38,4.2,7.29,7.29,0,0,0,4.26,2,224,224,0,0,0,22.94.85A224,224,0,0,0,53.5,42.9a7.21,7.21,0,0,0,4.24-2,8,8,0,0,0,2.36-4.2C61.49,28.64,61.38,16.18,60.14,7ZM42.67,23.72,25.17,34.66a4.08,4.08,0,0,1-2.22.07,2,2,0,0,1-1.13-1.91V10.94A2,2,0,0,1,22.94,9a2.06,2.06,0,0,1,2.22.07L42.67,20a2,2,0,0,1,1,1.85A2,2,0,0,1,42.67,23.72Z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div class="info_list_item">
                    <div class="info_container">
                        <a href="new_message.html" class="btn btn-block btn-primary">Message the Vendor</a>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Card',
  
  props:{
      servicesDetail:Array,
      socials:Object,
      contacts:Array
  },
  methods:{
      getIMG(src){
      return require('@/assets'+src)
  },
  getAhref(path){
      return path
  }
  }
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
