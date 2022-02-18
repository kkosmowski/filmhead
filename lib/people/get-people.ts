import { Person } from 'domain/movie.interface';
import { HttpService } from 'services/http.service';

const getPeople = async (ids: number[]): Promise<Person[]> => {
  if (ids.length === 0) {
    throw new Error('getPeople: List of ids cannot be empty');
  }
  const queryParams = `?id=${ ids.join('&id=') }`;
  return HttpService.get<Person[]>(`/people/${ queryParams }`);
};

export default getPeople;