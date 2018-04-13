<template>
  <section id="app" class="app__container">
    <section class="section">
      <section class="container">
        <transition name="slide-fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </section>
    </section>

    <default-footer v-once></default-footer>
  </section>
</template>

<script>
// Components
import DefaultFooter from './components/DefaultFooter'

// Export the component
export default {
  name: 'app',
  components: {
    DefaultFooter
  }
}
</script>

<style lang="sass">
// Import Bulma
@import "~bulma"

// Transition definition
.slide-fade
  &-enter-active
    transition: all 0.2s ease
  &-leave-active
    transition: all 0.1s cubic-bezier(1.0, 0.5, 0.8, 1.0)
  &-enter, &-leave-active
    padding-left: 10px
    opacity: 0
</style>
