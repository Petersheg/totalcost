<template>
   <div class="card_list">
        <article class="card_item" v-for="browse in browses" :key="browse.id">
            <router-link :to="{path:`/service_listings/${browse.id}/vendors`}" class="feature_wrapper">
                <figure class="feature_icon">
                    <img :src="getImg(browse.imageUrl)" alt="{{browse.name}}">
                </figure>
                <h4 class="feature_title font-regular">
                    {{browse.name}}
                </h4>
            </router-link>
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
      }
  },
  methods:{
      getImg(src){
          return require('../../assets'+ src);
      }
  },
  computed:{
      browses:function(){return this.$store.getters.returnAllServices}
  },
  mounted: function(){
      this.$store.dispatch('allServices')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
