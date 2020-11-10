<template>
  <div class="main">
      <Hero />
      <main class="main_content_area">
        <section class="section_block">
            <div class="section_wrapper">
                <div class="budget_widget wid_floated">
                    <div class="widget_wrapper">
                       <header class="widget_header centered text-center">
                           <h3 class="widget_title centered text-caps color-inverse">Let's plan a party</h3>
                       </header>

                        <div class="custom_control_group">
                            <div class="budget_input_group">
                                <div class="input_group_wrapper">
                                    <div class="budget_input_item form-group">
                                        <label for="" class="control-label sr-only">Event Type</label>
                                        <select class="form-control input_filled">
                                            <option>Event Type</option>
                                            <option>Birthday</option>
                                            <option>Wedding</option>
                                            <option>Burial</option>
                                            <option>Award</option>
                                            <option>Coronation</option>
                                            <option>Inauguration</option>
                                            <option>Others</option>
                                        </select>
                                    </div>
                                    <div class="budget_input_item form-group">
                                        <label for="" class="control-label sr-only">Event Location</label>
                                        <input type="text" placeholder="Event Location" class="form-control input_filled">
                                    </div>
                                    <div class="budget_input_item form-group">
                                        <label for="" class="control-label sr-only">Your Budget</label>
                                        <input type="number" placeholder="Your budget" class="form-control input_filled">
                                    </div>
                                </div>
                            </div>

                            <div class="budget_input_btn">
                                <button type="submit" class="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
                <header class="section_header text-center" data-aos="fade-up" data-aos-duration="600">
                    <h2 class="section_title hero_title">How it works</h2>
                </header>
                
                <section class="process_row">
                    <article class="process_details" data-aos="fade-right">
                        <div>
                            <header class="process_header">
                                <span class="info_count color-secondary">01.</span>
                                <h4 class="color-black hero_title">Tell us about your event</h4>
                            </header>
                            <ul class="action_list">
                                <li class="action_item">
                                    <span>
                                        <svg class="cust_icon color-secondary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 20.86">
                                            <path d="M22.81,0A63.12,63.12,0,0,0,8.4,12.39L3,8.18a18.69,18.69,0,0,0-3,2.6l9.79,10a.36.36,0,0,0,.28.12h.08a.39.39,0,0,0,.28-.24C12,16.57,17.22,8.13,23.87,2A.39.39,0,0,0,24,1.56,11,11,0,0,0,22.81,0Z"/>
                                        </svg>
                                    </span>
                                    <span>Answer the specific question about your event and specific constraints; like the number of guests, location, and date.</span>
                                </li>
                                <li class="action_item">
                                   <span>
                                        <svg class="cust_icon color-secondary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 20.86">
                                            <path d="M22.81,0A63.12,63.12,0,0,0,8.4,12.39L3,8.18a18.69,18.69,0,0,0-3,2.6l9.79,10a.36.36,0,0,0,.28.12h.08a.39.39,0,0,0,.28-.24C12,16.57,17.22,8.13,23.87,2A.39.39,0,0,0,24,1.56,11,11,0,0,0,22.81,0Z"/>
                                        </svg>
                                    </span>
                                    <span>Specify the services you will need to make the event a success
                                    </span>
                                </li>
                                <li class="action_item">
                                    <span>
                                        <svg class="cust_icon color-secondary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 20.86">
                                            <path d="M22.81,0A63.12,63.12,0,0,0,8.4,12.39L3,8.18a18.69,18.69,0,0,0-3,2.6l9.79,10a.36.36,0,0,0,.28.12h.08a.39.39,0,0,0,.28-.24C12,16.57,17.22,8.13,23.87,2A.39.39,0,0,0,24,1.56,11,11,0,0,0,22.81,0Z"/>
                                        </svg>
                                    </span>
                                    <span>Let us know your budget and style</span>
                                </li>
                            </ul>
                        </div>
					</article>
                    <div class="process_image" data-aos="fade-left">
						<figure class="process_image_holder">
						<img src="../../assets/img/banners/step_1.jpg" alt="">
						</figure>
					</div>
                </section>
                
                <section class="process_row saturate-primary row_reversed">
                    <article class="process_details" data-aos="fade-left">
                       <div>
                        <header class="process_header">
                            <span class="info_count color-inverse-2">02.</span>
						<h4 class="color-black hero_title">Assemble your event team</h4>
                        </header>
                        <ul class="action_list">
                            <li class="action_item">
                                <span>
                                    <svg class="cust_icon color-inverse-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 20.86">
                                        <path d="M22.81,0A63.12,63.12,0,0,0,8.4,12.39L3,8.18a18.69,18.69,0,0,0-3,2.6l9.79,10a.36.36,0,0,0,.28.12h.08a.39.39,0,0,0,.28-.24C12,16.57,17.22,8.13,23.87,2A.39.39,0,0,0,24,1.56,11,11,0,0,0,22.81,0Z"/>
                                    </svg>
                                </span>
                                <span>Get matched with verified vendors that match your specification.</span>
                            </li>
                            <li class="action_item">
                                <span>
                                    <svg class="cust_icon color-inverse-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 20.86">
                                        <path d="M22.81,0A63.12,63.12,0,0,0,8.4,12.39L3,8.18a18.69,18.69,0,0,0-3,2.6l9.79,10a.36.36,0,0,0,.28.12h.08a.39.39,0,0,0,.28-.24C12,16.57,17.22,8.13,23.87,2A.39.39,0,0,0,24,1.56,11,11,0,0,0,22.81,0Z"/>
                                    </svg>
                                </span>
                                <span>Contact and assess each suggested vendor directly from the app.</span>
                            </li>
                            <li class="action_item">
                                <span>
                                    <svg class="cust_icon color-inverse-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 20.86">
                                        <path d="M22.81,0A63.12,63.12,0,0,0,8.4,12.39L3,8.18a18.69,18.69,0,0,0-3,2.6l9.79,10a.36.36,0,0,0,.28.12h.08a.39.39,0,0,0,.28-.24C12,16.57,17.22,8.13,23.87,2A.39.39,0,0,0,24,1.56,11,11,0,0,0,22.81,0Z"/>
                                    </svg>
                                </span>
                                <span>Recruit your preferred vendor based on the quality of information we have made available.</span>
                            </li>
                        </ul>
                        </div>
					</article>
                    <div class="process_image" data-aos="fade-right">
						<figure class="process_image_holder">
					<img src="../../assets/img/banners/step_2.jpg" alt="">
						</figure>
					</div>
                </section>
                
                <section class="process_row">
                    <article class="process_details" data-aos="fade-right">
                       <div>
                        <header class="process_header">
                            <span class="info_count color-inverse">03.</span>
					<h4 class="color-black hero_title">Have a great celebration.</h4>
                        </header>
                        <ul class="action_list">
                            <li class="action_item">
                                <span>
                                    <svg class="cust_icon color-inverse" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 20.86">
                                        <path d="M22.81,0A63.12,63.12,0,0,0,8.4,12.39L3,8.18a18.69,18.69,0,0,0-3,2.6l9.79,10a.36.36,0,0,0,.28.12h.08a.39.39,0,0,0,.28-.24C12,16.57,17.22,8.13,23.87,2A.39.39,0,0,0,24,1.56,11,11,0,0,0,22.81,0Z"/>
                                    </svg>
                                </span>
                                <span>You have found and  recruited the best vendors for your event.</span>
                            </li>
                            <li class="action_item">
                                <span>
                                    <svg class="cust_icon color-inverse" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 20.86">
                                        <path d="M22.81,0A63.12,63.12,0,0,0,8.4,12.39L3,8.18a18.69,18.69,0,0,0-3,2.6l9.79,10a.36.36,0,0,0,.28.12h.08a.39.39,0,0,0,.28-.24C12,16.57,17.22,8.13,23.87,2A.39.39,0,0,0,24,1.56,11,11,0,0,0,22.81,0Z"/>
                                    </svg>
                                </span>
                                <span>Send your Questions, enquiries or complaints directly to a vendor through the app.</span>
                            </li>
                            <li class="action_item">
                                <span>
                                    <svg class="cust_icon color-inverse" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 20.86">
                                        <path d="M22.81,0A63.12,63.12,0,0,0,8.4,12.39L3,8.18a18.69,18.69,0,0,0-3,2.6l9.79,10a.36.36,0,0,0,.28.12h.08a.39.39,0,0,0,.28-.24C12,16.57,17.22,8.13,23.87,2A.39.39,0,0,0,24,1.56,11,11,0,0,0,22.81,0Z"/>
                                    </svg>
                                </span>
                                <span>Write vendor review and report to help others make informed decision.</span>
                            </li>
                        </ul>
                        </div>
					</article>
                    <div class="process_image" data-aos="fade-left">
						<figure class="process_image_holder">
						<img src="../../assets/img/banners/step_3.jpg" alt="">
						</figure>
					</div>
                </section>
                
            </div>
        </section>
        <!-- banner_bg bg_strips-->
        <section class="section_block bg-off-white banner_bg bg_strips">
            <div class="container section_wrapper">
                <header class="section_header" data-aos="fade-up" data-aos-duration="400">
                    <h2 class="section_title font_regular">Featured vendors</h2>
                    <span class="deco_bar"></span>
                </header>
                     <router-view></router-view>
                    <Vendors ></Vendors>
                 <div class="scroller_cto" data-aos="fade-up" data-aos-duration="400">
                    <router-link to="/merchant_home" class="btn btn-primary">Become a Vendor</router-link>
                </div>
            </div>
        </section>
        <section class="section_block bg-off-white">
            <div class="container section_wrapper">
                <header class="section_header text-center">
                    <h1 class="section_title font-regular">Find the best vendor near you.</h1>
                    <span class="deco_bar"></span>
                </header>
                    <Category></Category>
                    
                <div class="section_cto text-center">
                    <router-link to="/all_services" class="btn btn-outline">See All</router-link>
                </div>
                
            </div>
        </section>
        <section class="section_block banner_bg ev_budget_banner">
            <div class="container narrow_container section_wrapper color-white" data-aos="fade-up" data-aos-duration="400">
                <header class="section_header text-center">
                    <h1 class="section_title font_regular">Let’s work together.</h1>
                    <span class="deco_bar"></span>
                    <p class="font-md">Our event budgeting service is designed to remove the stress of finding the best vendors for your event. Giving you the liberty to focus on other equally important aspects of your events.</p>
                </header>

                <div class="custom_control_group">
                    <div class="input_group_wrapper">
                        <div class="budget_input_item form-group">
                            <label for="" class="control-label sr-only">Event Type</label>
                            <select class="form-control input_filled">
                                <option>Event Type</option>
                                <option>Birthday</option>
                                <option>Wedding</option>
                                <option>Burial</option>
                                <option>Award</option>
                                <option>Coronation</option>
                                <option>Inauguration</option>
                                <option>Others</option>
                            </select>
                        </div>
                        <div class="budget_input_item form-group">
                            <label for="" class="control-label sr-only">Event Location</label>
                            <input type="text" placeholder="Event Location" class="form-control input_filled">
                        </div>
                        <div class="budget_input_item form-group">
                            <label for="" class="control-label sr-only">Your Budget</label>
                            <input type="number" placeholder="Your budget" class="form-control input_filled">
                        </div>
                    </div>
                    <div class="budget_input_btn">
                        <button type="submit" class="btn btn-inverse">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    </main>
  </div>
</template>

<script>
import Vendors from "./FeatureVenture";
import Category from "./VendorCat";
import Hero from '../home/Hero';
import {mapActions} from 'vuex'

//import hs from '../../assets/js/main';
import Peter from '../../api/newService'

export default {
  name: 'Main',
  components:{
      Vendors,
      Category,
      Hero
  },
  data(){
      return{
          
      }
  },
  methods:{
      loadaScript(src){
          const script = document.createElement("script");
          script.setAttribute('src', src);
          script.async=true;
          document.body.appendChild(script)
      },
  },
  mounted(){
      this.loadaScript('../../../js/interScript/home.js');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
