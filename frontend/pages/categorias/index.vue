<template>
  <section class="categories">
    <div class="products-header">
      <div class="header-texts">
        <h1 class="page-title">Categorias</h1>
        <p class="page-description">
          Esta é a seção de produtos, onde você poderá controlar todos os seus produtos
        </p>
      </div>

      <div class="filters">
        <button 
          class="button"
          v-on:click="isComponentModalActive = true"
        >Adicionar</button>
      </div>
    </div>

    <div class="product-table">
      <CategoriesList 
        v-if="categories != 0"
        :categories="categories" 
        @productChange="productChange"
      />

      <EmptyContent 
        v-if="categories <= 0"
        :emptyType="'categorias'" 
      />
    </div>

    <b-modal 
      :active.sync="isComponentModalActive"
      has-modal-card
      trap-focus
      aria-role="dialog"
      aria-modal
    ></b-modal>

    <b-loading 
      :active.sync="isLoading" 
      :can-cancel="true"
    ></b-loading>
  </section>
</template>

<script>
import CategoriesList from '@/components/CategoriesList'
import EmptyContent from '@/components/EmptyContent'
import Category from '@/services/Category'

export default {
  components: {
    CategoriesList,
    EmptyContent
  },
  data () {
    return {
      isLoading: false,
      isComponentModalActive: false,
      categories: []
    }
  },
  mounted () {
    this.fetch()
  },
  methods: {
    async fetch () {
      this.isLoading = true 

      const { data } = await Category.get()
      this.isLoading = false
      this.categories = data
    },

    productChange (value) {
      this.fetch()
    }
  }
}
</script>
