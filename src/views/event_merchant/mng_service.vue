<template>
    <NavbarMember/>
    <MngService></MngService>
</template>

<script>
// @ is an alias to /src
import MngService from '@/components/event_merchant/mng_service'
import NavbarMember from '@/components/navfoot/navbar_member'
export default {
  components: {
    MngService,
    NavbarMember
  }
}
</script>


