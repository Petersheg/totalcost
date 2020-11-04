<template>
   <div class="card_list">
        <article class="card_item" v-for="browse in browses" :key="browse.id">
            <a href="#" class="feature_wrapper">
                <figure class="feature_icon">
                    <img :src="getImg(browse.imageUrl)" alt="{{browse.name}}">
                </figure>
                <h4 class="feature_title font-regular">
                    {{browse.name}}
                </h4>
            </a>
        </article>
   </div>
</template>

<script>
import axios from 'axios';
//import hs from '../../assets/js/main';
export default {
  name: 'Browse',
  data(){
      return{
          browses: []
      }
  },
  methods:{
      getImg(src){
          return require('../../assets'+ src);
      }
  },
  mounted: function(){
      const baseURL = 'http://totalcost.ng';
      const featureURL = "/api/v1/services";
      const url = baseURL+featureURL;
      axios.get(url)
      .then(res => this.browses = res.data.data)
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
