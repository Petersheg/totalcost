<template>
  
   <main class="main_content_area bg-off-white">
        <section class="section_block">
            <div class="container ct_slim section_wrapper">
                <header class="widget_header">
                    <div class="vendor_info">
                        <h4 class="vendor_name font-bold color-primary">Sir Peculiar Photography</h4>
                   </div>
                    <p class="subtitle font-md">
                        Modify specific information about your service. Try and be as explicit as possible as this is how you pitch yourself to prospective customers.
                    </p>
                </header>
                <form action="">
                                    
                    <fieldset>
                        <div class="mediaUploadControl">
                            <figure class="mediaUploadPreview">
                                <div class="avatar bg-white">
                                    <img src="@/assets/img/dummy_logo.png" alt="">
                                </div>
                                <div class="file_upload">
                                    <label for="banner_image" class="btn btn-sm btn-primary">
                                    <input type="file" name="file" id="banner_image" class="inputfile" />
                                        <span>Change Image</span>
                                    </label>
                                </div>
                            </figure>
                            <div class="mediaUploadInfo">
                                <p class="help_list">We recommend a dark colored image on a transparent background or an image with a white background..</p> 
                            </div>
                        </div>
                    </fieldset>

                    <fieldset>
                        <div class="form-group">
                            <label class="control-label">Service / Business Name</label>
                            <input type="text" class="form-control" placeholder="The name of your service / business">
                        </div>
                        <div class="form-group">
                            <label class="control-label">Service Type / Category</label>
                            <select class="form-control">
                                <option>Select the category that best fits your service</option>  
                                <option>Disk Jockey</option>  
                                <option>Logistics</option>  
                                <option selected>Photography / Videography</option>
                                <option>Rentals</option>  
                                <option>Musical Band</option>  
                                <option>Makeup / Makeover</option>  
                                <option>Security</option>  
                                <option>Catering</option>  
                                <option>Ushering &amp; Hospitality</option>  
                                <option>Cakes &amp; Confectionaries</option>  
                                <option>Drinks &amp; Cocktails</option>  
                                <option>Fashion Designer</option>  
                                <option>Event Compare</option>  
                                <option>Venue Management</option>  
                                <option>Decoration</option>  
                                <option>Multimedia</option>  
                            </select>
                        </div>
                        <div class="form-group has_details">
                            <label class="control-label">Business Tags</label>
                            <a href="#" class="info_trigger">
                                <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                                    <path d="M28.9,47.7h6.3V28.9h-6.3V47.7z M32,0.6C14.7,0.6,0.6,14.7,0.6,32S14.7,63.4,32,63.4S63.4,49.3,63.4,32S49.3,0.6,32,0.6zM32,57.1C18.1,57.1,6.9,45.9,6.9,32S18.1,6.9,32,6.9S57.1,18.1,57.1,32S45.9,57.1,32,57.1zM28.9,22.6h6.3v-6.3h-6.3V22.6z"/>
                                </svg>
                            </a>
                            <div class="info_details">
                                <p>Sepearte Tags with commas or spaces. Use double quote for multi-word tags (e.g. "Mass Cooking") </p>
                            </div>
                            <textarea rows="2" class="form-control" placeholder="Short keywords that describes your service"></textarea>
                        </div>
                        <div class="form-group">
                            <label class="control-label">About the Service</label>
                            <textarea rows="10" class="form-control" placeholder="Tell us about your service, and why the customer should choose you."></textarea>
                        </div>
                        <div class="form-horizontal">
                            <div class="form-group col-sm-6">
                                <label class="control-label">Email Address</label>
                                <input type="email" class="form-control" placeholder="david@gmail.com">
                            </div>
                            <div class="form-group col-sm-6">
                                <label class="control-label">How long have you offered this service</label>
                                <input type="text" class="form-control" placeholder="E.g. 5 years">
                            </div>
                        </div>
                        <div class="list_selector">
                            <label class="control-label">In what part(s) of the country do you provide this service</label>
                            <div class="list_preview_pane">
                                <div class="user_selection">
                                    <span>Lagos, Ogun, Ibadan, Osun, Ondo</span>
                                    <span><a href="#service_loc" data-toggle="modal" class="btn-link font-bold">Change</a></span>
                                </div>
                                <a href="#service_loc" data-toggle="modal" class="selector_trigger hidden"><span>Select location(s)</span></a>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset>
                        <header class="form_section_header">
                            <h4 class="form_section_title text-caps">Contact Information</h4>
                        </header>

                        <!--List the Merchant's default address, and any other addresses he has used for a prior business.-->
                        <div class="addr_cards cst_select_list select_radio">
                            <article class="address_box selected select_item">
                                <label for="add_1" class="feature_wrapper">
                                   <input type="radio" checked id="add_1" class="cst_selector" name="service_cat">
                                    <div class="info_list">
                                        <div class="info_list_item">
                                            <div class="info_image">
                                                <i class="cust_icon map_pin"></i>
                                            </div>
                                            <div class="info_container">
                                                <address>
                                                    <span>4, Olayiwola Street, Off kudirat Abiola Road,</span> 
                                                    <span>10213, Oregun,</span>
                                                    <span>Lagos State</span>
                                                </address>
                                            </div>
                                        </div>

                                        <div class="info_list_item">
                                            <div class="info_image">
                                                <i class="cust_icon phone"></i>
                                            </div>
                                            <div class="info_container">
                                                <p>08033752311</p>
                                            </div>
                                        </div>

                                        <div class="info_list_item">
                                            <div class="info_image">
                                                <i class="cust_icon link"></i>
                                            </div>
                                            <div class="info_container">
                                                <p>www.davidcooks.com</p>
                                            </div>
                                        </div>
                                    </div>
                                    <span class="ind_icon">
                                        <svg class="cust_icon icon_xs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 62 51.8">
                                            <polygon points="62 9.87 22.68 51.8 0 30.12 10.38 28.68 22.34 40.04 60.01 0 62 9.87"/>
                                        </svg>

                                    </span>
                                </label>
                            </article>
                            <article class="address_box">
                                <a href="#biz_addr" data-toggle="modal" class="feature_wrapper">
                                   <div class="media_img_shadow text-center">
                                    <span class="icon_holder">
                                        <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.52 16">
                                            <polygon points="9.23 0 9.23 6.56 15.52 6.56 15.52 9.38 9.23 9.38 9.23 16 6.29 16 6.29 9.38 0 9.38 0 6.56 6.29 6.56 6.29 0 9.23 0"/>
                                        </svg>
                                    </span>
                                    <span class="">New Business Address</span>
                                </div>
                                </a>
                            </article>
                        </div>

                    </fieldset>

                    <fieldset>
                        <header class="form_section_header">
                            <h4 class="form_section_title text-caps">Social Contact</h4>
                        </header>
                        <p>Paste your social profile links for any of the listed social platforms. </p>

                        <div class="form-group">
                            <div class="input-group">
                                <span class="input-group-addon">
                                    Facebook Account
                                </span>
                                <input type="url" class="form-control" placeholder="https://facebook.com/david_01">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <span class="input-group-addon">
                                    Twitter Account
                                </span>
                                <input type="url" class="form-control" placeholder="https://twitter.com/david_01">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <span class="input-group-addon">
                                    Pinterest Account
                                </span>
                                <input type="url" class="form-control" placeholder="https://pinterest.com/david_01">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <span class="input-group-addon">
                                    Instagram Account
                                </span>
                                <input type="url" class="form-control" placeholder="https://instagram.com/david_01">
                            </div>
                        </div>
                    </fieldset>

                    <div class="section_cto text-center">
                        <router-link to="/mng_service" class="btn btn-default">
                            Cancel
                        </router-link>
                        <button type="submit" class="btn btn-inverse">
                            Save & Continue
                        </button>
                    </div>

                </form>
            </div>
        </section>
    </main>

</template>

<script>
export default {
  name: 'ServiceDetails'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
