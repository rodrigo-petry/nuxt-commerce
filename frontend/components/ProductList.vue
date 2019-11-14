<template>
  <div class="product-list">
    <b-table
      ref="table"
      :data="cards"
      :mobile-cards="true"
      :pagination-simple="true"
      per-page="6"
      paginated
      detailed
      detail-key="_id"
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

      <template slot="detail" slot-scope="props">
        <article class="media">
          <figure class="media-left">
            <p class="image is-128x128">
              <img :src="props.row.thumbnail_url">
            </p>
          </figure>
          
          <div class="media-content">
            <p>
              {{ props.row.description }}
            </p>
          </div>

          <div class="edit-icons">
            <i 
              @click="isComponentModalActive = true"
              class="far fa-edit"
            ></i>
            <i
              @click="confirmProdutDelete(props.row._id)"
              class="fas fa-trash-alt"
            ></i>
          </div>
        </article>
        
        <b-modal 
          :active.sync="isComponentModalActive"
          has-modal-card
          trap-focus
          aria-role="dialog"
          aria-modal
        >
          <EditProductModal 
            :productId="props.row._id" 
            @productChange="productChange"
          />
        </b-modal>
      </template>
    </b-table>

  </div>
</template>

<script>
import EditProductModal from '@/components/EditProductModal'

export default {
  components: {
    EditProductModal
  },
  props: {
    cards: Array
  },
  data () {
    return {
      isComponentModalActive: false,
      selectedId: ''
    }
  },
  mounted () {
  },
  methods: {
    confirmProdutDelete (product_id) {
      this.$buefy.dialog.confirm({
        title: 'Deletando Produto',
        message: 'Você tem certeza que deseja deletar esse produto?',
        confirmText: 'Deletar',
        cancelText: 'Cancelar',
        type: 'is-danger',
        hasIcon: true,
        onConfirm: () => this.$emit('onDeleteProduct', product_id)
      })
    },

    productChange (value) {
      this.$emit('productChange', value)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/abstracts/_variables.scss';

.product-list {
  .price {
    font-family: 'Nunito', Arial, Helvetica, sans-serif;
  }

  .image {
    height: auto;

    img {
      border-radius: 4px;
    }
  }

  @include breakpoint(large) {
    .media {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  .edit-icons {
    display: flex;
    width: 10%;
    
    > i {
      margin: 0 6px;
      cursor: pointer;
      color: #8999ac;
    }

    .fa-trash-alt {
      color: #14355C;
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

  .content figure:not(:last-child) {
    margin-bottom: 0;
  }
}
</style>