import { useLocation } from 'react-router-dom';
import { MoviesItem } from '../MoviesItem/MoviesItem';
import { MoviesBox, Title } from './MoviesList.styled';

export const MoviesList = ({ title, movies }) => {
  const location = useLocation();
  return (
    <MoviesBox>
      {title && <Title>{title}</Title>}
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
    </MoviesBox>
  );
};
