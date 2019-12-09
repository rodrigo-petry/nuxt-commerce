<template>
  <div class="entrar">
    <div class="form-card">
      <h1 class="page-title">Login</h1>

      <form @submit.prevent="validateLogin">
        <input 
          v-model="user.email"
          type="email" 
          placeholder="E-mail"
        >
        <input 
          v-model="user.password"
          type="password" 
          placeholder="Senha"
        >

        <button class="button" type="submit">Entrar</button>
      </form>
    </div>

    <b-loading 
      :active.sync="isLoading" 
      :can-cancel="true"
    ></b-loading>
  </div>
</template>

<script>
import User from '@/services/User'

export default {
  layout: 'guest',
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      isLoading: false
    }
  },
  methods: {
    async validateLogin () {
      this.isLoading = true 

      try {
        await User.login(this.user)

        setTimeout(() => { 
          this.$router.push('/produtos') 
        }, 2000)
      } catch {
        this.isLoading = false
        
        alert("Dados inválidos!")
      }
    }
  }
}
</script>