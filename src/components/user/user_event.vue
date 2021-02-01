<template>
    <div class="modal fade" id="update_bio">
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
                        <div class="input_grid row">
                            <div class="col-sm-6 input_block">
                             <label class="control-label font-bold">
                                 Profile Banner
                             </label>
                             <p class="help-block"><strong>TIP:</strong> Uplaod a cover image that best communicate who you are.</p>
                            </div>
                            <div class="col-sm-6">
                                <figure class="banner_preview">
                                    <div class="preview_holder" style="background-image: url(../../assets/img/banners/bridal_gown.jpg);">
                                    </div>
                                </figure>
                                <div class="file_upload">
                                    <label for="banner_image" class="btn btn-sm btn-primary">
                                    <input type="file" name="file" id="banner_image" class="inputfile">
                                        <span>Change Image</span>
                                    </label>
                                </div>
                             </div>
                         </div>
                        <div class="form-group">
                            <div class="form-check form-check-inline">
                                <label for="gender_fml" class="control-label">
                                    <input type="radio" id="gender_fml" name="us_gender">
                                    <span>Female</span>
                                </label>
                            </div>
                            <div class="form-check form-check-inline">
                                <label for="gender_ml" class="control-label">
                                    <input type="radio" id="gender_ml" name="us_gender">
                                    <span>Male</span>
                                </label>
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
                        <div class="form-group funky_form">
                            <label class="control-label">About Me</label>
                             <textarea rows="5" class="form-control" placeholder="Tell us a little about yourself"></textarea>
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
                    </form>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-sm btn-inverse">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    </div>

    <main class="main_content_area bg-off-white">
       <section class="user_banner_area" style="">
            <div class="container">
                <div class="merchant_profile_details">
                    <div class="pr_info_block">
                        <figure class="merchant_logo">
                            <div class="user_avatar">
                                <img src="../../assets/img/icons/user_default.png" alt="David Olaniyi">
                            </div>
                        </figure>
                        <div class="prof_header">
                            <h4 class="prof_title d-inline-block ">David Olaniyi</h4>
                            <!-- <span class="vend_status" title="Verified Vendor" data-toggle="tooltip">
                                <i class="cust_icon user_verified"></i>
                            </span> -->
                        </div>
                        <div class="info_meta meta_loc">
                            <span class="meta_icon color-grey-light">
                                <svg class="cust_icon icon_xs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.94 20">
                                    <path d="M7,0A7,7,0,0,0,0,7c0,3.65,5.52,12,5.75,12.32A1.47,1.47,0,0,0,7,20a1.47,1.47,0,0,0,1.21-.7c.24-.35,5.76-8.68,5.76-12.33A7,7,0,0,0,7,0ZM7,11.27A4.3,4.3,0,1,1,11.27,7,4.3,4.3,0,0,1,7,11.27Z"/>
                                </svg>
                            </span>
                            <span class="meta_value">Lagos, Nigeria</span>
                        </div>
                        <div class="info_meta meta_date">
                            <p class="meta_label">Joined <strong>2 Months ago</strong></p>
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
                            <li><router-link to="/user_profile">Overview</router-link></li>
                            <li class="active"><router-link to="/user_event">Events</router-link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
        <section class="section_block">
            <div class="container">
                <div class="content_wrapper merchant_content_area">
                    <header class="user_infoHeader">
                        <h3 class="pane_title text-caps color-primary">Upcoming Events</h3>
                        <div class="header_cto">
                            <router-link to="/new_event_basicInfo" class="btn btn-sm btn-inverse">New Events</router-link>
                        </div>
                    </header>
                    <div class="empty_state d-none">
                        <div class="def_wrapper text-center">
                            <h4 class="title font-bold color-primary">No Event found</h4>
                            <p class="">You have no listed event. Start by creating a event, and submiting it for verification.</p>
                            <div class="section_cto">
                                <router-link to="/new_event_basicInfo" class="btn btn-inverse">
                                New Event</router-link>
                            </div>
                        </div>
                    </div>
                    <div class="content_inner">
                        <div class="prd_card_list row">
                            <article class="prd_card col-sm-6 col-md-4">
                                <div class="prd_card_wrapper bg-white">
                                    <header class="prd_card_hd">
                                        <div class="prd_card_meta meta_type">
                                            <span class="prd_program_type" title="Catering">
                                                Wedding
                                            </span>
                                        </div>
                                    </header>
                                    <router-link to="/mng_event" class="prd_card_banner">
                                        <div class="prd_card_img" style="background-image: url(../../assets/img/banners/merchant_hold.jpg);">
                                        </div>
                                        <div class="card_gradient"></div>
                                    </router-link>
                                    <div class="prd_card_bd">
                                        <div class="prd_support_info info_list_item event_item_info">
                                            <div class="info_image">
                                                <div class="calendar_box">
                                                    <span class="month">APR</span>
                                                    <span class="day color-white">06</span>
                                                    <span class="year">2018</span>
                                                </div>
                                            </div>
                                            <div class="info_container flex_content">
                                                <div class="">
                                                    <h4 class="info_item_title">Tumi and Tayo 2018</h4>
                                                    <p>Wedding Ceremony</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="prd_card_support">
                                        <router-link to="/mng_event" class="btn btn-block btn-sm btn-default ">
                                            Manage Event
                                        </router-link>
                                    </div>
                                </div>
                            </article>
                            <article class="prd_card col-sm-6 col-md-4">
                                <div class="prd_card_wrapper bg-white">
                                    <header class="prd_card_hd">
                                        <div class="prd_card_meta meta_type">
                                            <span class="prd_program_type" title="Catering">
                                                Wedding
                                            </span>
                                        </div>
                                    </header>
                                    <router-link to="/mng_event" class="prd_card_banner">
                                        <div class="prd_card_img" style="background-image: url(../../assets/img/banners/merchant_hold.jpg);">
                                        </div>
                                        <div class="card_gradient"></div>
                                    </router-link>
                                    <div class="prd_card_bd">
                                        <div class="prd_support_info info_list_item event_item_info">
                                            <div class="info_image">
                                                <div class="calendar_box">
                                                    <span class="month">APR</span>
                                                    <span class="day color-white">06</span>
                                                    <span class="year">2018</span>
                                                </div>
                                            </div>
                                            <div class="info_container flex_content">
                                                <div class="">
                                                    <h4 class="info_item_title">Tumi and Tayo 2018</h4>
                                                    <p>Wedding Ceremony</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="prd_card_support">
                                        <a href="mng_event.html" class="btn btn-block btn-sm btn-default ">
                                            Manage Event
                                        </a>
                                    </div>
                                </div>
                            </article>
                            <article class="prd_card col-sm-6 col-md-4">
                                <div class="prd_card_wrapper bg-white">
                                    <header class="prd_card_hd">
                                        <div class="prd_card_meta meta_type">
                                            <span class="prd_program_type" title="Catering">
                                                Wedding
                                            </span>
                                        </div>
                                    </header>
                                    <a href="mng_event.html" class="prd_card_banner">
                                        <div class="prd_card_img" style="background-image: url(../../assets/img/banners/merchant_hold.jpg);">
                                        </div>
                                        <div class="card_gradient"></div>
                                    </a>
                                    <div class="prd_card_bd">
                                        <div class="prd_support_info info_list_item event_item_info">
                                            <div class="info_image">
                                                <div class="calendar_box">
                                                    <span class="month">APR</span>
                                                    <span class="day color-white">06</span>
                                                    <span class="year">2018</span>
                                                </div>
                                            </div>
                                            <div class="info_container flex_content">
                                                <div class="">
                                                    <h4 class="info_item_title">Tumi and Tayo 2018</h4>
                                                    <p>Wedding Ceremony</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="prd_card_support">
                                        <a href="mng_event.html" class="btn btn-block btn-sm btn-default ">
                                            Manage Event
                                        </a>
                                    </div>
                                </div>
                            </article>
                            <article class="prd_card col-sm-6 col-md-4">
                                <div class="prd_card_wrapper bg-white">
                                    <header class="prd_card_hd">
                                        <div class="prd_card_meta meta_type">
                                            <span class="prd_program_type" title="Catering">
                                                Wedding
                                            </span>
                                        </div>
                                    </header>
                                    <a href="mng_event.html" class="prd_card_banner">
                                        <div class="prd_card_img" style="background-image: url(../../assets/img/banners/merchant_hold.jpg);">
                                        </div>
                                        <div class="card_gradient"></div>
                                    </a>
                                    <div class="prd_card_bd">
                                        <div class="prd_support_info info_list_item event_item_info">
                                            <div class="info_image">
                                                <div class="calendar_box">
                                                    <span class="month">APR</span>
                                                    <span class="day color-white">06</span>
                                                    <span class="year">2018</span>
                                                </div>
                                            </div>
                                            <div class="info_container flex_content">
                                                <div class="">
                                                    <h4 class="info_item_title">Tumi and Tayo 2018</h4>
                                                    <p>Wedding Ceremony</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="prd_card_support">
                                        <a href="mng_event.html" class="btn btn-block btn-sm btn-default ">
                                            Manage Event
                                        </a>
                                    </div>
                                </div>
                            </article>
                            <article class="prd_card col-sm-6 col-md-4">
                                <div class="prd_card_wrapper bg-white">
                                    <header class="prd_card_hd">
                                        <div class="prd_card_meta meta_type">
                                            <span class="prd_program_type" title="Catering">
                                                Wedding
                                            </span>
                                        </div>
                                    </header>
                                    <a href="mng_event.html" class="prd_card_banner">
                                        <div class="prd_card_img" style="background-image: url(../../assets/img/banners/merchant_hold.jpg);">
                                        </div>
                                        <div class="card_gradient"></div>
                                    </a>
                                    <div class="prd_card_bd">
                                        <div class="prd_support_info info_list_item event_item_info">
                                            <div class="info_image">
                                                <div class="calendar_box">
                                                    <span class="month">APR</span>
                                                    <span class="day color-white">06</span>
                                                    <span class="year">2018</span>
                                                </div>
                                            </div>
                                            <div class="info_container flex_content">
                                                <div class="">
                                                    <h4 class="info_item_title">Tumi and Tayo 2018</h4>
                                                    <p>Wedding Ceremony</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="prd_card_support">
                                        <a href="mng_event.html" class="btn btn-block btn-sm btn-default ">
                                            Manage Event
                                        </a>
                                    </div>
                                </div>
                            </article>
                            <article class="prd_card col-sm-6 col-md-4">
                                <div class="prd_card_wrapper bg-white">
                                    <header class="prd_card_hd">
                                        <div class="prd_card_meta meta_type">
                                            <span class="prd_program_type" title="Catering">
                                                Wedding
                                            </span>
                                        </div>
                                    </header>
                                    <a href="mng_event.html" class="prd_card_banner">
                                        <div class="prd_card_img" style="background-image: url(../../assets/img/banners/merchant_hold.jpg);">
                                        </div>
                                        <div class="card_gradient"></div>
                                    </a>
                                    <div class="prd_card_bd">
                                        <div class="prd_support_info info_list_item event_item_info">
                                            <div class="info_image">
                                                <div class="calendar_box">
                                                    <span class="month">APR</span>
                                                    <span class="day color-white">06</span>
                                                    <span class="year">2018</span>
                                                </div>
                                            </div>
                                            <div class="info_container flex_content">
                                                <div class="">
                                                    <h4 class="info_item_title">Tumi and Tayo 2018</h4>
                                                    <p>Wedding Ceremony</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="prd_card_support">
                                        <a href="mng_event.html" class="btn btn-block btn-sm btn-default ">
                                            Manage Event
                                        </a>
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
export default {
  name: 'UserEvent',
  data(){
      return{
      }
  },
    methods:{
      
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
