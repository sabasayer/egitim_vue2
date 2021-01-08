<template>
  <div @click="goToDetail" class="movie-card">
    <div class="movie-card__poster">
      <img :src="src" />
    </div>
    <div class="movie-card__title">{{ movie.title }}</div>
    <div class="movie-card__footer">
      <span>Vote:{{ movie.vote_count }}</span>
      <span class="flex-grow">Avarage:{{ movie.vote_average }}</span>
    </div>
    <div class="movie-card__date">
      {{ movie.release_date }}
    </div>
    <div class="movie-card__actions">
      <select name="score" id="score" :value="score" @input="setScore">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5 </option>
      </select>
      <button
        class="favorite-button"
        @click="toggleFavorite"
        :class="{ favorite: isFavorite }"
      >
        {{ toggleFavoriteButtonText }}
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { IMovie } from "@/api/movie";
import { Component, Prop, Vue } from "vue-property-decorator";
import { MovieModule } from "@/store/movie.module";

@Component
export default class MovieComponent extends Vue {
  @Prop() readonly movie?: IMovie;

  get src() {
    return `https://image.tmdb.org/t/p/w200${this.movie?.poster_path}`;
  }

  get isFavorite() {
    return MovieModule.getFavorites.some((e) => e.id === this.movie?.id);
  }

  get toggleFavoriteButtonText() {
    return this.isFavorite ? "Favoriden Çıkar" : "Favoriye Ekle";
  }

  get score() {
    return MovieModule.score(this.movie?.id ?? 0);
  }

  toggleFavorite() {
    if (!this.movie) return;

    if (this.isFavorite) MovieModule.removeFavorite(this.movie.id);
    else MovieModule.addFavorite(this.movie);
  }

  setScore(value: InputEvent) {
    if (!this.movie) return;

    const score = +(value.target as HTMLInputElement).value;

    MovieModule.setScore({ id: this.movie.id, score });
  }

  goToDetail() {
    if (this.$route.name === "movie") return;

    this.$router.push({ name: "movie", params: { id: this.movie?.id + "" } });
  }
}
</script>
<style lang="scss">
.favorite-button {
  border: none;
  padding: 5px;
  cursor: pointer;
  &:hover {
    background: #999;
  }

  &.favorite {
    background: red;
    color: white;
  }
}
</style>
