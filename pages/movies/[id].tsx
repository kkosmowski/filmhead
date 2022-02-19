import Head from 'next/head';
import { Params } from 'next/dist/server/router';
import Link from 'next/link';

import Layout from 'components/Layout';
import { Movie, Person } from 'domain/movie.interface';
import getMovie from 'lib/movies/get-movie';
import fullName from 'utils/full-name';
import getPeople from 'lib/people/get-people';
import findMoviePeople from 'utils/find-movie-people.util';
import getRoute from 'utils/get-route';
import intersperse from 'utils/intersperse';
import toUpperCase from 'utils/to-upper-case';

interface DetailsProps {
  movie: Movie;
  people: Person[];
}

interface RouteParams {
  params: Params;
}

export const getServerSideProps = async ({ params }: RouteParams): Promise<{ props: DetailsProps }> => {
  const movie = await getMovie(params.id);

  return {
    props: {
      movie,
      people: await getPeople([...movie.directors, ...movie.cast]),
    }
  }
};

const Details = ({ movie, people }: DetailsProps) => {
  const [directors, cast] = findMoviePeople(movie, people);

  const personLink = (person: Person, addKey = true) => (
    <Link href={getRoute(person)} { ...(addKey ? { key: person.id } : {}) }>{ fullName(person) }</Link>
  );

  return (
    <Layout>
      <Head>
        <title>{ movie.title }</title>
      </Head>

      <article>
        <h1>{ movie.title }</h1>
        <p>
          { movie.description }
        </p>
        <ul>
          {
            directors.length === 1
              ? <li>Director: { personLink(directors[0]) }</li>
              : <li>Directors: { intersperse(directors.map(director => personLink(director)), ', ') }</li>
          }
          <li>Released: { movie.releaseDate }</li>
          <li>Genres: { movie.genres.map(toUpperCase).join(', ') }</li>
          <li>Staring:</li>
          <ul>
            { cast.map((actor) => (<li key={ actor.id }>{ personLink(actor, false) }</li>)) }
          </ul>
        </ul>
      </article>
    </Layout>
  );
};

export default Details;