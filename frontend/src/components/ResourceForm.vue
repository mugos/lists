<template>
  <section class="resource-form__content">
    <transition name="slide-fade" mode="out-in">
      <section v-if="error" class="notification is-danger">
        Erro ao salvar
      </section>
      <section v-if="success" class="notification is-success">
        Salvo com sucesso
      </section>
    </transition>

    <transition name="slide-fade" mode="out-in">
      <form v-if="!loading" @submit.prevent="submit">
        <slot :m="modifier"></slot>
        <p class="control is-left">
          <button type="submit" class="button is-medium is-info">Salvar</button>
          <router-link v-if="cancelLink" class="button is-medium is-link" :to="cancelLink">Cancelar</router-link>
        </p>
      </form>
      <section v-else class="notification is-info">
        Carregando...
      </section>
    </transition>
  </section>
</template>

<script>
//
export default {
  name: 'resource-form',
  props: {
    // Check if the resource is being loading
    loading: {
      type: Boolean,
      default: true
    },
    // Resource being edited/created
    resource: {
      type: Object
    },
    // Cancel link
    cancelLink: {
      type: Object
    },
    // Save function
    save: {
      type: Function,
      // Empty function
      default: () => false
    }
  },
  data () {
    // Data that the user edited and will eventually save
    return {
      modifier: {},
      error: false,
      success: false
    }
  },
  methods: {
    //
    setModifier () {
      if (this.resource !== undefined && this.resource !== null) {
        // Push the value to the resource
        this.modifier = Object.assign({}, this.resource)
      }
    },
    submit () {
      // Save it
      let res = this.save(this.modifier)

      //
      this.error = !res
      this.success = res
    }
  },
  watch: {
    // this.resource
    resource () {
      // Refresh the modifier
      this.setModifier()
    }
  },
  //
  created () {
    // Lets try to set the modifier
    this.setModifier()
  }
}
</script>

<style lang="sass">
</style>
