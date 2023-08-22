import { BrowserRouter, Link } from 'react-router-dom';
import Pages from './pages/Pages';
import Category from './components/Category';
import Search from './components/Search';
import styled from 'styled-components';
import { GiKnifeFork } from 'react-icons/gi';

function App() {
  return (
    <div className="App container mx-auto">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo className='pl-3' to={'/'} >Recpies!</Logo>
        </Nav>

        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-dectoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Lobster Two', cursive;
`;

const Nav = styled.div`
  padding: 4rem 0;
  display: flex;
  justify-content: flex-center;
  align-items: center;

  svg {
    font-size: 2rem;
  }
`;

export default App;