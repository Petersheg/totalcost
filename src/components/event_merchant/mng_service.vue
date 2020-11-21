<template>
  
       <div class="modal fade" id="mng_faq">
        <div class="modal-dialog">
            <div class="modal-content">
                <header class="modal-header">
                    <h4 class="modal-title text-caps font-bold color-primary">Manage FAQ</h4>
                    <button class="close_dialog" data-dismiss="modal" aria-hidden="true"></button>
                </header>
                <div class="modal-body">
                    <form action="">
                        <div class="form-group">
                            <label class="control-label">Question</label>
                            <input type="text" class="form-control" placeholder="E.g. Are you available for international services?">
                        </div>
                        <div class="form-group">
                            <label class="control-label">Answer</label>
                            <textarea rows="10" class="form-control" placeholder="Provide your answer to the question here."></textarea>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-sm btn-inverse">
                        Save
                    </button>
                </div>
            </div>
        </div>
    </div>
    
    <div class="modal fade" id="mng_constraint">
        <div class="modal-dialog">
            <div class="modal-content">
                <header class="modal-header">
                    <h4 class="modal-title text-caps font-bold color-primary">Package Addon</h4>
                    <button class="close_dialog" data-dismiss="modal" aria-hidden="true"></button>
                </header>
                <div class="modal-body">
                    <form action="">
                       <p>Package Addons are optional micro-services that you can also offer along with a given service package for a stipulated price.</p>
                        <div class="form-group">
                            <label class="control-label">Addon Name</label>
                             <input type="text" class="form-control" placeholder="">
                        </div>
                        <div class="form-group">
                            <label class="control-label">Description</label>
                            <textarea rows="5" class="form-control" placeholder="Please tellus about the addon"></textarea>
                        </div>
                        <div class="form-group">
                            <label class="control-label">Price</label>
                             <input type="number" class="form-control" placeholder="#20,000">
                             <p class="help-block">How much are you willing to do this for the client?</p>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-inverse">
                        Save
                    </button>
                </div>
            </div>
        </div>
    </div>
    
    <div class="modal fade" id="mng_package">
        <div class="modal-dialog">
            <div class="modal-content">
                <header class="modal-header">
                    <h4 class="modal-title text-caps font-bold color-primary">Price Package</h4>
                    <button class="close_dialog" data-dismiss="modal" aria-hidden="true"></button>
                </header>
                <div class="modal-body">
                    <form action="">
                        <div class="form-group">
                            <label class="control-label">Package Name</label>
                             <input type="text" class="form-control" placeholder="">
                             <p class="help-block">E.g Population, Location, Duration</p>
                        </div>
                        <div class="form-group">
                            <label class="control-label">Description</label>
                            <textarea rows="5" class="form-control" placeholder="A little information about the Package"></textarea>
                        </div>
                        <div class="form-group">
                            <label class="control-label required">Package base price</label>
                             <input type="number" class="form-control" placeholder="#40,000">
                             <p class="help-block">How much you'd charge for the package without any other addon</p>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-inverse">
                        Save
                    </button>
                </div>
            </div>
        </div>
    </div>

    <main class="main_content_area bg-off-white">
        <section class="gallery_hero">
            <div class="service_info_section bg-white">
                <div class="container">
                    <div class="vendor_info">
                       <div class="sv_vendor_info">
                            <h4 class="vendor_name font-bold">Sir Peculiar Photography</h4>
                            <div class="rating_ind">
                                <div class="rateit" data-rateit-value="4.5" data-rateit-ispreset="true" data-rateit-readonly="true"></div>
                                <div class="rating_summary_vl">
                                    <span class="rating_score font-bold">4.5</span>
                                    <span class="rating_sample_space">
                                        15
                                    </span>
                                </div>
                            </div>
                            <div class="meta_list">
                                <div class="info_meta">
                                    <span class="meta_value">Photography</span>
                                </div>
                                <div class="info_meta">
                                    <span class="meta_value">lagos, Ibadan, Abuja</span>
                                </div>
                            </div>
                        </div>
                       <div class="vendor_info_sub">
                            <div class="insight_item">
                                <div class="insight_title">Starting From</div>
                                <div class="insight_value color-black font-bold">
                                    <span class="value_lg">
                                        <span class="currency naira">65,000</span>
                                    </span>
                                </div>
                            </div>
                       </div>
                   </div>
                </div>
            </div>
           <div class="gallery_wrapper slick-slider slick-initialized">
               <div class="gallery_slides">
                   <div class="gallery_slide_item">
                       <div class="slide_item_wrapper">
                           <div class="slide_image_wrapper">
                               <img src="../../assets/img/banners/service_img.jpg" alt="Storefront Banner Image" class="slide_image">
                           </div>
                       </div>
                   </div>
                   <div class="gallery_slide_item">
                       <div class="slide_item_wrapper">
                           <div class="slide_image_wrapper">
                               <img src="../../assets/img/banners/photograph.jpg" alt="Storefront Banner Image" class="slide_image">
                           </div>
                       </div>
                   </div>
                   <div class="gallery_slide_item">
                       <div class="slide_item_wrapper">
                           <div class="slide_image_wrapper">
                               <img src="../../assets/img/banners/bridal_gown.jpg" alt="Storefront Banner Image" class="slide_image">
                           </div>
                       </div>
                   </div>
                   <div class="gallery_slide_item">
                       <div class="slide_item_wrapper">
                           <div class="slide_image_wrapper">
                               <img src="../../assets/img/banners/merchant_hold.jpg" alt="Storefront Banner Image" class="slide_image">
                           </div>
                       </div>
                   </div>
                   <div class="gallery_slide_item">
                       <div class="slide_item_wrapper">
                           <div class="slide_image_wrapper">
                               <img src="../../assets/img/banners/cake.jpg" alt="Storefront Banner Image" class="slide_image">
                           </div>
                       </div>
                   </div>
                   <div class="gallery_slide_item">
                       <div class="slide_item_wrapper">
                           <div class="slide_image_wrapper">
                               <img src="../../assets/img/banners/vendor_img.png" alt="Storefront Banner Image" class="slide_image">
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
               <div class="gallery_control">
                   <router-link to="/mng_gallery" class="btn btn-default btn-sm">
                       Manage Photos
                   </router-link>
               </div>
           </div>
       </section>
        <nav class="sticky_nav">
            <div class="section_nav">
                <div class="container">
                    <div class="section_nav_row">
                        <ul class="nav nav-tabs">
                            <li><a href="#sv_about" data-toggle="tab" class="active">About</a></li>
                            <li><a href="#sv_review" data-toggle="tab">Reviews</a></li>
                            <li><a href="#sv_pricing" data-toggle="tab">Pricing</a></li>
                            <li><a href="#sv_faqs" data-toggle="tab">FAQs</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        <section class="section_block">
           <div class="container section_wrapper">
              <div class="row">
                   <section class="details_section tab-content col-md-7 col-lg-8 order-1">
                       <div class="tab-pane active fade show" id="sv_about">
                           <article class="details_block">
                                <header class="section_header">
                                    <h3 class="dt_block_title">About Service</h3>
                                </header>
                                <div class="content_inner">
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et ac</p>
                                </div>
                           </article>
                       </div>
                       <div class="tab-pane fade show" id="sv_review">
                           <article class="details_block">
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
                                    <p>There are no reviews on your service yet. Make sure your service is published and always remember to ask your clients to drop a review.</p>
                                </div>
                                <div class="content_inner ">
                                    <div class="post_list">
                                        <div class="ds_post_item">
                                            <div class="post_author_thumb">
                                                <router-link to="/user_profile" class="user_avatar">
                                                  <img src="../../assets/img/1.jpg" alt="Nkem Onwuka">
                                                </router-link>
                                            </div>
                                            <div class="post_details_holder">
                                                <div class="post_details">
                                                    <header class="post_header justify-content-between">
                                                        <div class="post_info_meta">
                                                            <span class="author_name"><router-link to="/user_profile">Nkem Onwuka</router-link>
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
                                                        <div class="post_admin_control">
                                                            <ul class="control_options">
                                                                <li><a href="#">Reply</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="post_comment">
                                                    <div class="ds_post_item ">
                                                        <div class="post_author_thumb">
                                                            <a href="user_profile.html" class="user_avatar">
                                                              <img src="../../assets/img/icons/user_default.png" alt="Teckno Concepts">
                                                            </a>
                                                        </div>
                                                        <div class="post_details_holder">
                                                            <div class="post_details">
                                                                <header class="post_header justify-content-between">
                                                                    <div class="post_info_meta">
                                                                        <span class="author_name"><a href="user_profile.html">Your Response</a>
                                                                        </span>
                                                                        <span class="post_time">
                                                                            <time>4 weeks ago</time>
                                                                        </span>
                                                                    </div>
                                                                </header>
                                                                <div class="post_content">
                                                                    <p>Thanks for the good words.</p>
                                                                </div>
                                                                <div class="comment_new hidden">
                                                                    <div class="comment_input_box">
                                                                        <input type="text" class="comment_input form-control" placeholder="Reply Nkem Onwuka">
                                                                    </div>
                                                                    <div class="post_action_btn">
                                                                        <button class="btn btn-inverse btn-sm">Send</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="ds_post_item">
                                            <div class="post_author_thumb">
                                                <a href="user_profile.html" class="user_avatar">
                                                  <img src="../../assets/img/2.jpg" alt="Awogbemi Oluwatobi">
                                                </a>
                                            </div>
                                            <div class="post_details_holder">
                                                <div class="post_details">
                                                    <header class="post_header justify-content-between">
                                                        <div class="post_info_meta">
                                                            <span class="author_name"><a href="user_profile.html">Awogbemi Oluwatobi</a>
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
                                                        <div class="post_admin_control">
                                                            <ul class="control_options">
                                                                <li><a href="#">Reply</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="post_comment">
                                                    <div class="ds_post_item ">
                                                        <div class="post_author_thumb">
                                                            <a href="vendor_profile.html" class="user_avatar">
                                                              <img src="../../assets/img/icons/user_default.png" alt="Teckno Concepts">
                                                            </a>
                                                        </div>
                                                        <div class="post_details_holder">
                                                            <div class="post_details">
                                                                <header class="post_header justify-content-between">
                                                                    <div class="post_info_meta">
                                                                        <span class="author_name"><a href="user_profile.html">Your Response</a>
                                                                        </span>
                                                                        <span class="post_time">
                                                                            <time>4 weeks ago</time>
                                                                        </span>
                                                                    </div>
                                                                </header>
                                                                <div class="post_content hidden">
                                                                    <p>Thanks for the good words.</p>
                                                                </div>
                                                                <div class="comment_new ">
                                                                    <div class="comment_input_box">
                                                                        <input type="text" class="comment_input form-control" placeholder="Reply Nkem Onwuka">
                                                                    </div>
                                                                    <div class="post_action_btn">
                                                                        <button class="btn btn-inverse btn-sm">Send</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="ds_post_item">
                                            <div class="post_author_thumb">
                                                <a href="user_profile.html" class="user_avatar">
                                                  <img src="../../assets/img/3.jpg" alt="Hellen Onyeka">
                                                </a>
                                            </div>
                                            <div class="post_details_holder">
                                                <div class="post_details">
                                                    <header class="post_header justify-content-between">
                                                        <div class="post_info_meta">
                                                            <span class="author_name"><a href="user_profile.html">Hellen Onyeka</a>
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
                                                        <div class="post_admin_control">
                                                            <ul class="control_options">
                                                                <li><a href="#">Reply</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="post_comment hidden">
                                                    <div class="ds_post_item ">
                                                        <div class="post_author_thumb">
                                                            <a href="vendor_profile.html" class="user_avatar">
                                                              <img src="../../assets/img/icons/user_default.png" alt="Teckno Concepts">
                                                            </a>
                                                        </div>
                                                        <div class="post_details_holder">
                                                            <div class="post_details">
                                                                <header class="post_header justify-content-between">
                                                                    <div class="post_info_meta">
                                                                        <span class="author_name"><a href="user_profile.html">Your Response</a>
                                                                        </span>
                                                                        <span class="post_time">
                                                                            <time>4 weeks ago</time>
                                                                        </span>
                                                                    </div>
                                                                </header>
                                                                <div class="post_content hidden">
                                                                    <p>Thanks for the good words.</p>
                                                                </div>
                                                                <div class="comment_new ">
                                                                    <div class="comment_input_box">
                                                                        <input type="text" class="comment_input form-control" placeholder="Reply Nkem Onwuka">
                                                                    </div>
                                                                    <div class="post_action_btn">
                                                                        <button class="btn btn-inverse btn-sm">Send</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="ds_post_item">
                                            <div class="post_author_thumb">
                                                <a href="user_profile.html" class="user_avatar">
                                                  <img src="../../assets/img/1.jpg" alt="Nkem Onwuka">
                                                </a>
                                            </div>
                                            <div class="post_details_holder">
                                                <div class="post_details">
                                                    <header class="post_header justify-content-between">
                                                        <div class="post_info_meta">
                                                            <span class="author_name"><a href="user_profile.html">Nkem Onwuka</a>
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
                                                        <div class="post_admin_control">
                                                            <ul class="control_options">
                                                                <li><a href="#">Reply</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="post_comment hidden">
                                                    <div class="ds_post_item ">
                                                        <div class="post_author_thumb">
                                                            <a href="user_profile.html" class="user_avatar">
                                                              <img src="../../assets/img/icons/user_default.png" alt="Teckno Concepts">
                                                            </a>
                                                        </div>
                                                        <div class="post_details_holder">
                                                            <div class="post_details">
                                                                <header class="post_header justify-content-between">
                                                                    <div class="post_info_meta">
                                                                        <span class="author_name"><router-link to="/user_profile">Your Response</router-link>
                                                                        </span>
                                                                        <span class="post_time">
                                                                            <time>4 weeks ago</time>
                                                                        </span>
                                                                    </div>
                                                                </header>
                                                                <div class="post_content">
                                                                    <p>Thanks for the good words.</p>
                                                                </div>
                                                                <div class="comment_new hidden">
                                                                    <div class="comment_input_box">
                                                                        <input type="text" class="comment_input form-control" placeholder="Reply Nkem Onwuka">
                                                                    </div>
                                                                    <div class="post_action_btn">
                                                                        <button class="btn btn-inverse btn-sm">Send</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="ds_post_item">
                                            <div class="post_author_thumb">
                                                <router-link to="/user_profile" class="user_avatar">
                                                  <img src="../../assets/img/3.jpg" alt="Hellen Onyeka">
                                                </router-link>
                                            </div>
                                            <div class="post_details_holder">
                                                <div class="post_details">
                                                    <header class="post_header justify-content-between">
                                                        <div class="post_info_meta">
                                                            <span class="author_name"><router-link to="/user_profile">Hellen Onyeka</router-link>
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
                                                        <div class="post_admin_control">
                                                            <ul class="control_options">
                                                                <li><a href="#">Reply</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="post_comment hidden">
                                                    <div class="ds_post_item ">
                                                        <div class="post_author_thumb">
                                                            <router-link to="/vendor_profile" class="user_avatar">
                                                              <img src="../../assets/img/icons/user_default.png" alt="Teckno Concepts">
                                                            </router-link>
                                                        </div>
                                                        <div class="post_details_holder">
                                                            <div class="post_details">
                                                                <header class="post_header justify-content-between">
                                                                    <div class="post_info_meta">
                                                                        <span class="author_name"><router-link to="/user_profile">Your Response</router-link>
                                                                        </span>
                                                                        <span class="post_time">
                                                                            <time>4 weeks ago</time>
                                                                        </span>
                                                                    </div>
                                                                </header>
                                                                <div class="post_content hidden">
                                                                    <p>Thanks for the good words.</p>
                                                                </div>
                                                                <div class="comment_new ">
                                                                    <div class="comment_input_box">
                                                                        <input type="text" class="comment_input form-control" placeholder="Reply Nkem Onwuka">
                                                                    </div>
                                                                    <div class="post_action_btn">
                                                                        <button class="btn btn-inverse btn-sm">Send</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="section_cto text-center">
                                        <button type="button" class="btn btn-default">Load More</button>
                                    </div>
                               </div>
                           </article>
                       </div>
                       <div class="tab-pane fade show" id="sv_pricing">
                           <article class="details_block">
                                <header class="section_header">
                                    <h3 class="dt_block_title">Service Pricing</h3>
                                </header>
                                <div class="block_default ">
                                    <p>Configure your pricing scheme for this package. This will help us recommend you to potential customers seeking your expertise.</p>
                                    <div class="section_cto">
                                        <router-link to="/mng_pricing" class="btn btn-sm btn-inverse">
                                            Configure Pricing
                                        </router-link>
                                    </div>
                                </div>
                                <div class="content_inner hidden">
                                   <p>Price packages provide a way for you to create different pricing schemes for different customer needs. </p>
                                    <div class="panel-group" id="package_panels">

                                        <!--Preview page for an existing package.-->
                                        <article class="panel settings_panel">
                                            <header class="wd_wrapper">
                                               <a class="widget_info accordion-toggle collapsed" data-toggle="collapse" data-parent="#settings_accordions" href="#pkg_one">
                                                    <h4 class="panel-title color-black">Wedding Coverage</h4>
                                                    <div class="info_meta color-grey">
                                                        <span class="meta_label">Base Price:</span>
                                                        <span class="meta_value color-black">
                                                            <span class="currency naira">20,000</span>
                                                        </span>
                                                    </div>
                                                </a>
                                                <div class="widget_controls">
                                                    <div class="control_button_item">
                                                        <button data-target="#mng_package" data-toggle="modal" type="button" class="btn btn-icon" title="Edit Package">
                                                            <i class="cust_icon edit"></i>
                                                        </button>
                                                    </div>
                                                    <div class="control_button_item">
                                                        <button type="button" class="btn btn-icon" title="Delete">
                                                            <i class="cust_icon delete"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                           </header>
                                            <div class="panel-collapse collapse" id="pkg_one">
                                                <div class="panel_inner">
                                                    <p>Package description as provided in the package information setup goes here. It is then followed by the package price, and a list of package constraints, also set by the vendor.</p>
                                                    <div class="pricing_addon">
                                                        <div class="insight_title text-caps font-bold">Available Addons</div>
                                                        <p>Package Addons are optional micro-services that you can also offer along with this service. This provides an explicit breakdown of what the client can and should expect from you as a vendor. You can add as many as you want.</p>
                                                        <div class="table infoTable">
                                                            <table class="table table-hover">
                                                                <thead>
                                                                    <tr>
                                                                        <th class="table_description">Package Addon</th>
                                                                        <th class="text-right">Price</th>
                                                                        <th class="text-right">Options</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td class="table_description">
                                                                           <div class="has_details">
                                                                                <span class="font-bold">Base Package Price</span>
                                                                                <a href="#" class="info_trigger">
                                                                                    <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                                                                                        <path d="M28.9,47.7h6.3V28.9h-6.3V47.7z M32,0.6C14.7,0.6,0.6,14.7,0.6,32S14.7,63.4,32,63.4S63.4,49.3,63.4,32S49.3,0.6,32,0.6zM32,57.1C18.1,57.1,6.9,45.9,6.9,32S18.1,6.9,32,6.9S57.1,18.1,57.1,32S45.9,57.1,32,57.1zM28.9,22.6h6.3v-6.3h-6.3V22.6z"/>
                                                                                    </svg>
                                                                                </a>
                                                                                <div class="info_details">
                                                                                    <p>This is how much you will be required to pay for this package without any other addon service(s)</p>
                                                                                </div>
                                                                           </div>
                                                                        </td>
                                                                        <td class="text-right">
                                                                            <span class="currency naira">20,000</span>
                                                                        </td>
                                                                        <td class="text-right">
                                                                           <div class="">
                                                                                <ul class="control_options">
                                                                                    <li><a href="#mng_constraint" data-toggle="modal">Edit</a></li>
                                                                                    <li><a href="#">Delete</a></li>
                                                                                </ul>
                                                                           </div> 
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="table_description">
                                                                           <div class="has_details">
                                                                                <span class="font-bold">Pre-wedding Photoshot </span>
                                                                                <a href="#" class="info_trigger">
                                                                                    <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                                                                                        <path d="M28.9,47.7h6.3V28.9h-6.3V47.7z M32,0.6C14.7,0.6,0.6,14.7,0.6,32S14.7,63.4,32,63.4S63.4,49.3,63.4,32S49.3,0.6,32,0.6zM32,57.1C18.1,57.1,6.9,45.9,6.9,32S18.1,6.9,32,6.9S57.1,18.1,57.1,32S45.9,57.1,32,57.1zM28.9,22.6h6.3v-6.3h-6.3V22.6z"/>
                                                                                    </svg>
                                                                                </a>
                                                                                <div class="info_details">
                                                                                    <p>Constaint description as entered by the vendor goes here</p>
                                                                                </div>
                                                                           </div>
                                                                        </td>
                                                                        <td class="text-right">
                                                                            <span class="currency naira">15,000</span>
                                                                        </td>
                                                                        <td class="text-right">
                                                                           <div class="">
                                                                               <ul class="control_options">
                                                                                    <li><a href="#mng_constraint" data-toggle="modal">Edit</a></li>
                                                                                    <li><a href="#">Delete</a></li>
                                                                                </ul>
                                                                           </div> 
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="table_description">
                                                                           <div class="has_details">
                                                                                <span class="font-bold">Photo Book</span>
                                                                                <a href="#" class="info_trigger">
                                                                                    <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                                                                                        <path d="M28.9,47.7h6.3V28.9h-6.3V47.7z M32,0.6C14.7,0.6,0.6,14.7,0.6,32S14.7,63.4,32,63.4S63.4,49.3,63.4,32S49.3,0.6,32,0.6zM32,57.1C18.1,57.1,6.9,45.9,6.9,32S18.1,6.9,32,6.9S57.1,18.1,57.1,32S45.9,57.1,32,57.1zM28.9,22.6h6.3v-6.3h-6.3V22.6z"/>
                                                                                    </svg>
                                                                                </a>
                                                                                <div class="info_details">
                                                                                    <p>Constaint description as entered by the vendor goes here</p>
                                                                                </div>
                                                                           </div>
                                                                        </td>
                                                                        <td class="text-right">
                                                                            <span class="currency naira">25,000</span>
                                                                        </td>
                                                                        <td class="text-right">
                                                                           <div class="">
                                                                               <ul class="control_options">
                                                                                    <li><a href="#mng_constraint" data-toggle="modal">Edit</a></li>
                                                                                    <li><a href="#">Delete</a></li>
                                                                                </ul>
                                                                           </div> 
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td class="table_description">
                                                                           <div class="has_details">
                                                                                <span class="font-bold">Framed Portriate</span>
                                                                                <a href="#" class="info_trigger">
                                                                                    <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                                                                                        <path d="M28.9,47.7h6.3V28.9h-6.3V47.7z M32,0.6C14.7,0.6,0.6,14.7,0.6,32S14.7,63.4,32,63.4S63.4,49.3,63.4,32S49.3,0.6,32,0.6zM32,57.1C18.1,57.1,6.9,45.9,6.9,32S18.1,6.9,32,6.9S57.1,18.1,57.1,32S45.9,57.1,32,57.1zM28.9,22.6h6.3v-6.3h-6.3V22.6z"/>
                                                                                    </svg>
                                                                                </a>
                                                                                <div class="info_details">
                                                                                    <p>Constaint description as entered by the vendor goes here</p>
                                                                                </div>
                                                                           </div>
                                                                        </td>
                                                                        <td class="text-right">
                                                                            <span class="currency naira">20,000</span>
                                                                        </td>
                                                                        <td class="text-right">
                                                                           <div class="">
                                                                               <ul class="control_options">
                                                                                    <li><a href="#mng_constraint" data-toggle="modal">Edit</a></li>
                                                                                    <li><a href="#">Delete</a></li>
                                                                                </ul>
                                                                           </div> 
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        <div class="pricing_footer font-bold">
                                                            <div class="">
                                                                <span class="infoTitle">Price Total:</span>
                                                            </div>
                                                            <div class="value">
                                                                <span class="currency naira">75,000</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="section_cto text-right">
                                                        <a href="#mng_constraint" data-toggle="modal" class="btn btn-inverse btn-sm" title="Edit Package">
                                                            Add an Addon
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                        
                                        <article class="panel settings_panel">
                                            <header class="wd_wrapper">
                                               <a class="widget_info accordion-toggle collapsed" data-toggle="collapse" data-parent="#settings_accordions" href="#pkg_two">
                                                    <h4 class="panel-title color-black">Life Documentary</h4>
                                                    <div class="info_meta color-grey">
                                                        <span class="meta_label">Base Price:</span>
                                                        <span class="meta_value color-black">
                                                            <span class="currency naira">50,000</span>
                                                        </span>
                                                    </div>
                                                </a>
                                                <div class="widget_controls">
                                                    <div class="control_button_item">
                                                        <button data-target="#mng_package" data-toggle="modal" type="button" class="btn btn-icon" title="Edit Package">
                                                            <i class="cust_icon edit"></i>
                                                        </button>
                                                    </div>
                                                    <div class="control_button_item">
                                                        <button type="button" class="btn btn-icon" title="Delete">
                                                            <i class="cust_icon delete"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                           </header>
                                            <div class="panel-collapse collapse" id="pkg_two">
                                                <div class="panel_inner">
                                                    <p>Package description as provided in the package information setup goes here. It is then followed by the package price, and a list of package constraints, also set by the vendor.</p>
                                                    <div class="pricing_addon">
                                                        <div class="insight_title text-caps font-bold">Available Addons</div>
                                                        <p>Package Addons are optional micro-services that you can also offer along with this service. This provides an explicit breakdown of what the client can and should expect from you as a vendor. You can add as many as you want.</p>
                                                        <div class="table infoTable">
                                                            <table class="table table-hover">
                                                                <thead>
                                                                    <tr>
                                                                        <th class="table_description">Package Addon</th>
                                                                        <th class="text-right">Price</th>
                                                                        <th class="text-right">Options</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td class="table_description">
                                                                           <div class="has_details">
                                                                                <span class="font-bold">Base Package Price</span>
                                                                                <a href="#" class="info_trigger">
                                                                                    <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                                                                                        <path d="M28.9,47.7h6.3V28.9h-6.3V47.7z M32,0.6C14.7,0.6,0.6,14.7,0.6,32S14.7,63.4,32,63.4S63.4,49.3,63.4,32S49.3,0.6,32,0.6zM32,57.1C18.1,57.1,6.9,45.9,6.9,32S18.1,6.9,32,6.9S57.1,18.1,57.1,32S45.9,57.1,32,57.1zM28.9,22.6h6.3v-6.3h-6.3V22.6z"/>
                                                                                    </svg>
                                                                                </a>
                                                                                <div class="info_details">
                                                                                    <p>This is how much you will be required to pay for this package without any other addon service(s)</p>
                                                                                </div>
                                                                           </div>
                                                                        </td>
                                                                        <td class="text-right">
                                                                            <span class="currency naira">20,000</span>
                                                                        </td>
                                                                        <td class="text-right">
                                                                           <div class="">
                                                                                <ul class="control_options">
                                                                                    <li><a href="#mng_constraint" data-toggle="modal">Edit</a></li>
                                                                                    <li><a href="#">Delete</a></li>
                                                                                </ul>
                                                                           </div> 
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        <div class="pricing_footer font-bold">
                                                            <div class="">
                                                                <span class="infoTitle">Price Total:</span>
                                                            </div>
                                                            <div class="value">
                                                                <span class="currency naira">50,000</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="section_cto text-right">
                                                        <a href="#mng_constraint" data-toggle="modal" class="btn btn-inverse btn-sm" title="Edit Package">
                                                            Add an Addon
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>

                                        <articel class="panel new_pkg">
                                            <a href="#mng_package" data-toggle="modal" data-backdrop="static" class="new_item_btn">
                                                <span class="wd_icon">
                                                    <svg class="cust_icon icon_xs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.52 16">
                                                        <polygon points="9.23 0 9.23 6.56 15.52 6.56 15.52 9.38 9.23 9.38 9.23 16 6.29 16 6.29 9.38 0 9.38 0 6.56 6.29 6.56 6.29 0 9.23 0"/>
                                                    </svg>
                                                </span>
                                                <span class="wd_control_label font-bold">Add a Package</span>
                                            </a>
                                        </articel>
                                    </div>
                               </div>
                           </article>
                       </div>
                       <div class="tab-pane fade show" id="sv_faqs">
                           <article class="details_block">
                                <header class="section_header">
                                    <div class="vendor_info">
                                       <div class="sv_vendor_info">
                                            <h3 class="dt_block_title">Frequestly asked Questions</h3>
                                        </div>
                                       <div class="vendor_info_sub">
                                            <button type="button" data-target="#mng_faq" data-toggle="modal" data-backdrop="static" class="btn btn-sm btn-inverse">
                                                Add a Question
                                            </button>
                                       </div>
                                   </div>
                                </header>
                                <div class="block_default ">
                                    <p>Provide answers to common questions you think your customers willhave about your service. Start by adding a new question.</p>
                                    <div class="section_cto">
                                        <button type="button" data-target="#mng_faq" data-toggle="modal" data-backdrop="static" class="btn btn-sm btn-inverse">
                                            Add a Question
                                        </button>
                                    </div>
                                </div>
                                <div class="content_inner hidden">
                                    <div class="panel-group" id='faq_list'>
                                        <article class="panel panel_opaque">
                                            <div class="panel-heading">
                                                <h4 class="panel-title">
                                                    <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#faq_list" href="#article_1">Are you available for international services?</a>
                                                </h4>
                                            </div>
                                            <div id="article_1" class="panel-collapse collapse">
                                                <div class="panel-body post_content">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor accusantium velit omnis tempora nobis, debitis architecto, at veniam magni quam eum commodi eius! Quos repudiandae nulla, commodi error vel, inventore.</p>
                                                    <div class="post_admin_control">
                                                        <ul class="control_options">
                                                            <li><a href="#mng_faq" data-toggle="modal" data-backdrop="static">Edit</a></li>
                                                            <li><a href="#">Delete</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                        <article class="panel panel_opaque">
                                            <div class="panel-heading">
                                                <h4 class="panel-title">
                                                    <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#faq_list" href="#article_2">Are you available for international services?</a>
                                                </h4>
                                            </div>
                                            <div id="article_2" class="panel-collapse collapse">
                                                <div class="panel-body post_content">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor accusantium velit omnis tempora nobis, debitis architecto, at veniam magni quam eum commodi eius! Quos repudiandae nulla, commodi error vel, inventore.</p>
                                                    <div class="post_admin_control">
                                                        <ul class="control_options">
                                                            <li><a href="#mng_faq" data-toggle="modal" data-backdrop="static">Edit</a></li>
                                                            <li><a href="#">Delete</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                        <article class="panel panel_opaque">
                                            <div class="panel-heading">
                                                <h4 class="panel-title">
                                                    <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#faq_list" href="#article_3">Are you available for international services?</a>
                                                </h4>
                                            </div>
                                            <div id="article_3" class="panel-collapse collapse">
                                                <div class="panel-body post_content">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor accusantium velit omnis tempora nobis, debitis architecto, at veniam magni quam eum commodi eius! Quos repudiandae nulla, commodi error vel, inventore.</p>
                                                    <div class="post_admin_control">
                                                        <ul class="control_options">
                                                            <li><a href="#mng_faq" data-toggle="modal" data-backdrop="static">Edit</a></li>
                                                            <li><a href="#">Delete</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                        <article class="panel panel_opaque">
                                            <div class="panel-heading">
                                                <h4 class="panel-title">
                                                    <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#faq_list" href="#article_4">Are you available for international services?</a>
                                                </h4>
                                            </div>
                                            <div id="article_4" class="panel-collapse collapse">
                                                <div class="panel-body post_content">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor accusantium velit omnis tempora nobis, debitis architecto, at veniam magni quam eum commodi eius! Quos repudiandae nulla, commodi error vel, inventore.</p>
                                                    <div class="post_admin_control">
                                                        <ul class="control_options">
                                                            <li><a href="#mng_faq" data-toggle="modal" data-backdrop="static">Edit</a></li>
                                                            <li><a href="#">Delete</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                        <article class="panel panel_opaque">
                                            <div class="panel-heading">
                                                <h4 class="panel-title">
                                                    <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#faq_list" href="#article_5">Are you available for international services?</a>
                                                </h4>
                                            </div>
                                            <div id="article_5" class="panel-collapse collapse">
                                                <div class="panel-body post_content">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor accusantium velit omnis tempora nobis, debitis architecto, at veniam magni quam eum commodi eius! Quos repudiandae nulla, commodi error vel, inventore.</p>
                                                    <div class="post_admin_control">
                                                        <ul class="control_options">
                                                            <li><a href="#mng_faq" data-toggle="modal" data-backdrop="static">Edit</a></li>
                                                            <li><a href="#">Delete</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                               </div>
                           </article>
                       </div>
                   </section>
                   <aside class="col-md-5 col-lg-4 order-2">
                        <div class="vendor_info_card" id="pinned_bar">
                            <div class="card_wrapper">
                                <div class="brand_info_block text-center">
                                    <figure class="brand_logo">
                                       <router-link to="/vendor_profile" class="avatar">
                                        <img src="../../assets/img/dummy_logo.png" alt="Teckno Concepts">
                                        </router-link>
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
                                            <router-link to="/service_details" class="btn btn-block btn-primary">Edit Details</router-link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                       </div>
                   </aside>
              </div>
           </div>
        </section>
    </main>

</template>

<script>
export default {
  name: 'MngService',
  methods:{
      loadScript(src){
      const script = document.createElement('script');
      script.setAttribute('src', src);
      script.async = true;
      document.body.appendChild(script);
    },
  },
  mounted(){
      this.loadScript('../../../js/interScript/nmgServices.js')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
