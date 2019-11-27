<template>
  <form @submit.prevent>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Editar Produto #{{ productId }}</p>
      </header>

      <section class="modal-card-body" ref="element">
        <b-field>
          <b-upload v-model="selectedFile" drag-drop>
            <section class="section">
              <div class="content has-text-centered">
                <p>
                  <b-icon icon="upload" size="is-large"></b-icon>
                </p>

                <p>Arraste uma Imagem ou Clique para fazer Upload</p>
              </div>
            </section>
          </b-upload>
        </b-field>

        <div class="tags">
          <span 
            v-if="selectedFile || currentProduct.thumbnail"
            class="tag is-primary"
          >
            {{ selectedFile ? selectedFile.name : currentProduct.thumbnail }}
            
            <button 
              class="delete is-small"
              type="button"
              @click="deleteDropFile()"
            ></button>
          </span>
        </div>

        <b-field label="Nome do Produto*">
          <b-input
            v-model="currentProduct.title"
            type="text"
            value=""
            placeholder="Digite o Nome do Produto"
            required
          ></b-input>
        </b-field>

        <b-field label="Categoria do Produto*">
          <b-select
            v-model="currentProduct.category_id"
            expanded
            placeholder="Selecione uma Categoria para o Produto"
          >
            <option 
              v-for="category in categories"
              :key="category._id"
              :value="category._id"
            >
              {{ category.name }}
            </option>
          </b-select>
        </b-field>

        <b-field label="Preço do Produto*">
          <currency-input
            class="input price"
            currency="BRL"
            locale="pt-br"
            v-model="currentProduct.price"
          ></currency-input>
        </b-field>

        <b-field label="Descrição do Produto*">
          <b-input 
            v-model="currentProduct.description"
            maxlength="200" 
            type="textarea" 
            placeholder="Digite aqui a Descrição do seu Produto"
          ></b-input>
        </b-field>
      </section>

      <footer class="modal-card-foot">
        <button 
          class="button" 
          @click="$parent.close()"
        >
          Fechar
        </button>

        <button 
          class="button is-primary" 
          @click="updateProductInfos"
        >
          Atualizar
        </button>
      </footer>
    </div>
  </form>
</template>

<script>
import Category from '@/services/Category'
import Product from '@/services/Product'

export default {
  props: {
    productId: String
  },
  data () {
    return {
      categories: [],
      selectedFile: null,
      currentProduct: {}
    }
  },
  mounted () {
    this.fetchCategories()
    this.getProductInfos()
  },
  methods: {
    deleteDropFile (index) {
      this.selectedFile = null
      this.currentProduct.thumbnail = null
    },

    async fetchCategories () {
      const { data } = await Category.get()

      this.categories = data
    },

    async getProductInfos () {
      const loadingComponent = this.$buefy.loading.open({
        container: this.$refs.element.$el
      })

      const { data } = await Product.detail(this.productId)
      
      this.currentProduct = data[0]
      loadingComponent.close()
    },

    async updateProductInfos () {
      const formData = new FormData()

      formData.append('title', this.currentProduct.title)
      formData.append('description', this.currentProduct.description)
      formData.append('price', this.currentProduct.price)
      formData.append('category_id', this.currentProduct.category_id)
      formData.append('thumbnail', this.selectedFile)

      await Product.update(this.productId, formData)
      
      this.$emit('productChange', true)
      this.$parent.close()
      this.$buefy.toast.open('Produto Atualizado com Sucesso!')
    }
  }
}
</script>

<style lang="scss">
.modal-card {
  .modal-card-body {
    .section {
      width: 100%;
    }

    label.upload.control {
      width: 100%;
    }

    .upload .upload-draggable {
      width: 100%;
    }

    .tag.is-primary {
      background-color: #75c23c;
    }

    .price {
      font-family: 'Nunito', Arial, Helvetica, sans-serif;
    }
  }

  .modal-card-foot {
    width: 100%;

    display: flex;
    justify-content: flex-end;

    .button {
      font-weight: bold;
      font-size: 14px;
      height: 40px;
      min-width: 100px;
    }

    .button.is-primary {
      background-color: #00A0FF;
    }
  }
}
</style>