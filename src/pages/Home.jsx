import { useEffect, useState } from 'react';
import * as ApiServise from '../servises/Api';
import { TrendingMovieList } from 'components';

const Home = () => {
  const [trendingFilms, setTrendingFilms] = useState([]);

  useEffect(() => {
    ApiServise.getTrendingMovies()
      .then(({ results }) => {
        setTrendingFilms([...results]);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
    
      <TrendingMovieList movies={trendingFilms} />
    </div>
  );
};

export default Home;
