<template>
    
    <div class="modal fade" id="contact_details">
        <div class="modal-dialog">
            <div class="modal-content">
                <header class="modal-header">
                    <h4 class="modal-title font-bold color-primary">Contact Information</h4>
                    <button class="close_dialog" data-dismiss="modal" aria-hidden="true"></button>
                </header>
                <div class="modal-body">
                    <form action="">
                        <div class="form-horizontal">
                            <div class="form-group funky_form col-sm-6">
                                <label class="control-label">Phone Number</label>
                                <input type="tel" class="form-control" placeholder="Phone Number" v-model="vendorResult.contactPhoneNumber">
                            </div>
                            <div class="form-group funky_form col-sm-6">
                                <label class="control-label">Website</label>
                                <input type="url" class="form-control" placeholder="Website" v-model="vendorResult.website">
                            </div>
                        </div>
                        <div class="form-group funky_form">
                            <label class="control-label">Address Line 1</label>
                             <textarea class="form-control" placeholder="E.g. No 3, Adeniyi Jones, Ikeja" v-model="vendorResult.address"></textarea>
                        </div>
                        <div class="form-horizontal ">
                            <div class="col-sm-6 funky_form form-group">
                                <label for="" class="control-label">State</label>
                                <select class="form-control" v-model="vendorResult.state">
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
                                <select class="form-control" v-model="vendorResult.city">
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
                                <input type="tel" class="form-control" placeholder="Zip/Postal Code" v-model="vendorResult.postalCode">
                            </div>
                            <div class="col-sm-6 funky_form form-group">
                                <label for="" class="control-label">Country</label>
                                <select class="form-control" v-model="vendorResult.country">
                                    <option>--Country--</option>
                                    <option selected>Nigeria</option>
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
                        <fieldset>
                            <header class="form_section_header">
                                <h4 class="form_section_title text-caps">Social Accounts</h4>
                            </header>
                            <div class="form-group">
                                <div class="input-group">
                                    <span class="input-group-addon">
                                        Facebook
                                    </span>
                                    <input type="url" class="form-control" placeholder="https://facebook.com/david_01" v-model="vendorResult.socialMediaHandles.facebook">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group">
                                    <span class="input-group-addon">
                                        Twitter
                                    </span>
                                    <input type="url" class="form-control" placeholder="https://twitter.com/david_01" v-model="vendorResult.socialMediaHandles.twitter">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group">
                                    <span class="input-group-addon">
                                        Pinterest
                                    </span>
                                    <input type="url" class="form-control" placeholder="https://pinterest.com/david_01" v-model="vendorResult.socialMediaHandles.pinInterest">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="input-group">
                                    <span class="input-group-addon">
                                        Instagram
                                    </span>
                                    <input type="url" class="form-control" placeholder="https://instagram.com/david_01" v-model="vendorResult.socialMediaHandles.instagram">
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-sm btn-inverse" @click="updateVendorContact">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    </div>
    
    <div class="modal fade" id="update_bio">
        <div class="modal-dialog">
                <div class="modal-content">
                    <header class="modal-header">
                        <h4 class="modal-title font-bold color-primary">About Me</h4>
                        <button class="close_dialog" data-dismiss="modal" aria-hidden="true"></button>
                    </header>
                    <div class="modal-body">
                        <form @submit.prevent="updateVendorContact">
                            <div class="input_grid row">
                                <div class="col-sm-6 input_block">
                                    <label class="control-label font-bold">Profile Image
                                    </label>
                                    <p class="help-block"><strong>TIP:</strong>We recommend a .Jpg or .png image of 1:1 aspect ration, e.g 128px by 128px</p>
                                </div>
                                <div class="col-sm-6">
                                    <div class="mediaUploadControl">
                                        <figure class="mediaUploadPreview" v-if="results && results.secure_url">
                                            <div class="user_avatar">
                                                <img :src="getcloudinaryIMG(results.secure_url)" alt="David Olaniyi">
                                            </div>
                                        </figure>

                                        <figure class="mediaUploadPreview" v-else>
                                        <div class="user_avatar" >
                                            <img :src="getcloudinaryIMG(vendorResult.picture)" alt="results.public_id">
                                        </div>
                                        </figure>
                                        <div class="mediaUploadInfo">
                                            <div class="file_upload">
                                                <label for="profile_image" class="btn btn-sm btn-primary">
                                                <input type="file" name="file" id="profile_image" class="inputfile" @change="selectImg($event)">
                                                    <span>Change Image</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="input_grid row">
                                <div class="col-sm-6 input_block">
                                <label class="control-label font-bold">
                                    Profile Banner
                                </label>
                                <p class="help-block"><strong>TIP:</strong> Uplaod a cover image that best communicate who you are.</p>
                                </div>
                                <div class="col-sm-6">
                                    <figure class="banner_preview" v-if="bannerResult && bannerResult.secure_url">
                                        <div class="preview_holder" :style ="{backgroundImage: `url(${this.getcloudinaryIMG(bannerResult.secure_url)})`}"> <!--style="background-image: url(./img/banners/bridal_gown.jpg);"-->
                                        </div>
                                    </figure>
                                    <figure class="banner_preview" v-else>
                                        <div class="preview_holder" :style ="{backgroundImage: `url(${this.getcloudinaryIMG(vendorResult.banner)})`}">
                                        </div>
                                    <!-- getSrc('/img/banners/merchant_hold.jpg') -->
                                    </figure>
                                    <div class="file_upload">
                                        <label for="banner_image" class="btn btn-sm btn-primary">
                                        <input type="file" name="file" id="banner_image" class="inputfile" @change="selectBanner($event)">
                                            <span>Change Image</span>
                                        </label>
                                        <progress max="100" :value.prop="uploadPercentage"></progress>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="form-check form-check-inline">
                                    <label for="gender_fml" class="control-label">
                                        <input type="radio" value="Female" id="gender_fml" name="us_gender" v-model="vendorResult.gender">
                                        <span>Female</span>
                                    </label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <label for="gender_ml" class="control-label">
                                        <input type="radio" value="Male" id="gender_ml" name="us_gender" v-model="vendorResult.gender">
                                        <span>Male</span>
                                    </label>
                                </div>
                            </div>
                            <div class="form-horizontal">
                                <div class="form-group funky_form col-sm-6">
                                    <label class="control-label">First Name</label>
                                    <input type="text" class="form-control" placeholder="First Name" v-model="vendorResult.firstName">
                                </div>
                                <div class="form-group funky_form col-sm-6">
                                    <label class="control-label">Last Name</label>
                                    <input type="text" class="form-control" placeholder="Last Name" v-model="vendorResult.lastName">
                                </div>
                            </div>
                            <div class="form-group funky_form">
                                <label class="control-label">About Me</label>
                                <textarea rows="5" class="form-control" placeholder="Tell us a little about yourself" v-model="vendorResult.description"></textarea>
                            </div>
                            <div class="form-horizontal">
                                <div class="form-group funky_form col-sm-4">
                                    <label class="control-label">Day</label>
                                    <select class="form-control" v-model="day">
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
                                    <select class="form-control" v-model="month">
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
                                    <select class="form-control" v-model="year">
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
                            <button class="btn btn-sm btn-inverse" type="submit">
                                Save Changes
                            </button>
                        </form>
                    </div>
                    <div class="modal-footer">
                        
                    </div>
                </div>
        </div>
    </div>

    <main class="main_content_area bg-off-white">
        <section class="user_banner_area" :style ="{backgroundImage:`url(${this.getcloudinaryIMG(vendorResult.banner)})`}">
            <div class="container">
                <div class="merchant_profile_details">
                    <div class="pr_info_block">
                        <figure class="merchant_logo">
                            <div class="user_avatar">
                                <img :src="vendorResult.picture" alt="David Olaniyi">
                            </div>
                        </figure>
                        <div class="prof_header">
                            <h4 class="prof_title d-inline-block">{{vendorResult.firstName}} {{vendorResult.lastName}}</h4>
                            <span class="vend_status" title="Verified Vendor" data-toggle="tooltip">
                                <i class="cust_icon user_verified"></i>
                            </span>
                        </div>
                        <div class="info_meta meta_loc">
                            <span class="meta_icon color-grey-light">
                                <svg class="cust_icon icon_xs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.94 20">
                                    <path d="M7,0A7,7,0,0,0,0,7c0,3.65,5.52,12,5.75,12.32A1.47,1.47,0,0,0,7,20a1.47,1.47,0,0,0,1.21-.7c.24-.35,5.76-8.68,5.76-12.33A7,7,0,0,0,7,0ZM7,11.27A4.3,4.3,0,1,1,11.27,7,4.3,4.3,0,0,1,7,11.27Z"/>
                                </svg>
                            </span>
                            <span class="meta_value">{{vendorResult.merchantData.city}}, {{vendorResult.merchantData.state}}</span>
                        </div>
                        <div class="info_meta meta_date">
                            <p class="meta_label">Joined <strong>{{vendorResult.epochDateJoined}}</strong></p>
                        </div>
                    </div>
                    <div class="pr_info_block">
                        <a href="#update_bio" data-toggle="modal" class="btn btn-sm btn-secondary">
                            Update Profile
                        </a>
                    </div>
                </div>
            </div>
            <nav class="user_context_nav">
                <div class="container">
                    <div class="merchant_content_area">
                        <ul class="nav nav-tabs">
                            <li class="active"><router-link to="/vendor_profile">Overview</router-link></li>
                            <li><router-link to="/user_events">Events</router-link></li>
                            <li><router-link to="/vendor_services">Services</router-link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
        
        <section class="section_block">
            <div class="container">
                <div class="content_wrapper merchant_content_area">
                    
                    <!-- Show this to a first time User-->
                    <div class="welcome_widget hidden">
                        <header class="section_header text-center">
                            <h2 class="section_title">Get Started as a Totalcost Vendor</h2>
                        </header>
                        
                        <div class="row">
                            <div class="col-sm-4 info_card">
                                <router-link to="/edit_profile" class="card_wrapper">
                                <img src="../../assets/img/icons/profile_icon.svg" alt="Update Your Profile">
                                <h4 class="info_title font-bold">Update Your Profile</h4>
                                <p>Update your profile information. This will help other users to know more about you.</p>
                                </router-link>
                            </div>
                            <div class="col-sm-4 info_card">
                                <a href="#" data-toggle="modal" class="card_wrapper">
                                <img src="../../assets/img/icons/invoice.svg" alt="Setup your Wallet">
                                <h4 class="info_title font-bold">Setup your Wallet</h4>
                                <p>Setup your vendor wallet to start receiving payments for your services on through Totalcost.</p>
                                </a>
                            </div>
                            <div class="col-sm-4 info_card">
                                <router-link to="/merchant_home" class="card_wrapper">
                                <img src="../../assets/img/icons/Caterer.svg" alt="List a Service">
                                <h4 class="info_title font-bold">List a Service</h4>
                                <p>Let the world know what you can do. Add at least one service you provide, and get found by potential customers.</p>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    
                    <div class="content_inner ">
                        <div class="row account_meta">
                            <div class="merchant_act_meta col-sm-4">
                                <div class="card_wrapper">
                                    <div class="info_label">Average Rating</div>
                                    <div class="info_value">
                                        <div class="user_performance_widget">
                                            <div class="media_item vn_rating">
                                                <div class="media_figure ">
                                                    <div class="rating_avg">
                                                        <span class="value">
                                                            {{vendorResult.rating}}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="media_info">
                                                    <p class="rating_remarks dsp_tab_row">
                                                        <span class="font-bold">Very Good</span>
                                                        <span class="rating_sample_space">{{vendorResult.rateCount}}</span>
                                                    </p>
                                                    <div class="rating_ind">
                                                        <div class="rateit" data-rateit-value="4.5" data-rateit-ispreset="true" 
                                                    data-rateit-readonly="true"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="merchant_act_meta col-sm-4">
                                <div class="card_wrapper">
                                    <div class="info_label">Wallet Balance</div>
                                    <div class="info_value color-primary">
                                        <i class="currency naira"></i>
                                        <span class="font-bold">175,000</span>
                                    </div>
                                    <div class="meta_cto">
                                        <router-link to="/wallet">
                                            My Wallet
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                            <div class="merchant_act_meta col-sm-4">
                                <div class="card_wrapper">
                                    <div class="info_label">Listed Services</div>
                                    <div class="info_value color-primary">
                                        <span class="font-bold" v-text="numberOfService()"></span>
                                    </div>
                                    <div class="meta_cto">
                                        <router-link to="/wallet">
                                            My Services
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <article class="random_info_card">
                                <div class="card_wrapper">
                                    <header class="infoCard_header">
                                        <h4 class="infoTitle">
                                            What you could do
                                        </h4>
                                    </header>
                                    <div class="infoCard_content">
                                        <ul class="taskList">
                                            <li><router-link to="/edit_profile">Update your Profile</router-link></li>
                                            <li><router-link to="/edit_profile">Update your contact details</router-link></li>
                                            <li><router-link to="/">Create an Event</router-link></li>
                                            <li><router-link to="new_service_category">List a Service</router-link></li>
                                            <li><router-link to="/account_settings">Manage your Bank accounts</router-link></li>
                                            <li><router-link to="/">Report a Vendor</router-link></li>
                                        </ul>
                                    </div>
                                </div>
                            </article>
                            <article class="random_info_card col-md-6">
                                <div class="card_wrapper">
                                    <header class="infoCard_header">
                                        <h4 class="infoTitle">
                                            A little about me
                                        </h4>
                                        <div class="infoAction">
                                            <a href="#update_bio" data-toggle="modal" class="btn-link font-bold">Update</a>
                                        </div>
                                    </header>
                                    <div class="infoCard_content">
                                        <div class="info_list">
                                            <div class="info_list_item">
                                                <div class="info_container">
                                                    <p>{{vendorResult.description}}</p>
                                                </div>
                                            </div>
                                            <div class="info_list_item">
                                                <div class="info_container">
                                                    <p>{{vendorResult.gender}}</p>
                                                </div>
                                            </div>
                                            <div class="info_list_item">
                                                <div class="info_container">
                                                    <p>{{vendorResult.age}}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article class="random_info_card col-md-6">
                                <div class="card_wrapper">
                                    <header class="infoCard_header">
                                        <h4 class="infoTitle">
                                            How to reach me
                                        </h4>
                                        <div class="infoAction">
                                            <a href="#contact_details" data-toggle="modal" class="btn-link font-bold">Update</a>
                                        </div>
                                    </header>
                                    <div class="infoCard_content">
                                        <div class="info_list">
                                            <div class="info_list_item">
                                                <div class="info_image">
                                                    <i class="cust_icon map_pin"></i>
                                                </div>
                                                <div class="info_container">
                                                    <address>
                                                        <span>{{vendorResult.address}},</span> 
                                                        <span>{{vendorResult.state}}</span>
                                                    </address>
                                                </div>
                                            </div>

                                            <div class="info_list_item">
                                                <div class="info_image">
                                                    <i class="cust_icon phone"></i>
                                                </div>
                                                <div class="info_container">
                                                    <p>
                                                        <span>Call </span>
                                                        <strong>
                                                            <a href="tel:08033752311" >{{vendorResult.contactPhoneNumber}}
                                                            </a>
                                                        </strong>
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
                                                            <a :href="vendorResult.website"> {{vendorResult.website}}
                                                            </a>
                                                        </strong>
                                                    </p>
                                                </div>
                                            </div>

                                            <div class="info_list_item">
                                                <div class="info_image">
                                                    <i class="cust_icon email"></i>
                                                </div>
                                                <div class="info_container">
                                                    <p>
                                                       <span>E-Mail </span>
                                                        <strong>
                                                            <a :href="vendorResult.contactEmail" >{{vendorResult.contactEmail}}
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

                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article class="random_info_card col-md-6">
                                <div class="card_wrapper">
                                    <header class="infoCard_header">
                                        <h4 class="infoTitle">
                                            My Business Profiles
                                        </h4>
                                    </header>
                                    <div class="empty_state hidden">
                                        <div class="def_wrapper text-center">
                                            <p>You have no active service, hence you do not have a business profile. </p>
                                        </div>
                                    </div>
                                    <div class="infoCard_content ">
                                        <div class="info_list">
                                            <div class="info_list_item">
                                                <div class="info_container flex_content">
                                                    <div class="address_card">
                                                        <h4 class="info_item_title">Graceland Ventures</h4>
                                                        <address class="info_summary">
                                                            <span>34, Olanrewaju Street,</span> 
                                                            <span>Agidingbi, Ikeja, Lagos State.</span>
                                                        </address>
                                                        <p>2 Years Experience</p>
                                                    </div>
                                                    <div class="info_ctr">
                                                        <a href="#">
                                                            <i class="cust_icon icon_xs close"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="info_list_item">
                                                <div class="info_container flex_content">
                                                    <div class="address_card">
                                                        <h4 class="info_item_title">His Grace Catering</h4>
                                                        <address class="info_summary">
                                                            <span>34, Olanrewaju Street,</span> 
                                                            <span>Agidingbi, Ikeja, Lagos State.</span>
                                                        </address>
                                                        <p>2 Years Experience</p>
                                                    </div>
                                                    <div class="info_ctr">
                                                        <a href="#">
                                                            <i class="cust_icon icon_xs close"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article class="random_info_card col-md-6">
                                <div class="card_wrapper">
                                    <header class="infoCard_header">
                                        <h4 class="infoTitle">
                                            My Services
                                        </h4>
                                        <div class="infoAction">
                                            <router-link to="/new_service" class="btn btn-icon">
                                                <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.52 16">
                                                    <polygon points="9.23 0 9.23 6.56 15.52 6.56 15.52 9.38 9.23 9.38 9.23 16 6.29 16 6.29 9.38 0 9.38 0 6.56 6.29 6.56 6.29 0 9.23 0"/>
                                                </svg>
                                            </router-link>
                                        </div>
                                    </header>
                                    <div class="empty_state">
                                        <div class="def_wrapper text-center">
                                            <p>You have not listed any service yet. </p>
                                            <div class="section_cto">
                                                <router-link to="/new_service_category" class="btn btn-primary btn-sm">List a Service</router-link>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="infoCard_content hidden">
                                        <div class="card_list">
                                            <article class="card_item ">
                                                <a href="#" class="feature_wrapper">
                                                    <figure class="feature_icon">
                                                        <img src="../../assets/img/icons/Dj.svg" alt="Disk jockey">
                                                    </figure>
                                                    <h4 class="feature_title font-regular">
                                                        Disk Jockey
                                                    </h4>
                                                </a>
                                            </article>
                                            <article class="card_item">
                                                <a href="#" class="feature_wrapper">
                                                    <figure class="feature_icon">
                                                        <img src="../../assets/img/icons/Logistics.svg" alt="Logistics">
                                                    </figure>
                                                    <h4 class="feature_title font-regular">
                                                        Logistics
                                                    </h4>
                                                </a>
                                            </article>
                                            <article class="card_item">
                                                <a href="#" class="feature_wrapper">
                                                    <figure class="feature_icon">
                                                        <img src="../../assets/img/icons/Photographer.svg" alt="Disk Photographer/Videographer">
                                                    </figure>
                                                    <h4 class="feature_title font-regular">
                                                        Photographer/ Videographer
                                                    </h4>
                                                </a>
                                            </article>
                                            <article class="card_item">
                                                <a href="#" class="feature_wrapper">
                                                    <figure class="feature_icon">
                                                        <img src="../../assets/img/icons/Rentals.svg" alt="Rentals">
                                                    </figure>
                                                    <h4 class="feature_title font-regular">
                                                        Rentals
                                                    </h4>
                                                </a>
                                            </article>
                                        </div>
                                        <div class="card_cto">
                                            <router-link to="/vendor_services" class="btn-link font-bold">More</router-link>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Updatebio from './update_bio';
