<template>
    <div class="modal fade" id="nw_constraint">
        <div class="modal-dialog">
            <div class="modal-content">
                <header class="modal-header">
                    <h4 class="modal-title color-primary">Service Constraint</h4>
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
        <section class="section_block ">
            <div class="container ct_slim">
                <div class="content_wrapper">
                    <div class="content_inner">
                        <section class="wizard">
                            <div class="wizard_step">
                                <header class="widget_header">
                                    <div class="widget_progress_marker">
                                        <div class="progress_step done" title="Service Category">
                                            <router-link to="/new_service_1" class="step_wrapper">
                                                <span class="step_label sr-only">Select Service Category</span>
                                                <span class="step_count"></span>
                                            </router-link>
                                        </div>
                                        <div class="progress_step done" title="Describe your service">
                                            <router-link to="/new_service_2" class="step_wrapper">
                                                <span class="step_label sr-only">Describe your service</span>
                                                <span class="step_count"></span>
                                            </router-link>
                                        </div>
                                        <div class="progress_step done" title="Media Gallery">
                                            <router-link to="/new_service_3" class="step_wrapper">
                                                <span class="step_label sr-only">Media Gallery</span>
                                                <span class="step_count"></span>
                                            </router-link>
                                        </div>
                                        <div class="progress_step active" title="Attach Packages">
                                            <router-link to="/new_service_4" class="step_wrapper">
                                                <span class="step_label sr-only">Attach Packages</span>
                                                <span class="step_count"></span>
                                            </router-link>
                                        </div>
                                    </div>
                                    <h4 class="widget_title color-primary">
                                        Service Pricing
                                    </h4>
                                    <p class="subtitle font-md">
                                       Create different price groups to cover all the value added services you will be providing along with this service.
                                    </p>
                                </header>
                                
                                <div class="widget_body">
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
                                                            <h4 class="panel-title color-black">Basic Cooking</h4>
                                                            <span>Show Details</span>
                                                        </a>
                                                        <div class="widget_controls">
                                                            <div class="control_button_item">
                                                                <button type="button" class="btn btn-icon" title="Edit Package">
                                                                    <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.67 10.67">
                                                                        <path class="cls-1" d="M10,.69a2.35,2.35,0,0,0-3.33,0L.54,6.79A.31.31,0,0,0,.46,7L0,10.32a.3.3,0,0,0,.09.26.31.31,0,0,0,.22.09h0l2-.27a.31.31,0,0,0-.08-.61L.66,10,1,7.66l2.46,2.46a.31.31,0,0,0,.22.09.3.3,0,0,0,.22-.09L10,4A2.35,2.35,0,0,0,10,.69Zm-3.21.75,1,1L2.22,8l-1-1Zm-3.11,8-1-1L8.23,2.9l1,1Zm6-6L7.2,1A1.74,1.74,0,0,1,9.66,3.46Z"/>
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                            <div class="control_button_item">
                                                                <button type="button" class="btn btn-icon" title="Delete">
                                                                    <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50.34 62.25">
                                                                        <path d="M43.23,7.46H33.54a8.42,8.42,0,0,0-16.74,0H7.11A7.12,7.12,0,0,0,0,14.57v.36a7.12,7.12,0,0,0,4.49,6.61v33.6a7.12,7.12,0,0,0,7.11,7.11H38.73a7.12,7.12,0,0,0,7.11-7.11V21.54a7.12,7.12,0,0,0,4.49-6.61v-.36A7.12,7.12,0,0,0,43.23,7.46ZM25.17,3.37a5.06,5.06,0,0,1,5,4.09H20.21A5.06,5.06,0,0,1,25.17,3.37Zm17.3,51.77a3.74,3.74,0,0,1-3.74,3.74H11.61a3.74,3.74,0,0,1-3.74-3.74V22H42.47ZM47,14.94h0a3.74,3.74,0,0,1-3.74,3.74H7.11a3.74,3.74,0,0,1-3.74-3.74v-.36a3.74,3.74,0,0,1,3.74-3.74H43.23A3.74,3.74,0,0,1,47,14.57Z"/>
                                                                        <path d="M16.13,54.56a1.69,1.69,0,0,0,1.69-1.69v-19a1.69,1.69,0,1,0-3.37,0v19A1.69,1.69,0,0,0,16.13,54.56Z"/>
                                                                        <path d="M25.17,54.56a1.69,1.69,0,0,0,1.69-1.69v-19a1.69,1.69,0,1,0-3.37,0v19A1.69,1.69,0,0,0,25.17,54.56Z"/>
                                                                        <path d="M34.21,54.56a1.69,1.69,0,0,0,1.69-1.69v-19a1.69,1.69,0,1,0-3.37,0v19A1.69,1.69,0,0,0,34.21,54.56Z"/>
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                   </header>
                                                    <div class="panel-collapse collapse" id="pkg_one">
                                                        <div class="panel_inner">
                                                            <div class="optionsGrid">
                                                                <article class="optionGroup">
                                                                    <div class="optionLabel">
                                                                        <span>Name</span>
                                                                    </div>
                                                                    <div class="optionContent">
                                                                        <p>Basic Cooking</p>
                                                                    </div>
                                                               </article>    
                                                               <article class="optionGroup">
                                                                    <div class="optionLabel">
                                                                        <span>Description</span>
                                                                    </div>
                                                                    <div class="optionContent">
                                                                        <p>Package description goes here. It can be as long as 300 characters, but not longer.</p>
                                                                    </div>
                                                               </article>
                                                               <article class="optionGroup">
                                                                    <div class="optionLabel">
                                                                        <span>Constraints</span>
                                                                    </div>
                                                                    <div class="optionContent">
                                                                        <div class="table infoTable">
                                                                            <table class="table table-hover">
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>Name</th>
                                                                                        <th>Price</th>
                                                                                        <th>Options</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <span>Crowd Size</span>
                                                                                        </td>
                                                                                        <td>     <span>#45,000</span>
                                                                                        </td>
                                                                                        <td>
                                                                                           <div class="dropdown">
                                                                                               <a href="#" class="dropdown-toggle btn btn-icon" data-toggle="dropdown">
                                                                                                   <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 13.8">
                                                                                                        <circle cx="1.5" cy="12.3" r="1.5"/>
                                                                                                        <circle cx="1.5" cy="6.9" r="1.5"/>
                                                                                                        <circle cx="1.5" cy="1.5" r="1.5"/>
                                                                                                    </svg>
                                                                                               </a>
                                                                                               <ul class="dropdown-menu dropdown-right">
                                                                                                   <li><a href="#nw_constraint" data-toggle="modal">Edit</a></li>
                                                                                                   <li><a href="#">Delete</a></li>
                                                                                               </ul>
                                                                                           </div> 
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <span>Constraint Name</span>
                                                                                        </td>
                                                                                        <td>     <span>#65,000</span>
                                                                                        </td>
                                                                                        <td>
                                                                                           <div class="dropdown">
                                                                                               <a href="#" class="dropdown-toggle btn btn-icon" data-toggle="dropdown">
                                                                                                   <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 13.8">
                                                                                                        <circle cx="1.5" cy="12.3" r="1.5"/>
                                                                                                        <circle cx="1.5" cy="6.9" r="1.5"/>
                                                                                                        <circle cx="1.5" cy="1.5" r="1.5"/>
                                                                                                    </svg>
                                                                                               </a>
                                                                                               <ul class="dropdown-menu dropdown-right">
                                                                                                   <li><a href="#nw_constraint" data-toggle="modal">Edit</a></li>
                                                                                                   <li><a href="#">Delete</a></li>
                                                                                               </ul>
                                                                                           </div> 
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                        <div class="section_cto">
                                                                            <a href="#nw_constraint" data-toggle="modal" class="new_item_btn">
                                                                                <span class="wd_icon">
                                                                                    <svg class="cust_icon icon_xs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.52 16">
                                                                                        <polygon points="9.23 0 9.23 6.56 15.52 6.56 15.52 9.38 9.23 9.38 9.23 16 6.29 16 6.29 9.38 0 9.38 0 6.56 6.29 6.56 6.29 0 9.23 0"/>
                                                                                    </svg>
                                                                                </span>
                                                                                <span class="wd_control_label">Add a Constraint</span>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                               </article>
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
                                                                 <h4 class="form_section_title font-regular">Name</h4>
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
                                                                     Constraints
                                                                 </h4>
                                                                 <p class="help-block">Constraints are the criteria you are using to determine your cost. E.g Population, Location, Duration, e.t.c </p>
                                                             </div>
                                                             <div class="form_row_item input_half">
                                                                
                                                                <div class="preview_widget">
                                                                    <div class="wd_wrapper">
                                                                       <div class="widget_info" >
                                                                            <h4 class="panel-title color-black">Crowd Size</h4>
                                                                            <span>#45,000</span>
                                                                        </div>
                                                                        <div class="widget_controls">
                                                                            <div class="control_button_item">
                                                                                <button data-target="#nw_constraint" data-toggle="modal" type="button" class="btn btn-icon" title="Edit">
                                                                                    <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.67 10.67">
                                                                                        <path class="cls-1" d="M10,.69a2.35,2.35,0,0,0-3.33,0L.54,6.79A.31.31,0,0,0,.46,7L0,10.32a.3.3,0,0,0,.09.26.31.31,0,0,0,.22.09h0l2-.27a.31.31,0,0,0-.08-.61L.66,10,1,7.66l2.46,2.46a.31.31,0,0,0,.22.09.3.3,0,0,0,.22-.09L10,4A2.35,2.35,0,0,0,10,.69Zm-3.21.75,1,1L2.22,8l-1-1Zm-3.11,8-1-1L8.23,2.9l1,1Zm6-6L7.2,1A1.74,1.74,0,0,1,9.66,3.46Z"/>
                                                                                    </svg>
                                                                                </button>
                                                                            </div>
                                                                            <div class="control_button_item">
                                                                                <button type="button" class="btn btn-icon" title="Delete">
                                                                                    <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50.34 62.25">
                                                                                        <path d="M43.23,7.46H33.54a8.42,8.42,0,0,0-16.74,0H7.11A7.12,7.12,0,0,0,0,14.57v.36a7.12,7.12,0,0,0,4.49,6.61v33.6a7.12,7.12,0,0,0,7.11,7.11H38.73a7.12,7.12,0,0,0,7.11-7.11V21.54a7.12,7.12,0,0,0,4.49-6.61v-.36A7.12,7.12,0,0,0,43.23,7.46ZM25.17,3.37a5.06,5.06,0,0,1,5,4.09H20.21A5.06,5.06,0,0,1,25.17,3.37Zm17.3,51.77a3.74,3.74,0,0,1-3.74,3.74H11.61a3.74,3.74,0,0,1-3.74-3.74V22H42.47ZM47,14.94h0a3.74,3.74,0,0,1-3.74,3.74H7.11a3.74,3.74,0,0,1-3.74-3.74v-.36a3.74,3.74,0,0,1,3.74-3.74H43.23A3.74,3.74,0,0,1,47,14.57Z"/>
                                                                                        <path d="M16.13,54.56a1.69,1.69,0,0,0,1.69-1.69v-19a1.69,1.69,0,1,0-3.37,0v19A1.69,1.69,0,0,0,16.13,54.56Z"/>
                                                                                        <path d="M25.17,54.56a1.69,1.69,0,0,0,1.69-1.69v-19a1.69,1.69,0,1,0-3.37,0v19A1.69,1.69,0,0,0,25.17,54.56Z"/>
                                                                                        <path d="M34.21,54.56a1.69,1.69,0,0,0,1.69-1.69v-19a1.69,1.69,0,1,0-3.37,0v19A1.69,1.69,0,0,0,34.21,54.56Z"/>
                                                                                    </svg>
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                   </div>
                                                                 </div>
                                                                <a href="#nw_constraint" data-toggle="modal" class="new_item_btn">
                                                                    <span class="wd_icon">
                                                                        <svg class="cust_icon icon_xs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.52 16">
                                                                            <polygon points="9.23 0 9.23 6.56 15.52 6.56 15.52 9.38 9.23 9.38 9.23 16 6.29 16 6.29 9.38 0 9.38 0 6.56 6.29 6.56 6.29 0 9.23 0"/>
                                                                        </svg>
                                                                    </span>
                                                                    <span class="wd_control_label">Add a Constraint</span>
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
                                            <router-link to="/new_service_3" class="btn btn-default">
                                                Back
                                            </router-link>
                                            <router-link to="/new_service_4" class="btn btn-inverse">
                                                Continue
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
  name: 'NewService4'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
