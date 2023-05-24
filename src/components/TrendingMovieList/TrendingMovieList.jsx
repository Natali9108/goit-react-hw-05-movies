import { Link, useLocation } from 'react-router-dom';

export const TrendingMovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
