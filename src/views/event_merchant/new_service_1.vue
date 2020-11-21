<template>
    <NavbarMember/>
    <NewService1></NewService1>
</template>

<script>
// @ is an alias to /src
import NewService1 from '@/components/event_merchant/new_service_1'
import NavbarMember from '@/components/navfoot/navbar_member'
export default {
  components: {
    NewService1,
    NavbarMember
  }
}
</script>


