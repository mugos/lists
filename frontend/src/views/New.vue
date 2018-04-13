<template>
  <section class="index-view__container">
    <actions name="Nova Lista" :actions="actions"></actions>

    <resource-form :save="save" :loading="loading" :resource="listsStructure">
      <template scope="props">
        <list-form :data="props.m"></list-form>
      </template>
    </resource-form>
  </section>
</template>

<script>
// Components
import ResourceForm from './../components/ResourceForm'
import Actions from './../components/Actions'
import ListForm from './../components/lists/Form'

// Vuex helpers
import { mapGetters, mapActions } from 'vuex'

// Export the view
export default {
  name: 'index-view',
  components: {
    Actions,
    ResourceForm,
    ListForm
  },
  methods: {
    ...mapActions(['getListsStructure']),
    save (item) {
      console.log(item)
      return true
    }
  },
  computed: {
    ...mapGetters(['listsStructure']),
    title () { return `Editando "${this.currentList.name}"` }
  },
  beforeMount () {
    // Set the current list
    this.getListsStructure()

    // Loding is over
    this.loading = false
  },
  data () {
    return {
      loading: true,
      actions: [{to: {name: 'list-index-view'}, name: 'Voltar'}]
    }
  }
}
</script>

<style lang="sass">
</style>
