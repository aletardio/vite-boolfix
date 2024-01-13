<script>

import { store } from '../store.js'
import CountryFlag from 'vue-country-flag-next'

export default {
    components: {
        CountryFlag
    },
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
                <div class="box-films" v-for="title, index in store.titles" :key="index">
                    <h4> {{ title.title }}</h4>
                    <p><strong>Titolo Originale:</strong> {{ title.original_title }}</p>
                    <div class="d-flex justify-content-center">
                        <country-flag v-if="title.original_language == 'en'" country='gb' size='normal'/>
                        <country-flag v-else :country=title.original_language size='normal'/>
                    </div>
                    <p><strong>Voto:</strong> {{ title.vote_average }}</p>
                </div>
            </div>
        </div>
    </main>
</template>
<style lang="scss" scoped>
    .box-films {
        width: calc(100% / 5 - 20px);
        margin: 10px;

        h4, p {
            text-align: center;
            color: #fff;
        }

        

    }
</style>