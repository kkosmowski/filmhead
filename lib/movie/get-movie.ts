import { Movie } from 'domain/movie.interface';
import { HttpService } from 'services/http.service';

const getMovie = async (id: string): Promise<Movie> => HttpService.get<Movie>(`/movies/${ id }`);

export default getMovie;