import Head from 'next/head';
import { Params } from 'next/dist/server/router';

import Layout from 'components/Layout';
import { Movie, Person } from 'domain/movie.interface';
import fullName from 'utils/full-name';
import getPerson from 'lib/people/get-person';
import getMoviesWithDirector from 'lib/movies/get-movies-with-director';
import listMovies from 'utils/list-movies';

interface DetailsProps {
  director: Person;
  movies: Movie[];
}

interface RouteParams {
  params: Params;
}

export const getServerSideProps = async ({ params }: RouteParams): Promise<{ props: DetailsProps }> => {
  const director = await getPerson(params.id);

  return {
    props: {
      director,
      movies: await getMoviesWithDirector(director.id),
    }
  }
};

const Details = ({ director, movies }: DetailsProps) => {
  const directorName = fullName(director);

  return (
    <Layout>
      <Head>
        <title>{ directorName }</title>
      </Head>

      <article>
        <h1>{ directorName }</h1>

        <p>Movies directed:</p>
        <ul>
          { listMovies(movies) }
        </ul>
      </article>
    </Layout>
  );
};

export default Details;