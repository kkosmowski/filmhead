import Head from 'next/head';
import { Params } from 'next/dist/server/router';

import Layout from 'components/Layout';
import { Movie, Person } from 'domain/movie.interface';
import getMovie from 'lib/movies/get-movie';
import fullName from 'utils/full-name';
import getPerson from 'lib/people/get-person';

interface DetailsProps {
  person: Person;
}

interface RouteParams {
  params: Params;
}

export const getServerSideProps = async ({ params }: RouteParams): Promise<{ props: DetailsProps }> => ({
  props: {
    person: await getPerson(params.id)
  }
});

const Details = ({ person }: DetailsProps) => {
  return (
    <Layout>
      {/*<Head>*/ }
      {/*  <title>{ movie.title }</title>*/ }
      {/*</Head>*/ }

      {/*<article>*/ }
      {/*  <h1>{ movie.title }</h1>*/ }
      {/*  <p>*/ }
      {/*    { movie.description }*/ }
      {/*  </p>*/ }
      {/*  <ul>*/ }
      {/*    {*/ }
      {/*      movie.directors.length === 1*/ }
      {/*        ? <li>Director: { fullName(movie.directors[0]) }</li>*/ }
      {/*        : <li>Directors: { movie.directors.map(fullName).join(', ') }</li>*/ }
      {/*    }*/ }
      {/*    <li>Released: { movie.releaseDate }</li>*/ }
      {/*    <li>Genres: { movie.genres.join(', ') }</li>*/ }
      {/*    <li>Staring:</li>*/ }
      {/*    <ul>*/ }
      {/*      { movie.staring.map((actor) => (<li key={ actor.id }>{ fullName(actor) }</li>)) }*/ }
      {/*    </ul>*/ }
      {/*  </ul>*/ }
      {/*</article>*/ }
    </Layout>
  );
};

export default Details;