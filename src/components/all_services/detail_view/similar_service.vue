<template>

    <div class="container section_wrapper">
        <header class="section_header">
            <h3 class="section_title">Similar Services</h3>
        </header>
        <div class="prd_card_list row" id="related_services">
        <article class="prd_card col-sm-6 col-md-3" v-for="similar in similaService" :key="similar.id">
        <div class="prd_card_wrapper bg-white">
            <a href="mng_service.html" class="prd_card_banner">
                <div class="prd_card_img" :style ="{backgroundImage:`url(${getImg(similar.logo)})`}">
                </div>
                <div class="card_gradient"></div>
            </a>
            <div class="prd_card_bd">
                <h4 class="prd_title">
                    <a :title="similar.businessName" href="mng_service.html">{{similar.serviceCsv}}</a>
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
    
</template>

<script>
import axios from 'axios';
export default {
    name: 'SimilarService',

    computed:{
        similaService:function(){return this.$store.getters.returnVendors}
    },
    props:{
        servicesDetail: Array
    },
    mounted(){
        this.$store.dispatch('fetchVendors');
    },
    methods:{
        getImg(src){
            return src
        }
    }
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
