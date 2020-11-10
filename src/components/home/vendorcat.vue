<template>
    <div class="service_cat_list row">
        <article class="category_card service_cat col-sm-6 col-md-4 col-lg-3" v-for="category in categories" :key="category.id">
            <router-link :to="{path:`/service_listings/${category.id}/vendors`}" class="cat_card_wrapper">
                <div class="cat_card_image getImg" :style ="{backgroundImage:`url(${this.getImg(category.banner)})`}" ></div>
                <div class="cat_card_content">
                    <div class="cat_icon_marker">
                        <img :src ="getImg(category.logo)"  alt="Catering" class="cust_icon icon_md">
                    </div>
                    <h3 class="cat_card_title">{{category.name}}</h3>
                    <p class="cat_card_subtitle"><span>{{category.vendorsCount}}</span> Vendor(s)</p>
                </div>
            </router-link>
        </article>
    </div>
</template>

<script>
import axios from 'axios';
import { mapActions, mapGetters } from "vuex";

export default {
  name: 'Category',
  methods:{
      getImg(src){
          return require('../../assets'+ src);
      },
  },
   computed:{
    categories:function(){ return this.$store.getters.returnServices}
  },
  mounted(){
    //...mapActions('fetchServices')
    this.$store.dispatch('fetchServices');
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
