import { Suspense, useEffect, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { fetchMovieDetails } from 'components/api/api';
import {
  FilmWrapper,
  StyledList,
  ListItem,
  FilmTitle,
  FilmDescr,
  GoBackLink,
  FilmSubTitle,
  StyledListDescr,
} from './MoviesDetails.module';

const MoviesDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/movies';
  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        const movieById = await fetchMovieDetails(movieId);
        setMovie(movieById);
      } catch (e) {
        console.log(e);
      }
    };
    fetchMovieById();
  }, [movieId]);
  if (!movie) return;
  return (
    <>
      <GoBackLink>
        <Link to={backLinkHref}>
          Go back<span>.</span>
        </Link>
      </GoBackLink>
      <FilmWrapper>
        <div>
          <FilmTitle>{movie.original_title}</FilmTitle>
          <FilmSubTitle>Rating: {Math.round(movie.vote_average)}</FilmSubTitle>
          <FilmSubTitle>Overview</FilmSubTitle>
          <FilmDescr>{movie.overview}</FilmDescr>
          <FilmSubTitle>Genres</FilmSubTitle>
          <StyledListDescr>
            {movie.genres?.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </StyledListDescr>
        </div>
      </FilmWrapper>
      <div>
        <h2>Additional information</h2>
        <StyledList>
          <ListItem>
            <NavLink to="cast" state={location.state}>
              Cast<span>.</span>
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="reviews" state={location.state}>
              Reviews<span>.</span>
            </NavLink>
          </ListItem>
        </StyledList>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default MoviesDetails;
