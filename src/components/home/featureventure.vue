<template>

    <div class="vendor_bar_list row" data-aos="fade-up" data-aos-duration="400" >
        <article class="card_bar tiny_bar col-sm-6 col-md-4" v-for="vendor in vendors" :key="vendor.id">
            <a href="vendor_profile_view.html" class="bar_wrapper">
                <div class="bar_image">
                    <span class="bar_img_holder" :style ="{backgroundImage:`url(${vendor.logo})`}"></span>
                </div>
                <div class="barCard_details">
                    <h5 class="brand_name"><span :class ='{ "is_verified": vendor.isVerified }'>{{vendor.name}}</span></h5>
                    <p class="card_subtitle">{{vendor.serviceCsv}}</p>
                </div>
            </a>
        </article>
    </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
export default {
  name: 'Vendors',
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
