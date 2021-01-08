import { IMovie } from "@/api/movie";
import {
  getModule,
  Module,
  Mutation,
  VuexModule,
} from "vuex-module-decorators";
import store from ".";
import Vue from "vue";

@Module({
  dynamic: true,
  store: store,
  namespaced: true,
  name: "movie",
})
class Movie extends VuexModule {
  private movies: IMovie[] = [];
  private favorites: IMovie[] = [];
  private scores: Record<number, number> = {};

  get getFavorites() {
    return this.favorites;
  }

  get getMovies() {
    return this.movies;
  }

  get score() {
    return (id: number) => this.scores[id];
  }

  @Mutation
  addFavorite(favorite: IMovie) {
    this.favorites.push(favorite);
  }

  @Mutation
  setMovies(movies: IMovie[]) {
    this.movies = movies;
  }

  @Mutation
  removeFavorite(id: number) {
    const index = this.favorites.findIndex((e) => e.id === id);
    if (~index) this.favorites.splice(index, 1);
  }

  @Mutation
  setScore(data: { id: number; score: number }) {
    Vue.set(this.scores, data.id, data.score);
  }
}

export const MovieModule = getModule(Movie);
