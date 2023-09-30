import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { handleSearch } from 'components/api/api';

import { SearchForm } from 'components/searchForm/searchForm';
import { MovieList } from 'components/movieList/movieList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const currentQuery = searchParams.get('query');
    if (!currentQuery) return;

    const fetchMovieByQuery = async () => {
      try {
        const movieByQuery = await handleSearch(currentQuery);
        setMovies(movieByQuery);
        console.log(movieByQuery);
      } catch (e) {
        console.log(e);
      }
    };
    fetchMovieByQuery();
  }, [searchParams]);

  return (
    <>
      <SearchForm setSearchParams={setSearchParams} />
      {movies.length > 0 && <MovieList films={movies} />}
    </>
  );
};

export default Movies;
