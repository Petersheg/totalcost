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
import axios from 'axios';
//import hs from '../../assets/js/main';
export default {
  name: 'Vendors',
  data(){
      return{
          vendors: []
      }
  },
  methods:{
      getImg(src){
          return require('../../assets'+ src);
      }
  },
  mounted: function(){
      const baseURL = 'http://totalcost.ng';
      const featureURL = "/api/v1/vendor/featured/0/100";
      const url = baseURL+featureURL;
      axios.get(url)
      .then(res => this.vendors = res.data.data)
      .catch(err => console.log(err))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .ven-img{
        background-image: url('../../assets/img/logos/dummy_logo_3.png');
    }
</style>
