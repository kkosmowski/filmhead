import { ReactElement } from 'react';
import Link from 'next/link';

import { Movie } from 'domain/movie.interface';
import getRoute from 'utils/get-route';

const listMovies = (movies: Movie[]): ReactElement[] => movies.map(movie => (
  <li key={ movie.id }>
    <Link href={ getRoute(movie) }>{ movie.title }</Link>
  </li>
));

export default listMovies;