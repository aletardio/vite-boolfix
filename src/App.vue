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

      console.log(this.store.search);

      let apiUrlMovie = this.store.endpointMovie;
      let apiUrlTv = this.store.endpointTv;

      apiUrlMovie += apiUrlTv;

      if(this.store.search !== '') {
        apiUrlMovie += `${this.store.search}`;
        apiUrlTv += `${this.store.search}`;
      }

      console.log(apiUrlMovie);

      axios.get(apiUrlMovie).then((response) => {
        console.log(response.data.results);
        this.store.titles = response.data.results;
      })
    }
  },
}
</script>
<template lang="">
  <div>
    <AppHeader @movie_searched = searchMovies />
    <AppMain />
  </div>
</template>
<style lang="scss">
@use './styles/generals.scss' as *;
@use './styles/partials/variables' as *;
</style>