import { IMovie } from "./movie";

export interface IMovieDbResult {
  page: number;
  total_page: number;
  total_results: number;
  results: IMovie[];
}
