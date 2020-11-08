<template>
    <div class="service_cat_list row">
      <article class="category_card service_cat col-sm-6 col-md-4 col-lg-3" v-for="service in allservices" :key="service.id">
        <router-link :to="{path:`/service_listings/${service.id}/vendors`}" class="cat_card_wrapper">
            <div class="cat_card_image" :style ="{backgroundImage:`url(${getImg(service.banner)})`}"></div>
            <div class="cat_card_content">
                <div class="cat_icon_marker">
                    <img :src="getImg(service.logo)" alt="" class="cust_icon icon_md">
                </div>
                <h3 class="cat_card_title">{{service.name}}</h3>
                <p class="cat_card_subtitle"><span>{{service.vendorsCount}}</span> Vendors</p>
            </div>
        </router-link>
    </article>
    
    </div>
</template>

<script>
import axios from 'axios';
import { mapActions, mapGetters } from "vuex";

export default {
  name: 'Allservices',
  data(){
      return{
        //allservices:null,
        isLoading:true
      }
  },
  computed:{
    ...mapGetters('allservices',[returnServices])
  },
  methods:{
      getImg(src){
          return require('../../assets'+ src);
      },
      ...mapActions('user',[fetchServices])
  },

  async mounted(){

    if ( this.returnServices.length === 0 ) {
            // set loading screen
            this.isLoading = true;
            await this.fetchServices();
            this.isLoading = false;
        }
    // const baseURL = 'http://totalcost.ng';
    // const featureURL ="/api/v1/services/vendors";
    // const url = baseURL+featureURL;
    // axios.get(url)
    // .then(res => this.allservices = res.data.data)
    // .catch(err => console.log(err));

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
