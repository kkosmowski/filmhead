import { Movie, Occupation, Person } from 'domain/movie.interface';
import intersperse from 'utils/intersperse';
import fullName from 'utils/full-name';

const listMovieDirectors = (movie: Movie, people: Person[]): string | string[] => {
  const directors = people.filter(person => person.occupation === Occupation.Director);

  const getFullNameFromId = id => fullName(directors.find(director => director.id === id));

  if (movie.directors.length === 1) {
    return getFullNameFromId(movie.directors[0]);
  }

  const movieDirectors = movie.directors.map(getFullNameFromId);
  return intersperse(movieDirectors, ', ');
};

export default listMovieDirectors;