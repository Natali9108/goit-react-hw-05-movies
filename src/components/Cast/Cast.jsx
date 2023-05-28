import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as ApiServise from '../../servises/Api';
import { CastList } from './CastList';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    ApiServise.getMovieCast(movieId)
      .then(({ cast }) => {
        setCast([...cast]);
      })
      .catch(err => console.log(err));
  }, [movieId]);

  return (
    <>
      <CastList cast={cast} />
    </>
  );
};

export default Cast;
