import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { MovieList } from './components/MovieList';
import { Podcasts } from './components/Podcasts';

function App() {
  return (
    <div>
      <Router>
        <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
          <div className="container">
            <h3 className="navbar-brand">The Joel Hilton Film Collection</h3>
            <div className="navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse">
              <ul className="navbar-nav flex-grow-1">
                <li className="nav-item">
                  <Link className="nav-link text-dark" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-dark" to="/movies">
                    Movie Catalog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-dark" to="/podcasts">
                    Podcasts
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/movies" Component={MovieList} />
          <Route path="/podcasts" Component={Podcasts} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
