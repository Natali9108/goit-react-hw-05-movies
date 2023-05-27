import { useEffect, useState } from 'react';
import * as ApiServise from '../servises/Api';
import PropTypes from 'prop-types';
import { MoviesList } from 'components';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    ApiServise.getTrendingMovies()
      .then(({ results }) => {
        setMovies([...results]);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <MoviesList title="Trending today" movies={movies} />
    </div>
  );
};

export default Home;

Home.propTypes = {
  id: PropTypes.string,
};
