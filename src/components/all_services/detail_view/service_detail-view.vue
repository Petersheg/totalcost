<template>
     <main class="main_content_area bg-off-white">
        <section class="gallery_hero" id="sv_gallery">
           <div class="gallery_wrapper">
               <div class="gallery_slides">
                   <div class="gallery_slide_item">
                       <div class="slide_item_wrapper">
                           <div class="slide_image_wrapper">
                               <img src="../../../assets/img/banners/service_img.jpg" alt="Storefront Banner Image" class="slide_image">
                           </div>
                       </div>
                   </div>
                   <div class="gallery_slide_item">
                       <div class="slide_item_wrapper">
                           <div class="slide_image_wrapper">
                               <img src="../../../assets/img/banners/photograph.jpg" alt="Storefront Banner Image" class="slide_image">
                           </div>
                       </div>
                   </div>
                   <div class="gallery_slide_item">
                       <div class="slide_item_wrapper">
                           <div class="slide_image_wrapper">
                               <img src="../../../assets/img/banners/bridal_gown.jpg" alt="Storefront Banner Image" class="slide_image">
                           </div>
                       </div>
                   </div>
                   <div class="gallery_slide_item">
                       <div class="slide_item_wrapper">
                           <div class="slide_image_wrapper">
                               <img src="../../../assets/img/banners/merchant_hold.jpg" alt="Storefront Banner Image" class="slide_image">
                           </div>
                       </div>
                   </div>
                   <div class="gallery_slide_item">
                       <div class="slide_item_wrapper">
                           <div class="slide_image_wrapper">
                               <img src="../../../assets/img/banners/cake.jpg" alt="Storefront Banner Image" class="slide_image">
                           </div>
                       </div>
                   </div>
                   <div class="gallery_slide_item">
                       <div class="slide_item_wrapper">
                           <div class="slide_image_wrapper">
                               <img src="../../../assets/img/banners/vendor_img.png" alt="Storefront Banner Image" class="slide_image">
                           </div>
                       </div>
                   </div>
               </div>
               <div class="gallery_img_count">
                    <i class="ct_icon">
                        <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 19.2">
                            <path d="M12,7.2a3.6,3.6,0,1,0,3.6,3.6A3.6,3.6,0,0,0,12,7.2Zm9.6-3.6H18.72a1.07,1.07,0,0,1-.95-.68L17,.68A1.07,1.07,0,0,0,16.08,0H7.92A1.07,1.07,0,0,0,7,.68L6.23,2.92a1.07,1.07,0,0,1-.95.68H2.4A2.41,2.41,0,0,0,0,6V16.8a2.41,2.41,0,0,0,2.4,2.4H21.6A2.41,2.41,0,0,0,24,16.8V6A2.41,2.41,0,0,0,21.6,3.6ZM12,16.8a6,6,0,1,1,6-6A6,6,0,0,1,12,16.8Zm8.76-9.12a.84.84,0,1,1,.84-.84A.84.84,0,0,1,20.76,7.68Z"/>
                        </svg>
                    </i>
                   <span ct_label>
                       2/6
                   </span>
               </div>
           </div>
       </section>
        <nav class="sticky_nav">
            <div class="section_nav">
                <div class="container">
                    <div class="section_nav_row" id="menu_nav">
                        <ul class="nav nav-tabs">
                            <li class="active"><a href="#sv_gallery">Photos</a></li>
                            <li><a href="#sv_about">About</a></li>
                            <li><a href="#sv_pricing">Pricing</a></li>
                            <li><a href="#sv_faqs">FAQs</a></li>
                            <li><a href="#sv_review">Reviews</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        <section class="section_block">
           <div class="container section_wrapper">
              <div class="row">
                   <section class="details_section col-md-7 col-lg-8 order-1" v-for="detaill in servicesDetail" :key="detaill">
                       <AboutView :servicesDetail="servicesDetail"></AboutView>
                           
                       <Pricing :servicesDetail="servicesDetail" :packages="packages"></Pricing>
                       
                       <Faq :servicesDetail="servicesDetail" :faqs="faqs"></Faq>
                       
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
                        <div class="vendor_info_card" id="pinned_bar">
                            <div class="card_wrapper">
                                <div class="brand_info_block text-center">
                                    <figure class="brand_logo">
                                       <a href="vendor_profile.html" class="avatar">
                                        <img src="../../../assets/img/dummy_logo.png" alt="Teckno Concepts">
                                        </a>
                                    </figure>
                                    <div class="prof_header">
                                        <h4 class="prof_title ">Teckno Concepts</h4>
                                        <span class="meta_value">Lagos, Nigeria</span>
                                    </div>
                                </div>
                                <div class="info_list">
                                    <div class="info_list_item">
                                        <div class="info_image">
                                            <i class="cust_icon map_pin"></i>
                                        </div>
                                        <div class="info_container">
                                            <address>
                                                <span>4, Olayiwola Street, Off kudirat Abiola Road,</span> 
                                                <span>10213 Oregun, Ikeja,</span>
                                                <span>Lagos State</span>
                                            </address>
                                        </div>
                                    </div>
                                    
                                    <div class="info_list_item">
                                        <div class="info_image">
                                            <i class="cust_icon duration"></i>
                                        </div>
                                        <div class="info_container">
                                           <p>
                                               <span>5 Years experience</span>
                                            </p>
                                        </div>
                                    </div>

                                    <div class="info_list_item">
                                        <div class="info_image">
                                            <i class="cust_icon link"></i>
                                        </div>
                                        <div class="info_container">
                                            <p>
                                                <strong>
                                                    <a href="#" >Visit Website
                                                    </a>
                                                </strong>
                                            </p>
                                        </div>
                                    </div>

                                    <div class="info_list_item">
                                        <div class="info_image">
                                            <i class="cust_icon globe"></i>
                                        </div>
                                        <div class="info_container">
                                           <div class="social_links">
                                                <a href="#" class="link_item">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="cust_icon icon_xs" viewBox="0 0 64 64">
                                                        <path d="M45.1,31.8l-8.4,0.1L37,62.6l-12.7,0.1L24,32l-6,0.1l-0.1-10.8l6-0.1l-0.1-7c-0.1-5,2.2-12.8,12.7-13l9.4-0.1L46,11.7l-6.8,0.1c-1.1,0-2.7,0.6-2.7,3l0.1,6.4l9.5-0.1L45.1,31.8z M45.1,31.8"/>
                                                    </svg>
                                                </a>
                                                <a href="#" class="link_item">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="cust_icon icon_xs" viewBox="0 0 64 64">
                                                        <path d="M64,12.2c-2.4,1-4.9,1.8-7.5,2.1c2.7-1.6,4.8-4.2,5.8-7.3c-2.5,1.5-5.3,2.6-8.3,3.2C51.5,7.6,48.1,6,44.3,6c-7.3,0-13.1,5.9-13.1,13.1c0,1,0.1,2,0.3,3C20.6,21.6,10.9,16.3,4.5,8.4c-1.1,1.9-1.8,4.2-1.8,6.6c0,4.6,2.3,8.6,5.8,10.9c-2.2-0.1-4.2-0.7-5.9-1.6c0,0.1,0,0.1,0,0.2c0,6.4,4.5,11.7,10.5,12.9c-1.1,0.3-2.3,0.5-3.5,0.5c-0.8,0-1.7-0.1-2.5-0.2c1.7,5.2,6.5,9,12.3,9.1C15,50.2,9.3,52.3,3.1,52.3c-1.1,0-2.1-0.1-3.1-0.2C5.8,55.8,12.7,58,20.1,58c24.1,0,37.4-20,37.4-37.4c0-0.6,0-1.1,0-1.7C60,17.1,62.2,14.8,64,12.2L64,12.2z M64,12.2"/>
                                                    </svg>
                                                </a>
                                                <a href="#" class="link_item">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="cust_icon icon_xs" viewBox="0 0 64 64">
                                                        <path d="M51.6,1H12.4C6.1,1,1,6.1,1,12.4v39.3C1,57.9,6.1,63,12.4,63h39.3C57.9,63,63,57.9,63,51.6V12.4
                                                            C63,6.1,57.9,1,51.6,1L51.6,1z M32,52.4c-11.3,0-20.4-9.2-20.4-20.4c0-11.3,9.2-20.4,20.4-20.4c11.3,0,20.4,9.2,20.4,20.4
                                                            C52.4,43.2,43.2,52.4,32,52.4L32,52.4z M53.1,15.8c-2.7,0-4.8-2.2-4.8-4.8c0-2.7,2.2-4.8,4.8-4.8c2.7,0,4.8,2.2,4.8,4.8
                                                            C57.9,13.6,55.7,15.8,53.1,15.8L53.1,15.8z M53.1,15.8"/>
                                                        <path d="M32,20.2c-6.5,0-11.8,5.3-11.8,11.8c0,6.5,5.3,11.8,11.8,11.8c6.5,0,11.8-5.3,11.8-11.8
                                                            C43.8,25.5,38.5,20.2,32,20.2L32,20.2z M32,20.2"/>
                                                    </svg>
                                                </a>
                                                <a href="#" class="link_item">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="cust_icon icon_xs" viewBox="0 0 61.11 43.76">
                                                        <path d="M60.14,7a8,8,0,0,0-2.38-4.2,7.29,7.29,0,0,0-4.26-2A224.27,224.27,0,0,0,30.57,0,224.26,224.26,0,0,0,7.63.85a7.21,7.21,0,0,0-4.24,2A8,8,0,0,0,1,7,109.06,109.06,0,0,0,1,36.71a7.94,7.94,0,0,0,2.38,4.2,7.29,7.29,0,0,0,4.26,2,224,224,0,0,0,22.94.85A224,224,0,0,0,53.5,42.9a7.21,7.21,0,0,0,4.24-2,8,8,0,0,0,2.36-4.2C61.49,28.64,61.38,16.18,60.14,7ZM42.67,23.72,25.17,34.66a4.08,4.08,0,0,1-2.22.07,2,2,0,0,1-1.13-1.91V10.94A2,2,0,0,1,22.94,9a2.06,2.06,0,0,1,2.22.07L42.67,20a2,2,0,0,1,1,1.85A2,2,0,0,1,42.67,23.72Z"/>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="info_list_item">
                                        <div class="info_container">
                                            <a href="new_message.html" class="btn btn-block btn-primary">Message the Vendor</a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                       </div>
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
                    <article class="prd_card col-sm-6 col-md-3">
                        <div class="prd_card_wrapper bg-white">
                            <a href="mng_service.html" class="prd_card_banner">
                                <div class="prd_card_img" style="background-image: url(./img/banners/merchant_hold.jpg);">
                                </div>
                                <div class="card_gradient"></div>
                            </a>
                            <div class="prd_card_bd">
                                <h4 class="prd_title">
                                    <a title="Thyme & Again Creative Catering" href="mng_service.html">Thyme & Again Creative Catering</a>
                                </h4>
                                <p class="brand_name"><span class="is_verified">Rhapsody Entertainments</span></p>
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
                    <article class="prd_card col-sm-6 col-md-3">
                        <div class="prd_card_wrapper bg-white">
                            <a href="mng_service.html" class="prd_card_banner">
                                <div class="prd_card_img" style="background-image: url(./img/banners/photograph.jpg);">
                                </div>
                                <div class="card_gradient"></div>
                            </a>
                            <div class="prd_card_bd">
                                <h4 class="prd_title">
                                    <a title="Animum Videography" href="mng_service.html">Anniversary Videography</a>
                                </h4>
                                <p class="brand_name"><span class="is_verified">The Originals</span></p>
                                <div class="prd_support_info">
                                    <div class="rating_ind">
                                        <div class="rateit" data-rateit-value="4.5" data-rateit-ispreset="true" 
                                    data-rateit-readonly="true"></div>
                                        <span class="rating_space" title="4.5 from 7 reviews">7</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article class="prd_card col-sm-6 col-md-3">
                        <div class="prd_card_wrapper bg-white">
                            <a href="mng_service.html" class="prd_card_banner">
                                <div class="prd_card_img" style="background-image: url(./img/banners/cake.jpg);">
                                </div>
                                <div class="card_gradient"></div>
                            </a>
                            <div class="prd_card_bd">
                                <h4 class="prd_title">
                                    <a title="Finespun Cakes & Pastries" href="mng_service.html">Finespun Cakes & Pastries</a>
                                </h4>
                                <p class="brand_name"><span class="">Ace Baba</span></p>
                                <div class="prd_support_info">
                                    <div class="rating_ind">
                                        <div class="rateit" data-rateit-value="3.5" data-rateit-ispreset="true" 
                                    data-rateit-readonly="true"></div>
                                        <span class="rating_space" title="3.5 from 5 reviews">5</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article class="prd_card col-sm-6 col-md-3">
                        <div class="prd_card_wrapper bg-white">
                            <a href="mng_service.html" class="prd_card_banner">
                                <div class="prd_card_img" style="background-image: url(./img/banners/photograph.jpg);">
                                </div>
                                <div class="card_gradient"></div>
                            </a>
                            <div class="prd_card_bd">
                                <h4 class="prd_title">
                                    <a title="Animum Videography" href="mng_service.html">Anniversary Videography</a>
                                </h4>
                                <p class="brand_name"><span class="is_verified">The Originals</span></p>
                                <div class="prd_support_info">
                                    <div class="rating_ind">
                                        <div class="rateit" data-rateit-value="4.5" data-rateit-ispreset="true" 
                                    data-rateit-readonly="true"></div>
                                        <span class="rating_space" title="4.5 from 7 reviews">7</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article class="prd_card col-sm-6 col-md-3">
                        <div class="prd_card_wrapper bg-white">
                            <a href="mng_service.html" class="prd_card_banner">
                                <div class="prd_card_img" style="background-image: url(./img/banners/cake.jpg);">
                                </div>
                                <div class="card_gradient"></div>
                            </a>
                            <div class="prd_card_bd">
                                <h4 class="prd_title">
                                    <a title="Finespun Cakes & Pastries" href="mng_service.html">Finespun Cakes & Pastries</a>
                                </h4>
                                <p class="brand_name"><span class="">Ace Baba</span></p>
                                <div class="prd_support_info">
                                    <div class="rating_ind">
                                        <div class="rateit" data-rateit-value="3.5" data-rateit-ispreset="true" 
                                    data-rateit-readonly="true"></div>
                                        <span class="rating_space" title="3.5 from 5 reviews">5</span>
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
import AboutView from './about_view';
import Pricing from './pricing';
import Faq from './questions'

export default {
  name: 'ServicedetailsV',
  components:{
      AboutView,
      Pricing,
      Faq
  },
  data(){
      return{
          packages:null,
          faqs:null,
          servicesDetail:[],
        baseURL : 'http://totalcost.ng',
        listDetailURL:`/api/v1/vendor/${this.idd}/service/${this.serid}`,
      }
  },
  props:{
      idd:String,
      serid: String
  },
  methods:{
       getUrl(endPoint){
        const url = this.baseURL+endPoint;
        axios.get(url)
        .then(res => {
            this.servicesDetail.push(res.data);
            this.packages = res.data.packages;
            this.faqs = res.data.faqs;
        })
        .catch(err => console.log(err));

    }
  },
  mounted(){
      this.getUrl(this.listDetailURL);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
