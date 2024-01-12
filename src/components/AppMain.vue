<script>

import { store } from '../store.js'

export default {
    name: 'AppMain',

data() {
    return {
        store
    }
},

}
</script>
<template lang="">
    <main>
        <div class="container">
            <div class="row">
                <div v-for="movie, index in store.movies" :key="index">
                    <h2> {{ movie.title }}</h2>
                    <p><strong>Titolo Originale:</strong> {{ movie.original_title }}</p>
                    <p><strong>Lingua:</strong> {{ movie.original_language }}</p>
                    <p><strong>Voto:</strong> {{ movie.vote_average }}</p>
                </div>
            </div>
        </div>
    </main>
</template>
<style lang="scss" scoped>
    
</style>