<template>
     <main class="main_content_area bg-off-white">
        <section class="gallery_hero" id="sv_gallery">
           <Gallery :gallery ="gallery"></Gallery>
       </section>
        <nav class="sticky_nav">
            <div class="section_nav">
                <div class="container">
                    <div class="section_nav_row" id="menu_nav">
                        <ul class="nav nav-tabs">
                            <!-- <li class="active"><a href="#sv_gallery">Photos</a></li>
                            <li><router-link :to="{name:'About',hash:'#sv_about'}">About</router-link></li>
                            <li><router-link :to="{name:'Pricing',hash:'#sv_pricing'}">Pricing</router-link></li>
                            <li><router-link :to="{name:'Question',hash:'#sv_faqs'}">FAQs</router-link></li>
                            <li><router-link :to="{name:'Review',hash:'#sv_review'}">Reviews</router-link></li> -->
                            
                            <li class="active"><a href="#sv_gallery">Photos</a></li>
                            <li><a >About</a></li>
                            <li><a >Pricing</a></li>
                            <li><a @click="getId()">FAQs</a></li>
                            <li><a >Reviews</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        <section class="section_block">
           <div class="container section_wrapper">
              <div class="row">
                   <section class="details_section col-md-7 col-lg-8 order-1" ref="detailz" v-for="detaill in servicesDetail" :key="detaill">
                       
                        <AboutView :servicesDetail="servicesDetail" :contacts="contacts"></AboutView>
                            
                        <Pricing :servicesDetail="servicesDetail" :packages="packages" ></Pricing>
                        
                        <Faq :servicesDetail="servicesDetail" :faqs="faqs" id="#sv_faqs"></Faq>

                        <Review ></Review>
                   </section>
                   <aside class="col-md-5 col-lg-4 order-2">
                        <Card :servicesDetail="servicesDetail" :socials="socials" :contacts="contacts"></Card>
                   </aside>
              </div>
           </div>
        </section>
        <section class="section_block bg-white">
            <SimilarService :servicesDetail="servicesDetail"></SimilarService>
        </section>
    </main>
</template>

<script>
import axios from 'axios';
import AboutView from './about_view'
import Pricing from './pricing';
import Faq from './questions';
import Review from './Review.vue';
import Card from './Card.vue';
import Gallery from './Gallery.vue';
import SimilarService from './similar_service';

export default {
  name: 'ServicedetailsV',
  components:{
      AboutView,
      Pricing,
      Faq,
      Review,
      Card,
      Gallery,
      SimilarService,
  },
  data(){
      return{
          packages:null,
          faqs:null,
          socials:null,
          contacts:null,
          gallery:null,
          servicesDetail:[],

        baseURL : process.env.VUE_APP_baseURL,
        listDetailURL:`/api/v1/vendor/${this.idd}/service/${this.serid}`,
      }
  },
  props:{
      idd:String,
      serid: String
  },
  methods:{
       getUrl(endPoint){
        axios.get(process.env.VUE_APP_baseURL+endPoint)
        .then(res => {
            this.servicesDetail.push(res.data);
            this.packages = res.data.packages;
            this.socials = res.data.socialMediaHandles;
            this.contacts = res.data.contacts
            this.faqs = res.data.faqs;
            this.gallery = res.data.gallery
        })
        .catch(err => console.log(err));
    },

    loadScript(src){
      const script = document.createElement('script');
      script.setAttribute('src', src);
      script.async = true;
      document.body.appendChild(script);
    },

    getId(){
        this.$refs["detailz"].scrollIntoView("#sv_faqs",500);
    }
  },
  mounted(){
      this.getUrl(this.listDetailURL);
      //Loading Script
      this.loadScript('../../../../js/ScrollMagic.min.js');
      this.loadScript('../../../../js/jquery.rateit.min.js');
      this.loadScript('../../../../js/interScript/serviceDetailView.js');
  },
  beforeCreate(){
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
