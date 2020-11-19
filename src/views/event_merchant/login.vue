<template>
    <Navbar/>
    <Login></Login>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/event_merchant/login'
import Navbar from '@/components/navfoot/navbar'
export default {
  components: {
    Login,
    Navbar
  }
}
</script>


