<template>

    <main class="main_content_area bg-off-white">
        <section class="section_block ">
            <div class="container ct_slim">
                <div class="content_wrapper">
                    <div class="content_inner">
                        <section class="wizard">
                            <div class="wizard_step">
                                <header class="widget_header">
                                    <div class="widget_progress_marker">
                                        <div class="progress_step done" title="Event Details">
                                            <router-link to="/new_event_basicInfo" class="step_wrapper">
                                                <span class="step_label sr-only">Create your Event</span>
                                                <span class="step_count"></span>
                                            </router-link>
                                        </div>
                                        <div class="progress_step active" title="Service Category">
                                            <router-link to="/new_event_category" class="step_wrapper">
                                                <span class="step_label sr-only">Select Service Category</span>
                                                <span class="step_count"></span>
                                            </router-link>
                                        </div>
                                        <div class="progress_step " title="Bugetting and Result">
                                            <router-link to="/new_event_vendor" class="step_wrapper">
                                                <span class="step_label sr-only">Select Preferred Budget</span>
                                                <span class="step_count"></span>
                                            </router-link>
                                        </div>
                                        <!-- <div class="progress_step" title="Attach Packages">
                                            <a href="new_service_4.html" class="step_wrapper">
                                                <span class="step_label sr-only">Attach Packages</span>
                                                <span class="step_count"></span>
                                            </a>
                                        </div> -->
                                    </div>
                                    <h4 class="widget_title color-primary">
                                        Service Category & Budget
                                    </h4>
                                    <p class="subtitle font-md">
                                       Input budget and select services required for your event
                                    </p>
                                </header>
                                <div class="widget_body">
                                   <form action="">
                                       <label class="control-label">Input Budget</label>
                                        <div class="dynamic_input_widget"> 
                                            <div class="budget_input_item form-group">
                                                <label for="" class="control-label sr-only">Your Budget</label>
                                                <input type="number" placeholder="Your budget" class="form-control">
                                            </div>

                                        </div>
                                        <label class="control-label font-bold">What kinds of services do you need?</label>
                                        <div class="card_list cst_select_list select_radio">
                                            <article class="card_item select_item">
                                                <label for="svc_dj" class="feature_wrapper">
                                                   <input type="radio" id="svc_dj" class="cst_selector" name="service_cat">
                                                    <figure class="feature_icon">
                                                        <img src="../../assets/img/icons/Dj.svg" alt="Disk jockey">
                                                    </figure>
                                                    <h4 class="feature_title font-regular">
                                                        Disk Jockey
                                                    </h4>
                                                </label>
                                            </article>
                                            <article class="card_item select_item">
                                                <label for="svc_lgs" class="feature_wrapper">
                                                   <input type="radio" id="svc_lgs" class="cst_selector" name="service_cat">
                                                    <figure class="feature_icon">
                                                        <img src="../../assets/img/icons/Logistics.svg" alt="Logistics">
                                                    </figure>
                                                    <h4 class="feature_title font-regular">
                                                        Logistics
                                                    </h4>
                                                </label>
                                            </article>
                                            <article class="card_item select_item">
                                                <label for="svc_photo" class="feature_wrapper">
                                                   <input type="radio" id="svc_photo" class="cst_selector" name="service_cat">
                                                    <figure class="feature_icon">
                                                        <img src="../../assets/img/icons/Photographer.svg" alt="Disk Photographer/Videographer">
                                                    </figure>
                                                    <h4 class="feature_title font-regular">
                                                        Photographer/ Videographer
                                                    </h4>
                                                </label>
                                            </article>
                                            <article class="card_item select_item">
                                                <label for="svc_rent" class="feature_wrapper">
                                                   <input type="radio" id="svc_rent" class="cst_selector" name="service_cat">
                                                    <figure class="feature_icon">
                                                        <img src="../../assets/img/icons/Rentals.svg" alt="Rentals">
                                                    </figure>
                                                    <h4 class="feature_title font-regular">
                                                        Rentals
                                                    </h4>
                                                </label>
                                            </article>
                                            <article class="card_item select_item">
                                                <label for="svc_band" class="feature_wrapper">
                                                   <input type="radio" id="svc_band" class="cst_selector" name="service_cat">
                                                    <figure class="feature_icon">
                                                        <img src="../../assets/img/icons/Band.svg" alt="Musical Band">
                                                    </figure>
                                                    <h4 class="feature_title font-regular">
                                                        Musical Band
                                                    </h4>
                                                </label>
                                            </article>
                                            <article class="card_item select_item">
                                                <label for="svc_makeover" class="feature_wrapper">
                                                   <input type="radio" id="svc_makeover" class="cst_selector" name="service_cat">
                                                    <figure class="feature_icon">
                                                        <img src="../../assets/img/icons/Makeover.svg" alt="Makeup / Makeover Artist">
                                                    </figure>
                                                    <h4 class="feature_title font-regular">
                                                        Makeup / Makeover Artist
                                                    </h4>
                                                </label>
                                            </article>
                                            <article class="card_item select_item">
                                                <label for="svc_secure" class="feature_wrapper">
                                                   <input type="radio" id="svc_secure" class="cst_selector" name="service_cat">
                                                    <figure class="feature_icon">
                                                        <img src="../../assets/img/icons/Security.svg" alt="Security">
                                                    </figure>
                                                    <h4 class="feature_title font-regular">
                                                        Security
                                                    </h4>
                                                </label>
                                            </article>
                                            <article class="card_item select_item">
                                                <label for="svc_cater" class="feature_wrapper">
                                                   <input type="radio" id="svc_cater" class="cst_selector" name="service_cat">
                                                    <figure class="feature_icon">
                                                        <img src="../../assets/img/icons/Caterer.svg" alt="Catering">
                                                    </figure>
                                                    <h4 class="feature_title font-regular">
                                                        Catering
                                                    </h4>
                                                </label>
                                            </article>
                                            <article class="card_item select_item">
                                                <label for="svc_ush" class="feature_wrapper">
                                                   <input type="radio" id="svc_ush" class="cst_selector" name="service_cat">
                                                    <figure class="feature_icon">
                                                        <img src="../../assets/img/icons/Ushers.svg" alt="Ushering & Hospitality">
                                                    </figure>
                                                    <h4 class="feature_title font-regular">
                                                        Ushering & Hospitality
                                                    </h4>
                                                </label>
                                            </article>
                                            <article class="card_item select_item">
                                                <label for="svc_cake" class="feature_wrapper">
                                                    <input type="radio" id="svc_cake" class="cst_selector" name="service_cat">
                                                    <figure class="feature_icon">
                                                        <img src="../../assets/img/icons/Cakes.svg" alt="Cakes & Confectionaries">
                                                    </figure>
                                                    <h4 class="feature_title font-regular">
                                                        Cakes & Confectionaries
                                                    </h4>
                                                </label>
                                            </article>
                                            <article class="card_item select_item">
                                                <label for="svc_drk" class="feature_wrapper">
                                                    <input type="radio" id="svc_drk" class="cst_selector" name="service_cat">
                                                    <figure class="feature_icon">
                                                        <img src="../../assets/img/icons/Drinks.svg" alt="Drinks & Cocktails">
                                                    </figure>
                                                    <h4 class="feature_title font-regular">
                                                        Drinks & Cocktails
                                                    </h4>
                                                </label>
                                            </article>
                                            <article class="card_item select_item">
                                                <label for="svc_fsh" class="feature_wrapper">
                                                    <input type="radio" id="svc_fsh" class="cst_selector" name="service_cat">
                                                    <figure class="feature_icon">
                                                        <img src="../../assets/img/icons/Fashion.svg" alt="Fashion Designer">
                                                    </figure>
                                                    <h4 class="feature_title font-regular">
                                                        Fashion Designer
                                                    </h4>
                                                </label>
                                            </article>
                                            <article class="card_item select_item">
                                                <label for="svc_cmpr" class="feature_wrapper">
                                                    <input type="radio" id="svc_cmpr" class="cst_selector" name="service_cat">
                                                    <figure class="feature_icon">
                                                        <img src="../../assets/img/icons/Compare.svg" alt="Event Compere">
                                                    </figure>
                                                    <h4 class="feature_title font-regular">
                                                        Event Compere
                                                    </h4>
                                                </label>
                                            </article>
                                            <article class="card_item select_item">
                                                <label for="svc_vnu" class="feature_wrapper">
                                                    <input type="radio" id="svc_vnu" class="cst_selector" name="service_cat">
                                                    <figure class="feature_icon">
                                                        <img src="../../assets/img/icons/Venue.svg" alt="Venue Management">
                                                    </figure>
                                                    <h4 class="feature_title font-regular">
                                                        Venue Management
                                                    </h4>
                                                </label>
                                            </article>
                                            <article class="card_item select_item">
                                                <label for="svc_deco" class="feature_wrapper">
                                                    <input type="radio" id="svc_deco" class="cst_selector" name="service_cat">
                                                    <figure class="feature_icon">
                                                        <img src="../../assets/img/icons/Decoration.svg" alt="Decoration">
                                                    </figure>
                                                    <h4 class="feature_title font-regular">
                                                        Decoration
                                                    </h4>
                                                </label>
                                            </article>
                                            <article class="card_item select_item">
                                                <label for="svc_media" class="feature_wrapper">
                                                    <input type="radio" id="svc_media" class="cst_selector" name="service_cat">
                                                    <figure class="feature_icon">
                                                        <img src="../../assets/img/icons/Speaker.svg" alt="Multi-Media">
                                                    </figure>
                                                    <h4 class="feature_title font-regular">
                                                        Multi-Media
                                                    </h4>
                                                </label>
                                            </article>
                                            
                                        </div>
                                        
                                        <div class="section_cto text-center">
                                            <router-link to="/new_event_basicInfo" class="btn btn-default">
                                                Previous
                                            </router-link>
                                            <router-link to="/new_event_vendor" class="btn btn-inverse">
                                                Save & Continue
                                            </router-link>
                                        </div>
                                    
                                    </form>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    </main>

</template>

<script>
export default {
  name: 'EventCategory',
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
