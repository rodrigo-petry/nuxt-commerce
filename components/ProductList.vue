<template>
  <div class="product-list">
    <b-table
      ref="table"
      :data="cards"
      :mobile-cards="true"
      :pagination-simple="true"
      per-page="6"
      paginated
    >
      <template slot-scope="props">
        <b-table-column 
          field="id" 
          label="ID" 
          width="40" 
          centered
        >
          #{{ props.row._id }}
        </b-table-column>

        <b-table-column 
          field="product_name" 
          label="Nome do Produto"
        >
          {{ props.row.title }}
        </b-table-column>

        <b-table-column 
          field="price" 
          label="Preço" 
          class="price"
        >
          {{ props.row.price | currency }}
        </b-table-column>
      </template>
    </b-table>

  </div>
</template>

<script>
export default {
  components: {},
  props: {
    cards: Array
  },
  data () {
    return {}
  },
  mounted () {
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/abstracts/_variables.scss';

.product-list {
  .price {
    font-family: 'Nunito', Arial, Helvetica, sans-serif;
  }

  @include breakpoint(large) {
    .media {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  .media-content {
    p {
      max-width: 90%;

      @include breakpoint(large) {
        max-width: 100%;
        text-align: center;
        margin: 0 0 20px 0;
      }
    }
  }
}
</style>