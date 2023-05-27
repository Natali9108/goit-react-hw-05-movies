import { MoviesItem } from 'components';
import { useLocation } from 'react-router-dom';

export const MoviesList = ({ title, movies }) => {
  const location = useLocation();
  return (
    <>
      {title && <h1>{title}</h1>}
      <ul>
        {movies.map(({ id, title }) => (
          <MoviesItem
            key={id}
            title={title}
            path={`/movies/${id}`}
            state={{ from: location }}
          />
        ))}
      </ul>
    </>
  );
};
