<template>
    
    <article class="details_block" id="sv_pricing">
        <header class="section_header">
            <h3 class="dt_block_title">Service Pricing</h3>
        </header>
        <div class="block_default hidden">
            <p>No price information provided on this service. Contact the vendor to request a quote.</p>
            <div class="section_cto">
                <a href="" class="btn btn-inverse">Request Quote</a>
            </div>
        </div>
        <div class="content_inner">
            <p>Price packages provide a way for you to create different pricing schemes for different customer needs. </p>
            <div class="panel-group" id="package_panels" v-for="packagee in packages" :key="packagee.id">
                <!--Preview page for an existing package.-->
                <div class="panel settings_panel">
                    <header class="wd_wrapper" >
                        <a class="widget_info accordion-toggle collapsed" data-toggle="collapse" data-parent="#settings_accordions" :href="getHref(packagee.name)">
                            <h4 class="panel-title color-black">{{packagee.name}}</h4>
                            <div class="info_meta color-grey">
                                <span class="meta_label">View Details</span>
                            </div>
                        </a>
                        <div class="widget_controls">
                            <div class="insight_item text-right">
                                <div class="insight_value">
                                    <span class="value">
                                        <span class="currency naira">{{packagee.amount}}</span>
                                    </span>
                                </div>
                                <div class="insight_title">Package Price</div>
                            </div>
                        </div>
                    </header>
                    <div class="panel-collapse collapse" :id="packagee.name">
                        <div class="panel_inner">
                            <p>Package description as provided in the package information setup goes here. It is then followed by the package price, and a list of package constraints, also set by the vendor.</p>
                            <div class="pricing_addon">
                                <div class="insight_title text-caps font-bold">Package Options</div>
                                <div class="pricing_addon_list">
                                    <!--toggle the -->
                                    <article class="addonItem selected">
                                        <label for="add_1_1" class="item_wrapper">
                                            <input type="checkbox" checked hidden name="addon_item" id="add_1_1">
                                            <span class="selectionMarker"></span>
                                            <span class="addonTitle">Crowd size</span>
                                            <div class="addonPrice font-bold">
                                                <span class="currency naira">15,000</span>
                                            </div>
                                            <span class="addon_cto">
                                                <a href="#" class="btn-link">Details</a>
                                            </span>
                                        </label>
                                    </article>
                                    
                                    <article class="addonItem selected">
                                        <label for="add_1_2" class="item_wrapper">
                                            <input type="checkbox" checked hidden name="addon_item" id="add_1_2">
                                            <span class="selectionMarker"></span>
                                            <span class="addonTitle">Transportation</span>
                                            <div class="addonPrice font-bold">
                                                <span class="currency naira">10,000</span>
                                            </div>
                                            <span class="addon_cto">
                                                <a href="#" class="btn-link">Details</a>
                                            </span>
                                        </label>
                                    </article>
                                    
                                    <article class="addonItem selected">
                                        <label for="add_1_3" class="item_wrapper">
                                            <input type="checkbox" checked hidden name="addon_item" id="add_1_3">
                                            <span class="selectionMarker"></span>
                                            <span class="addonTitle">Extra Staffs</span>
                                            <div class="addonPrice font-bold">
                                                <span class="currency naira">35,000</span>
                                            </div>
                                            <span class="addon_cto">
                                                <a href="#" class="btn-link">Details</a>
                                            </span>
                                        </label>
                                    </article>
                                    
                                    <article class="addonItem selected">
                                        <label for="add_1_4" class="item_wrapper">
                                            <input type="checkbox" checked hidden name="addon_item" id="add_1_4">
                                            <span class="selectionMarker"></span>
                                            <span class="addonTitle">Service Charge</span>
                                            <div class="addonPrice font-bold">
                                                <span class="currency naira">5,000</span>
                                            </div>
                                            <span class="addon_cto">
                                                <a href="#" class="btn-link">Details</a>
                                            </span>
                                        </label>
                                    </article>
                                </div>
                                <div class="pricing_footer font-bold">
                                    <div class="">
                                        <span class="infoTitle font-regular">Price Total:</span>
                                    </div>
                                    <div class="value">
                                        <span class="currency naira">75,000</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </article>

</template>

<script>
import axios from 'axios';
export default {
  name: 'Pricing',
  
  props:{
      servicesDetail:Array,
      packages:Array
  },
  methods:{
      getHref(path){
          return `#${path}`;
      }
  }
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
