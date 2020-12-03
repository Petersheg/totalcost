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
            <div class="container section_wrapper">
                <header class="section_header">
                    <h3 class="section_title">Similar Services</h3>
                </header>
                <div class="prd_card_list row" id="related_services">
                    <article class="prd_card col-sm-6 col-md-3" v-for="similar in similaService" :key="similar">
                        <div class="prd_card_wrapper bg-white">
                            <router-link to="/mng_service" class="prd_card_banner">
                                <div class="prd_card_img" :style ="{backgroundImage:`url(${getImg(similar.logo)})`}">
                                </div>
                                <div class="card_gradient"></div>
                            </router-link>
                            <div class="prd_card_bd">
                                <h4 class="prd_title">
                                    <router-link :title="similar.businessName" to="/mng_service">{{similar.serviceCsv}}</router-link>
                                </h4>
                                <p class="brand_name"><span :class="{'is_verified': similar.isVerified}">{{similar.name}}</span></p>
                                <div class="prd_support_info">
                                    <div class="rating_ind">
                                        <div class="rateit" data-rateit-value="4.5" data-rateit-ispreset="true" 
                                    data-rateit-readonly="true"></div>
                                        <span class="rating_space" title="4.5 from 10 reviews">10</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                                
                </div>
                <div class="scroll_arrows"></div>
            </div>
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

export default {
  name: 'ServicedetailsV',
  components:{
      AboutView,
      Pricing,
      Faq,
      Review,
      Card,
      Gallery,
  },
  data(){
      return{
          packages:null,
          faqs:null,
          socials:null,
          contacts:null,
          gallery:null,
          servicesDetail:[],

        listDetailURL:`/vendor/${this.idd}/service/${this.serid}`,
      }
  },
  props:{
      idd:String,
      serid: String
  },
  methods:{
   async getUrl(endPoint){
        try {
            let res = await axios.get(endPoint)

            this.servicesDetail.push(res.data.data);
            this.packages = res.data.data.packages;
            this.socials = res.data.data.socialMediaHandles;
            this.contacts = res.data.data.contacts;
            this.faqs = res.data.data.faqs;
            this.gallery = res.data.data.gallery;
        } catch (error) {
            console.log(error);
        }
        
    },

    getImg(src){
        return src
    },

    loadScript(src){
      const script = document.createElement('script');
      script.setAttribute('src', src);
      script.async = true;
      document.body.appendChild(script);
    },

    getId(){
        this.$refs["detailz"].scrollIntoView("#sv_faqs",50000);
    }
  },
  computed:{
        similaService:function(){return this.$store.getters.returnVendors}
    },
  mounted(){
      this.getUrl(this.listDetailURL);
      this.$store.dispatch('fetchVendors');
      //Loading Script
      this.loadScript('../../../../js/ScrollMagic.min.js');
      this.loadScript('../../../../js/jquery.rateit.min.js');
      this.loadScript('../../../../js/interScript/serviceDetailView.js');
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
