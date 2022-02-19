import { Movie, Person, Occupation } from 'domain/movie.interface';

const getRoute = (item: any): string => {
  if (item === null || item === undefined) {
    throw new Error("Error [getRoute]: item is null or undefined");
  }
  if (!('id' in item)) {
    throw new Error("Error [getRoute]: item is missing id field");
  }

  if (isActor(item)) return `/actors/${ item.id }`;
  if (isDirector(item)) return `/directors/${ item.id }`;
  if (isMovie(item)) return `/movies/${ item.id }`;

  throw new Error("Error [getRoute]: unknown item type");
};

export default getRoute;

const isPerson = (item: any): item is Person => {
  const requiredKeys = ['firstName', 'lastName', 'birthday', 'gender', 'occupation'];
  return requiredKeys.every(key => key in item);
};

const isActor = (item: any): item is Person =>
  isPerson(item) && item.occupation === Occupation.Actor;

const isDirector = (item: any): item is Person =>
  isPerson(item) && item.occupation === Occupation.Director;

const isMovie = (item: any): item is Movie => {
  const requiredKeys = ['title', 'description', 'directors', 'genres', 'releaseDate', 'cast'];
  return requiredKeys.every(key => key in item);
};