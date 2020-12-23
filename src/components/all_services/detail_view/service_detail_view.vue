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
                            <li @click="toggle(nav.photo,nav.review)" :class="nav.photo ? 'active':''"><a href="#sv_gallery">Photos</a></li>
                            <li @click="toggle(nav.about,nav.photo)" :class="nav.about ? 'active' : ''"><a href="#sv_about">About</a></li>
                            <li @click="this.nav.pricing" :class="nav.pricing ? active : ''"><a href="#sv_pricing">Pricing</a></li>
                            <li @click="toggle(faqs,pricing)" :class="[nav.faqs ? 'active':'']"><a href="#sv_faqs">FAQs</a></li>
                            <li @click="this.toggle(review,photo)" :class="[nav.review ? 'active':'']"><a href="#sv_review">Reviews</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        <section class="section_block">
           <div class="container section_wrapper">
              <div class="row">
                   <section class="details_section col-md-7 col-lg-8 order-1" ref="detailz" v-for="detaill in servicesDetail" :key="detaill">
                       
                        <!--<AboutView></AboutView>-->
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
                                                <span class="meta_value" v-for="contact in contacts" :key="contact.id">
                                                    {{contact.country}}
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
                         <!--<Pricing></Pricing>-->
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
                       
                        <!-- <Faq></Faq> -->
                        <article class="details_block" id="sv_faqs">
        <header class="section_header">
            <div class="vendor_info">
                <div class="sv_vendor_info">
                    <h3 class="dt_block_title">Frequestly asked Questions</h3>
                </div>
            </div>
        </header>
        <div class="block_default hidden">
            <p>There are not FAQs provided by the vendor. Send a direct message to the vendor to make your enquires.</p>
        </div>
        <div class="content_inner">
            <div class="panel-group" id='faq_list'>
                <article class="panel panel_opaque"  v-for="faq in faqs" :key="faq.id">
                    <div class="panel-heading">
                        <h4 class="panel-title">
                            <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#faq_list" :href="getHref(faq.id)">{{faq.question}}?</a>
                        </h4>
                    </div>
                    <div :id="faq.id" class="panel-collapse collapse">
                        <div class="panel-body post_content">
                            <p>{{faq.answer}}</p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
                        </article>
                        
                        <!-- <Review ></Review> -->
                        <article class="details_block" id="sv_review">
                                <header class="section_header">
                                    <h3 class="dt_block_title">Reviews</h3>
                                    <div class="filter_bar">
                                        <div class="filter_item">
                                            <div class="media_item vn_rating">
                                                <div class="media_figure ">
                                                    <div class="rating_avg">
                                                        <span class="value">
                                                            4.5
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="media_info">
                                                    <p class="rating_remarks dsp_tab_row">
                                                        <span class="font-bold">Very Good</span>
                                                        <span class="rating_sample_space">171</span>
                                                    </p>
                                                    <div class="rating_ind">
                                                        <div class="rateit" data-rateit-value="4.5" data-rateit-ispreset="true" 
                                                    data-rateit-readonly="true"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="filter_item">
                                            <select class="form-control">
                                                <option>-Show-</option>
                                                <option selected>Most Recent</option>
                                                <option>5 Star</option>
                                                <option>4 Star</option>
                                                <option>3 Star</option>
                                                <option>2 Star</option>
                                                <option>1 Star</option>
                                            </select>
                                        </div>
                                    </div>
                                </header>
                                <div class="block_default hidden">
                                    <p>Help us serve you better, tell us what you think about this vendor.</p>
                                    <button class="btn btn-outline">Write a Review</button>
                                </div>
                                <div class="content_inner ">
                                    <div class="post_list">
                                        <div class="ds_post_item">
                                            <div class="post_author_thumb">
                                                <a href="user_profile_view.html" class="user_avatar">
                                                    <img src="../../../assets/img/1.jpg" alt="Nkem Onwuka">
                                                </a>
                                            </div>
                                            <div class="post_details_holder">
                                                <div class="post_details">
                                                    <header class="post_header justify-content-between">
                                                        <div class="post_info_meta">
                                                            <span class="author_name"><a href="user_profile_view.html">Nkem Onwuka</a>
                                                            </span>
                                                            <span class="post_time">
                                                                <time>2 days ago</time>
                                                            </span>
                                                        </div>
                                                        <div class="rating_score">
                                                            <div class="rt_score">
                                                                <span class="score_count">
                                                                    5
                                                                </span>
                                                                <span class="cust_icon star_score"></span>
                                                            </div>
                                                        </div>
                                                    </header>
                                                    <div class="post_content">
                                                        <p>I needed a good photographer for my wedding and engagement. I got back exactly what I wanted. The pictures are beautiful, and were delivered a day earlier than planned! Very good work.</p>
                                                    </div>
                                                </div>
                                                <div class="post_comment">
                                                    <div class="ds_post_item ">
                                                        <div class="post_author_thumb">
                                                            <a href="vendor_profile_view.html" class="user_avatar">
                                                                <img src="../../../assets/img/icons/user_default.png" alt="Teckno Concepts">
                                                            </a>
                                                        </div>
                                                        <div class="post_details_holder">
                                                            <div class="post_details">
                                                                <header class="post_header justify-content-between">
                                                                    <div class="post_info_meta">
                                                                        <span class="author_name"><a href="vendor_profile_view.html">Teckno Concepts</a>
                                                                        </span>
                                                                        <span class="post_time">
                                                                            <time>4 weeks ago</time>
                                                                        </span>
                                                                    </div>
                                                                </header>
                                                                <div class="post_content">
                                                                    <p>Thanks for the good words.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="ds_post_item">
                                            <div class="post_author_thumb">
                                                <a href="user_profile_view.html" class="user_avatar">
                                                    <img src="../../../assets/img/2.jpg" alt="Awogbemi Oluwatobi">
                                                </a>
                                            </div>
                                            <div class="post_details_holder">
                                                <div class="post_details">
                                                    <header class="post_header justify-content-between">
                                                        <div class="post_info_meta">
                                                            <span class="author_name"><a href="user_profile_view.html">Awogbemi Oluwatobi</a>
                                                            </span>
                                                            <span class="post_time">
                                                                <time>2 weeks ago</time>
                                                            </span>
                                                        </div>
                                                        <div class="rating_score">
                                                            <div class="rt_score">
                                                                <span class="score_count">
                                                                    2
                                                                </span>
                                                                <span class="cust_icon star_score"></span>
                                                            </div>
                                                        </div>
                                                    </header>
                                                    <div class="post_content">
                                                        <p>I not satisfied, edited pictures look to artificial, and the backgrounds were just not working. Poor lighting conditions on the pictures too. I really will not mind a refund.</p>
                                                    </div>
                                                </div>
                                                <div class="post_comment hidden">
                                                    <div class="ds_post_item ">
                                                        <div class="post_author_thumb">
                                                            <a href="vendor_profile_view.html" class="user_avatar">
                                                                <img src="../../../assets/img/icons/user_default.png" alt="Teckno Concepts">
                                                            </a>
                                                        </div>
                                                        <div class="post_details_holder">
                                                            <div class="post_details">
                                                                <header class="post_header justify-content-between">
                                                                    <div class="post_info_meta">
                                                                        <span class="author_name"><a href="vendor_profile_view.html">Teckno Concepts</a>
                                                                        </span>
                                                                        <span class="post_time">
                                                                            <time>4 weeks ago</time>
                                                                        </span>
                                                                    </div>
                                                                </header>
                                                                <div class="post_content ">
                                                                    <p>Thanks for the good words.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="ds_post_item">
                                            <div class="post_author_thumb">
                                                <a href="user_profile_view.html" class="user_avatar">
                                                    <img src="../../../assets/img/3.jpg" alt="Hellen Onyeka">
                                                </a>
                                            </div>
                                            <div class="post_details_holder">
                                                <div class="post_details">
                                                    <header class="post_header justify-content-between">
                                                        <div class="post_info_meta">
                                                            <span class="author_name"><a href="user_profile_view.html">Hellen Onyeka</a>
                                                            </span>
                                                            <span class="post_time">
                                                                <time>3 weeks ago</time>
                                                            </span>
                                                        </div>
                                                        <div class="rating_score">
                                                            <div class="rt_score">
                                                                <span class="score_count">
                                                                    4.5
                                                                </span>
                                                                <span class="cust_icon star_score"></span>
                                                            </div>
                                                        </div>
                                                    </header>
                                                    <div class="post_content">
                                                        <p>Lots of good shots, and very memorable moments captured.</p>
                                                    </div>
                                                </div>
                                                <div class="post_comment hidden">
                                                    <div class="ds_post_item ">
                                                        <div class="post_author_thumb">
                                                            <a href="vendor_profile_view.html" class="user_avatar">
                                                                <img src="../../../assets/img/icons/user_default.png" alt="Teckno Concepts">
                                                            </a>
                                                        </div>
                                                        <div class="post_details_holder">
                                                            <div class="post_details">
                                                                <header class="post_header justify-content-between">
                                                                    <div class="post_info_meta">
                                                                        <span class="author_name"><a href="vendor_profile_view.html">Teckno Concepts</a>
                                                                        </span>
                                                                        <span class="post_time">
                                                                            <time>4 weeks ago</time>
                                                                        </span>
                                                                    </div>
                                                                </header>
                                                                <div class="post_content">
                                                                    <p>Thanks for the good words.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="ds_post_item">
                                            <div class="post_author_thumb">
                                                <a href="user_profile_view.html" class="user_avatar">
                                                    <img src="../../../assets/img/1.jpg" alt="Nkem Onwuka">
                                                </a>
                                            </div>
                                            <div class="post_details_holder">
                                                <div class="post_details">
                                                    <header class="post_header justify-content-between">
                                                        <div class="post_info_meta">
                                                            <span class="author_name"><a href="user_profile_view.html">Nkem Onwuka</a>
                                                            </span>
                                                            <span class="post_time">
                                                                <time>5 Weeks ago</time>
                                                            </span>
                                                        </div>
                                                        <div class="rating_score">
                                                            <div class="rt_score">
                                                                <span class="score_count">
                                                                    5
                                                                </span>
                                                                <span class="cust_icon star_score"></span>
                                                            </div>
                                                        </div>
                                                    </header>
                                                    <div class="post_content">
                                                        <p>I needed a good photographer for my wedding and engagement. I got back exactly what I wanted. The pictures are beautiful, and were delivered a day earlier than planned! Very good work.</p>
                                                    </div>
                                                </div>
                                                <div class="post_comment hidden">
                                                    <div class="ds_post_item ">
                                                        <div class="post_author_thumb">
                                                            <a href="vendor_profile_view.html" class="user_avatar">
                                                                <img src="../../../assets/img/icons/user_default.png" alt="Teckno Concepts">
                                                            </a>
                                                        </div>
                                                        <div class="post_details_holder">
                                                            <div class="post_details">
                                                                <header class="post_header justify-content-between">
                                                                    <div class="post_info_meta">
                                                                        <span class="author_name"><a href="vendor_profile_view.html">Your Response</a>
                                                                        </span>
                                                                        <span class="post_time">
                                                                            <time>4 weeks ago</time>
                                                                        </span>
                                                                    </div>
                                                                </header>
                                                                <div class="post_content">
                                                                    <p>Thanks for the good words.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="ds_post_item">
                                            <div class="post_author_thumb">
                                                <a href="user_profile_view.html" class="user_avatar">
                                                    <img src="../../../assets/img/3.jpg" alt="Hellen Onyeka">
                                                </a>
                                            </div>
                                            <div class="post_details_holder">
                                                <div class="post_details">
                                                    <header class="post_header justify-content-between">
                                                        <div class="post_info_meta">
                                                            <span class="author_name"><a href="user_profile_view.html">Hellen Onyeka</a>
                                                            </span>
                                                            <span class="post_time">
                                                                <time>3 Months ago</time>
                                                            </span>
                                                        </div>
                                                        <div class="rating_score">
                                                            <div class="rt_score">
                                                                <span class="score_count">
                                                                    4.5
                                                                </span>
                                                                <span class="cust_icon star_score"></span>
                                                            </div>
                                                        </div>
                                                    </header>
                                                    <div class="post_content">
                                                        <p>Lots of good shots, and very memorable moments captured.</p>
                                                    </div>
                                                </div>
                                                <div class="post_comment hidden">
                                                    <div class="ds_post_item ">
                                                        <div class="post_author_thumb">
                                                            <a href="vendor_profile_view.html" class="user_avatar">
                                                                <img src="../../../assets/img/icons/user_default.png" alt="Teckno Concepts">
                                                            </a>
                                                        </div>
                                                        <div class="post_details_holder">
                                                            <div class="post_details">
                                                                <header class="post_header justify-content-between">
                                                                    <div class="post_info_meta">
                                                                        <span class="author_name"><a href="vendor_profile_view.html">Your Response</a>
                                                                        </span>
                                                                        <span class="post_time">
                                                                            <time>4 weeks ago</time>
                                                                        </span>
                                                                    </div>
                                                                </header>
                                                                <div class="post_content hidden">
                                                                    <p>Thanks for the good words.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="ds_post_item section_cto">
                                            <button type="button" class="btn-link">+ See More</button>
                                        </div>
                                    </div>
                                </div>
                        </article>
                        
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
//import axios from 'axios';
import {httpClient} from '../../../api/newService'
import Card from './Card.vue';
import Gallery from './Gallery.vue';

export default {
  name: 'ServicedetailsV',
  components:{
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
          nav:{
              photo:false,
              about:false,
              price:false,
              faqs:false,
              review:false
          },

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
            let res = await httpClient.get(endPoint)

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
    toggle(btn,arg){
        return{
            btn : true,
            arg : false
        }
    },

    getImg(src){
        return src
    },

    getHref(path){
          return `#${path}`;
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
