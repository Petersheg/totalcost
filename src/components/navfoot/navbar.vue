<template>
  <div class="navbar">
         <header role="banner" class="main_header">
        <div class="navbar_container">
            <div class="navbar_group navbar_group_left">
                <div class="brand_image">
                    <router-link to="/" class="logo_link">
                        <span class="logo_image_holder">
                            <img src="../../assets/img/logo.svg" alt="totalcost">
                        </span>
                    </router-link>
                </div>
            </div>
            <div class="navbar_group navbar_group_center">
                <form class="navbar_search_form">
                    <input class="navbar_search_input" type="search" placeholder="Find vendor by name or services">
                    <ul class="searchbar_autocomplete">
                    </ul>
                    <button class="navbar_search_btn navbar_search_submit" type="submit">
                        <svg class="cust_icon icon_xs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
                            <path class="cls-1" d="M58.53,51.44l-13-13c-.07-.07-.15-.12-.22-.18a24.68,24.68,0,1,0-7.05,7c.06.07.11.15.18.22l13,13a5,5,0,1,0,7.09-7.09ZM24.67,40.78A16.12,16.12,0,1,1,40.78,24.67,16.12,16.12,0,0,1,24.67,40.78Z"/>
                        </svg>
                    </button>
                    <button class="navbar_search_btn navbar_search_reset" type="reset">
                        <svg class="cust_icon icon_xs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                            <path d="M60.9,3.1L60.9,3.1c-1.5-1.5-4-1.5-5.5,0L32,26.5L8.7,3.1c-1.5-1.5-4-1.5-5.5,0l0,0c-1.5,1.5-1.5,4,0,5.5
                            L26.5,32L3.1,55.3c-1.5,1.5-1.5,4,0,5.5l0,0c1.5,1.5,4,1.5,5.5,0L32,37.5l23.3,23.3c1.5,1.5,4,1.5,5.5,0l0,0c1.5-1.5,1.5-4,0-5.5
                            L37.5,32L60.9,8.7C62.4,7.2,62.4,4.7,60.9,3.1z"/>
                        </svg>
                    </button>
                </form>
            </div>
            <div class="navbar_group navbar_group_right">
                <nav class="primary_nav_menu">
                    <ul class="primary_nav">
                        <li class="nav_item">
                            <a href="#" class="nav_link_item">Local Vendors</a>
                            <!--Toggle "nav_visible" to show list-->
                            <div class="sub_bav_block">
                                <div class="nav_block_wrapper">
                                   <ul class="nav_item_list">
                                       <li class="nav_item" v-for="service in allServices" :key="service.id">
                                           <router-link :to="{path:`/service_listings/${service.id}/vendors`}">{{service.name}}</router-link>
                                        </li>
                                   </ul>
                                    <router-link to="/all_services" class="nav_block_cta">
                                        See all Vendors
                                    </router-link>
                                </div>
                            </div>
                        </li>
                        <li class="nav_item">
                            <router-link to="/merchant_home" class="nav_link_item">Become a Vendor</router-link>
                        </li>
                    
                        <li class="nav_item" v-if="returnPath()">
                            <div class="navbar_consts">
                                <div class="control_btns btn_search_trigger">
                                        <a href="#">
                                            <svg class="cust_icon icon_xs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
                                                <path class="cls-1" d="M58.53,51.44l-13-13c-.07-.07-.15-.12-.22-.18a24.68,24.68,0,1,0-7.05,7c.06.07.11.15.18.22l13,13a5,5,0,1,0,7.09-7.09ZM24.67,40.78A16.12,16.12,0,1,1,40.78,24.67,16.12,16.12,0,0,1,24.67,40.78Z"/>
                                            </svg>
                                        </a>
                                </div>
                                <div class="control_btns btn_user_messages">
                                    <a href="#">
                                        <span class="msg_notification"></span>
                                        <span class="icon_holder">
                                            <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 11.56">
                                                <polygon points="6.5 0 0.08 4.06 12.92 4.06 6.5 0"/>
                                                <path d="M13,4.06,6.85,7.88h0L6.67,8h0L6.5,8h0L6.35,8h0L6.2,7.91h0L0,4.06a1.16,1.16,0,0,0,0,.2V10.4a1.16,1.16,0,0,0,1.16,1.16H11.84A1.16,1.16,0,0,0,13,10.4h0V4.26A1.15,1.15,0,0,0,13,4.06Z"/>
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                                <div class="control_btns btn_user_act dropdown">
                                    <a href="#" data-toggle="dropdown" class="dropdown-toggle">
                                        <span class="icon_holder">
                                            <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.65 13">
                                                <path d="M6.8,7.3A3.65,3.65,0,1,0,3.15,3.64,3.65,3.65,0,0,0,6.8,7.3ZM6.8,1A2.69,2.69,0,1,1,4.11,3.64,2.7,2.7,0,0,1,6.8,1Z"/>
                                                <path d="M.48,13H13.17a.48.48,0,0,0,.48-.48A4.59,4.59,0,0,0,9.07,7.93H4.58A4.59,4.59,0,0,0,0,12.52.48.48,0,0,0,.48,13Zm4.1-4.1H9.07A3.62,3.62,0,0,1,12.65,12H1A3.63,3.63,0,0,1,4.58,8.9Z"/>
                                            </svg>
                                        </span>
                                    </a>
                                    <div class="dropdown-menu dropdown-right profile_dropdown">
                                        <header class="dpd_header">
                                            <div class="media_item user_media">
                                                <figure class="media_figure">
                                                    <a href="user_profile.html" class="user_avatar">
                                                        <img src="../../assets/img/icons/user_default.png" alt="">
                                                    </a>
                                                </figure>
                                                <div class="media_info">
                                                    <h4 class="media_title color-primary">David Olaniyi</h4>
                                                    <router-link to="/vendor_profile" class="btn-link">View Profile</router-link>
                                                </div>
                                            </div>
                                        </header>
                                        <ul class="dpd_nav">
                                            <li class="dpd_nav_item">
                                                <router-link to="/account_settings" class="dsp_tab_row">
                                                    <span class="icon_holder">
                                                        <svg class="cust_icon icon_xs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                            <path d="M15.18,6.22h-1.5a.57.57,0,0,1-.41-1l1.06-1.06a.82.82,0,0,0,0-1.17L13,1.67a.84.84,0,0,0-1.17,0L10.76,2.73a.57.57,0,0,1-1-.41V.82A.82.82,0,0,0,9,0H7a.82.82,0,0,0-.82.82v1.5a.57.57,0,0,1-1,.41L4.18,1.67A.84.84,0,0,0,3,1.67L1.67,3a.82.82,0,0,0,0,1.17L2.73,5.24a.57.57,0,0,1-.41,1H.82A.82.82,0,0,0,0,7V9a.82.82,0,0,0,.82.82h1.5a.57.57,0,0,1,.41,1L1.67,11.82a.82.82,0,0,0,0,1.17L3,14.33a.84.84,0,0,0,1.17,0l1.06-1.06a.57.57,0,0,1,1,.41v1.5A.82.82,0,0,0,7,16H9a.82.82,0,0,0,.82-.82v-1.5a.57.57,0,0,1,1-.41l1.06,1.06a.84.84,0,0,0,1.17,0L14.33,13a.82.82,0,0,0,0-1.17l-1.06-1.06a.57.57,0,0,1,.41-1h1.5A.82.82,0,0,0,16,9V7A.82.82,0,0,0,15.18,6.22ZM15.41,9a.23.23,0,0,1-.23.23h-1.5a1.17,1.17,0,0,0-.83,2l1.06,1.06a.23.23,0,0,1,0,.33l-1.35,1.35a.23.23,0,0,1-.33,0l-1.06-1.06a1.17,1.17,0,0,0-2,.83v1.5a.23.23,0,0,1-.23.23H7a.23.23,0,0,1-.23-.23v-1.5a1.15,1.15,0,0,0-.72-1.08,1.18,1.18,0,0,0-.45-.09,1.15,1.15,0,0,0-.82.34L3.76,13.91a.23.23,0,0,1-.33,0L2.09,12.56a.23.23,0,0,1,0-.33l1.06-1.06a1.17,1.17,0,0,0-.83-2H.82A.23.23,0,0,1,.59,9V7a.23.23,0,0,1,.23-.23h1.5a1.17,1.17,0,0,0,.83-2L2.09,3.76a.23.23,0,0,1,0-.33L3.44,2.09a.23.23,0,0,1,.33,0L4.82,3.15a1.17,1.17,0,0,0,2-.83V.82A.23.23,0,0,1,7,.59H9a.23.23,0,0,1,.23.23v1.5a1.17,1.17,0,0,0,2,.83l1.06-1.06a.23.23,0,0,1,.33,0l1.35,1.35a.23.23,0,0,1,0,.33L12.85,4.82a1.17,1.17,0,0,0,.83,2h1.5a.23.23,0,0,1,.23.23Z"/>
                                                            <path d="M8,5.33A2.67,2.67,0,1,0,10.67,8,2.67,2.67,0,0,0,8,5.33Zm0,4.74A2.07,2.07,0,1,1,10.07,8,2.08,2.08,0,0,1,8,10.07Z"/>
                                                        </svg>
                                                    </span>
                                                    <span class="nav_item_text">
                                                        Account Settings
                                                    </span>
                                                </router-link>
                                            </li>
                                            <li class="dpd_nav_item">
                                                <router-link to="/login" class="dsp_tab_row">
                                                    <span class="icon_holder">
                                                        <svg class="cust_icon icon_xs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 17.24">
                                                            <path d="M15.86,9h0l0,0h0l0,0h0l0,0h0l0,0h0a.25.25,0,0,0,0,0,0,0,0,0,1,0,0v0a.51.51,0,0,0,0-.12.18.18,0,0,0,0,0,0,0,0,0,0,0,0v0h0l0,0h0l0,0h0l0,0h0l0,0h0l0,0L12.34,4.71a.6.6,0,0,0-.86.86L13.93,8H4.19a.6.6,0,1,0,0,1.21h9.74L11.5,11.65a.6.6,0,1,0,.85.86l3.46-3.46Z"/>
                                                            <path d="M3.28,1.21h4.5A.6.6,0,1,0,7.78,0H3.28A3.28,3.28,0,0,0,0,3.28V14a3.28,3.28,0,0,0,3.28,3.28H7.71a.6.6,0,1,0,0-1.21H3.28A2.07,2.07,0,0,1,1.21,14V3.28A2.07,2.07,0,0,1,3.28,1.21Z"/>
                                                        </svg>
                                                    </span>
                                                    <span class="nav_item_text">
                                                        Log Out
                                                    </span>
                                                </router-link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="control_btns btn_menu">
                                    <a class="primary-nav-trigger" href="#0">
                                        <span class="menu-icon"></span>
                                        <span class="menu-text sr-only">Menu</span>
                                    </a>
                                </div>
                            </div>
                        </li>

                        <span v-else>
                            <li class="nav_item">
                            <router-link to="/login" class="nav_link_item">
                            Login</router-link>
                            </li>
                            <li class="nav_item ">
                                <router-link to="/signup" class="nav_link_item link_highlight">
                                Sign Up</router-link>
                            </li>
                        </span>
                    </ul>
                </nav>
                <div class="navbar_consts">
                    <div class="control_btns btn_search_trigger">
                        <a href="#" class="">
                            <svg class="cust_icon icon_xs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
                                <path class="cls-1" d="M58.53,51.44l-13-13c-.07-.07-.15-.12-.22-.18a24.68,24.68,0,1,0-7.05,7c.06.07.11.15.18.22l13,13a5,5,0,1,0,7.09-7.09ZM24.67,40.78A16.12,16.12,0,1,1,40.78,24.67,16.12,16.12,0,0,1,24.67,40.78Z"/>
                            </svg>
                        </a>
                    </div>
                    <div class="control_btns btn_menu ">
                        <a class="primary-nav-trigger" href="#0">
                            <span class="menu-icon"></span>
                            <span class="menu-text sr-only">Menu</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </header>
  </div>
</template>

<script>

export default {
    name: 'Navbar',
    data(){
        return{
            merchant:false
        }
    },
    computed:{
        allServices:function(){return this.$store.getters.returnAllServices}
    },
    methods:{
        returnPath(){
            const pathToString =  this.$route.fullPath.toString();
            return pathToString.includes("vendor")
        }
    },
    mounted(){
        this.$store.dispatch('allServices')
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
