import { useEffect, useState } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import * as ApiServise from '../servises/Api';

// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization:
//       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMDQxNWQ0ZmZhZjAyYWJmNTg3MDg3Nzk1YzlmNDM1OCIsInN1YiI6IjY0NmI0ZGJmMmJjZjY3MDExYmY0NTc3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PZEMQTvbZ4N5DdoHgmjy5jv9wXM9Ll_N7E5IJX4SsU0',
//   },
// };
const URL = 'https://image.tmdb.org/t/p/w300';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');
  // const [image, setImage] = useState('');

  // useEffect(() => {
  //   ApiServise.getImages().then(({ images }) => {
  //     setImage({ images });
  //   });
  // }, []);

  useEffect(() => {
    ApiServise.getMovieDetails(movieId)
      .then(movie => setMovie(movie))
      .catch(err => console.error(err));
  }, [movieId]);

  return (
    <div>
      <img src={`${URL + movie.poster_path}`} alt={movie.title} />
      <h2>
        {movie.title} ({movie.release_date})
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
          <p>{}</p>
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
      <Outlet />
    </div>
  );
};
