<template>
    
    <div class="gallery_wrapper" v-for="(photo, index) in gallery" :key="photo.id">
        <div class="gallery_slides">
            <div class="gallery_slide_item">
                <div class="slide_item_wrapper">
                    <div class="slide_image_wrapper">
                        <img :src="photo.resourceUrl" alt="Storefront Banner Image" class="slide_image">
                    </div>
                </div>
            </div>
            
            <!-- <div class="gallery_slide_item">
                <div class="slide_item_wrapper">
                    <div class="slide_image_wrapper">
                        <img src="../../../assets/img/banners/photograph.jpg" alt="Storefront Banner Image" class="slide_image">
                    </div>
                </div>
            </div>
            <div class="gallery_slide_item">
                <div class="slide_item_wrapper">
                    <div class="slide_image_wrapper">
                        <img src="../../../assets/img/banners/bridal_gown.jpg" alt="Storefront Banner Image" class="slide_image">
                    </div>
                </div>
            </div>
            <div class="gallery_slide_item">
                <div class="slide_item_wrapper">
                    <div class="slide_image_wrapper">
                        <img src="../../../assets/img/banners/merchant_hold.jpg" alt="Storefront Banner Image" class="slide_image">
                    </div>
                </div>
            </div>
            <div class="gallery_slide_item">
                <div class="slide_item_wrapper">
                    <div class="slide_image_wrapper">
                        <img src="../../../assets/img/banners/cake.jpg" alt="Storefront Banner Image" class="slide_image">
                    </div>
                </div>
            </div>
            <div class="gallery_slide_item">
                <div class="slide_item_wrapper">
                    <div class="slide_image_wrapper">
                        <img src="../../../assets/img/banners/vendor_img.png" alt="Storefront Banner Image" class="slide_image">
                    </div>
                </div>
            </div> -->
        </div>
        <div class="gallery_img_count">
            <i class="ct_icon">
                <svg class="cust_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 19.2">
                    <path d="M12,7.2a3.6,3.6,0,1,0,3.6,3.6A3.6,3.6,0,0,0,12,7.2Zm9.6-3.6H18.72a1.07,1.07,0,0,1-.95-.68L17,.68A1.07,1.07,0,0,0,16.08,0H7.92A1.07,1.07,0,0,0,7,.68L6.23,2.92a1.07,1.07,0,0,1-.95.68H2.4A2.41,2.41,0,0,0,0,6V16.8a2.41,2.41,0,0,0,2.4,2.4H21.6A2.41,2.41,0,0,0,24,16.8V6A2.41,2.41,0,0,0,21.6,3.6ZM12,16.8a6,6,0,1,1,6-6A6,6,0,0,1,12,16.8Zm8.76-9.12a.84.84,0,1,1,.84-.84A.84.84,0,0,1,20.76,7.68Z"/>
                </svg>
            </i>
            <span ct_label>
                {{index+1}}/{{getLenth()}}
            </span>
        </div>
    </div>

</template>

<script>

export default {
  name: 'Gallery', 
  props:{
      gallery:Array
  },
  methods:{
      getLenth(){
          return this.gallery.length
      }
  }
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
