// Tutorial Link https://www.youtube.com/watch?v=xc4uOzlndAk
// Left off at Time: 1:55:00

import { BrowserRouter } from 'react-router-dom';
import Pages from './pages/Pages';
import Category from './components/Category';
import Search from './components/Search';

function App() {
  return (
    <div className="App container mx-auto">
      <BrowserRouter>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App; 