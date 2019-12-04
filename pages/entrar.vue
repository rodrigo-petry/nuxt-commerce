<template>
  <div class="cadastro" 
    style="
      background-image: url('bg-register.jpg');
      background-size: cover;
    "
  >
    <form action="">
      <h1 class="title">Entrar</h1>

      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input type="email" class="input" placeholder="Email do Usuário">
        </div>
      </div>

      <div class="field">
        <label class="label">Senha</label>
        <div class="control">
          <input type="password" class="input" placeholder="Senha">
        </div>
      </div>

      <nuxt-link 
        to="/"
        tag="button" 
        class="button"
      >
        Entrar  
      </nuxt-link>
      
      <p class="already-account">
        Não possuí uma conta? 
        <nuxt-link to="/cadastro">Clique aqui</nuxt-link>
      </p>
    </form>

  </div>  
</template>

<script>
export default {
  layout (context) {
    return 'guest'
  }
}
</script>