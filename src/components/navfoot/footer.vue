<template>
  <div class="footer">
     <a href="#0" class="to-top">Top</a>
    <footer class="bg-primary" role="contentinfo">
        <div class="container">
            <div class="flex_row">
                <article class="foot_block">
                    <div class="wrapper">
                        <div class="brand_image">
                            <router-link to="/" class="logo_link">
                                <img src="../../assets/img/logomark.svg" alt="TotalCost">
                            </router-link>
                        </div>
                    </div>
                </article>
                <article class="foot_block">
                    <div class="wrapper">
                        <div class="div_bar bg-secondary"></div>
                        <address>
                            <p>4, Olayiwola street, Off kudirat Abiola Road, Oregun, Ikeja, <br> lagos State, Nigeria</p>
                        </address>
                        <ul>
                            <li>
                                <span class="font-bold">Tel:</span>
                                <a href="tel:+2348054628794">+234 (0)805 462 8794</a>
                            </li>
                            <li>
                               <span class="font-bold">Tel:</span>
                                <a href="tel:+2348056565999">+234 (0)805 656 5999</a>
                            </li>
                            <li>
                                <span class="font-bold">Email:</span>
                                <a href="mailto:hello@totalcost.com.ng">hello@totalcost.com.ng</a>
                            </li>
                        </ul>
                    </div>
                </article>
                <article class="foot_block">
                    <div class="wrapper">
                        <div class="div_bar bg-inverse"></div>
                        <ul class="footer_links">
                            <li><router-link to="/">Home</router-link></li>
                            <li><a href="#">Find a Vendor</a></li>
                            <li><a href="merchant_home.html">Become a Vendor</a></li>    
                            <li><a href="contact.html">Contact Us</a></li>
                            <li><a href="faq.html">FAQs</a></li>
                        </ul>
                    </div>
                </article>
                <article class="foot_block">
                    <div class="wrapper">
                        <div class="div_bar bg-inverse-2"></div>
                        <h4 class="title">Connect with Us</h4>
                        <div class="social_links">
                            <a href="https://facebook.com/totalcost_ng" class="link_item">
                                <svg xmlns="http://www.w3.org/2000/svg" class="cust_icon" viewBox="0 0 64 64">
                                    <path d="M45.1,31.8l-8.4,0.1L37,62.6l-12.7,0.1L24,32l-6,0.1l-0.1-10.8l6-0.1l-0.1-7c-0.1-5,2.2-12.8,12.7-13l9.4-0.1L46,11.7l-6.8,0.1c-1.1,0-2.7,0.6-2.7,3l0.1,6.4l9.5-0.1L45.1,31.8z M45.1,31.8"/>
                                </svg>
                            </a>
                            <a href="https://twitter.com/totalcost_ng" class="link_item">
                                <svg xmlns="http://www.w3.org/2000/svg" class="cust_icon" viewBox="0 0 64 64">
                                    <path d="M64,12.2c-2.4,1-4.9,1.8-7.5,2.1c2.7-1.6,4.8-4.2,5.8-7.3c-2.5,1.5-5.3,2.6-8.3,3.2C51.5,7.6,48.1,6,44.3,6c-7.3,0-13.1,5.9-13.1,13.1c0,1,0.1,2,0.3,3C20.6,21.6,10.9,16.3,4.5,8.4c-1.1,1.9-1.8,4.2-1.8,6.6c0,4.6,2.3,8.6,5.8,10.9c-2.2-0.1-4.2-0.7-5.9-1.6c0,0.1,0,0.1,0,0.2c0,6.4,4.5,11.7,10.5,12.9c-1.1,0.3-2.3,0.5-3.5,0.5c-0.8,0-1.7-0.1-2.5-0.2c1.7,5.2,6.5,9,12.3,9.1C15,50.2,9.3,52.3,3.1,52.3c-1.1,0-2.1-0.1-3.1-0.2C5.8,55.8,12.7,58,20.1,58c24.1,0,37.4-20,37.4-37.4c0-0.6,0-1.1,0-1.7C60,17.1,62.2,14.8,64,12.2L64,12.2z M64,12.2"/>
                                </svg>
                            </a>
                        </div>
                        <ul class="footer_links last">
                            <li><a href="#">Terms & Condition</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                        <p class="licensing color-grey">&copy;Totalcostng. Website designed by <br> <a href="twitter.com/cayhlebs" class="color-grey">12px Creatives.</a> All rights reserved.</p>
                    </div>
                </article>
            </div>
        </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
