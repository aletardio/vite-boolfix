<script>

import AppHeader from './components/AppHeader.vue';
import { store } from './store.js'

export default {
  components: {
    AppHeader
  },
  data() {
    return {
      store
    }
  },
}
</script>
<template lang="">
  <div>
    
  </div>
</template>
<style lang="scss">
  @use './styles/generals.scss' as *;
  @use './styles/partials/variables' as *;
</style>