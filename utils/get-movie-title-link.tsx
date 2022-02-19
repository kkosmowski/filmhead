import Link from 'next/link';

import getRoute from 'utils/get-route';
import { Movie } from 'domain/movie.interface';

const getMovieTitleLink = (movie: Movie) => (<Link href={ getRoute(movie) }>{ movie.title }</Link>);

export default getMovieTitleLink;