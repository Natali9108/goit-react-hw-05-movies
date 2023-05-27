import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as ApiServise from '../servises/Api';
import { MovieForm, Loader, Message, MoviesList } from 'components';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);

  const handleSearchMovie = query => {
    setSearchParams({ query: query });
    setIsEmpty(false);
    setError('');
    setIsLoading(false);
  };

  useEffect(() => {
    if (query === '') {
      setMovies(null);
      return;
    }

    setIsLoading(true);
    ApiServise.getSearchMovies(query)
      .then(({ results }) => {
        if (!results.length) {
          setIsEmpty(true);
        }

        setMovies(results);
      })
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  }, [query]);

  return (
    <div>
      <MovieForm onSubmit={handleSearchMovie} />
      {error && <Message text={error} />}
      {isEmpty && <Message text={`For ${query} no movies found 😢`} />}
      {movies && <MoviesList movies={movies} />}
      {isLoading && <Loader />}
    </div>
  );
};

export default Movies;

Movies.propTypes = {
  id: PropTypes.string,
};
