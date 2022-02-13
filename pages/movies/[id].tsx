import Head from 'next/head';
import { Params } from 'next/dist/server/router';

import Layout from 'components/Layout/Layout';
import { Movie } from 'domain/movie.interface';
import getMovie from 'lib/movie/get-movie';

interface DetailsProps {
  movie: Movie;
}

interface RouteParams {
  params: Params;
}

export const getServerSideProps = async ({ params }: RouteParams): Promise<{ props: DetailsProps }> => ({
  props: {
    movie: await getMovie(params.id)
  }
});

const Details = ({ movie }: DetailsProps) => {
  return (
    <Layout>
      <Head>
        <title>{ movie.title }</title>
      </Head>

      <article>
        <h1>{ movie.title }</h1>
      </article>
    </Layout>

  );
};

export default Details;