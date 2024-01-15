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
        store,
        cardOne: "null"
    }
},
methods: {
    transformRating(rating) {
        const roundedRating = Math.ceil(rating / 2);
        const filledStars = (roundedRating);
        const emptyStars = (5 - roundedRating);

        const result = {filledStars:filledStars, emptyStars:emptyStars};

        return result;
    },
    flipCard(index,isOver) {
        this.cardOne = isOver ? index : null;
    }
},

}
</script>
<template lang="">
    <main>
        <div class="container-fluid">
            <div class="row">
                <div class="scene scene--card" v-for="title, index in store.titles" :key="index">
                    <!-- Flip Carte -->
                <div class="card"
                    @mouseover="flipCard(index, true)"
                    @mouseleave="flipCard(index, false)"
                    v-bind:class="{ flipme: cardOne == index }">

                    <!-- Card Retro -->
                    <div class="card__face card__face--back p-3"><h4> {{ title.title }}</h4>
                        <!-- Titolo -->
                    <div>{{ title.original_title }}</div>
                    <div class="d-flex justify-content-center py-2">
                        <!-- Titolo originale -->
                        <country-flag v-if="title.original_language == 'en'" country='gb' size='normal'/>
                        <country-flag v-else :country=title.original_language size='normal'/>
                    </div>
                    <!-- Descrizione -->
                    <div class="p-1"> {{ title.overview }} </div>
                    <!-- Voto -->
                    <div class="d-flex justify-content-center">
                        <div v-for="stars, index in transformRating(title.vote_average).filledStars":key="index">
                            <i class="text-light fa-solid fa-star"></i>
                        </div>
                        <div v-if="transformRating(title.vote_average).emptyStars > 0">
                            <div v-for="stars, index in transformRating(title.vote_average).emptyStars">
                                <i class=" text-light fa-regular fa-star"></i>
                            </div>
                        </div>
                    </div>
                </div>
                
                    <!-- Card Avanti -->
                    <div class="card__face card__face--front">
                        <!-- Cover -->
                        <img :src="store.cover + title.poster_path" alt="title.title">
                    </div>
                </div>
                </div>
                

            </div>
        </div>
    </main>
</template>
<style lang="scss" scoped>

    .scene {
        width: 20%;
        height: 475px;
        margin: 40px 0;
        perspective: 600px;
    }

    .card {
        width: 100%;
        height: 100%;
        transition: transform 1s;
        transform-style: preserve-3d;
        cursor: pointer;
        position: relative;
    }

    .card__face {
        position: absolute;
        width: 100%;
        height: 100%;
        color: white;
        text-align: center;
        font-weight: bold;
        font-size: 12px;
        backface-visibility: hidden;
    }

    .card__face--front {
        background-color: transparent;
        img {
            height: 100%;
            width: 100%;
            border-radius: 5px;
        }
    }

    .card__face--back {
        border-radius: 5px;
        background: #272626;
        transform: rotateY(180deg);
        overflow-y: auto;
    }

    /* this style is applied when the card is clicked */
    .flipme {
        transform: rotateY(180deg);
    }

</style>