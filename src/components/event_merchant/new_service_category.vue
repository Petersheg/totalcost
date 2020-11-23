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
                                        <div class="progress_step active" title="Service Category">
                                            <router-link to="/new_service_category" class="step_wrapper">
                                                <span class="step_label sr-only">Select Service Category</span>
                                                <span class="step_count"></span>
                                            </router-link>
                                        </div>
                                        <div class="progress_step " title="Describe your service">
                                            <router-link to="/new_service_about" class="step_wrapper">
                                                <span class="step_label sr-only">Describe your service</span>
                                                <span class="step_count"></span>
                                            </router-link>
                                        </div>
                                        <div class="progress_step" title="Media Gallery">
                                            <router-link to="/new_service_media" class="step_wrapper">
                                                <span class="step_label sr-only">Media Gallery</span>
                                                <span class="step_count"></span>
                                            </router-link>
                                        </div>
                                        <div class="progress_step" title="Attach Packages">
                                            <router-link to="/new_service_pricing" class="step_wrapper">
                                                <span class="step_label sr-only">Attach Packages</span>
                                                <span class="step_count"></span>
                                            </router-link>
                                        </div>
                                    </div>
                                    <h4 class="widget_title color-primary">
                                        Service Category
                                    </h4>
                                    <p class="subtitle font-md">
                                        Select a service category that best describe your service
                                    </p>
                                </header>
                                <div class="widget_body">
                                   <form action="">
                                        <label class="control-label font-bold">What kind of service do you provide?</label>
                                        <div class="card_list cst_select_list select_radio">
                                            <article class="card_item select_item" v-for="service in allServices" :key="service.id">
                                                <label for="svc_dj" class="feature_wrapper">
                                                   <input type="radio" id="svc_dj" class="cst_selector" name="service_cat">
                                                    <figure class="feature_icon">
                                                        <img :src="getImg(service.imageUrl)" :alt="service.name">
                                                    </figure>
                                                    <h4 class="feature_title font-regular">
                                                        {{service.name}}
                                                    </h4>
                                                </label>
                                            </article>
                                            
                                        </div>
                                        
                                        <div class="section_cto text-center">
                                            <router-link to="/new_service_about" class="btn btn-inverse">
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
  name: 'NewService1',
  computed:{
      allServices: function(){return this.$store.getters.returnAllServices}
  },
  methods:{
      getImg(src){
          return require('../../assets'+src)
      }
  },
  mounted: function(){
      this.$store.dispatch('allServices')
  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
