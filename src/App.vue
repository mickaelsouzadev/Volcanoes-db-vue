<template>
  <div>
    <navigation></navigation>
    <router-view></router-view>
  </div>
</template>

<script>

import Navigation from './components/Navigation.vue'

export default {
  name: 'app',
  components: {
    Navigation
  }
}
</script>

<style>

</style>
