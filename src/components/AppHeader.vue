<script>

import { store } from "../store";

export default {
    name: 'AppHeader',
    data() {
        return {
            store
        }
    },
}
</script>
<template lang="">
    <header>
        <div class="container-fluid">
            <div class="row">
                <div class="col-9 d-flex align-items-center py-4">
                    <h1>Boolflix</h1>
                </div>
                <div class="col-3 d-flex align-items-center justify-content-end">
                    <div class="input-group mb-3">
                        <input v-model="store.search" type="text" class="form-control" placeholder="Titoli, persone, generi" aria-label="Titoli, persone, generi" aria-describedby="button-addon2">
                        <button @keyup.enter="searchMovies()" class="btn btn-danger" type="button" id="button-addon2" @change="$emit('movie_searched')">Cerca</button>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss' as *;
@use '../styles/partials/variables' as *;

    h1{
        font-family: 'Bebas Neue', sans-serif;
        font-size: 50px;
        color: #E50815;
        padding: 5px 0;
    }

    .input-group.mb-3 {
    width: 75%;

    button#button-addon2 {
    background-color: #E50815;
    }
    }

</style>