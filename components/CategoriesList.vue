<template>
  <div class="categories-list">
    <b-table
      ref="table"
      :data="categories"
      :mobile-cards="true"
      :pagination-simple="true"
      per-page="6"
      detailed
      detail-key="_id"
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
          label="Nome da Categoria"
        >
          {{ props.row.name }}
        </b-table-column>
      </template>

      <template slot="detail" slot-scope="props">
        <div class="media-content">
          <p 
            v-if="props.row.description"
            class="category-description"
          >
            {{ props.row.description }}
          </p>
          <p v-else>
            Não há descrição atribuida a esta categoria
          </p>
        </div>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  props: {
    categories: Array
  },
  components: {},
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

.categories-list {
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