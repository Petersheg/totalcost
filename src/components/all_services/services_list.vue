<template>
  <div class="mt-top">
      <main class="main_content_area  bg-off-white">
        <nav class="breadcrumb_nav">
            <div class="container">
                <div class="control_wrapper clearfix">
                    <ol class="breadcrumb">
                        <li>
                            <router-link to="/">Home</router-link>
                        </li>
                        <li>
                            <router-link to="/all_services">Services</router-link>
                        </li>
                        <li class="active" v-for="service in serviceLists" :key="service.id">
                            <span>{{service.serviceName}}</span>
                        </li>
                    </ol>
                </div>
            </div>
        </nav>
        <section class="section_block categoryServices">
            <div class="container section_wrapper">
                <header class="categoryHeader">
                    <div class="categoryMenu dropdown" v-for="oneservice in serviceLists" :key="oneservice.id">
                        <a href="#" data-toggle="dropdown" class="categorySelector dropdown-toggle">
                            <h2 class="categoryTitle">{{oneservice.serviceName}}</h2>
                            <span class="selectorTrigger_btn">
                                <svg class="cust_icon" viewBox="0 0 32 32" width="100%" height="100%">
                                    <title>triangle-down</title>
                                    <path d="M32 6.857h-32l16 18.286z"></path>
                                </svg>
                            </span>
                        </a>
                        <div class="dropdown-menu">
                            <div class="categories_dropdown">
                                <ul class="subNavigation">
                                    <li v-for="service in allServices" :key="service.id">
                                        <router-link :to="{path:`/service_listings/${service.id}/vendors`}" class="menuLink_item">{{service.name}}</router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <p class="categorySummary">
                        <span>{{getLength()}}</span>
                        vendors near
                        <a href="#change_location" data-toggle="modal" class="catFilter_location">
                            <span>Ikeja, Lagos</span>
                            <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.67 10.67">
                                <path d="M10,.69a2.35,2.35,0,0,0-3.33,0L.54,6.79A.31.31,0,0,0,.46,7L0,10.32a.3.3,0,0,0,.09.26.31.31,0,0,0,.22.09h0l2-.27a.31.31,0,0,0-.08-.61L.66,10,1,7.66l2.46,2.46a.31.31,0,0,0,.22.09.3.3,0,0,0,.22-.09L10,4A2.35,2.35,0,0,0,10,.69Zm-3.21.75,1,1L2.22,8l-1-1Zm-3.11,8-1-1L8.23,2.9l1,1Zm6-6L7.2,1A1.74,1.74,0,0,1,9.66,3.46Z" />
                            </svg>
                        </a>
                    </p>
                </header>
                <div class="categoryContent">
                    <aside class="categoryFilter order-2">
                        <div class="wrapper_outer">
                            <div class="wrapper_inner">
                               <header class="flWidget_Header">
                                   <h3 class="info_title text-caps">Filter</h3>
                                   <button class="close_dialog"></button>
                               </header>
                                <article class="filter_section">
                                    <header class="filterSection_header">
                                        <a class="accordion-toggle" data-toggle="collapse" data-parent="#settings_accordions" href="#fl_block_price">Price Range</a>
                                    </header>
                                    <div class="filterSection_content collapse show " id="fl_block_price">
                                        <div class="form-group">
                                            <label for="" class="control-label sr-only">
                                                Set Price Range
                                            </label>
                                            <div class="dynamic_input_widget">
                                                <div class="dy_input_item input_avg">
                                                    <input type="number" class="form-control" placeholder="Minimum">
                                                </div>
                                                <div class="dy_input_item input_avg">
                                                    <input type="number" class="form-control" placeholder="Maximum">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                <article class="filter_section">
                                    <header class="filterSection_header">
                                        <a class="accordion-toggle" data-toggle="collapse" data-parent="#settings_accordions" href="#fl_block_rating">Average Rating</a>
                                    </header>
                                    <div class="filterSection_content collapse show" id="fl_block_rating">
                                        <div class="filterInput_list">
                                            <article class="checkbox filterInput_item">
                                                <label for="rt_full" class="control-label">
                                                   <input type="checkbox" id="rt_full" class="" name="service_rating">
                                                    <span class="font-regular">
                                                        5 Star
                                                        <span class="bracket_enclosure color-grey">45</span>
                                                    </span>
                                                </label>
                                            </article>
                                            <article class="checkbox filterInput_item">
                                                <label for="rt_4" class="control-label">
                                                   <input type="checkbox" id="rt_4" class="" name="service_rating">
                                                    <span class="font-regular">
                                                        4 Star
                                                        <span class="bracket_enclosure color-grey">105</span>
                                                    </span>
                                                </label>
                                            </article>
                                            <article class="checkbox filterInput_item">
                                                <label for="rt_3" class="control-label">
                                                   <input type="checkbox" id="rt_3" class="" name="service_rating">
                                                    <span class="font-regular">
                                                        3 Star
                                                        <span class="bracket_enclosure color-grey">15</span>
                                                    </span>
                                                </label>
                                            </article>
                                            <article class="checkbox filterInput_item">
                                                <label for="rt_2" class="control-label">
                                                   <input type="checkbox" id="rt_2" class="" name="service_rating">
                                                    <span class="font-regular">
                                                        2 Star
                                                        <span class="bracket_enclosure color-grey">45</span>
                                                    </span>
                                                </label>
                                            </article>
                                            <article class="checkbox filterInput_item">
                                                <label for="rt_1" class="control-label">
                                                   <input type="checkbox" id="rt_1" class="" name="service_rating">
                                                    <span class="font-regular">
                                                        1 Star
                                                        <span class="bracket_enclosure color-grey">7</span>
                                                    </span>
                                                </label>
                                            </article>
                                            <article class="checkbox filterInput_item">
                                                <label for="rt_0" class="control-label">
                                                   <input type="checkbox" id="rt_0" class="" name="service_rating">
                                                    <span class="font-regular">
                                                        0 Star
                                                        <span class="bracket_enclosure color-grey">2</span>
                                                    </span>
                                                </label>
                                            </article>
                                        </div>
                                    </div>
                                </article>
                                <article class="filter_section">
                                    <header class="filterSection_header">
                                        <a class="accordion-toggle" data-toggle="collapse" data-parent="#settings_accordions" href="#fl_block_distance">Approximate Distance</a>
                                    </header>
                                    <div class="filterSection_content collapse show" id="fl_block_distance">
                                        <div class="filterInput_list">
                                            <article class="radio filterInput_item">
                                                <label for="dis_10m" class="control-label">
                                                   <input type="radio" id="dis_10m" class="" name="vendor_distance">
                                                    <span class="font-regular">
                                                        Within 10 Miles
                                                    </span>
                                                </label>
                                            </article>
                                            <article class="radio filterInput_item">
                                                <label for="dis_20m" class="control-label">
                                                   <input type="radio" id="dis_20m" class="" name="vendor_distance">
                                                    <span class="font-regular">
                                                        Within 20 Miles
                                                    </span>
                                                </label>
                                            </article>
                                            <article class="radio filterInput_item">
                                                <label for="dis_30m" class="control-label">
                                                   <input type="radio" id="dis_30m" class="" name="vendor_distance">
                                                    <span class="font-regular">
                                                        Within 30 Miles
                                                    </span>
                                                </label>
                                            </article>
                                            <article class="radio filterInput_item">
                                                <label for="dis_40m" class="control-label">
                                                   <input type="radio" id="dis_40m" class="" name="vendor_distance">
                                                    <span class="font-regular">
                                                        Within 20 Miles
                                                    </span>
                                                </label>
                                            </article>
                                            <article class="radio filterInput_item">
                                                <label for="dis_50m" class="control-label">
                                                   <input type="radio" id="dis_50m" class="" name="vendor_distance">
                                                    <span class="font-regular">
                                                        Within 50 Miles
                                                    </span>
                                                </label>
                                            </article>
                                        </div>
                                    </div>
                                </article>
                                <article class="filter_section">
                                    <header class="filterSection_header">
                                        <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#settings_accordions" href="#fl_block_status">Vendor Status</a>
                                    </header>
                                    <div class="filterSection_content collapse" id="fl_block_status">
                                        <div class="filterInput_list">
                                           <article class="checkbox filterInput_item">
                                                <label for="vnd_all" class="control-label">
                                                   <input type="checkbox" checked id="vnd_all" name="vnd_status">
                                                    <span class="font-regular">
                                                        All Vendors
                                                        <span class="bracket_enclosure color-grey">245</span>
                                                    </span>
                                                </label>
                                            </article>
                                            <article class="checkbox filterInput_item">
                                                <label for="vnd_verified" class="control-label">
                                                   <input type="checkbox" id="vnd_verified" class="" name="vnd_status">
                                                    <span class="font-regular">
                                                        Verified by Totalcost
                                                        <span class="bracket_enclosure color-grey">145</span>
                                                    </span>
                                                </label>
                                            </article>
                                            <article class="checkbox filterInput_item">
                                                <label for="vnd_nverified" class="control-label">
                                                   <input type="checkbox" id="vnd_nverified" class="" name="vnd_status">
                                                    <span class="font-regular">
                                                        Not Verified
                                                        <span class="bracket_enclosure color-grey">100</span>
                                                    </span>
                                                </label>
                                            </article>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </aside>
                    <div class="categoryItems order-1">
                        <div class="categoryFilter_var filter_bar">
                            <div class="filter_control_group">
                               <div class="filter_option sort_list">
                                    <select class="form-control ">
                                        <option value="">Newly Listed</option>
                                        <option value="">Featured</option>
                                        <option value="">Rating</option>
                                        <option value="">Price: Low - High</option>
                                        <option value="">Price: High - Low</option>
                                    </select>
                                </div>
                            </div>
                            <div class="filter_control_group">
                                <div class="filter_option filter_toggle">
                                    <button type="button" class="filter_control toggle_filter" title="Open Filter">
                                        <span class="flControl_label">Filter</span>
                                        <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.86 16">
                                            <path d="M6,7.56a1,1,0,0,1,.26.67V15.5a.49.49,0,0,0,.84.35l2-2.33c.27-.33.42-.49.42-.81V8.23a1,1,0,0,1,.26-.67l5.82-6.32A.74.74,0,0,0,15.11,0H.74A.74.74,0,0,0,.2,1.24Z"/>
                                        </svg>
                                    </button>    
                                </div>
                            </div>
                        </div>
                        <!-- PUT NEW COMPONENT HERE --> 
                            <Subservicelist :id="this.id" ></Subservicelist>
                    </div>
                </div>
                <div class="list_pager">
                    <div class="pager_block">
                        <p class="pager_label">
                            You've viewed <span>24</span> of <span>245 Services</span>
                        </p>
                        <div class="progress pager_progress_indicator">
                            <div class="progress-bar" role="progressbar" style="width: 12%" aria-valuenow="12" aria-valuemin="0" aria-valuemax="100">
                                <span class="sr-only">12% Completed</span>      
                            </div>
                        </div>
                        <div class="pager_controls">
                            <button type="button" class="btn btn-link" disabled>Previous</button>
                            <button type="button" class="btn btn-link">Next</button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
        <section class="section_block banner_bg ev_budget_banner">
            <div class="container narrow_container section_wrapper color-white">
                <header class="section_header text-center">
                    <h1 class="section_title font_regular">Let’s work together.</h1>
                    <span class="deco_bar"></span>
                    <p class="font-md">Our event budgeting service is designed to remove the stress of finding the best vendors for your event. Giving you the liberty to focus on other equally important aspects of your events.</p>
                </header>

                <div class="custom_control_group">
                    <div class="input_group_wrapper">
                        <div class="budget_input_item form-group">
                            <label for="" class="control-label sr-only">Event Type</label>
                            <select class="form-control input_filled">
                                <option>Event Type</option>
                                <option>Birthday</option>
                                <option>Wedding</option>
                                <option>Burial</option>
                                <option>Award</option>
                                <option>Coronation</option>
                                <option>Inauguration</option>
                                <option>Others</option>
                            </select>
                        </div>
                        <div class="budget_input_item form-group">
                            <label for="" class="control-label sr-only">Event Location</label>
                            <input type="text" placeholder="Event Location" class="form-control input_filled">
                        </div>
                        <div class="budget_input_item form-group">
                            <label for="" class="control-label sr-only">Your Budget</label>
                            <input type="number" placeholder="Your budget" class="form-control input_filled">
                        </div>
                    </div>
                    <div class="budget_input_btn">
                        <button type="submit" class="btn btn-inverse">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    </main>
  </div>
</template>

<script>
import Subservicelist from '../all_services/subservice_list';
import axios from 'axios';
export default {
  name: 'Serviceslist',
  components:{
      Subservicelist
  },
  data(){
      return{
        serviceLists:[],
        baseURL : process.env.VUE_APP_baseURL,
        listURL : `/api/v1/services/${this.id}/vendors`,
      }
  },
  
  props:{
      id:String
  },
  computed:{
      allServices:function(){return this.$store.getters.returnAllServices}
  },
   methods:{

      getUrl(endPoint){
        const url = this.baseURL+endPoint;
        axios.get(url)
        .then(res =>{
            this.serviceLists = res.data.data;
        })
        .catch(err => console.log(err))
    },
        getLength(){
        return this.serviceLists.length
    }
  },

  mounted(){
    this.getUrl(this.listURL);
    this.$store.dispatch('allServices');
  },
  updated(){
      this.getLength()  
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .mt-top{
        margin-top: 60px;
    }
</style>
