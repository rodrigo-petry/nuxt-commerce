<template>
  <div 
    id="side-bar">
    <div class="side-bar-top">
      <!-- <img src="" alt=""> -->
      <i 
        class="fas fa-arrow-left is-hidden-desktop"
        @click="closeMenu()"
      ></i>
      <i class="fas fa-cog is-hidden-touch"></i>
    </div>

    <div class="side-bar-menu">
      <nuxt-link to="/">
        <div class="menu-item">
          <i class="fas fa-home"></i>
          Home
        </div>
      </nuxt-link>

      <nuxt-link to="/produtos">
        <div class="menu-item">
          <i class="fas fa-box-open"></i>
          Produtos
        </div>
      </nuxt-link>

      <nuxt-link to="/categorias">
        <div class="menu-item">
          <i class="fas fa-filter"></i>
          Categorias
        </div>
      </nuxt-link>

      <nuxt-link to="/registrar">
        <div class="menu-item">
          <i class="fas fa-sign-out-alt"></i>
          Sair
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'side-bar',
  data () {
    return {
      isClosed: true
    }
  },
  methods: {
    closeMenu () {
      this.$emit('closeMenu', this.isClosed)
    }
  }
}
</script>