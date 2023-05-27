import { Suspense } from 'react';
import { useEffect, useRef, useState } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import * as ApiServise from '../servises/Api';
import { MovieDetailsList, Loader } from 'components';

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
    <div>
      <Link to={baskLinkLocationRef.current}>
        <HiArrowNarrowLeft />
        Go Back
      </Link>
      <MovieDetailsList movie={movie} />

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
