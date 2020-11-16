<template>


    <div class="row">
        <div class="col-md-6 col-lg-8">
            <div class="vendor_bar_list row" >
                <article class="card_bar tiny_bar col-sm-6 col-md-4" v-for="vendor in vendors" :key="vendor.id">
                    <router-link to="/vendor_profile_view" class="bar_wrapper">
                        <div class="bar_image">
                            <span class="bar_img_holder" :style ="{backgroundImage:`url(${vendor.logo})`}"></span>
                        </div>
                        <div class="barCard_details">
                            <h5 class="brand_name"><span :class ='{ "is_verified": vendor.isVerified }'>{{vendor.name}}</span></h5>
                            <p class="card_subtitle">{{vendor.serviceCsv}}</p>
                        </div>
                    </router-link>
                </article>
            </div>
        </div>
        <div class="col-md-6 col-lg-4">
            <div class="feature_ad_panel">
                <div class="cat_card_wrapper">
                    <div class="cat_card_image" style="background-image: url(@/assets/img/banners/merchant_hold.jpg)"></div>
                    <div class="ad_content cat_card_content">
                        <h3 class="section_title">Become a Vendor</h3>
                        <p>Do you offer event services in any capacity, and will like to get more clients? </p>
                        <p>Sign up as a Totalcost Vendor today, and start receiving orders from all parts of the Country.</p>
                        <div class="section_cto">
                            <router-link to="/merchant_home" class="btn btn-inverse">Become a Vendor</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
  name: 'Topvendors',
  data(){
      return{
      }
  },
  computed:{
      vendors:function(){return this.$store.getters.returnVendors}
  },
  methods:{
      getImg(src){
          return require('../../assets'+ src);
      }
      
  },
  mounted: function(){
      this.$store.dispatch('fetchVendors');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
