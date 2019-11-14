<template>
  <div id="default">
    <side-bar
      :class="{ isActive : isOpened }" 
      @closeMenu="closeMenu"
    />

    <div class="content">
      <Navbar @openMenu="openMenu" />
      <nuxt />
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/SideBar'
import Navbar from '@/components/Navbar'

export default {
  components: {
    SideBar,
    Navbar
  },
  data () {
    return {
      isOpened: false,
      isClosed: true
    }
  },
  methods: {
    openMenu (event) {
      this.isOpened = event
    },
    closeMenu (event) {
      this.isOpened = false
      this.isClosed = event
    }
  }
}
</script>
