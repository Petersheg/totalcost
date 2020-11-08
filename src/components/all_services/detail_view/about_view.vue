<template>
    
    <article class="details_block" id="sv_about" v-for="detaill in servicesDetail" :key="detaill.id">
        <header class="section_header">
            <h3 class="dt_block_title">About Service</h3>
        </header>
        <div class="service_info_section">
            <div class="vendor_info">
                <div class="sv_vendor_info">
                    <h4 class="vendor_name font-bold">{{detaill.businessName}}</h4>
                    <div class="rating_ind">
                        <div class="rateit" data-rateit-value="4.5" data-rateit-ispreset="true" data-rateit-readonly="true"></div>
                        <div class="rating_summary_vl">
                            <span class="rating_score font-bold">{{detaill.averageRating}}</span>
                            <span class="rating_sample_space">
                                {{detaill.reviewsCount}}
                            </span>
                        </div>
                    </div>
                    <div class="meta_list">
                        <div class="info_meta">
                            <span class="meta_value">{{detaill.businessTags}}</span>
                        </div>
                        <div class="info_meta">
                            <span class="meta_value">
                                <!-- {{detaill.contacts[0].city}},
                                 {{detaill.contacts[0].state}},
                                {{detaill.contacts[0].country}}, -->
                                </span>
                        </div>
                    </div>
                </div>
                <div class="vendor_info_sub">
                    <div class="insight_item">
                        <div class="insight_value color-inverse">
                            <span class="value_lg">
                                <span class="currency naira">{{detaill.price}}</span>
                            </span>
                        </div>
                        <div class="insight_title">Starting From</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="content_inner">
            <p>{{detaill.about}}</p>
        </div>
    </article>

</template>

<script>
import axios from 'axios';
export default {
  name: 'AboutView',
  
  props:{
      servicesDetail:Array
  },
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
