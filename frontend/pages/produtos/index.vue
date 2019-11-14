<template>
  <section class="products">
    <div class="products-header">
      <div class="header-texts">
        <h1 class="page-title">Produtos</h1>
        <p class="page-description">
          Esta é a seção de produtos, onde você poderá controlar todos os seus produtos
        </p>
      </div>

      <div class="filters">
        <i 
          @click="setViewMode('card')"
          :class="{ 'is-active': viewMode === 'card' }"
          class="fas fa-th"
        ></i>
        
        <i
          @click="setViewMode('list')" 
          :class="{ 'is-active': viewMode === 'list' }"
          class="fas fa-list"
        ></i>

        <button 
          class="button"
          v-on:click="isComponentModalActive = true"
        >Adicionar</button>
      </div>
    </div>

    <div 
      v-if="viewMode === 'card'"
      class="products-list columns is-multiline"
    >
      <div 
        class="column is-3-desktop is-6-tablet is-full-mobile" 
        v-for="card of cards" 
        :key="card.id"
      >
        <ProductCard 
          v-if="cards != 0"
          :card="card" 
          @onDeleteProduct="onDeleteProduct"
          @productChange="productChange"
        />

      </div>

      <div class="column is-full">
        <EmptyContent 
          v-if="cards <= 0"
          :emptyType="'produtos'" 
        />
      </div>
    </div>

    <div 
      v-if="viewMode === 'list'"
      class="product-table"
    >
      <ProductList 
        v-if="cards != 0"
        :cards="cards" 
        @onDeleteProduct="onDeleteProduct"
        @productChange="productChange"
      />

      <EmptyContent 
        v-if="cards <= 0"
        :emptyType="'produtos'" 
      />
    </div>

    <b-modal 
      :active.sync="isComponentModalActive"
      has-modal-card
      trap-focus
      aria-role="dialog"
      aria-modal
    >
      <ProductModal @productChange="productChange" />
    </b-modal>

    <b-loading 
      :active.sync="isLoading" 
      :can-cancel="true"
    ></b-loading>
  </section>
</template>

<script>
import ProductModal from '@/components/ProductModal'
import ProductCard from '@/components/ProductCard'
import ProductList from '@/components/ProductList'
import EmptyContent from '@/components/EmptyContent'
import Product from '@/services/Product'

export default {
  components: {
    ProductModal,
    ProductCard,
    ProductList,
    EmptyContent
  },
  data () {
    return {
      isLoading: false,
      isComponentModalActive: false,
      cards: [],
      viewMode: 'card'
    }
  },
  mounted () {
    this.fetch()
  },
  methods: {
    async fetch () {
      this.isLoading = true 

      const { data } = await Product.get()
      this.isLoading = false
      this.cards = data
    },

    async onDeleteProduct (product_id) {
      this.isLoading = true 
      
      await Product.delete(product_id)
      await this.fetch()
      await this.$buefy.toast.open('Produto Deletado!')
      this.isLoading = false    
    },

    productChange (value) {
      this.fetch()
    },
    
    setViewMode (mode) {
      this.isLoading = true
      this.viewMode = mode

      setTimeout(() => {
        this.isLoading = false
      }, 400)
    }
  }
}
</script>
