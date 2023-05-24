import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as ApiServise from '../servises/Api';
import { MovieForm, MoviesList } from 'components';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const handleSearchMovie = query => {
    setSearchParams({ query: query });
  };

  useEffect(() => {
    if (query === '') return;

    ApiServise.getSearchMovies(query).then(({ results }) => {
      setMovies(results);
    });
  }, [query]);

  return (
    <div>
      <MovieForm onSubmit={handleSearchMovie} />
      {movies && <MoviesList movies={movies} />}
    </div>
  );
};

export default Movies;
