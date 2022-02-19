import Head from 'next/head';
import { Params } from 'next/dist/server/router';

import Layout from 'components/Layout';
import { Movie, Person } from 'domain/movie.interface';
import fullName from 'utils/full-name';
import getPerson from 'lib/people/get-person';
import getMoviesWithActor from 'lib/movies/get-movies-with-actor';
import listMovies from 'utils/list-movies';

interface DetailsProps {
  actor: Person;
  movies: Movie[];
}

interface RouteParams {
  params: Params;
}

export const getServerSideProps = async ({ params }: RouteParams): Promise<{ props: DetailsProps }> => {
  const actor = await getPerson(params.id);

  return {
    props: {
      actor,
      movies: await getMoviesWithActor(actor.id),
    }
  }
};

const Details = ({ actor, movies }: DetailsProps) => {
  const actorName = fullName(actor);

  return (
    <Layout>
      <Head>
        <title>{ actorName }</title>
      </Head>

      <article>
        <h1>{ actorName }</h1>

        <p>Played in:</p>
        <ul>
          { listMovies(movies) }
        </ul>
      </article>
    </Layout>
  );
};

export default Details;