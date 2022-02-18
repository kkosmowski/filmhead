import Head from 'next/head';
import { Params } from 'next/dist/server/router';

import Layout from 'components/Layout';
import { Movie, Person } from 'domain/movie.interface';
import getMovie from 'lib/movies/get-movie';
import fullName from 'utils/full-name';
import getPeople from 'lib/people/get-people';
import findMoviePeople from 'utils/find-movie-people.util';

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
              ? <li>Director: { fullName(directors[0]) }</li>
              : <li>Directors: { directors.map(fullName).join(', ') }</li>
          }
          <li>Released: { movie.releaseDate }</li>
          <li>Genres: { movie.genres.join(', ') }</li>
          <li>Staring:</li>
          <ul>
            { cast.map((actor) => (<li key={ actor.id }>{ fullName(actor) }</li>)) }
          </ul>
        </ul>
      </article>
    </Layout>
  );
};

export default Details;