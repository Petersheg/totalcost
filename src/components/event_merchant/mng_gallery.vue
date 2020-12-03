<template>
  
   <div class="modal fade" id="new_attachment">
        <div class="modal-dialog modal-lg">
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
                                    <figure class="media_item_thumb col-6 col-sm-4 item_new">
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
                                    <figure class="media_item_thumb col-6 col-sm-4">
                                        <div class="md_wrapper">
                                            <a href="#" target="_blank" class="media_thumbnail">
                                                <div class="media_img_shadow">
                                                    <img src="@/assets/img/banners/bridal_gown.jpg" alt="">
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
                                    <figure class="media_item_thumb col-6 col-sm-4">
                                        <div class="md_wrapper">
                                            <a href="#" target="_blank" class="media_thumbnail">
                                                <div class="media_img_shadow">
                                                    <img src="@/assets/img/banners/photograph.jpg" alt="">
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
                    <button class="btn btn-inverse btn-sm">
                        Add to Gallery
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
                    <div class="media_library row">
                        <figure class="media_item_thumb col-6 col-sm-4  item_new">
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
                        <figure class="media_item_thumb col-6 col-sm-4 ">
                            <div class="md_wrapper">
                                <a href="#" target="_blank" class="media_thumbnail">
                                    <div class="media_img_shadow">
                                        <img src="@/assets/img/banners/bridal_gown.jpg" alt="">
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
                        <figure class="media_item_thumb col-6 col-sm-4 ">
                            <div class="md_wrapper">
                                <a href="#" target="_blank" class="media_thumbnail">
                                    <div class="media_img_shadow">
                                        <img src="@/assets/img/banners/cake.jpg" alt="">
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
                        <figure class="media_item_thumb col-6 col-sm-4 ">
                            <div class="md_wrapper">
                                <a href="#" target="_blank" class="media_thumbnail">
                                    <div class="media_img_shadow">
                                        <img src="@/assets/img/banners/photograph.jpg" alt="">
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
                        <figure class="media_item_thumb col-6 col-sm-4 ">
                            <div class="md_wrapper">
                                <a href="#" target="_blank" class="media_thumbnail">
                                    <div class="media_img_shadow">
                                        <img src="@/assets/img/banners/vendor_img.png" alt="">
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
                        <figure class="media_item_thumb col-6 col-sm-4 ">
                            <div class="md_wrapper">
                                <a href="#" target="_blank" class="media_thumbnail">
                                    <div class="media_img_shadow">
                                        <img src="@/assets/img/banners/merchant_hold.jpg" alt="">
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
  name: 'MngGallery',
  methods:{
      loadScript(src){
      const script = document.createElement('script');
      script.setAttribute('src', src);
      script.async = true;
      document.body.appendChild(script);
    },
  },
  mounted(){
      this.loadScript('../../../js/interScript/nmgServices.js')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
