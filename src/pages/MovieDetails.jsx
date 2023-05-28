import { Suspense } from 'react';
import { useEffect, useRef, useState } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import * as ApiServise from '../servises/Api';
import { MovieDetailsList, GoBack, Loader } from 'components';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const baskLinkLocationRef = useRef(location.state?.from);

  useEffect(() => {
    ApiServise.getMovieDetails(movieId)
      .then(movie => setMovie(movie))
      .catch(err => console.error(err));
  }, [movieId]);

  if (!movie) {
    return;
  }

  return (
    <>
      <GoBack path={baskLinkLocationRef.current} />
      <MovieDetailsList movie={movie} />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
