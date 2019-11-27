<template>
  <form @submit.prevent>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Cadastrar Nova Categoria</p>
      </header>

      <section class="modal-card-body">
        <b-field label="ID da Categoria*">
          <b-input
            required
            v-model="id"
            type="text"
            value=""
            placeholder="Digite um ID para a Categoria"
          ></b-input>
        </b-field>


        <b-field label="Nome da Categoria*">
          <b-input
            required
            v-model="title"
            type="text"
            value=""
            placeholder="Digite o Nome da Categoria"
          ></b-input>
        </b-field>

        <b-field label="Descrição da Categoria*">
          <b-input 
            v-model="description"
            maxlength="200" 
            type="textarea" 
            placeholder="Digite aqui a Descrição do seu Produto"
          ></b-input>
        </b-field>
      </section>

      <footer class="modal-card-foot">
        <button 
          class="button" 
          type="button" 
          @click="$parent.close()"
        >
          Fechar
        </button>
        
        <button 
          class="button is-primary"
        >
          Cadastrar
        </button>
      </footer>
    </div>
  </form>
</template>

<script>
import Category from '@/services/Category'

export default {
  data () {
    return {
      selectedFile: null,
      categories: [],
      title: '',
      description: '',
      price: 0,
      selectedCategory: '',
    }
  }
}
</script>

<style lang="scss">