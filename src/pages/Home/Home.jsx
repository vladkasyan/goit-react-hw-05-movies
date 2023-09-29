import { useEffect, useState } from 'react';

import { fetchTrendingMovies } from 'components/api/api';

import { MovieList } from 'components/movieList/movieList';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies('').then(setMovies);
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <MovieList movies={movies} />
    </>
  );
};
