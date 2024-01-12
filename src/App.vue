<script>

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

import axios from 'axios';
import { store } from './store.js'

export default {
  components: {
    AppHeader,
    AppMain
  },
  data() {
    return {
      store
    }
  },
  created() {
    this.searchMovies();
  },
  methods: {
    searchMovies() {
      axios.get(this.store.endpointMovie).then((response) => {
        this.store.movies = response.data.results;
      })
    }
  },
}
</script>
<template lang="">
  <div>
    <AppHeader />
    <AppMain @movie_searched = searchMovies />
  </div>
</template>
<style lang="scss">
@use './styles/generals.scss' as *;
@use './styles/partials/variables' as *;
</style>