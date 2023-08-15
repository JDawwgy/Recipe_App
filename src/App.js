// Tutorial Link https://www.youtube.com/watch?v=xc4uOzlndAk
// Left off at Time: 1:13:00

import { BrowserRouter } from 'react-router-dom';
import Pages from './pages/Pages';
import Category from './components/Category';

function App() {
  return (
    <div className="App container mx-auto">
      <BrowserRouter>
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
