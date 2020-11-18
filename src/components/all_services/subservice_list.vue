<template>
    
    <div class="vendor_list_container">
        <!--add the class "" for services the user has wishlisted-->
        <!-- v-for="oneservice in servicesList" :key="oneservice.id" -->
        <article class="card_bar vendor_service" v-for="oneservice in servicesList" :key="oneservice.id">
            <div class="bar_wrapper" >
                <div class="bar_image">
                    <span class="bar_img_holder" :style ="{backgroundImage:`url(${getImg(oneservice.serviceLogo)})`}"></span>
                </div>
                <div class="itemControl">
                    <button class="fav_control" type="button">
                        <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 510 510">
                            <path d="M255,489.6l35.735.7C86.7,336.6,0,257.55,0,160.65C0,81.6,61.2,20.4,140.25,20.4c43.35,0,86.7,20.4,114.75,53.55C283.05,40.8,326.4,20.4,369.75,20.4C448.8,20.4,510,81.6,510,160.65c0,96.9-86.7,175.95-219.3,293.25L255,489.6z"/>
                        </svg>
                    </button>
                </div>
                <div class="bar_content">
                    <div class="barCard_details">
                        <h3 class="barCard_title color-primary">{{oneservice.businessName}}</h3>
                        <p class="brand_name"><span :class="{'is_verified': oneservice.isVerified}">{{oneservice.vendorsName}}</span></p>
                        <div class="prd_support_info">
                            <div class="rating_ind">
                                <div class="rateit" :data-rateit-value="oneservice.averageRating" data-rateit-ispreset="true" 
                            data-rateit-readonly="true"></div>
                                <span class="rating_space" title="4.5 from 10 reviews">{{oneservice.reviewsCount}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="barCard_callout">
                        <div class="insight_item">
                            <div class="insight_value color-inverse">
                                <span class="value_lg">
                                    <span class="currency naira">{{oneservice.price}}</span>
                                </span>
                            </div>
                            <div class="insight_title hidden__s">From</div>
                        </div>
                    </div>
                </div>
                    <router-link :to="{path:`/service_details_view/${oneservice.identityId}/service/${oneservice.serviceId}`}" class="bar_link"></router-link>
                
            </div>
        </article>  
    </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Subservicelist',

  data(){
      return{
        servicesList:null,
        packages:null,
        baseURL : process.env.VUE_APP_baseURL,
        listURL : `/api/v1/services/${this.id}/vendors`,
      }
  },

  props:{
      id:{ type:String}
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

  mounted(){
    this.getUrl(this.listURL);
    //getUrl(listURL);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
