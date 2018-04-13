<template>
  <section class="resource-table__container">
    <section class="resource-table__overflow">
      <table class="table is-striped is-narrow">
        <thead class="resource-table__header">
          <tr>
            <th v-for="(display, name) in columns">{{ display }}</th>
            <th v-if="actions.length > 0"></th>
          </tr>
        </thead>
        <tbody v-if="data.length > 0" class="resource-table__content">
          <tr class="resource-table__item" v-for="i in data">
            <td v-for="(display, name) in columns">{{ i[name] }}</td>
            <td v-if="actions.length > 0" class="has-text-right">
              <template v-for="action in actions">
                <router-link v-if="action.to !== undefined" :to="{name: action.to, params: {id: i.id}}" class="button is-info resource-table__action-item">{{ action.display }}</router-link>
                <button v-else @click="emitEvent(action.name, i)" :class="['button resource-table__action-item', action.classes ? action.classes : '']">{{ action.display }}</button>
              </template>
            </td>
          </tr>
        </tbody>
        <tbody v-else-if="loading" class="resource-table__content">
          <tr>
            <td :colspan="columns.length">Carregando...</td>
          </tr>
        </tbody>
        <tbody v-else class="resource-table__content">
          <tr>
            <td :colspan="columns.length">Nenhum encontrado</td>
          </tr>
        </tbody>
      </table>
    </section>
  </section>
</template>

<script>
//
export default {
  name: 'resource-table',
  // Component properties
  props: {
    // Columns
    columns: {
      type: Object,
      required: true
    },
    // Data
    data: {
      type: Array,
      required: true
    },
    // Loading flag
    loading: {
      type: Boolean,
      default: true
    },
    // Actions
    actions: {
      type: Array,
      default () {
        return []
      }
    }
  },
  //
  methods: {
    //
    emitEvent (name, item) {
      // Emit it
      this.$emit(name, item)
    }
  }
}
</script>

<style lang="sass">
.resource-table
  &__action-item
    margin: 0 0 0 5px
</style>
