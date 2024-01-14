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

      const stars = '<i class="fa fa-star"></i>'.repeat(roundedRating);
      const emptyStars = '<i class="far fa-star"></i>'.repeat(5 - roundedRating);

      return stars + emptyStars;
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
                <!-- <div class="box-films" v-for="title, index in store.titles" :key="index">
                    <img :src="store.cover + title.poster_path" alt="">
                    <h4> {{ title.title }}</h4>
                    <div>{{ title.original_title }}</div>
                    <div class="d-flex justify-content-center">
                        <country-flag v-if="title.original_language == 'en'" country='gb' size='normal'/>
                        <country-flag v-else :country=title.original_language size='normal'/>
                    </div>
                    <div>{{ transformRating(title.vote_average) }}</div>
                </div> -->

                <div class="scene scene--card" v-for="title, index in store.titles" :key="index">
                <div class="card"
                    @mouseover="flipCard(index, true)"
                    @mouseleave="flipCard(index, false)"
                    v-bind:class="{ flipme: cardOne == index }">
                    <div class="card__face card__face--back p-2"><h4> {{ title.title }}</h4>
                    <div>{{ title.original_title }}</div>
                    <div class="d-flex justify-content-center py-2">
                        <country-flag v-if="title.original_language == 'en'" country='gb' size='normal'/>
                        <country-flag v-else :country=title.original_language size='normal'/>
                    </div>
                    <div class="p-1"> {{ title.overview }} </div>
                    <div>{{ transformRating(title.vote_average) }}</div></div>
                    <div class="card__face card__face--front"><img :src="store.cover + title.poster_path" alt=""></div>
                </div>
                </div>
                

            </div>
        </div>
    </main>
</template>
<style lang="scss" scoped>
    // .box-films {
    //     width: calc(100% / 5 - 20px);
    //     margin: 10px;

    //     h4, div {
    //         text-align: center;
    //         color: #fff;
    //     }
    // }

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
    }

    /* this style is applied when the card is clicked */
    .flipme {
    transform: rotateY(180deg);
    }

</style>