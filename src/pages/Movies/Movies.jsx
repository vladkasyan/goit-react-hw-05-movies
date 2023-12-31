import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { handleSearch } from 'components/api/api';

import { SearchForm } from 'components/searchForm/searchForm';
import { MovieList } from 'components/movieList/movieList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentQuery = searchParams.get('query');
  const [, setLoading] = useState(false);

  const handleSubmit = query => {
    setSearchParams({ query });
  };

  useEffect(() => {
    if (!currentQuery) return;

    const fetchMovieByQuery = async () => {
      try {
        setLoading(true);
        const movieByQuery = await handleSearch(currentQuery);
        setMovies(movieByQuery);
        console.log(movieByQuery);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieByQuery();
  }, [currentQuery]);

  return (
    <>
      <SearchForm value={currentQuery} setSearchParams={handleSubmit} />
      {movies.length > 0 && <MovieList movies={movies} />}
    </>
  );
};

export default Movies;
