import { Movie, Person } from 'domain/movie.interface';

const findMoviePeople = (movie: Movie, peopleArray: Person[]): [Person[], Person[]] => {
  const people = [...peopleArray];

  const findPersonAndSpliceIt = (id: number): Person => {
    const indexOf = people.findIndex((person) => person.id === id);
    return people.splice(indexOf, 1)[0];
  }

  const directors = movie.directors.map(findPersonAndSpliceIt);
  const cast = movie.cast.map(findPersonAndSpliceIt);

  return [directors, cast];
};

export default findMoviePeople;