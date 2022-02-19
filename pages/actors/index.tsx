import Head from 'next/head';
import { Params } from 'next/dist/server/router';
import { Link, Typography } from '@mui/material';

import Layout from 'components/Layout';
import { Person } from 'domain/movie.interface';
import toUpperCase from 'utils/to-upper-case';
import { CommonTable, CommonTableHeading } from 'components/CommonTable';
import getActors from 'lib/people/get-actors';
import fullName from 'utils/full-name';
import getRoute from 'utils/get-route';
import calculateAgeFromDateString from 'utils/calculate-age-from-date-string';

interface IndexProps {
  actors: Person[];
}

interface RouteParams {
  params: Params;
}

export const getServerSideProps = async (): Promise<{ props: IndexProps }> => {

  return {
    props: {
      actors: await getActors(),
    }
  }
};

const Index = ({ actors }: IndexProps) => (
  <Layout>
    <Head>
      <title>All actors</title>
    </Head>

    <article>
      <h1>Browse actors</h1>
      <CommonTable>
        <tr>
          <CommonTableHeading>Name</CommonTableHeading>
          <CommonTableHeading>Gender</CommonTableHeading>
          <CommonTableHeading>Age</CommonTableHeading>
        </tr>

        { actors.map(actor => (
          <tr key={ actor.id }>
            <td>
              <Typography variant="body1" component="h2">
                <Link href={ getRoute(actor) }>{ fullName(actor) }</Link>
              </Typography>
            </td>
            <td>
              { toUpperCase(actor.gender) }
            </td>
            <td>
              { calculateAgeFromDateString(actor.birthday) }
            </td>
          </tr>
        ))}
      </CommonTable>
    </article>
  </Layout>
);

export default Index;