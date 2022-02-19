import { ReactElement } from 'react';

import { Movie } from 'domain/movie.interface';
import getMovieTitleLink from 'utils/get-movie-title-link';

const listMovies = (movies: Movie[]): ReactElement[] => movies.map(movie => (
  <li key={ movie.id }>
    { getMovieTitleLink(movie) }
  </li>
));

export default listMovies;