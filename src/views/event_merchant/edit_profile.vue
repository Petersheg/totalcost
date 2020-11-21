<template>
    <NavbarMember/>
    <EditProfile></EditProfile>
</template>

<script>
// @ is an alias to /src
import EditProfile from '@/components/event_merchant/edit_profile'
import NavbarMember from '@/components/navfoot/navbar_member'
export default {
  components: {
    EditProfile,
    NavbarMember
  }
}
</script>


