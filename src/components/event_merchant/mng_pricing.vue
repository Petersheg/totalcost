<template>
  
     <div class="modal fade" id="mng_constraint">
        <div class="modal-dialog">
            <div class="modal-content">
                <header class="modal-header">
                    <h4 class="modal-title text-caps font-bold color-primary">Package Addon</h4>
                    <button class="close_dialog" data-dismiss="modal" aria-hidden="true"></button>
                </header>
                <div class="modal-body">
                    <form action="">
                       <p>Package Addons are optional micro-services that you can also offer along with a given service package for a stipulated price.</p>
                        <div class="form-group">
                            <label class="control-label">Addon Name</label>
                             <input type="text" class="form-control" placeholder="">
                        </div>
                        <div class="form-group">
                            <label class="control-label">Description</label>
                            <textarea rows="5" class="form-control" placeholder="Please tellus about the addon"></textarea>
                        </div>
                        <div class="form-group">
                            <label class="control-label">Price</label>
                             <input type="number" class="form-control" placeholder="#20,000">
                             <p class="help-block">How much are you willing to do this for the client?</p>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-inverse">
                        Save
                    </button>
                </div>
            </div>
        </div>
    </div>

    <main class="main_content_area bg-off-white">
        <section class="section_block">
            <div class="container ct_slim section_wrapper">
                <header class="widget_header">
                    <div class="vendor_info">
                        <h4 class="vendor_name font-bold color-primary">Sir Peculiar Photography</h4>
                   </div>
                    <p class="subtitle font-md">
                        Upload images or videos from your past events. Please make sure your images are of good quality, As they will be used to showcase you to potential customers
                    </p>
                </header>
                <form action="">
                    <fieldset>
                        <div class="form-group">
                            <h5 class="form_section_title">How do you currently price your service?</h5>
                            <div class="radio form-group">
                                <label for="price_flat" class="has_details">
                                    <input type="radio" id="price_flat" name="sv_pricing">
                                    <span>I charge a Flat Price</span>
                                    <a href="#" class="info_trigger">
                                        <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                                            <path d="M28.9,47.7h6.3V28.9h-6.3V47.7z M32,0.6C14.7,0.6,0.6,14.7,0.6,32S14.7,63.4,32,63.4S63.4,49.3,63.4,32S49.3,0.6,32,0.6zM32,57.1C18.1,57.1,6.9,45.9,6.9,32S18.1,6.9,32,6.9S57.1,18.1,57.1,32S45.9,57.1,32,57.1zM28.9,22.6h6.3v-6.3h-6.3V22.6z"/>
                                        </svg>
                                    </a>
                                    <div class="info_details">
                                        <p>Specify a fixed price for the service you will be rendering. </p>
                                    </div>
                                </label>
                            </div>
                            <div class="radio form-group">
                                <label for="price_package" class=" has_details">
                                    <input type="radio" checked id="price_package" name="sv_pricing">
                                    <span>I have different Price Packages</span>
                                    <a href="#" class="info_trigger">
                                        <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                                            <path d="M28.9,47.7h6.3V28.9h-6.3V47.7z M32,0.6C14.7,0.6,0.6,14.7,0.6,32S14.7,63.4,32,63.4S63.4,49.3,63.4,32S49.3,0.6,32,0.6zM32,57.1C18.1,57.1,6.9,45.9,6.9,32S18.1,6.9,32,6.9S57.1,18.1,57.1,32S45.9,57.1,32,57.1zM28.9,22.6h6.3v-6.3h-6.3V22.6z"/>
                                        </svg>
                                    </a>
                                    <div class="info_details">
                                        <p>Create different price plans for the customer to choose from.</p>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </fieldset>

                    <!--If pricing scheme is flat-->
                    <fieldset class="hidden">
                        <h5 class="form_section_title">How much do you charge for this service?</h5>
                        <div class="form-group slim_form">
                            <label class="control-label">Flat Price</label>
                            <input type="number" class="form-control" placeholder=" e.g 45000">
                        </div>
                        <div class="form-group">
                            <label class="control-label">Comments</label>
                            <textarea class="form-control" rows="10" placeholder="State what the user will get for this fee."></textarea>
                        </div>
                    </fieldset>

                    <!--If Pricing is Per package-->
                    <fieldset class="">
                        <div class="panel-group" id="package_panels">
                            <!--Preview page for an existing package.-->
                            <article class="panel settings_panel">
                                <header class="wd_wrapper">
                                   <a class="widget_info accordion-toggle collapsed" data-toggle="collapse" data-parent="#settings_accordions" href="#pkg_one">
                                        <h4 class="panel-title color-black">Wedding Coverage</h4>
                                        <div class="info_meta color-grey">
                                            <span class="meta_label">Base Price:</span>
                                            <span class="meta_value color-black">
                                                <span class="currency naira">20,000</span>
                                            </span>
                                        </div>
                                    </a>
                                    <div class="widget_controls">
                                        <div class="control_button_item">
                                            <button data-target="#mng_package" data-toggle="modal" type="button" class="btn btn-icon" title="Edit Package">
                                                <i class="cust_icon edit"></i>
                                            </button>
                                        </div>
                                        <div class="control_button_item">
                                            <button type="button" class="btn btn-icon" title="Delete">
                                                <i class="cust_icon delete"></i>
                                            </button>
                                        </div>
                                    </div>
                               </header>
                                <div class="panel-collapse collapse" id="pkg_one">
                                    <div class="panel_inner">
                                        <p>Package description as provided in the package information setup goes here. It is then followed by the package price, and a list of package constraints, also set by the vendor.</p>
                                        <div class="pricing_addon">
                                            <div class="insight_title text-caps font-bold">Available Addons</div>
                                            <p>Package Addons are optional micro-services that you can also offer along with this service. This provides an explicit breakdown of what the client can and should expect from you as a vendor. You can add as many as you want.</p>
                                            <div class="table infoTable">
                                                <table class="table table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th class="table_description">Package Addon</th>
                                                            <th class="text-right">Price</th>
                                                            <th class="text-right">Options</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td class="table_description">
                                                               <div class="has_details">
                                                                    <span class="font-bold">Base Package Price</span>
                                                                    <a href="#" class="info_trigger">
                                                                        <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                                                                            <path d="M28.9,47.7h6.3V28.9h-6.3V47.7z M32,0.6C14.7,0.6,0.6,14.7,0.6,32S14.7,63.4,32,63.4S63.4,49.3,63.4,32S49.3,0.6,32,0.6zM32,57.1C18.1,57.1,6.9,45.9,6.9,32S18.1,6.9,32,6.9S57.1,18.1,57.1,32S45.9,57.1,32,57.1zM28.9,22.6h6.3v-6.3h-6.3V22.6z"/>
                                                                        </svg>
                                                                    </a>
                                                                    <div class="info_details">
                                                                        <p>This is how much you will be required to pay for this package without any other addon service(s)</p>
                                                                    </div>
                                                               </div>
                                                            </td>
                                                            <td class="text-right">
                                                                <span class="currency naira">20,000</span>
                                                            </td>
                                                            <td class="text-right">
                                                               <div class="">
                                                                    <ul class="control_options">
                                                                        <li><a href="#mng_constraint" data-toggle="modal">Edit</a></li>
                                                                        <li><a href="#">Delete</a></li>
                                                                    </ul>
                                                               </div> 
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="table_description">
                                                               <div class="has_details">
                                                                    <span class="font-bold">Pre-wedding Photoshot </span>
                                                                    <a href="#" class="info_trigger">
                                                                        <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                                                                            <path d="M28.9,47.7h6.3V28.9h-6.3V47.7z M32,0.6C14.7,0.6,0.6,14.7,0.6,32S14.7,63.4,32,63.4S63.4,49.3,63.4,32S49.3,0.6,32,0.6zM32,57.1C18.1,57.1,6.9,45.9,6.9,32S18.1,6.9,32,6.9S57.1,18.1,57.1,32S45.9,57.1,32,57.1zM28.9,22.6h6.3v-6.3h-6.3V22.6z"/>
                                                                        </svg>
                                                                    </a>
                                                                    <div class="info_details">
                                                                        <p>Constaint description as entered by the vendor goes here</p>
                                                                    </div>
                                                               </div>
                                                            </td>
                                                            <td class="text-right">
                                                                <span class="currency naira">15,000</span>
                                                            </td>
                                                            <td class="text-right">
                                                               <div class="">
                                                                   <ul class="control_options">
                                                                        <li><a href="#mng_constraint" data-toggle="modal">Edit</a></li>
                                                                        <li><a href="#">Delete</a></li>
                                                                    </ul>
                                                               </div> 
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="table_description">
                                                               <div class="has_details">
                                                                    <span class="font-bold">Photo Book</span>
                                                                    <a href="#" class="info_trigger">
                                                                        <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                                                                            <path d="M28.9,47.7h6.3V28.9h-6.3V47.7z M32,0.6C14.7,0.6,0.6,14.7,0.6,32S14.7,63.4,32,63.4S63.4,49.3,63.4,32S49.3,0.6,32,0.6zM32,57.1C18.1,57.1,6.9,45.9,6.9,32S18.1,6.9,32,6.9S57.1,18.1,57.1,32S45.9,57.1,32,57.1zM28.9,22.6h6.3v-6.3h-6.3V22.6z"/>
                                                                        </svg>
                                                                    </a>
                                                                    <div class="info_details">
                                                                        <p>Constaint description as entered by the vendor goes here</p>
                                                                    </div>
                                                               </div>
                                                            </td>
                                                            <td class="text-right">
                                                                <span class="currency naira">25,000</span>
                                                            </td>
                                                            <td class="text-right">
                                                               <div class="">
                                                                   <ul class="control_options">
                                                                        <li><a href="#mng_constraint" data-toggle="modal">Edit</a></li>
                                                                        <li><a href="#">Delete</a></li>
                                                                    </ul>
                                                               </div> 
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="table_description">
                                                               <div class="has_details">
                                                                    <span class="font-bold">Framed Portriate</span>
                                                                    <a href="#" class="info_trigger">
                                                                        <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                                                                            <path d="M28.9,47.7h6.3V28.9h-6.3V47.7z M32,0.6C14.7,0.6,0.6,14.7,0.6,32S14.7,63.4,32,63.4S63.4,49.3,63.4,32S49.3,0.6,32,0.6zM32,57.1C18.1,57.1,6.9,45.9,6.9,32S18.1,6.9,32,6.9S57.1,18.1,57.1,32S45.9,57.1,32,57.1zM28.9,22.6h6.3v-6.3h-6.3V22.6z"/>
                                                                        </svg>
                                                                    </a>
                                                                    <div class="info_details">
                                                                        <p>Constaint description as entered by the vendor goes here</p>
                                                                    </div>
                                                               </div>
                                                            </td>
                                                            <td class="text-right">
                                                                <span class="currency naira">20,000</span>
                                                            </td>
                                                            <td class="text-right">
                                                               <div class="">
                                                                   <ul class="control_options">
                                                                        <li><a href="#mng_constraint" data-toggle="modal">Edit</a></li>
                                                                        <li><a href="#">Delete</a></li>
                                                                    </ul>
                                                               </div> 
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="pricing_footer font-bold">
                                                <div class="">
                                                    <span class="infoTitle">Price Total:</span>
                                                </div>
                                                <div class="value">
                                                    <span class="currency naira">75,000</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="section_cto text-right">
                                            <a href="#mng_constraint" data-toggle="modal" class="btn btn-inverse btn-sm" title="Edit Package">
                                                Add an Addon
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </article>

                            <!--package details form. Use this to create a new package, or edit an existing package. This should not be visible until the user clicks the new package button, or whenever there is no package.-->
                            <article class="panel package_preview_form">
                                <div class="wd_wrapper">
                                    <h4 class="widget_title color-primary">Package Details</h4>

                                    <div class="form_row">
                                         <div class="form_row_item label_half">
                                             <h4 class="form_section_title font-regular">Package Name</h4>
                                         </div>
                                         <div class="form_row_item input_half">
                                            <input type="text" class="form-control" placeholder="E.g Basic Package">
                                         </div>
                                    </div>

                                    <div class="form_row">
                                         <div class="form_row_item label_half">
                                             <h4 class="form_section_title font-regular">
                                                 Package Description 
                                             </h4>
                                         </div>
                                         <div class="form_row_item input_half">
                                            <textarea rows="5" class="form-control" placeholder="A little information about the Package"></textarea>
                                         </div>
                                     </div>
                                     
                                    <div class="form_row">
                                         <div class="form_row_item label_half">
                                             <h4 class="form_section_title font-regular">Package base price</h4>
                                             <p class="help-block">How much you'd charge for the package without any other addon</p>
                                         </div>
                                         <div class="form_row_item input_half">
                                            <input type="number" class="form-control" placeholder="#40,000">
                                         </div>
                                    </div>

                                    <div class="form_row">
                                         <div class="form_row_item label_half">
                                             <h4 class="form_section_title font-regular">
                                                 Addon Services
                                             </h4>
                                             <p class="help-block">Constraints are the criteria you are using to determine your cost. E.g Population, Location, Duration, e.t.c </p>
                                         </div>
                                         <div class="form_row_item input_half">
                                            <div class="preview_widget">
                                                <div class="wd_wrapper">
                                                   <div class="widget_info" >
                                                        <h4 class="panel-title color-black">Crowd Size</h4>
                                                        <div class="info_meta">
                                                            <span class="meta_value color-primary">
                                                                <span class="currency naira">45,000</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div class="widget_controls">
                                                        <div class="control_button_item">
                                                            <button data-target="#mng_constraint" data-toggle="modal" type="button" class="btn btn-icon" title="Edit">
                                                                <i class="cust_icon edit"></i>
                                                            </button>
                                                        </div>
                                                        <div class="control_button_item">
                                                            <button type="button" class="btn btn-icon" title="Delete">
                                                                <i class="cust_icon delete"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                               </div>
                                             </div>
                                            <a href="#mng_constraint" data-toggle="modal" class="new_item_btn">
                                                <span class="wd_icon">
                                                    <svg class="cust_icon icon_xs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.52 16">
                                                        <polygon points="9.23 0 9.23 6.56 15.52 6.56 15.52 9.38 9.23 9.38 9.23 16 6.29 16 6.29 9.38 0 9.38 0 6.56 6.29 6.56 6.29 0 9.23 0"/>
                                                    </svg>
                                                </span>
                                                <span class="wd_control_label">New Addon</span>
                                            </a>
                                         </div>
                                     </div>

                                    <div class="section_cto text-right">
                                         <button type="button" class="btn btn-default btn-sm">
                                             Cancel
                                         </button>
                                         <button type="submit" class="btn btn-secondary btn-sm">
                                             Save
                                         </button>
                                     </div>
                                 </div>
                            </article>

                            <div class="panel new_pkg">
                                <a href="#" class="new_item_btn">
                                    <span class="wd_icon">
                                        <svg class="cust_icon icon_xs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.52 16">
                                            <polygon points="9.23 0 9.23 6.56 15.52 6.56 15.52 9.38 9.23 9.38 9.23 16 6.29 16 6.29 9.38 0 9.38 0 6.56 6.29 6.56 6.29 0 9.23 0"/>
                                        </svg>
                                    </span>
                                    <span class="wd_control_label font-bold">Add a Package</span>
                                </a>
                            </div>
                        </div>
                    </fieldset>

                    <div class="section_cto text-center">
                       <a href="mng_service.html" class="btn btn-default">
                            Cancel
                        </a>
                        <button type="submit" class="btn btn-inverse">
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </section>
    </main>

</template>

<script>
export default {
  name: 'MngPricing',
  methods:{
  },
  mounted(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
