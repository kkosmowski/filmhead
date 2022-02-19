import { Movie } from 'domain/movie.interface';
import { HttpService } from 'services/http.service';

/*
  Currently, the best JSON-Server is able to do is to find entities with value "like" the value provided.
  This means, that for directorId = 2 it will find movies with directorId "2", but also "12", "22" and so on.
  This still narrows potential movies a lot, so it is used with array filter method for precise result.
 */
const getMoviesWithDirector = async (actorId: number): Promise<Movie[]> => {
  const movies = await HttpService.get<Movie[]>(`/movies?directors_like=${ actorId }`);
  return movies.filter((movie) => movie.directors.includes(actorId));
};

export default getMoviesWithDirector;
