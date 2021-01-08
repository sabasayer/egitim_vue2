<template>
  <div class="movies-container">
    <movie v-for="movie in movies" :key="movie.id" :movie="movie" />
  </div>
</template>
<script lang="ts">
import MovieComponent from "@/components/Movie.vue";
import { MovieModule } from "@/store/movie.module";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {
    movie: MovieComponent,
  },
})
export default class FavoritesComponent extends Vue {
  get movies() {
    return MovieModule.getFavorites;
  }
}
</script>
