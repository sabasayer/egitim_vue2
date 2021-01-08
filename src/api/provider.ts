import { movieModule } from "@/module";
import { CoreProvider, inject } from "@sabasayer/module.core";
import { movieDbAppKey } from "./api.const";
import { IMovieDbResult } from "./movie-db-result";

@inject.provider()
export class MovieProdiver extends CoreProvider {
  private readonly baseUrl: string = `discover/movie?api_key=${movieDbAppKey}`;

  async getMovies(raceId: string) {
    return this.get<IMovieDbResult>(
      `${this.baseUrl}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`,
      { raceId }
    );
  }
}
