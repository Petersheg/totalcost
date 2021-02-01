<template>
    <div class="modal fade" id="new_attachment">
        <div class="modal-dialog">
            <div class="modal-content">
                <header class="modal-header">
                    <h4 class="modal-title color-primary">Attach Media</h4>
                    <button class="close_dialog" data-dismiss="modal" aria-hidden="true"></button>
                </header>
                <div class="modal-body">
                    <nav>
                        <ul class="nav nav-tabs">
                            <li class="active"><a href="#up_img" data-toggle="tab">Images</a></li>
                            <li><a href="#up_video" data-toggle="tab">Video</a></li>
                        </ul>
                    </nav>
                    <div class="tab-content">
                        <article class="tab-pane active fade show" id="up_img">
                            <div class="content_panel">
                                <h4 class="widget_title color-primary">
                                    Upload Images
                                </h4>
                                <div class="empty_state d-none">
                                   <div class="def_wrapper text-center">
                                    <label for="upload_imgs" class="upload_widget ">
                                        <input type="file" multiple accept=".png, .jpg, .jpeg" name="file" id="upload_imgs" class="inputfile"/>
                                        <span class="icon_holder">
                                            <svg class="cust_icon icon_md" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.06 40">
                                                <path d="M45.48,0H7.85A1.57,1.57,0,0,0,6.28,1.57V3.14H4.71A1.57,1.57,0,0,0,3.14,4.71V6.28H1.57A1.57,1.57,0,0,0,0,7.85V38.43A1.57,1.57,0,0,0,1.57,40H39.2a1.57,1.57,0,0,0,1.57-1.57V36.86h1.57a1.57,1.57,0,0,0,1.57-1.57V33.72h1.57a1.57,1.57,0,0,0,1.57-1.57V1.57A1.56,1.56,0,0,0,45.48,0ZM39.21,25.36l-4.11-4.7a.79.79,0,0,0-1.19,0l-5,5.68-13.52-12a.77.77,0,0,0-1,0L1.59,25.7V8.63a.78.78,0,0,1,.78-.78H38.43a.78.78,0,0,1,.78.78Zm2.36,9.92h-.78V7.84a1.57,1.57,0,0,0-1.57-1.57H4.72V5.48A.78.78,0,0,1,5.5,4.7H41.56a.78.78,0,0,1,.78.78v29A.78.78,0,0,1,41.57,35.28Zm3.13-3.14h-.78V4.7a1.57,1.57,0,0,0-1.57-1.57H7.85V2.35a.78.78,0,0,1,.78-.78H44.69a.78.78,0,0,1,.78.78v29h0A.78.78,0,0,1,44.7,32.14Z"/>
                                                <path d="M28.24,12.54a3.13,3.13,0,1,0,3.13,3.13A3.14,3.14,0,0,0,28.24,12.54Z"/>
                                            </svg>
                                        </span>
                                        <p class="font-regular">Upload images.</p>
                                    </label>
                                    </div>
                                </div>
                                <div class="media_library">
                                    <figure class="media_item_thumb small_half medium_1_3 item_new">
                                        <label for="add_more" class="md_wrapper">
                                           <input type="file" multiple accept=".png, .jpg, .jpeg" name="file" id="add_more" class="inputfile"/>
                                            <div class="media_img_shadow text-center">
                                                <span class="icon_holder">
                                                    <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.06 40">
                                                        <path d="M45.48,0H7.85A1.57,1.57,0,0,0,6.28,1.57V3.14H4.71A1.57,1.57,0,0,0,3.14,4.71V6.28H1.57A1.57,1.57,0,0,0,0,7.85V38.43A1.57,1.57,0,0,0,1.57,40H39.2a1.57,1.57,0,0,0,1.57-1.57V36.86h1.57a1.57,1.57,0,0,0,1.57-1.57V33.72h1.57a1.57,1.57,0,0,0,1.57-1.57V1.57A1.56,1.56,0,0,0,45.48,0ZM39.21,25.36l-4.11-4.7a.79.79,0,0,0-1.19,0l-5,5.68-13.52-12a.77.77,0,0,0-1,0L1.59,25.7V8.63a.78.78,0,0,1,.78-.78H38.43a.78.78,0,0,1,.78.78Zm2.36,9.92h-.78V7.84a1.57,1.57,0,0,0-1.57-1.57H4.72V5.48A.78.78,0,0,1,5.5,4.7H41.56a.78.78,0,0,1,.78.78v29A.78.78,0,0,1,41.57,35.28Zm3.13-3.14h-.78V4.7a1.57,1.57,0,0,0-1.57-1.57H7.85V2.35a.78.78,0,0,1,.78-.78H44.69a.78.78,0,0,1,.78.78v29h0A.78.78,0,0,1,44.7,32.14Z"/>
                                                        <path d="M28.24,12.54a3.13,3.13,0,1,0,3.13,3.13A3.14,3.14,0,0,0,28.24,12.54Z"/>
                                                    </svg>
                                                </span>
                                                <span class="">Select Images</span>
                                            </div>
                                        </label>
                                    </figure>
                                    <figure class="media_item_thumb small_half medium_1_3">
                                        <div class="md_wrapper">
                                            <a href="#" target="_blank" class="media_thumbnail">
                                                <div class="media_img_shadow">
                                                    <img src="../../assets/img/banners/bridal_gown.jpg" alt="">
                                                </div>
                                            </a>
                                            <div class="thumb_overlay">
                                                <div class="overlay_control_button">
                                                    <div class="control_button_item">
                                                        <a href="#" class="control_button" title="Remove item">
                                                            <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.39 53.39">
                                                                <path d="M30,26.69,52.71,4A2.32,2.32,0,0,0,49.42.68L26.69,23.41,4,.68A2.32,2.32,0,0,0,.68,4L23.41,26.69.68,49.42A2.32,2.32,0,1,0,4,52.71L26.69,30,49.42,52.71a2.32,2.32,0,0,0,3.28-3.28Z"/>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </figure>
                                    <figure class="media_item_thumb small_half medium_1_3">
                                        <div class="md_wrapper">
                                            <a href="#" target="_blank" class="media_thumbnail">
                                                <div class="media_img_shadow">
                                                    <img src="../../assets/img/banners/photograph.jpg" alt="">
                                                </div>
                                            </a>
                                            <div class="thumb_overlay">
                                                <div class="overlay_control_button">
                                                    <div class="control_button_item">
                                                        <a href="#" class="control_button" title="Remove item">
                                                            <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.39 53.39">
                                                                <path d="M30,26.69,52.71,4A2.32,2.32,0,0,0,49.42.68L26.69,23.41,4,.68A2.32,2.32,0,0,0,.68,4L23.41,26.69.68,49.42A2.32,2.32,0,1,0,4,52.71L26.69,30,49.42,52.71a2.32,2.32,0,0,0,3.28-3.28Z"/>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </figure>
                                </div>
                            </div>
                        </article>
                        <article class="tab-pane fade show" id="up_video">
                            <div class="content_panel">
                                <h4 class="widget_title color-primary">
                                    Attach a Video
                                </h4>
                                <p class="">To attach a video to your service Gallery, Upload the video to a public video hosting platform like youTube or Vimeo, then copy and paste the embed link into the input field below. </p>
                                <form action="">
                                    <div class="form-group">
                                        <label class="control-label">Embed URL</label>
                                        <input type="url" class="form-control" placeholder="Embed URL/Link">
                                    </div>
                                </form>
                            </div>
                        </article>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-card" data-dismiss="modal" aria-hidden="true">
                        Cancel
                    </button>
                    <button class="btn btn-inverse">
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    </div>
    
    <div class="modal fade" id="service_loc">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <header class="modal-header">
                    <h4 class="modal-title color-primary">Coverage</h4>
                    <button class="close_dialog" data-dismiss="modal" aria-hidden="true"></button>
                </header>
                <div class="modal-body">
                    <div class="flex_list cst_select_list">
                        <article class="select_item select_multiple">
                            <label for="loc_all" class="feature_wrapper">
                               <input type="checkbox" id="loc_all" class="cst_selector" name="service_loc">
                                <span class="sl_label font-regular">
                                    Nationwide
                                </span>
                            </label>
                        </article>
                        <article class="select_item select_multiple">
                            <label for="loc_fct" class="feature_wrapper">
                               <input type="checkbox" id="loc_fct" class="cst_selector" name="service_loc">
                                <span class="sl_label font-regular">
                                    Federal Capital Teritory
                                </span>
                            </label>
                        </article>
                        <article class="select_item select_multiple">
                            <label for="loc_lag" class="feature_wrapper">
                               <input type="checkbox" id="loc_lag" class="cst_selector" name="service_loc">
                                <span class="sl_label font-regular">
                                    Lagos State
                                </span>
                            </label>
                        </article>
                        <article class="select_item select_multiple">
                            <label for="loc_riv" class="feature_wrapper">
                               <input type="checkbox" id="loc_riv" class="cst_selector" name="service_loc">
                                <span class="sl_label font-regular">
                                    Rivers State
                                </span>
                            </label>
                        </article>
                        <article class="select_item select_multiple">
                            <label for="loc_ana" class="feature_wrapper">
                               <input type="checkbox" id="loc_ana" class="cst_selector" name="service_loc">
                                <span class="sl_label font-regular">
                                    Anambra State
                                </span>
                            </label>
                        </article>
                        <article class="select_item select_multiple">
                            <label for="loc_akw" class="feature_wrapper">
                               <input type="checkbox" id="loc_akw" class="cst_selector" name="service_loc">
                                <span class="sl_label font-regular">
                                    Akwa Ibom State
                                </span>
                            </label>
                        </article>
                        <article class="select_item select_multiple">
                            <label for="loc_ada" class="feature_wrapper">
                               <input type="checkbox" id="loc_ada" class="cst_selector" name="service_loc">
                                <span class="sl_label font-regular">
                                    Adamawa State
                                </span>
                            </label>
                        </article>
                        <article class="select_item select_multiple">
                            <label for="loc_abia" class="feature_wrapper">
                               <input type="checkbox" id="loc_abia" class="cst_selector" name="service_loc">
                                <span class="sl_label font-regular">
                                    Abia State
                                </span>
                            </label>
                        </article>
                        <article class="select_item select_multiple">
                            <label for="loc_bau" class="feature_wrapper">
                               <input type="checkbox" id="loc_bau" class="cst_selector" name="service_loc">
                                <span class="sl_label font-regular">
                                    Bauchi State
                                </span>
                            </label>
                        </article>
                        <article class="select_item select_multiple">
                            <label for="loc_bau" class="feature_wrapper">
                               <input type="checkbox" id="loc_bau" class="cst_selector" name="service_loc">
                                <span class="sl_label font-regular">
                                    Benue State
                                </span>
                            </label>
                        </article>
                        <article class="select_item select_multiple">
                            <label for="loc_all" class="feature_wrapper">
                               <input type="checkbox" id="loc_all" class="cst_selector" name="service_loc">
                                <span class="sl_label font-regular">
                                    Nationwide
                                </span>
                            </label>
                        </article>
                        <article class="select_item select_multiple">
                            <label for="loc_fct" class="feature_wrapper">
                               <input type="checkbox" id="loc_fct" class="cst_selector" name="service_loc">
                                <span class="sl_label font-regular">
                                    Federal Capital Teritory
                                </span>
                            </label>
                        </article>
                        <article class="select_item select_multiple">
                            <label for="loc_lag" class="feature_wrapper">
                               <input type="checkbox" id="loc_lag" class="cst_selector" name="service_loc">
                                <span class="sl_label font-regular">
                                    Lagos State
                                </span>
                            </label>
                        </article>
                        <article class="select_item select_multiple">
                            <label for="loc_riv" class="feature_wrapper">
                               <input type="checkbox" id="loc_riv" class="cst_selector" name="service_loc">
                                <span class="sl_label font-regular">
                                    Rivers State
                                </span>
                            </label>
                        </article>
                        <article class="select_item select_multiple">
                            <label for="loc_ana" class="feature_wrapper">
                               <input type="checkbox" id="loc_ana" class="cst_selector" name="service_loc">
                                <span class="sl_label font-regular">
                                    Anambra State
                                </span>
                            </label>
                        </article>
                        <article class="select_item select_multiple">
                            <label for="loc_akw" class="feature_wrapper">
                               <input type="checkbox" id="loc_akw" class="cst_selector" name="service_loc">
                                <span class="sl_label font-regular">
                                    Akwa Ibom State
                                </span>
                            </label>
                        </article>
                        <article class="select_item select_multiple">
                            <label for="loc_ada" class="feature_wrapper">
                               <input type="checkbox" id="loc_ada" class="cst_selector" name="service_loc">
                                <span class="sl_label font-regular">
                                    Adamawa State
                                </span>
                            </label>
                        </article>
                        <article class="select_item select_multiple">
                            <label for="loc_abia" class="feature_wrapper">
                               <input type="checkbox" id="loc_abia" class="cst_selector" name="service_loc">
                                <span class="sl_label font-regular">
                                    Abia State
                                </span>
                            </label>
                        </article>
                        <article class="select_item select_multiple">
                            <label for="loc_bau" class="feature_wrapper">
                               <input type="checkbox" id="loc_bau" class="cst_selector" name="service_loc">
                                <span class="sl_label font-regular">
                                    Bauchi State
                                </span>
                            </label>
                        </article>
                        <article class="select_item select_multiple">
                            <label for="loc_bau" class="feature_wrapper">
                               <input type="checkbox" id="loc_bau" class="cst_selector" name="service_loc">
                                <span class="sl_label font-regular">
                                    Benue State
                                </span>
                            </label>
                        </article>
                        <article class="select_item select_multiple">
                            <label for="loc_all" class="feature_wrapper">
                               <input type="checkbox" id="loc_all" class="cst_selector" name="service_loc">
                                <span class="sl_label font-regular">
                                    Nationwide
                                </span>
                            </label>
                        </article>
                        <article class="select_item select_multiple">
                            <label for="loc_fct" class="feature_wrapper">
                               <input type="checkbox" id="loc_fct" class="cst_selector" name="service_loc">
                                <span class="sl_label font-regular">
                                    Federal Capital Teritory
                                </span>
                            </label>
                        </article>
                        <article class="select_item select_multiple">
                            <label for="loc_lag" class="feature_wrapper">
                               <input type="checkbox" id="loc_lag" class="cst_selector" name="service_loc">
                                <span class="sl_label font-regular">
                                    Lagos State
                                </span>
                            </label>
                        </article>
                        <article class="select_item select_multiple">
                            <label for="loc_riv" class="feature_wrapper">
                               <input type="checkbox" id="loc_riv" class="cst_selector" name="service_loc">
                                <span class="sl_label font-regular">
                                    Rivers State
                                </span>
                            </label>
                        </article>
                        <article class="select_item select_multiple">
                            <label for="loc_ana" class="feature_wrapper">
                               <input type="checkbox" id="loc_ana" class="cst_selector" name="service_loc">
                                <span class="sl_label font-regular">
                                    Anambra State
                                </span>
                            </label>
                        </article>
                        <article class="select_item select_multiple">
                            <label for="loc_akw" class="feature_wrapper">
                               <input type="checkbox" id="loc_akw" class="cst_selector" name="service_loc">
                                <span class="sl_label font-regular">
                                    Akwa Ibom State
                                </span>
                            </label>
                        </article>
                        <article class="select_item select_multiple">
                            <label for="loc_ada" class="feature_wrapper">
                               <input type="checkbox" id="loc_ada" class="cst_selector" name="service_loc">
                                <span class="sl_label font-regular">
                                    Adamawa State
                                </span>
                            </label>
                        </article>
                        <article class="select_item select_multiple">
                            <label for="loc_abia" class="feature_wrapper">
                               <input type="checkbox" id="loc_abia" class="cst_selector" name="service_loc">
                                <span class="sl_label font-regular">
                                    Abia State
                                </span>
                            </label>
                        </article>
                        <article class="select_item select_multiple">
                            <label for="loc_bau" class="feature_wrapper">
                               <input type="checkbox" id="loc_bau" class="cst_selector" name="service_loc">
                                <span class="sl_label font-regular">
                                    Bauchi State
                                </span>
                            </label>
                        </article>
                        <article class="select_item select_multiple">
                            <label for="loc_bau" class="feature_wrapper">
                               <input type="checkbox" id="loc_bau" class="cst_selector" name="service_loc">
                                <span class="sl_label font-regular">
                                    Benue State
                                </span>
                            </label>
                        </article>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-inverse">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    </div>
    
    <div class="modal fade" id="biz_addr">
        <div class="modal-dialog">
            <div class="modal-content">
                <header class="modal-header">
                    <h4 class="modal-title color-primary">Business Address</h4>
                    <button class="close_dialog" data-dismiss="modal" aria-hidden="true"></button>
                </header>
                <div class="modal-body">
                    <form action="">
                        <div class="form-group">
                            <label class="control-label">Street Address</label>
                             <input type="text" class="form-control" placeholder="E.g. No 3, Adeniyi Jones, Ikeja">
                        </div>
                        <div class="form-group">
                            <label class="control-label">Phone Number</label>
                            <input type="tel" class="form-control" placeholder="Phone Number">
                        </div>
                        <div class=" form-group">
                            <label for="" class="control-label">City/Town</label>
                            <select class="form-control">
                                <option>--City/Town--</option>
                                <option>Alausa</option>
                                <option>Ikeja</option>
                                <option>Ojodu</option>
                                <option>Ojota</option>
                                <option>Maryland</option>
                                <option>Mende</option>
                                <option>Festac</option>
                                <option>Surulere</option>
                                <option>Yaba</option>
                                <option>Ojuelegba</option>
                                <option>Mushin</option>
                                <option>Ogba</option>
                                <option>Magboro</option>
                                <option>Magodo</option>
                                <option>Victoria Island</option>
                                <option>Ikoyi</option>
                                <option>Ajah</option>
                                <option>Leki</option>
                                <option>Command</option>
                                <option>Abule Egba</option>
                                <option>Ipaja</option>
                            </select>
                        </div>
                        <div class=" form-group">
                            <label class="control-label">Zip/Postal Code</label>
                            <input type="text" class="form-control" placeholder="Zip/Postal Code">
                        </div>
                        <div class=" form-group">
                            <label for="" class="control-label">Country</label>
                            <input type="text" disabled class="form-control" value="Nigeria"/>
                        </div>
                        <div class=" form-group">
                            <label for="" class="control-label">State</label>
                            <select class="form-control">
                                <option>--State--</option>
                                <option>Lagos</option>
                                <option>Kaduna</option>
                                <option>Kano</option>
                                <option>Sokoto</option>
                                <option>Jigawa</option>
                                <option>Oyo</option>
                                <option>Delta</option>
                                <option>Benue</option>
                                <option>Borno</option>
                                <option>Bauchi</option>
                                <option>Adamawa</option>
                                <option>Anambra</option>
                                <option>Rivers</option>
                                <option>Cross Rivers</option>
                                <option>Enugu</option>
                                <option>Yola</option>
                                <option>Ogun</option>
                                <option>Osun</option>
                                <option>Ondo</option>
                                <option>Edo</option>
                                <option>Akwa Ibom</option>
                            </select>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-inverse">
                        Save Changes
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
                                        <div class="progress_step active" title="Event Details">
                                            <router-link to="/new_event_basicInfo" class="step_wrapper">
                                                <span class="step_label sr-only">Create your Event</span>
                                                <span class="step_count"></span>
                                            </router-link>
                                        </div>
                                        <div class="progress_step" title="Service Category">
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
                                    </div> 
                                    <h4 class="widget_title color-primary">
                                       Create your Event
                                    </h4>
                                    <p class="subtitle font-md">
                                        Provide some general information about the Event.
                                    </p>
                                </header>
                                <div class="widget_body">
                                   <form action="">
                                    
                                    <fieldset>
                                        <div class="form-group">
                                            <label class="control-label">Event Name</label>
                                            <input type="text" class="form-control" autofocus placeholder="The name of your event">
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label">Event Type</label>
                                            <select class="form-control ">
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
                                        <div class="form-horizontal">
                                            <div class="form-group  col-sm-4">
                                                <label class="control-label">Day</label>
                                                <select class="form-control">
                                                    <option>Day</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                    <option>6</option>
                                                    <option>7</option>
                                                </select>
                                            </div>
                                            <div class="form-group  col-sm-4">
                                                <label class="control-label">Month</label>
                                                <select class="form-control">
                                                    <option>Month</option>
                                                    <option>January</option>
                                                    <option>February</option>
                                                    <option>March</option>
                                                    <option>April</option>
                                                    <option>May</option>
                                                    <option>June</option>
                                                    <option>July</option>
                                                    <option>August</option>
                                                    <option>September</option>
                                                    <option>October</option>
                                                    <option>Novermber</option>
                                                    <option>December</option>
                                                </select>
                                            </div>
                                            <div class="form-group  col-sm-4">
                                                <label class="control-label">Year</label>
                                                <select class="form-control">
                                                    <option>Year</option>
                                                    <option>2000</option>
                                                    <option>1999</option>
                                                    <option>1998</option>
                                                    <option>1997</option>
                                                    <option>1996</option>
                                                    <option>1995</option>
                                                    <option>1994</option>
                                                    <option>1993</option>
                                                    <option>1992</option>
                                                    <option>1991</option>
                                                    <option>1990</option>
                                                    <option>1989</option>
                                                    <option>1988</option>
                                                    <option>1987</option>
                                                    <option>1986</option>
                                                    <option>1985</option>
                                                    <option>1984</option>
                                                    <option>1983</option>
                                                    <option>1982</option>
                                                    <option>1981</option>
                                                </select>
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
                                    
                                    <!-- <div class="section_cto text-center">
                                        <a href="new_service_3.html" class="btn btn-inverse">
                                            Save & Continue
                                        </a>
                                    </div> -->
                                    
                                    </form>

                                    <div class="widget_body">
                                        <form action="">
                                         <div class="media_library">
                                             <figure class="media_item_thumb small_half medium_1_3 large_1_4 item_new">
                                                 <a href="#new_attachment" data-toggle="modal" data-backdrop="static" class="md_wrapper">
                                                     <div class="media_img_shadow text-center">
                                                         <span class="icon_holder">
                                                             <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.52 16">
                                                                 <polygon points="9.23 0 9.23 6.56 15.52 6.56 15.52 9.38 9.23 9.38 9.23 16 6.29 16 6.29 9.38 0 9.38 0 6.56 6.29 6.56 6.29 0 9.23 0"/>
                                                             </svg>
                                                         </span>
                                                         <span class="">Add new Item</span>
                                                     </div>
                                                 </a>
                                             </figure>
                                             <figure class="media_item_thumb small_half medium_1_3 large_1_4">
                                                 <div class="md_wrapper">
                                                     <a href="#" target="_blank" class="media_thumbnail">
                                                         <div class="media_img_shadow">
                                                             <img src="../../assets/img/banners/bridal_gown.jpg" alt="">
                                                         </div>
                                                     </a>
                                                     <div class="thumb_overlay">
                                                         <div class="overlay_control_button">
                                                             <div class="control_button_item">
                                                                 <label for="img_upload" class="control_button" title="Change item">
                                                                    <input type="file" name="file" id="img_upload" class="inputfile"/>
                                                                     <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.34 49.33">
                                                                         <path d="M46.14,3.19a10.88,10.88,0,0,0-15.4,0L2.51,31.42a1.41,1.41,0,0,0-.4.81L0,47.72a1.41,1.41,0,0,0,.4,1.19,1.44,1.44,0,0,0,1,.42H1.6l9.33-1.26a1.42,1.42,0,0,0-.38-2.82l-7.48,1L4.53,35.44,15.91,46.82a1.44,1.44,0,0,0,1,.42,1.39,1.39,0,0,0,1-.42L46.14,18.59a10.87,10.87,0,0,0,0-15.4ZM31.29,6.66,36,11.4,10.26,37.17,5.52,32.43ZM16.92,43.81l-4.64-4.64L38,13.41,42.68,18ZM44.66,16,33.32,4.68A8.06,8.06,0,0,1,44.66,16Z"/>
                                                                     </svg>
                                                                 </label>
                                                             </div>
                                                             <div class="control_button_item">
                                                                 <a href="#" class="control_button" title="Remove item">
                                                                     <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.39 53.39">
                                                                         <path d="M30,26.69,52.71,4A2.32,2.32,0,0,0,49.42.68L26.69,23.41,4,.68A2.32,2.32,0,0,0,.68,4L23.41,26.69.68,49.42A2.32,2.32,0,1,0,4,52.71L26.69,30,49.42,52.71a2.32,2.32,0,0,0,3.28-3.28Z"/>
                                                                     </svg>
                                                                 </a>
                                                             </div>
                                                         </div>
                                                     </div>
                                                 </div>
                                             </figure>
                                             <figure class="media_item_thumb small_half medium_1_3 large_1_4">
                                                 <div class="md_wrapper">
                                                     <a href="#" target="_blank" class="media_thumbnail">
                                                         <div class="media_img_shadow">
                                                             <img src="../../assets/img/banners/cake.jpg" alt="">
                                                         </div>
                                                     </a>
                                                     <div class="thumb_overlay">
                                                         <div class="overlay_control_button">
                                                             <div class="control_button_item">
                                                                 <label for="img_upload" class="control_button" title="Change item">
                                                                    <input type="file" name="file" id="img_upload" class="inputfile"/>
                                                                     <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.34 49.33">
                                                                         <path d="M46.14,3.19a10.88,10.88,0,0,0-15.4,0L2.51,31.42a1.41,1.41,0,0,0-.4.81L0,47.72a1.41,1.41,0,0,0,.4,1.19,1.44,1.44,0,0,0,1,.42H1.6l9.33-1.26a1.42,1.42,0,0,0-.38-2.82l-7.48,1L4.53,35.44,15.91,46.82a1.44,1.44,0,0,0,1,.42,1.39,1.39,0,0,0,1-.42L46.14,18.59a10.87,10.87,0,0,0,0-15.4ZM31.29,6.66,36,11.4,10.26,37.17,5.52,32.43ZM16.92,43.81l-4.64-4.64L38,13.41,42.68,18ZM44.66,16,33.32,4.68A8.06,8.06,0,0,1,44.66,16Z"/>
                                                                     </svg>
                                                                 </label>
                                                             </div>
                                                             <div class="control_button_item">
                                                                 <a href="#" class="control_button" title="Remove item">
                                                                     <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.39 53.39">
                                                                         <path d="M30,26.69,52.71,4A2.32,2.32,0,0,0,49.42.68L26.69,23.41,4,.68A2.32,2.32,0,0,0,.68,4L23.41,26.69.68,49.42A2.32,2.32,0,1,0,4,52.71L26.69,30,49.42,52.71a2.32,2.32,0,0,0,3.28-3.28Z"/>
                                                                     </svg>
                                                                 </a>
                                                             </div>
                                                         </div>
                                                     </div>
                                                 </div>
                                             </figure>
                                             <figure class="media_item_thumb small_half medium_1_3 large_1_4">
                                                 <div class="md_wrapper">
                                                     <a href="#" target="_blank" class="media_thumbnail">
                                                         <div class="media_img_shadow">
                                                             <img src="../../assets/img/banners/photograph.jpg" alt="">
                                                         </div>
                                                     </a>
                                                     <div class="thumb_overlay">
                                                         <div class="overlay_control_button">
                                                             <div class="control_button_item">
                                                                 <label for="img_upload" class="control_button" title="Change item">
                                                                    <input type="file" name="file" id="img_upload" class="inputfile"/>
                                                                     <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.34 49.33">
                                                                         <path d="M46.14,3.19a10.88,10.88,0,0,0-15.4,0L2.51,31.42a1.41,1.41,0,0,0-.4.81L0,47.72a1.41,1.41,0,0,0,.4,1.19,1.44,1.44,0,0,0,1,.42H1.6l9.33-1.26a1.42,1.42,0,0,0-.38-2.82l-7.48,1L4.53,35.44,15.91,46.82a1.44,1.44,0,0,0,1,.42,1.39,1.39,0,0,0,1-.42L46.14,18.59a10.87,10.87,0,0,0,0-15.4ZM31.29,6.66,36,11.4,10.26,37.17,5.52,32.43ZM16.92,43.81l-4.64-4.64L38,13.41,42.68,18ZM44.66,16,33.32,4.68A8.06,8.06,0,0,1,44.66,16Z"/>
                                                                     </svg>
                                                                 </label>
                                                             </div>
                                                             <div class="control_button_item">
                                                                 <a href="#" class="control_button" title="Remove item">
                                                                     <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 53.39 53.39">
                                                                         <path d="M30,26.69,52.71,4A2.32,2.32,0,0,0,49.42.68L26.69,23.41,4,.68A2.32,2.32,0,0,0,.68,4L23.41,26.69.68,49.42A2.32,2.32,0,1,0,4,52.71L26.69,30,49.42,52.71a2.32,2.32,0,0,0,3.28-3.28Z"/>
                                                                     </svg>
                                                                 </a>
                                                             </div>
                                                         </div>
                                                     </div>
                                                 </div>
                                             </figure>
                                         </div>
                                         
                                         <div class="section_cto text-center">
                                             <router-link to="/new_event_category" class="btn btn-inverse">
                                                 Save & Continue
                                             </router-link>
                                         </div>                                        
                                         </form>
                                     </div>
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
  name: 'EventBasicInfo',
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
