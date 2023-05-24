import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as ApiServise from '../servises/Api';

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
    <>
      <h1>Trending today</h1>
      <ul>
        {trendingFilms.map(({ id, title }) => (
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

export default Home;
