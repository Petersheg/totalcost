<template>
  
    <div class="modal fade" id="mng_ev_details">
        <div class="modal-dialog">
            <div class="modal-content">
                <header class="modal-header">
                    <h4 class="modal-title text-caps font-bold color-primary">Manage Event Details</h4>
                    <button class="close_dialog" data-dismiss="modal" aria-hidden="true"></button>
                </header>
                <div class="modal-body">
                    <form action="">
                        <div class="form-group">
                            <label class="control-label">Event Name</label>
                            <input type="text" class="form-control" placeholder="E.g.Tumi and Tayo 2018">
                        </div>
                        <div class="form-group">
                            <label class="control-label">Event Type</label>
                            <input type="text" class="form-control" placeholder="E.g. Wedding Ceremony">
                        </div>
                        <div class="form-horizontal">
                            <div class="form-group funky_form col-sm-4">
                                <label class="control-label">Day</label>
                                <select class="form-control">
                                    <option>Day</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                </select>
                            </div>
                            <div class="form-group funky_form col-sm-4">
                                <label class="control-label">Month</label>
                                <select class="form-control">
                                    <option>Month</option>
                                    <option>January</option>
                                    <option>February</option>
                                    <option>March</option>
                                    <option>April</option>
                                    <option>May</option>
                                    <option>June</option>
                                    <option>July</option>
                                    <option>August</option>
                                    <option>September</option>
                                    <option>October</option>
                                    <option>Novermber</option>
                                    <option>December</option>
                                </select>
                            </div>
                            <div class="form-group funky_form col-sm-4">
                                <label class="control-label">Year</label>
                                <select class="form-control">
                                    <option>Year</option>
                                    <option>2000</option>
                                    <option>1999</option>
                                    <option>1998</option>
                                    <option>1997</option>
                                    <option>1996</option>
                                    <option>1995</option>
                                    <option>1994</option>
                                    <option>1993</option>
                                    <option>1992</option>
                                    <option>1991</option>
                                    <option>1990</option>
                                    <option>1989</option>
                                    <option>1988</option>
                                    <option>1987</option>
                                    <option>1986</option>
                                    <option>1985</option>
                                    <option>1984</option>
                                    <option>1983</option>
                                    <option>1982</option>
                                    <option>1981</option>
                                </select>
                            </div>
                        </div>
                        <label class="control-label">Input Budget</label>
                        <div class="dynamic_input_widget"> 
                            <div class="budget_input_item form-group">
                                <label for="" class="control-label sr-only">Your Budget</label>
                                <input type="number" placeholder="Your budget" class="form-control">
                            </div>
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

    <!-- <div class="modal fade" id="update_bio_mini">
        <div class="modal-dialog">
            <div class="modal-content">
                <header class="modal-header">
                    <h4 class="modal-title font-bold color-primary">About Me</h4>
                    <button class="close_dialog" data-dismiss="modal" aria-hidden="true"></button>
                </header>
                <div class="modal-body">
                    <form action="">
                        <div class="input_grid row">
                            <div class="col-sm-6 input_block">
                                <label class="control-label font-bold">Profile Image
                                </label>
                                <p class="help-block"><strong>TIP:</strong>We recommend a .Jpg or .png image of 1:1 aspect ration, e.g 128px by 128px</p>
                            </div>
                            <div class="col-sm-6">
                                <div class="mediaUploadControl">
                                    <figure class="mediaUploadPreview">
                                        <div class="user_avatar">
                                            <img src="../../assets/img/test_dp.png" alt="David Olaniyi">
                                        </div>
                                    </figure>
                                    <div class="mediaUploadInfo">
                                        <div class="file_upload">
                                            <label for="banner_image" class="btn btn-sm btn-primary">
                                            <input type="file" name="file" id="banner_image" class="inputfile">
                                                <span>Change Image</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                             </div>
                        </div>
                        <div class="form-horizontal">
                            <div class="form-group funky_form col-sm-6">
                                <label class="control-label">First Name</label>
                                <input type="text" class="form-control" placeholder="First Name">
                            </div>
                            <div class="form-group funky_form col-sm-6">
                                <label class="control-label">Last Name</label>
                                <input type="text" class="form-control" placeholder="Last Name">
                            </div>
                        </div>
                        <div class="form-horizontal">
                            <div class="form-group funky_form col-sm-6">
                                <label class="control-label">State</label>
                                <input type="text" class="form-control" placeholder="State">
                            </div>
                            <div class="form-group funky_form col-sm-6">
                                <label class="control-label">Country</label>
                                <input type="text" class="form-control" placeholder="Country">
                            </div>
                        </div>
                        <fieldset>
                            <header class="form_section_header">
                                <h4 class="form_section_title text-caps">Contact Details</h4>
                            </header>

                            <div class="form-group funky_form">
                                <label class="control-label">Phone Number</label>
                                <input type="tel" class="form-control" placeholder="Phone Number">
                            </div>

                            <div class="form-group funky_form">
                                <label class="control-label">Address Line 1</label>
                                 <textarea class="form-control" placeholder="E.g. No 3, Adeniyi Jones, Ikeja"></textarea>
                            </div>
                            <div class="form-horizontal ">
                                <div class="col-sm-6 funky_form form-group">
                                    <label for="" class="control-label">State</label>
                                    <select class="form-control">
                                        <option>--State--</option>
                                        <option>Lagos</option>
                                        <option>Kaduna</option>
                                        <option>Kano</option>
                                        <option>Sokoto</option>
                                        <option>Jigawa</option>
                                        <option>Oyo</option>
                                        <option>Delta</option>
                                        <option>Benue</option>
                                        <option>Borno</option>
                                        <option>Bauchi</option>
                                        <option>Adamawa</option>
                                        <option>Anambra</option>
                                        <option>Rivers</option>
                                        <option>Cross Rivers</option>
                                        <option>Enugu</option>
                                        <option>Yola</option>
                                        <option>Ogun</option>
                                        <option>Osun</option>
                                        <option>Ondo</option>
                                        <option>Edo</option>
                                        <option>Akwa Ibom</option>
                                    </select>
                                </div>
                                <div class="col-sm-6 funky_form form-group">
                                    <label for="" class="control-label">City/Town</label>
                                    <select class="form-control">
                                        <option>--City/Town--</option>
                                        <option>Alausa</option>
                                        <option>Ikeja</option>
                                        <option>Ojodu</option>
                                        <option>Ojota</option>
                                        <option>Maryland</option>
                                        <option>Mende</option>
                                        <option>Festac</option>
                                        <option>Surulere</option>
                                        <option>Yaba</option>
                                        <option>Ojuelegba</option>
                                        <option>Mushin</option>
                                        <option>Ogba</option>
                                        <option>Magboro</option>
                                        <option>Magodo</option>
                                        <option>Victoria Island</option>
                                        <option>Ikoyi</option>
                                        <option>Ajah</option>
                                        <option>Leki</option>
                                        <option>Command</option>
                                        <option>Abule Egba</option>
                                        <option>Ipaja</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-horizontal ">
                                <div class="col-sm-6 funky_form form-group">
                                    <label class="control-label">Zip/Postal Code</label>
                                    <input type="tel" class="form-control" placeholder="Zip/Postal Code">
                                </div>
                                <div class="col-sm-6 funky_form form-group">
                                    <label for="" class="control-label">Country</label>
                                    <select class="form-control">
                                        <option>--Country--</option>
                                        <option selected="">Nigeria</option>
                                        <option>United States of America</option>
                                        <option>Hunduras</option>
                                        <option>France</option>
                                        <option>Germany</option>
                                        <option>China</option>
                                        <option>Korea</option>
                                        <option>Japan</option>
                                        <option>Canada</option>
                                        <option>United Kingdom</option>
                                        <option>Netherlands</option>
                                        <option>Ukraine</option>
                                        <option>Spain</option>
                                        <option>Ghana</option>
                                        <option>Morocco</option>
                                        <option>Kenya</option>
                                        <option>South Africa</option>
                                    </select>
                                </div>
                            </div>
                            
                        </fieldset>
                        <fieldset>
                            <header class="form_section_header">
                                <h4 class="form_section_title text-caps">Social Contact</h4>
                            </header>
                            <p>Paste your social profile links for any of the listed social platforms. </p>
    
                            <div class="form-group">
                                <div class="input-group">
                                    <span class="input-group-addon">
                                        Facebook Account
                                    </span>
                                    <input type="url" class="form-control" placeholder="https://facebook.com/david_01">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group">
                                    <span class="input-group-addon">
                                        Twitter Account
                                    </span>
                                    <input type="url" class="form-control" placeholder="https://twitter.com/david_01">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group">
                                    <span class="input-group-addon">
                                        Pinterest Account
                                    </span>
                                    <input type="url" class="form-control" placeholder="https://pinterest.com/david_01">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group">
                                    <span class="input-group-addon">
                                        Instagram Account
                                    </span>
                                    <input type="url" class="form-control" placeholder="https://instagram.com/david_01">
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-sm btn-inverse">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    </div> -->

    <div class="modal fade" id="mng_vendor">
        <div class="modal-dialog">
            <div class="modal-content">     
                <header class="modal-header">
                    <div>
                        <h4 class=" modal-title font-bold color-primary"> Add a Vendor</h4>
                        <button class="close_dialog" data-dismiss="modal" aria-hidden="true"></button>
                    </div>
                </header>
                <div class="modal-header">
                    <p class="modal-subtitle"> Add Vendors who provided various services at your ecvents</p>
                </div>
                <div class="modal-body">
                    <form action=""> 
                        <div class="form-group">
                            <label class="control-label">
                                Location
                            </label>
                            <select class="form-control ">
                                <option>Select Vendor location</option>
                                <option>Lagos</option>
                                <option>FCT</option>
                                <option>Kaduna</option>
                                <option>Oyo</option>
                                <option>Kogi</option>
                                <option>Sokoto</option>
                                <option>Kano</option>
                                <option>Delta</option>
                                <option>Ogun</option>
                                <option>Osun</option>
                                <option>Ondo</option>
                                <option>Benin</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label class="control-label">
                                Service Category
                            </label>
                            <select class="form-control ">
                                <option>Select a category</option>
                                <option>Catering & Confectionaries</option>
                                <option>Ushering & Hospitality</option>
                                <option>Decoration</option>
                                <option>Venue/Location Management</option>
                                <option>Security</option>
                                <option>Jewelry & Accessories</option>
                                <option>Media Services</option>
                                <option>Rental Services</option>
                                <option>Logistics</option>
                                <option>Entertainment</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label class="control-label">
                                Vendor Name
                            </label>
                            <select class="form-control">
                                <option>Select a Vendor</option>
                                <option>Sir Peculiar Photography</option>
                                <option>Around Town Entertainment</option>
                                <option>On the move Events &amp; Entertainment</option>
                                <option>Platinum Star Band</option>
                                <option>Kinky Spigot and The Welders Band</option>
                                <option>Rhapsody Entertainments</option>
                                <option>Kinky SPigot</option>
                            </select>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-inverse">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    </div>

    <main class="main_content_area bg-off-white">
        <section class="gallery_hero">
            <div class="service_info_section bg-white">
                <div class="container">
                    <div class="user_info">
                       <div class="sv_user_info">
                            <h4 class="vendor_name font-bold">Tumi and Tayo 2018</h4>
                            <div class="meta_list">
                                <div class="info_meta">
                                    <span class="meta_value">Wedding Ceremony </span>
                                </div>
                                <div class="info_meta">
                                    <span class="meta_value"> April 6, 2018</span>
                                </div>
                            </div>
                        </div>
                        <div class="vendor_info_sub">
                            <div class="insight_item">
                                <div class="insight_title">Event Budget</div>
                                <div class="insight_value color-black font-bold">
                                    <span class="value_lg">
                                        <span class="currency naira">1,000,000</span>
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
        <!-- <nav class="sticky_nav">
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
        </nav> -->
        <section class="section_block">
            <div class="container section_wrapper">
                <div class="row">
                    <section class="details_section tab-content col-md-7 col-lg-8 order-1">
                        <div class="tab-pane active fade show" id="sv_about">
                            <article class="details_block">
                                <header class="section_header">
                                    <div class="vendor_info">
                                        <div class="sv_vendor_info">
                                            <h3 class=" text-transform prof_title">Vendor list</h3>
                                        </div>
                                        <div class="vendor_info_sub">
                                            <button type="button" data-target="#mng_vendor" data-toggle="modal" data-backdrop="static" class="btn btn-sm btn-inverse">
                                            Add a Vendor
                                             </button>
                                        </div>
                                    </div>
                                </header>
                                <div class="content_inner vendor_list_container">
                                    <article class="card_bar vendor_service is_liked">
                                        <div class="bar_wrapper">
                                            <div class="bar_image">
                                                <span class="bar_img_holder" style="background-image: url(../../assets/img/banners/bridal_gown.jpg);"></span>
                                            </div>
                                            <div class="itemControl">
                                                <button class="fav_control" type="button">
                                                    <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 510 510">
                                                        <path d="M255,489.6l35.735.7C86.7,336.6,0,257.55,0,160.65C0,81.6,61.2,20.4,140.25,20.4c43.35,0,86.7,20.4,114.75,53.55C283.05,40.8,326.4,20.4,369.75,20.4C448.8,20.4,510,81.6,510,160.65c0,96.9-86.7,175.95-219.3,293.25L255,489.6z"/>
                                                    </svg>
                                                </button>
                                            </div>
                                            <div class="bar_content">
                                                <div class="barCard_details">
                                                   <h3 class="barCard_title color-primary">Around town Entertainment</h3>
                                                    <p class="brand_name"><span class="is_verified">Leeeotee Records</span></p>
                                                    <div class="prd_support_info">
                                                        <div class="rating_ind">
                                                            <div class="rateit" data-rateit-value="4.1" data-rateit-ispreset="true" 
                                                        data-rateit-readonly="true"></div>
                                                            <span class="rating_space" title="4.1 from 10 reviews">27</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="barCard_callout">
                                                    <div class="insight_item">
                                                        <div class="insight_value color-inverse">
                                                            <span class="value_lg">
                                                                <span class="currency naira">65,000</span>
                                                            </span>
                                                        </div>
                                                        <div class="insight_title hidden__s">From</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <router-link to="/service_details_view" class="bar_link"></router-link>
                                        </div>
                                    </article>
                                    <article class="card_bar vendor_service is_liked">
                                        <div class="bar_wrapper">
                                            <div class="bar_image">
                                                <span class="bar_img_holder" style="background-image: url(../../assets/img/banners/bridal_gown.jpg);"></span>
                                            </div>
                                            <div class="itemControl">
                                                <button class="fav_control" type="button">
                                                    <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 510 510">
                                                        <path d="M255,489.6l35.735.7C86.7,336.6,0,257.55,0,160.65C0,81.6,61.2,20.4,140.25,20.4c43.35,0,86.7,20.4,114.75,53.55C283.05,40.8,326.4,20.4,369.75,20.4C448.8,20.4,510,81.6,510,160.65c0,96.9-86.7,175.95-219.3,293.25L255,489.6z"/>
                                                    </svg>
                                                </button>
                                            </div>
                                            <div class="bar_content">
                                                <div class="barCard_details">
                                                   <h3 class="barCard_title color-primary">Around town Entertainment</h3>
                                                    <p class="brand_name"><span class="is_verified">Leeeotee Records</span></p>
                                                    <div class="prd_support_info">
                                                        <div class="rating_ind">
                                                            <div class="rateit" data-rateit-value="4.1" data-rateit-ispreset="true" 
                                                        data-rateit-readonly="true"></div>
                                                            <span class="rating_space" title="4.1 from 10 reviews">27</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="barCard_callout">
                                                    <div class="insight_item">
                                                        <div class="insight_value color-inverse">
                                                            <span class="value_lg">
                                                                <span class="currency naira">65,000</span>
                                                            </span>
                                                        </div>
                                                        <div class="insight_title hidden__s">From</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="service_details_view.html" class="bar_link"></a>
                                        </div>
                                    </article>
                                    <article class="card_bar vendor_service is_liked">
                                        <div class="bar_wrapper">
                                            <div class="bar_image">
                                                <span class="bar_img_holder" style="background-image: url(../../assets/img/banners/bridal_gown.jpg);"></span>
                                            </div>
                                            <div class="itemControl">
                                                <button class="fav_control" type="button">
                                                    <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 510 510">
                                                        <path d="M255,489.6l35.735.7C86.7,336.6,0,257.55,0,160.65C0,81.6,61.2,20.4,140.25,20.4c43.35,0,86.7,20.4,114.75,53.55C283.05,40.8,326.4,20.4,369.75,20.4C448.8,20.4,510,81.6,510,160.65c0,96.9-86.7,175.95-219.3,293.25L255,489.6z"/>
                                                    </svg>
                                                </button>
                                            </div>
                                            <div class="bar_content">
                                                <div class="barCard_details">
                                                   <h3 class="barCard_title color-primary">Around town Entertainment</h3>
                                                    <p class="brand_name"><span class="is_verified">Leeeotee Records</span></p>
                                                    <div class="prd_support_info">
                                                        <div class="rating_ind">
                                                            <div class="rateit" data-rateit-value="4.1" data-rateit-ispreset="true" 
                                                        data-rateit-readonly="true"></div>
                                                            <span class="rating_space" title="4.1 from 10 reviews">27</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="barCard_callout">
                                                    <div class="insight_item">
                                                        <div class="insight_value color-inverse">
                                                            <span class="value_lg">
                                                                <span class="currency naira">65,000</span>
                                                            </span>
                                                        </div>
                                                        <div class="insight_title hidden__s">From</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="service_details_view.html" class="bar_link"></a>
                                        </div>
                                    </article>
                                </div>
                            </article>
                        </div>
                   </section>
                   <aside class="col-md-5 col-lg-4 order-2">
                        <div class="vendor_info_card" id="pinned_bar">
                            <div class="card_wrapper">
                                <div class="brand_info_block text-center">
                                    <figure class="brand_logo">
                                       <router-link to="/user_profile" class="avatar ">
                                        <img src="../../assets/img/icons/user_default.png" alt="David Olaniyi">
                                        </router-link>
                                    </figure>
                                    <div class="prof_header">
                                        <h4 class="prof_title ">David Olaniyi</h4>
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
                                            <i class="cust_icon phone"></i>
                                        </div>
                                        <div class="info_container">
                                            <p>
                                                <span>Call</span>
                                                <strong>
                                                    <a href="tel:08033752311">08033752311
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
                                            <a href="" data-target="#mng_ev_details" data-toggle="modal" data-backdrop="static" class="btn btn-block btn-primary">Edit Details</a>
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
  name: 'MngEvent',
  methods:{
      loadScript(src){
      const script = document.createElement('script');
      script.setAttribute('src', src);
      script.async = true;
      document.body.appendChild(script);
    },
  },
  mounted(){
      this.loadScript('../../../js/interScript/nmgServices.js');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
