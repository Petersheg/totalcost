<template>
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
                        <a href="#" class="btn btn-sm btn-secondary">
                            Send a Message
                        </a>
                    </div>
                </div>
            </div>
            <nav class="user_context_nav">
                <div class="container">
                    <div class="merchant_content_area">
                        <ul class="nav nav-tabs">
                            <li ><router-link to="user_profile_view">Overview</router-link></li>
                            <li class="active"><router-link to="user_event_view">Events</router-link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
        <section class="section_block">
            <div class="container">
                <div class="content_wrapper merchant_content_area">
                    <header class="user_infoHeader">
                        <h3 class="pane_title text-caps color-primary">Old Events</h3>
                    </header>
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
                                    <router-link to="event_details_view" class="prd_card_banner">
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
                                        <router-link to="/event_details_view" class="btn btn-block btn-sm btn-default ">
                                            View Event
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
                                    <a to="/event_details_view" class="prd_card_banner">
                                        <div class="prd_card_img" style="background-image: url(../../assets/img/banners/photograph.jpg);">
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
                                        <a to="/event_details_view" class="btn btn-block btn-sm btn-default ">
                                            View Event
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
                                    <a to="/event_details_view" class="prd_card_banner">
                                        <div class="prd_card_img" style="background-image: url(../../assets/img/banners/cake.jpg);">
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
                                        <a to="/event_details_view" class="btn btn-block btn-sm btn-default ">
                                            View Event
                                        </a>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section_block">
            <div class="container">
                <div class="content_wrapper merchant_content_area">
                    <header class="user_infoHeader">
                        <h3 class="pane_title text-caps color-primary">Upcoming Events</h3>
                    </header>
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
                                    <router-link to="/event_details_view" class="prd_card_banner">
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
                                        <router-link to="/event_details_view" class="btn btn-block btn-sm btn-default ">
                                            View Event
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
                                    <router-link to="/event_details_view" class="prd_card_banner">
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
                                        <router-link to="/event_details_view" class="btn btn-block btn-sm btn-default ">
                                            View Event
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
                                    <router-link to="/event_details_view" class="prd_card_banner">
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
                                        <router-link to="/event_details_view" class="btn btn-block btn-sm btn-default ">
                                            View Event
                                        </router-link>
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
  name: 'UserEventView',
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
