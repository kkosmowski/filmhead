import { Movie, Person } from 'domain/movie.interface';

const findMoviePeople = (movie: Movie, peopleArray: Person[]): [Person[], Person[]] => {
  const ids = [...movie.directors, ...movie.cast];
  const people = [...peopleArray];

  for (let i = 0; i < ids.length; i++) {
    const indexOf = people.findIndex((person) => person.id === ids[i]);
  }

  // @todo continue

  return [[], []];
};

export default findMoviePeople;