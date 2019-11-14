<template>
  <section class="product-detail">
    <div class="detail-header">
      <div class="header-texts">
        <div class="header-title">
          <nuxt-link
            tag="i"
            to="/produtos"
            exact
          >
            <i class="fas fa-arrow-left"></i>
          </nuxt-link>
          
          <h1 class="page-title">
            Detalhe do Produto #{{ product._id }}
          </h1>
        </div>

        <p class="page-description">
          Esta é seção de detalhes de um produto já cadastrado e como é exibida ao cliente
        </p>
      </div>
    </div>

    <div class="columns">
      <div class="column is-5 is-full-mobile">
        
      </div>

      <div class="column is-7 is-full-mobile">
        <span class="product-category">{{ product.category_id }}</span>
        <h2 class="product-tile">
          {{ product.title }}
        </h2>
        <p class="product-description">
          {{ product.description }}
        </p>
      </div>
    </div>

    <b-loading :active.sync="isLoading" :can-cancel="true"></b-loading>
  </section>
</template>

<script>
import Product  from '@/services/Product'

export default {
  components: {
  },
  data () {
    return {
      isLoading: false,
      product: []
    }
  },
  mounted () {
    this.fetch()
  },
  methods: {
    async fetch () {
      this.isLoading = true 

      const { data } = await Product.detail(this.$route.params.id)
      this.product = data[0]
      this.isLoading = false
    }
  }
}
</script>
