<template>
  <div class="movies-container">
    <movie v-for="movie in movies" :key="movie.id" :movie="movie" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getData } from "@/api/service";
import { IMovieDbResult } from "@/api/movie-db-result";
import { IMovie } from "@/api/movie";
import MovieComponent from "@/components/Movie.vue";
import { MovieModule } from "@/store/movie.module";

@Component({
  components: {
    movie: MovieComponent,
  },
})
export default class Home extends Vue {
  get movies() {
    return MovieModule.getMovies;
  }
}
</script>
