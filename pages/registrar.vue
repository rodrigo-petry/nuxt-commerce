<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-4 is-offset-4">
          <h2 class="title has-text-centered">Cadastrar</h2>

          <form method="post" @submit.prevent="register">
            <div class="field">
              <label class="label">Nome Completo</label>
              <div class="control">
                <input
                  type="text"
                  class="input"
                  name="username"
                  v-model="user.name"
                  autocomplete="username"
                  required
                >
              </div>
            </div>
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input
                  type="email"
                  class="input"
                  name="email"
                  v-model="user.email"
                  autocomplete="email"
                  required
                >
              </div>
            </div>
            <div class="field">
              <label class="label">Senha</label>
              <div class="control">
                <input
                  type="password"
                  class="input"
                  name="password"
                  v-model="user.password"
                  autocomplete="current-password"
                  required
                >
              </div>
            </div>
            <div class="control">
              <button type="submit" class="button is-dark is-fullwidth">Cadastrar</button>
            </div>
          </form>

          <div class="has-text-centered" style="margin-top: 20px">
            Já tem uma conta? <nuxt-link to="/login">Entrar</nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <b-loading 
      :active.sync="isLoading" 
      :can-cancel="true"
    ></b-loading>
  </section>
</template>

<script>
import User from '@/services/User'

export default {
  layout: 'no-auth',
  data () {
    return {
      user: {
        name: '',
        email: '',
        password: '',
      },
      isLoading: false
    }
  },

  methods: {
    async register() {
      this.isLoading = true

      try {
        await User.create(this.user)

        this.$router.push('/')
      } catch (e) {
        alert(e)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  min-height: 100vh;

  display: flex;
  align-items: center;
}
</style>