<template>
  <div class="entrar">
    <div class="form-card">
      <h1 class="page-title">Login</h1>

      <form @submit.prevent="validateLogin">
        <input type="email" placeholder="E-mail">
        <input type="password" placeholder="Senha">

        <button class="button" type="submit">Entrar</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'guest',
  methods: {
    validateLogin () {
      this.$router.push('/')
    }
  }
}
</script>