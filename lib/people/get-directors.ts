import { Person } from 'domain/movie.interface';
import { HttpService } from 'services/http.service';

const getDirectors = async (): Promise<Person[]> =>
  HttpService.get<Person[]>('/people?occupation=director');

export default getDirectors;