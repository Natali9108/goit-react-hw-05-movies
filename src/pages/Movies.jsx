import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import * as ApiServise from '../servises/Api';

const Movies = () => {
  const { register, handleSubmit } = useForm();
  // const [query, setQuery] = useState('');
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const location = useLocation();

  const handleSearchMovie = ({ query }, evt) => {
    setSearchParams({ query: query });

    evt.target.reset();
  };

  useEffect(() => {
    if (query === '') return;

    ApiServise.getSearchMovies(query).then(({ results }) => {
      setMovies(results);
    });
  }, [query]);

  return (
    <div>
      <form onSubmit={handleSubmit(handleSearchMovie)}>
        <input
          type="text"
          {...register('query')}
          // onChange={evt => setSearchParams({ query: evt.target.value })}
          autoFocus
          placeholder="Search films"
        />
        <button type="submit">search</button>
      </form>
      {movies && (
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Movies;
