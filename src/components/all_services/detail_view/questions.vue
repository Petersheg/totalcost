<template>
    
    <article class="details_block" id="sv_faqs">
        <header class="section_header">
            <div class="vendor_info">
                <div class="sv_vendor_info">
                    <h3 class="dt_block_title">Frequestly asked Questions</h3>
                </div>
            </div>
        </header>
        <div class="block_default hidden">
            <p>There are not FAQs provided by the vendor. Send a direct message to the vendor to make your enquires.</p>
        </div>
        <div class="content_inner">
            <div class="panel-group" id='faq_list'>
                <article class="panel panel_opaque"  v-for="faq in faqs" :key="faq.id">
                    <div class="panel-heading">
                        <h4 class="panel-title">
                            <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#faq_list" :href="getHref(faq.id)">{{faq.question}}?</a>
                        </h4>
                    </div>
                    <div :id="faq.id" class="panel-collapse collapse">
                        <div class="panel-body post_content">
                            <p>{{faq.answer}}</p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </article>

</template>

<script>
export default {
  name: 'Faq',
  
  props:{
      servicesDetail:Array,
      faqs:Array
  },
  methods:{
      getHref(path){
          return `#${path}`
      }
  }
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
