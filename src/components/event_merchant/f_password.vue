<template>
  
 <main class="main_content_area">
        <section class="section_block saturate-primary">
            <div class="container section_wrapper">
                <div class="entry_content centered">
                    <div class="block_panel auth_panel bg-white">
                       <div class="hr_line"></div>
                        <header class="block_header text-center">
                            <h2 class="color-primary pane_title">Forgot password</h2>
                        </header>
                        <div class="content_inner">
                            <div class="error_message">
                                <p>We can not find any account associated with <mark>dave@gmail.com</mark>. Would you rather <router-link to="signup" class="btn-link">Sign up?</router-link></p>
                            </div>
                            <form action="">
                              
                                <div class="form-group text-left">
                                   <p>To reset your password, please enter the email associated with your totalcost account.</p>
                                    <!--Replace the p block above with this after the email has been sent.-->
                                   <p class="hidden">An email has been sent to <mark>dave@gmail.com</mark> follow the link provided to reset your password.</p>
                                </div>

                                <div class="form-group funky_form">
                                    <label class="control-label">
                                        Email Address
                                    </label>
                                    <input type="email" class="form-control" placeholder="Email Address">
                                </div>                               
                            </form>
                            <div class="section_cto text-center">
                                <button type="submit" class="btn btn-inverse">Reset Password</button>
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
  name: 'Fpassword'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
