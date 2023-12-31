import { Link, Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import {QueryClientProvider, QueryClient} from "react-query"
import './App.css';
import HomePage from './components/HomePage';
import SuperHeroesPage from './components/SuperHeroesPage';
import RQSuperHeroesPage from './components/RQSuperHeroesPage';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/" >Home</Link>
              </li>
              <li>
                <Link to="/super-heroes" >Traditional Super Heroes</Link>
              </li>
              <li>
                <Link to="/rq-super-heroes" >RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element= {<HomePage />} />
            <Route path="/super-heroes" element={<SuperHeroesPage />} />
            <Route path="/rq-super-heroes" element={<RQSuperHeroesPage />} />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
