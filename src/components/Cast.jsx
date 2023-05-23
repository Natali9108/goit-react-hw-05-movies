import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import * as ApiServise from '../servises/Api';

export const Cast = () => {
  const { movieId } = useParams();
  console.log(movieId);
  useEffect(() => {
    ApiServise.getMovieCast(movieId).then(movie => {
      console.log(movie);
    });
  });

  return <div></div>;
};
