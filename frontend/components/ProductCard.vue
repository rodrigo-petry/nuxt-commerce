<template>
  <div class="card">
    <div class="card-image">
      <div class="tag">
        <div class="edit-icons">
          <nuxt-link 
            :to="`/produtos/${card._id}`" 
            tag="i" 
            class="fas fa-search"
            exact
          ></nuxt-link>
        
          <i
            @click="confirmProdutDelete(card._id)" 
            class="fas fa-trash-alt"
          ></i>
        </div>
      </div>

      <img :src="card.thumbnail_url" alt="Card Image">
    </div>

    <div class="card-content">
      <h4 class="card-title">{{ card.title }}</h4>
      <span class="price">{{ card.price | currency }}</span>
    </div>

    <div class="card-footer">
      <button 
        v-on:click="isComponentModalActive = true"
        class="button"
      >
        Editar
      </button>
    </div>

    <b-modal 
      :active.sync="isComponentModalActive"
      has-modal-card
      trap-focus
      aria-role="dialog"
      aria-modal
    >
      <EditProductModal 
        :productId="card._id" 
        @productChange="productChange"
      />
    </b-modal>
  </div>  
</template>

<script>
import EditProductModal from '@/components/EditProductModal'

export default {
  props: {
    card: Object
  },
  components: {
    EditProductModal
  },
  data () {
    return {
      isComponentModalActive: false,
    }
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

.card {
  min-height: 360px;
  margin: 0 12px 30px 12px;
  border-radius: 8px;
  box-shadow: 0 8px 24px 0 rgba(20, 53, 92, 0.08);

  @include breakpoint(large) {
    margin: 0 0 30px 0;
  }

  .card-image {
    display: flex;
    justify-content: center;

    .tag {
      background-color: #75C23C;
      color: #FFF;
      text-transform: uppercase;
      font-weight: 500;
      position: absolute;
      right: 0;
      top: -8px;
      font-size: 11px;
      width: 85px;
      height: 30px;
      font-weight: bold;
      border-radius: 0 8px 0 8px;

      .edit-icons {
        display: flex;
        align-items: center;

        .fa-trash-alt {
          color: #FFF;
          margin: 0 0 0 12px;
        }

        i {
          color: #D9D9D9;
          cursor: pointer;
          font-size: 14px;
        }
      }
    }

    & >img {
      width: 100%;
      height: 170px;
      border-radius: 8px 8px 0 0;
      object-fit: cover;
      object-position: center center;
    }
  }

  .card-content {
    text-align: center;
    position: relative;
    padding: 1.5rem;

    .card-title {
      font-size: 16px;
      color: #899AAD;
      font-weight: 500;
    }

    .price {
      font-weight: bold;
      font-size: 18px;
      color: #14355C;
      font-family: 'Nunito', sans-serif;
    }
  }

  .card-footer {
    height: 80px;
    width: 100%;
    padding: 0 1.5rem;
    position: absolute;
    bottom: 0;
    border-color: #E9EAED;

    display: flex;
    justify-content: center;
    align-items: center;

    .button {
      background-color: transparent;
      color: #00A0FF;
      border-color: #00A0FF;
      font-size: 13px;
      font-weight: bold;
      height: 40px;
      width: 100%;
      transition: 300ms linear;
      border-radius: 8px;

      &:hover {
        background-color: #00A0FF;
        color: #FFF;
      }
    }
  }
}
</style>