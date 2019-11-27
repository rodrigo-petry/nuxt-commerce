<template>
  <div id="navbar">
    <i 
      class="fas fa-align-right is-hidden-desktop"
      @click="openMenu()"
    ></i>
  
    <NotificationDropdown />

    <span>Olá, <b>Rodrigo</b> </span>
    
    <img 
      class="user-image"
      src="/profile.jpeg" 
      alt="User Profile Image">
  </div>
</template>

<script>
import NotificationDropdown from '@/components/NotificationDropdown'

export default {
  name: 'navbar',
  components: {
    NotificationDropdown
  },
  data () {
    return {
    }
  },
  methods: {
    openMenu () {
      this.$emit('openMenu', true)
    }
  }
}
</script>