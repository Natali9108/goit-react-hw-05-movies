import { useEffect, useState } from 'react';
import * as ApiServise from '../servises/Api';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MoviesItem } from 'components';

const Home = () => {
  const [trendingFilms, setTrendingFilms] = useState([]);
  const location = useLocation();

  useEffect(() => {
    ApiServise.getTrendingMovies()
      .then(({ results }) => {
        setTrendingFilms([...results]);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {trendingFilms.map(({ id, title }) => (
          <MoviesItem
            key={id}
            title={title}
            path={`/movies/${id}`}
            state={{ from: location }}
          />
        ))}
      </ul>
    </div>
  );
};

export default Home;

Home.propTypes = {
  id: PropTypes.string,
};
