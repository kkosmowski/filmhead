import { Movie } from 'domain/movie.interface';
import { HttpService } from 'services/http.service';

/*
  Currently, the best JSON-Server is able to do is to find entities with value "like" the value provided.
  This means, that for actorId = 2 it will find movies with actorId "2", but also "12", "22" and so on.
  This still narrows potential movies a lot, so it is used with array filter method for precise result.
 */
const getMoviesWithActor = async (actorId: number): Promise<Movie[]> => {
  const movies = await HttpService.get<Movie[]>(`/movies?cast_like=${ actorId }`);
  return movies.filter((movie) => movie.cast.includes(actorId));
};

export default getMoviesWithActor;
