<template>
    <Navbar/>
    <SignUp></SignUp>
</template>

<script>
// @ is an alias to /src
import SignUp from '@/components/event_merchant/sign_up'
import Navbar from '@/components/navfoot/navbar'
export default {
  components: {
    SignUp,
    Navbar
  }
}
</script>


