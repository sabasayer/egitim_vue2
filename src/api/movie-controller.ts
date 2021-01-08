import { IController, inject } from "@sabasayer/module.core";
import { MovieProdiver } from "./provider";

@inject.controller({ provider: MovieProdiver })
export class MovieController implements IController {
  constructor(private provider: MovieProdiver) {}

  async get(raceId: string) {
    return this.provider.getMovies(raceId);
  }
}
