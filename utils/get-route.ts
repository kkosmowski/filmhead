import { Movie, Person } from 'domain/movie.interface';

const getRoute = (item: any): string => {
  if (item === null || item === undefined) {
    throw new Error("Error [getRoute]: item is null or undefined");
  }
  if (!('id' in item)) {
    throw new Error("Error [getRoute]: item is missing id field");
  }

  if (isPerson(item)) return `/person/${ item.id }`;
  if (isMovie(item)) return `/movie/${ item.id }`;

  throw new Error("Error [getRoute]: unknown item type");
};

export default getRoute;

const isPerson = (item: any): item is Person => {
  const requiredKeys = ['firstName', 'lastName', 'birthday', 'gender'];
  return requiredKeys.every(key => key in item);
};

const isMovie = (item: any): item is Movie => {
  const requiredKeys = ['title', 'description', 'directors', 'genres', 'releaseDate', 'cast'];
  return requiredKeys.every(key => key in item);
};