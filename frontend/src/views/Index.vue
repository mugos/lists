<template>
  <section class="index-view__container">
    <actions name="Listas" :actions="actions"></actions>
    <resource-table :loading="loading" :data="lists" :columns="cols" :actions="rowActions" v-on:destroy="destroy"></resource-table>
  </section>
</template>

<script>
// Components
import ResourceTable from './../components/ResourceTable'
import Actions from './../components/Actions'

// Vuex helpers
import { mapGetters, mapActions } from 'vuex'

// Export the view
export default {
  name: 'index-view',
  components: {
    Actions,
    ResourceTable
  },
  methods: {
    ...mapActions(['getLists']),
    //
    destroy (item) {
      console.log(item)
    }
  },
  computed: {
    ...mapGetters(['lists'])
  },
  //
  async beforeMount () {
    // Get the lists
    await this.getLists()

    // Loading is over
    this.loading = false
  },
  data () {
    return {
      loading: true,
      actions: [{to: {name: 'new-list-view'}, name: 'Novo', classes: 'is-info'}],
      rowActions: [
        {to: 'edit-list-view', name: 'edit', display: 'Editar'},
        {name: 'destroy', display: 'Excluir', classes: 'is-danger'}
      ],
      rows: [{ id: 1, name: 'Lista 1' }, { id: 2, name: 'Lista 2' }],
      cols: {name: 'Nome', oficial: 'Oficial'}
    }
  }
}
</script>

<style lang="sass">
</style>