import axios from 'axios';
import {httpClient } from '../../api/newService'

export default {
  name: 'VendorProfile',
  data(){
      return{
        day:null,
        month:null,
        year:null,

          userCre:{
            userId: localStorage.getItem('userId'),
            bearerToken: localStorage.getItem('token'),
          },

           // Data for Cloudinary Upload
          results:null,
          file:null,
          modaFade:true,
          cloudName: process.env.VUE_APP_CLOUD_NAME,
          preset:process.env.VUE_APP_PRESET,
          //fileContents:null,
          profile:null,
          bannerPic:null,
          bannerResult:null,
          banner:null,
          tags: process.env.VUE_APP_TAGS,
          formData: null,
          uploadPercentage: 0,
      }
  },
  computed:{
      dateOfBirth:function(){return `${this.day}-${this.month}-${this.year}`},
      vendorResult: function(){return this.$store.getters.getVendorInfo}
  },
  methods:{
      ...mapActions(["getVendorDetails"]),
      getSrc(src){
          return require('@/assets'+src);
      },
        getcloudinaryIMG(src){
           return src
       },
    selectImg:function(event) {
      //console.log("SelectImg", event.target.files);
      this.file = event.target.files[0];
      this.upload(this.file,this.profile,this.results);
      
      setTimeout(() => {
            const cloudResult = JSON.parse(localStorage.getItem('cloudResult'));
            if(cloudResult){
                
                this.results = cloudResult;
                localStorage.setItem('image',this.results.secure_url);
                localStorage.removeItem('cloudResult');
            }
        }, 3000);
    },

    selectBanner: function(event) {
      //console.log("SelectBanner", event.target.files);
      this.banner = event.target.files[0];
        this.upload(this.banner,this.bannerPic,this.bannerResult);
        setTimeout(() => {
            const cloudResult = JSON.parse(localStorage.getItem('cloudResult'));
            if(cloudResult){
                
                this.bannerResult = cloudResult;
                localStorage.setItem('banner',this.bannerResult.secure_url);
                localStorage.removeItem('cloudResult');
            }
        }, 3000);
    
    },

    prepareFormData: function(base64File) {
      this.formData = new FormData();
      this.formData.append("upload_preset", this.preset);
      this.formData.append("tags", this.tags); // Optional - add tag for image admin in Cloudinary
      this.formData.append("file", base64File);
    },
    
        // function to handle image upload
    upload: function(uploadFile, base64File, axioResponse) {
        
        let reader = new FileReader();
        // attach listener to be called when data from file
        reader.addEventListener(
            "load",
            function() {
            base64File = reader.result;
            this.prepareFormData(base64File);
            let cloudinaryUploadURL = `/${this.cloudName}/upload`;

            let requestObj = {
                url: cloudinaryUploadURL,
                method: "POST",
                data: this.formData,
                onUploadProgress: function( progressEvent ) {
                    this.uploadPercentage = parseInt( Math.round( ( progressEvent.loaded / progressEvent.total ) * 100 ));
                }
            };
            
                const axiosInstance = axios.create({
                    baseURL:'https://api.cloudinary.com/v1_1', headers:false
                })

                axiosInstance(requestObj)
                .then(response => {
                    axioResponse = response.data;
                    //console.log("secure_url", cloudResult.secure_url);
                    //return cloudResult
                    //localStorage.setItem("public_id", cloudResult.public_id);
                    localStorage.setItem("cloudResult", JSON.stringify(axioResponse));
                    
                })
                .catch(error => {
                    //console.log(error);
                });
            }.bind(this),
            false
        );

        // call for file read if there is a file
        if (uploadFile && uploadFile.name) {
            reader.readAsDataURL(uploadFile);
        }
        
    },
      async updateVendorContact(){
            //console.log(this.vendorResult);
           try {
                const res = await httpClient.put(`/vendor/${this.userCre.userId}/profile`, 
                {
                    firstName:  this.vendorResult.firstName,
                    lastName: this.vendorResult.lastName,
                    city: this.vendorResult.city,
                    state: this.vendorResult.state,
                    address : this.vendorResult.address,
                    //age:this.vendorResult.age,
                    age:this.dateOfBirth,
                    contactEmail : this.vendorResult.contactEmail,
                    country : this.vendorResult.country,
                    contactPhoneNumber : this.vendorResult.contactPhoneNumber,
                    description : this.vendorResult.description,
                    gender : this.vendorResult.gender,
                    website: this.vendorResult.website,
                    postalCode :this.vendorResult.postalCode,
                    picture:localStorage.getItem('image'),
                    banner:localStorage.getItem('banner'),
                    imageData: {
                        name: localStorage.getItem('dpName'),
                        data: null,
                        mimeType: localStorage.getItem('dpType'),
                        fileType: null,
                        base64String: this.fileContents
                    },
                    socialMediaHandles:{
                        facebook:this.vendorResult.socialMediaHandles.facebook,
                        twitter:this.vendorResult.socialMediaHandles.twitter,
                        instagram:this.vendorResult.socialMediaHandles.instagram,
                        pinInterest:this.vendorResult.socialMediaHandles.pinInterest
                    },
                }, 
           { headers:
                {
                    'Authorization': `Bearer ${this.userCre.bearerToken}`,
                    'Content-Type': "application/json",
                    'Accept': "application/json"
                }
            });
             if(res.data.status === "success"){
                this.returnVendorDetails();
            }
         } catch (error) {
            //console.log(error);
         }
      },

      numberOfService(){
          return this.vendorResult.services.length
      },

      async returnVendorDetails(){
          try {
              await this.getVendorDetails(this.userCre);
          } catch (error) {
              //console.log(error);
          }
      }
  },

  mounted(){
      this.returnVendorDetails();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
