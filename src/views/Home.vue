<template>
  <div class="home">
    <Navbar/>
    <Main />
  </div>
</template>

<script>
// @ is an alias to /src
import Main from '../components/home/main';
import Navbar from '../components/navfoot/navbar'

export default {
  name: 'Home',
  components: {
    Main,
    Navbar
  }
}
</script>


