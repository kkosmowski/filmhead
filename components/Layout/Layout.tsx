import { FC } from 'react';

const Layout: FC = ({ children }) => {
  return (
    <div>
      <header>header</header>
      
      <main>{ children }</main>
      
      <footer>footer</footer>
    </div>
  )
};

export default Layout;