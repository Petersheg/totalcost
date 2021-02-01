<template>
    <NavbarMember/>
    <MngPricing></MngPricing>
</template>

<script>
// @ is an alias to /src
import MngPricing from '@/components/event_merchant/mng_pricing'
import NavbarMember from '@/components/navfoot/navbar_member'
export default {
  components: {
    MngPricing,
    NavbarMember
  }
}
</script>


