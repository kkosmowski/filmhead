import { FC } from 'react';
import { Typography } from '@mui/material';
import Link from 'next/link';

const Layout: FC = ({ children }) => {
  return (
    <div>
      <header>
        <Typography variant="h1" component="p">Filmhead</Typography>
        <nav>
          <Link href="movies">Movies</Link>
          <Link href="actors">Actors</Link>
          <Link href="directors">Directors</Link>
        </nav>
      </header>

      <main>{ children }</main>

      <hr />
      <footer>
        <p>All rights reserved</p>
        <p>kkosmowski &copy;{' '}{ new Date().getFullYear() }</p>
      </footer>
    </div>
  )
};

export default Layout;