<template>
  <form @submit.prevent>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Cadastrar Novo Produto</p>
      </header>

      <section class="modal-card-body">
        <b-field>
          <b-upload
            required
            v-model="selectedFile"
            drag-drop
          >
            <section class="section">
              <div class="content has-text-centered">
                <p>
                  <b-icon
                    icon="upload"
                    size="is-large">
                  </b-icon>
                </p>
                <p>Arraste uma Imagem ou Clique para fazer Upload</p>
              </div>
            </section>
          </b-upload>
        </b-field>

        <div class="tags">
          <span
            v-if="selectedFile"
            class="tag is-primary"
          >
            {{ selectedFile.name }}

            <button 
              class="delete is-small"
              type="button"
              @click="deleteDropFile()">
            </button>
          </span>
        </div>

        <b-field label="Nome do Produto*">
          <b-input
            required
            v-model="title"
            type="text"
            value=""
            placeholder="Digite o Nome do Produto"
          ></b-input>
        </b-field>

        <b-field label="Categoria do Produto*">
          <b-select
            v-model="selectedCategory"
            expanded
            placeholder="Selecione uma Categoria para o Produto"
          >
            <option value="" disabled>
              Selecione uma Categoria para o Produto
            </option>

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
            v-model="price"
          ></currency-input>
        </b-field>

        <b-field label="Descrição do Produto*">
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
          @click="createProduct"
        >
          Cadastrar
        </button>
      </footer>
    </div>
  </form>
</template>

<script>
import Category from '@/services/Category'
import Product from '@/services/Product'

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
  },
  mounted () {
    this.fetchCategories()
  },
  methods: {
    deleteDropFile () {
      this.selectedFile = null
    },

    async fetchCategories () {
      const { data } = await Category.get()

      this.categories = data
    },

    async createProduct (event) {
      const formData = new FormData()

      formData.append('title', this.title)
      formData.append('description', this.description)
      formData.append('price', this.price)
      formData.append('category_id', this.selectedCategory)
      formData.append('thumbnail', this.selectedFile)

      await Product.create(formData)
      
      this.$emit('productChange', true)
      this.$parent.close()
      this.$buefy.toast.open('Produto Criado com Sucesso!')
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
      background-color: #3b78fa;
    }
  }
}
</style>