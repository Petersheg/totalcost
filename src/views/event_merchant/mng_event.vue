<template>
    <NavbarMember/>
    <MngEvent></MngEvent>
</template>

<script>
// @ is an alias to /src
import MngEvent from '@/components/event_merchant/mng_event'
import NavbarMember from '@/components/navfoot/navbar_member'
export default {
  components: {
    MngEvent,
    NavbarMember
  }
}
</script>


