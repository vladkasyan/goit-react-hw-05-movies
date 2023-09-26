import React, { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Layout } from './layout/layout';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MoviesDetails/MoviesDetails'));
const Cast = lazy(() => import('../components/cast/cast'));
const Reviews = lazy(() => import('../components/reviews/reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
