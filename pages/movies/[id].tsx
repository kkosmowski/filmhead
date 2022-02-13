import Head from 'next/head';
import { Params } from 'next/dist/server/router';

import Layout from 'components/Layout';
import { Movie } from 'domain/movie.interface';
import getMovie from 'lib/movie/get-movie';
import fullName from 'utils/full-name';

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
        <p>
          { movie.description }
        </p>
        <ul>
          {
            movie.directors.length === 1
              ? <li>Director: { fullName(movie.directors[0]) }</li>
              : <li>Directors: { movie.directors.map(fullName).join(', ') }</li>
          }
          <li>Released: { movie.releaseDate }</li>
          <li>Genres: { movie.genres.join(', ') }</li>
          <li>Staring:</li>
          <ul>
            { movie.staring.map((actor) => (<li key={ actor.id }>{ fullName(actor) }</li>)) }
          </ul>
        </ul>
      </article>
    </Layout>
  );
};

export default Details;