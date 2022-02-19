import Head from 'next/head';
import { Params } from 'next/dist/server/router';
import { Typography } from '@mui/material';

import Layout from 'components/Layout';
import { Movie, Person } from 'domain/movie.interface';
import toUpperCase from 'utils/to-upper-case';
import getAllPeople from 'lib/people/get-all-people';
import getAllMovies from 'lib/movies/get-all-movies';
import listMovieDirectors from 'utils/list-movie-directors';
import { CommonTable, CommonTableHeading } from 'components/CommonTable';
import getMovieTitleLink from 'utils/get-movie-title-link';

interface IndexProps {
  movies: Movie[];
  people: Person[];
}

interface RouteParams {
  params: Params;
}

export const getServerSideProps = async (): Promise<{ props: IndexProps }> => {

  return {
    props: {
      movies: await getAllMovies(),
      people: await getAllPeople(),
    }
  }
};

const Index = ({ movies, people }: IndexProps) => (
  <Layout>
    <Head>
      <title>All movies</title>
    </Head>

    <article>
      <h1>Browse movies</h1>
      <CommonTable>
        <tr>
          <CommonTableHeading>Title</CommonTableHeading>
          <CommonTableHeading>Year</CommonTableHeading>
          <CommonTableHeading>Genres</CommonTableHeading>
          <CommonTableHeading>Directed by</CommonTableHeading>
        </tr>

        { movies.map(movie => (
          <tr key={ movie.id }>
            <td>
              <Typography variant="body1" component="h2">{ getMovieTitleLink(movie) }</Typography>
            </td>
            <td>
              { new Date(movie.releaseDate).getFullYear() }
            </td>
            <td>
              { movie.genres.map(toUpperCase).join(', ') }
            </td>
            <td>
              { listMovieDirectors(movie, people) }
            </td>
          </tr>
        ))}
      </CommonTable>
    </article>
  </Layout>
);

export default Index;