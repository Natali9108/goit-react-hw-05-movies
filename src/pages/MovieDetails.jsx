import { Suspense } from 'react';
import { useEffect, useRef, useState } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import * as ApiServise from '../servises/Api';

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

      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <h2>
        {movie.title} ({movie.release_date.slice(0, 4)})
      </h2>
      <ul>
        <li>
          <p>User Score: {movie.vote_average * 10}%</p>
        </li>
        <li>
          <p>
            <span>Overview {movie.overview}</span>
          </p>
        </li>
        <li>
          <span>Genres </span>
          <p>{movie.genres.map(el => el.name).join('  ')}</p>
        </li>
      </ul>
      <div>
        <p>Aditional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
