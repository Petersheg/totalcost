<template>
  <div class="hero">
     <section class="hero_area main_hero">
        <div class="hero_background video_bg">
            <div class="video_wrapper">
                <video muted="true" autoplay preload="meta" loop="loop">
                    <source src="../../assets/img/banners/home.mp4" type="video/mp4">
                </video>
            </div>
        </div>
        <div class="container">
            <div class="banner_content">
                <div class="hero_intro_msg centered">
                    <h1 class="color-primary hero_title">
                        Find all you need for your next Event.
                    </h1>
                    <p>Budgeting and recruiting for your next event has never been this easy. Find verified event vendors and services that match your style and budget.</p>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
