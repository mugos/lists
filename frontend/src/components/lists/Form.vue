<template>
  <section class="control list-form__container">
    <article class="message is-warning">
      <section class="message-body">Listas oficiais podem ser utilizadas por todos usuarios.</section>
    </article>

    <p class="control">
      <label class="label">Nome</label>
      <input type="text" class="input" v-model="data.name"> 
    </p>

    <section class="control is-grouped">
      <p class="control is-expanded">
        <label class="label">Data de inicio</label>
        <datepicker placeholder="" :config="datepickerConfig" v-model="data.beginDate"></datepicker> 
      </p>

      <p class="control is-expanded">
        <label class="label">Data de termino</label>
        <datepicker placeholder="" :config="datepickerConfig" v-model="data.endDate"></datepicker> 
      </p>
    </section>

    <p class="control">
      <label class="checkbox">
        <input type="checkbox" class="checkbox" v-model="data.oficial"> 
        Oficial
      </label>
    </p>

    <p class="control">
      <label class="label">Usuario</label>
      <multiselect v-model="data.user"
                   :options="currentUsers"
                   :multiple="false"
                   :internal-search="false"
                   :loading="usersLoading"
                   label="email"
                   track-by="id"
                   placeholder="Digite o email do usuario"
                   @search-change="searchUsersAction"></multiselect>
      <input type="text" class="input" v-model="data.user"> 
    </p>

    <section class="control">
      <label class="label">Produtos da lista</label>
      <table class="table">
        <thead>
          <tr>
            <th>Produto</th>
            <th>Quantidade</th>
            <th></th>
          </tr>
        </thead>
        <tbody v-if="data.products.length > 0">
          <tr v-for="(p, i) in data.products">
            <td>{{ p.name }}</td>
            <td><input type="number" class="input list-form__product-qty" v-model.number="p.qty"></td>
            <td class="has-text-right">
              <button class="delete" @click.prevent="removeProduct(i)"></button>
            </td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr>
            <td colspan="3">Nenhum produto</td>
          </tr>
        </tbody>
      </table>
      <button class="button">Adicionar</button>
    </section>
  </section>
</template>

<script>
// Components
import Datepicker from 'vue-bulma-datepicker'
import Multiselect from 'vue-multiselect'

// Datepicker translation
import { pt } from 'flatpickr/dist/l10n/pt'

// Vuex helpers
import { mapActions, mapGetters } from 'vuex'

// Export the component
export default {
  name: 'list-form',
  components: {
    Datepicker,
    Multiselect
  },
  props: {
    data: {
      type: Object
    }
  },
  data () {
    return {
      usersLoading: false,
      datepickerConfig: {
        locale: pt,
        dateFormat: 'd/m/Y'
      }
    }
  },
  computed: {
    ...mapGetters(['currentUsers'])
  },
  methods: {
    //
    ...mapActions(['searchUsers']),
    // Search users
    async searchUsersAction (t) {
      // Reset the loading
      this.usersLoading = true

      // Wait the search
      await this.searchUsers(t)

      // Reset the loading
      this.usersLoading = false
    },
    //
    removeProduct (item) {
      // Remove the item from array
      this.data.products.splice(item, 1)
    },
    //
    addProduct (product) {
      //
      this.data.products.push(product)
    }
  }
}
</script>

<style lang="sass">
.list-form
  &__product-qty
    width: 100px
</style>
