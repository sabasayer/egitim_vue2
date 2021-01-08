<template>
  <div>
    <movie :movie="movie" />
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
export default class MovieDetail extends Vue {
  id: number = 0;

  get movie() {
    return MovieModule.getMovies.find((e) => e.id === this.id);
  }

  created() {
    this.id = +this.$route.params.id;
  }
}
</script>
