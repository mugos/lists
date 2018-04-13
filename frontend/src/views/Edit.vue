<template>
  <section class="index-view__container">
    <actions :name="title" :actions="actions"></actions>

    <resource-form :save="save" :loading="loading" :resource="currentList">
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
    ...mapActions(['setCurrentList']),
    save (item) {
      console.log(item)
      return true
    }
  },
  computed: {
    ...mapGetters(['currentList']),
    title () { return `Editando "${this.currentList.name}"` }
  },
  beforeMount () {
    // Set the current list
    this.setCurrentList(this.$route.params.id)

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
