<template>
  <div class="mt-top">
      <main class="main_content_area bg-off-white">
       <nav class="breadcrumb_nav">
           <div class="container">
                <ol class="breadcrumb">
                    <li>
                        <router-link to="/">Home</router-link>
                    </li>
                    <li class="active">
                        <span>Discover Services</span>
                    </li>
                </ol>
			</div>
       </nav>
        <section class="section_block">
            <div class="container section_wrapper">
                <header class="section_header text-center">
                    <h1 class="section_title font_regular">Browse by Category</h1>
                    <span class="deco_bar"></span>
                </header>
                <div class="row service_cat_list">
                        <Categorry/>
                </div>
            </div>
        </section>
        
        <section class="section_block">
            <div class="container section_wrapper">
                <header class="section_header">
                    <h1 class="section_title font_regular">Top vendors</h1>
                    <span class="deco_bar"></span>
                </header>
                <Topvendors/>
            </div>
        </section>
        
        <section class="section_block banner_bg ev_budget_banner">
            <div class="container narrow_container section_wrapper color-white">
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
import Topvendors from './top_vendors'
import Categorry from './category'
export default {
  name: 'Services',
  components:{
      Topvendors,
      Categorry
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
