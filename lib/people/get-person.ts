import { Person } from 'domain/movie.interface';
import { HttpService } from 'services/http.service';

const getPerson = async (id: string): Promise<Person> => HttpService.get<Person>(`/people/${ id }`);

export default getPerson;