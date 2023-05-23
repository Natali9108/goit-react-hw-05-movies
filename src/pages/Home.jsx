import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as ApiServise from '../servises/Api';

export const Home = () => {
  const [trendingFilms, setTrendingFilms] = useState([]);

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
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
