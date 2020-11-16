<template>
  
     <main class="main_content_area">
        <section class="section_block saturate-primary">
            <div class="container section_wrapper">
                <div class="entry_content centered">
                    <div class="block_panel auth_panel bg-white">
                       <div class="hr_line"></div>
                        <header class="block_header text-center">
                            <h2 class="color-primary pane_title">Create an Account</h2>
                        </header>
                        <div class="content_inner">
                            <div class="error_message">
                                <p>Oops, Something went wrong. Please try again in a bit.</p>
                            </div>
                            <form action="">
                                <div class="form-horizontal">
                                    <div class="form-group funky_form col-sm-6">
                                        <label class="control-label">
                                            First Name
                                        </label>
                                        <input type="text" class="form-control " placeholder="First Name">
                                    </div>
                                    <div class="form-group funky_form col-sm-6">
                                        <label class="control-label">
                                            Last Name
                                        </label>
                                        <input type="text" class="form-control" placeholder="First Name">
                                    </div>
                                </div>
                                <div class="form-group funky_form">
                                    <label class="control-label">
                                        Email Address
                                    </label>
                                    <input type="email" class="form-control" placeholder="Email Address">
                                </div>
                                <div class="form-group funky_form field_pass">
                                    <label class="control-label">
                                        Password
                                    </label>
                                    <input type="password" class="form-control" placeholder="Password">
                                </div>
                               
                            </form>
                            <div class="section_cto text-center">
                                <button type="submit" class="btn btn-inverse">Continue</button>
                            </div>
                            <p class="">Already have an account? <router-link to="/login" class="btn-link font-bold">Log in</router-link></p>
                        </div>
                        <div class="content_footer">
                            <div class="social_prop">
                                <span class="info_title font-md">or Continue with - </span>
                                <div class="social_btn_icons">
                                    <a href="#" class="social_btn bg_fb">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="cust_icon icon_xs" viewBox="0 0 64 64">
                                            <path d="M45.1,31.8l-8.4,0.1L37,62.6l-12.7,0.1L24,32l-6,0.1l-0.1-10.8l6-0.1l-0.1-7c-0.1-5,2.2-12.8,12.7-13l9.4-0.1L46,11.7l-6.8,0.1c-1.1,0-2.7,0.6-2.7,3l0.1,6.4l9.5-0.1L45.1,31.8z M45.1,31.8"/>
                                        </svg>
                                    </a>
                                    <a href="#" class="social_btn bg_tw">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="cust_icon icon_xs" viewBox="0 0 64 64">
                                            <path d="M64,12.2c-2.4,1-4.9,1.8-7.5,2.1c2.7-1.6,4.8-4.2,5.8-7.3c-2.5,1.5-5.3,2.6-8.3,3.2C51.5,7.6,48.1,6,44.3,6c-7.3,0-13.1,5.9-13.1,13.1c0,1,0.1,2,0.3,3C20.6,21.6,10.9,16.3,4.5,8.4c-1.1,1.9-1.8,4.2-1.8,6.6c0,4.6,2.3,8.6,5.8,10.9c-2.2-0.1-4.2-0.7-5.9-1.6c0,0.1,0,0.1,0,0.2c0,6.4,4.5,11.7,10.5,12.9c-1.1,0.3-2.3,0.5-3.5,0.5c-0.8,0-1.7-0.1-2.5-0.2c1.7,5.2,6.5,9,12.3,9.1C15,50.2,9.3,52.3,3.1,52.3c-1.1,0-2.1-0.1-3.1-0.2C5.8,55.8,12.7,58,20.1,58c24.1,0,37.4-20,37.4-37.4c0-0.6,0-1.1,0-1.7C60,17.1,62.2,14.8,64,12.2L64,12.2z M64,12.2"/>
                                        </svg>
                                    </a>
                                    <a href="#" class="social_btn bg_goog">
                                        <svg class="cust_icon icon_xs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58.5 58.5">
                                            <path d="M29.25,23.4V35.1H45.8A17.55,17.55,0,1,1,29.25,11.7a17.29,17.29,0,0,1,11.37,4.24L48.3,7.11A29,29,0,0,0,29.25,0,29.25,29.25,0,1,0,58.5,29.25V23.4Z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

</template>

<script>
export default {
  name: 'SignUp'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
