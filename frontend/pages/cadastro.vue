<template>
  <div class="cadastro" 
    style="
      background-image: url('bg-register.jpg');
      background-size: cover;
    "
  >
    <form action="">
      <h1 class="title">Cadastrar</h1>

      <div class="field">
        <label class="label">Usuário</label>
        <div class="control">
          <input type="text" class="input" placeholder="Nome do Usuário">
        </div>
      </div>

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

      <button class="button">Cadastrar</button>
      
      <p class="already-account">
        Já possuí uma conta? 
        <nuxt-link to="/entrar">Clique aqui</nuxt-link>
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