import { reactive } from 'vue';

export const store = reactive ({
    endpointMovie:'https://api.themoviedb.org/3/search/movie?api_key=5ddd19924641e4849b05e5860d73e272&query=',
    endpointTv:'https://api.themoviedb.org/3/search/tv?api_key=5ddd19924641e4849b05e5860d73e272&query=',
    apiKey: '5ddd19924641e4849b05e5860d73e272',
    search:'',
    titles: []
})