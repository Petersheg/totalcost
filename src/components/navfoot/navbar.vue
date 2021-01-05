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
                            <router-link to="" class="nav_link_item">Local Vendors</router-link>
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
                        <li class="nav_item">
                            <button type="button" class="nav_link_item" @click='routeUrl' v-text="login">
                            </button>
                        </li>
                        <li class="nav_item " v-if="!auth">
                            <router-link to="/signup" class="nav_link_item link_highlight">
                            Sign Up</router-link>
                        </li>
                    </ul>
                </nav>
                <div class="navbar_consts">
                    <div class="control_btns btn_search_trigger">
                        <router-link to="" class="">
                            <svg class="cust_icon icon_xs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
                                <path class="cls-1" d="M58.53,51.44l-13-13c-.07-.07-.15-.12-.22-.18a24.68,24.68,0,1,0-7.05,7c.06.07.11.15.18.22l13,13a5,5,0,1,0,7.09-7.09ZM24.67,40.78A16.12,16.12,0,1,1,40.78,24.67,16.12,16.12,0,0,1,24.67,40.78Z"/>
                            </svg>
                        </router-link>
                    </div>
                    <div class="control_btns btn_menu ">
                        <router-link class="primary-nav-trigger" to="">
                            <span class="menu-icon"></span>
                            <span class="menu-text sr-only">Menu</span>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </header>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name: 'Navbar',
    data(){
        return{
            merchant:false,
            login:"Login"
        }
    },
    computed:{
        ...mapGetters({auth:"isAuthenticated",allServices:"returnAllServices"}),
        role: function(){return this.$store.getters.getUserRole}
        //allServices:function(){return this.$store.getters.returnAllServices}
    },
    methods:{
        toggleLogin(){
            if(this.auth && this.role === 'User'){
                return this.login = "Profile";
            }else if(this.auth && this.role === 'Vendor'){
                return this.login = "My Profile"
            }
            else return this.login
        },

        routeUrl(){
            if(this.login === "Login"){
                this.$router.push({name:"Login"});
            }else if(this.login === "Profile" ){
                this.$router.push({name:"UserProfile"})
                //this.$router.push({name:"VendorProfile"})
            }else{
                this.$router.push({name:"VendorProfile"})
            }
        }
    },
    mounted(){
        this.toggleLogin()
        this.$store.dispatch('allServices')
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
