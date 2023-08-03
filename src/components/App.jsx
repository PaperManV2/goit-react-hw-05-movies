import React, { Suspense, lazy } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import FallBack from './FallBack/FallBack';
import styles from './App.module.css';

const Home = lazy(() => import('./Home/Home'));
const Movies = lazy(() => import('./Movies/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

const App = () => {
  return (
    <div>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <NavLink to="/" activeclassname={styles.active}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" activeclassname={styles.active}>
              Search Movies
            </NavLink>
          </li>
        </ul>
      </nav>
      <FallBack />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
