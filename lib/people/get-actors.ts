import { Person } from 'domain/movie.interface';
import { HttpService } from 'services/http.service';

const getActors = async (): Promise<Person[]> =>
  HttpService.get<Person[]>('/people?occupation=actor');

export default getActors;