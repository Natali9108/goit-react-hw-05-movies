import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as ApiServise from '../../servises/Api';
import { CastList } from './CastList';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    ApiServise.getMovieCast(movieId).then(({ cast }) => {
      setCast([...cast]);
    });
  }, [movieId]);

  if (!cast) {
    return;
  }
  return (
    <div>
      <CastList cast={cast} />
    </div>
  );
};

export default Cast;
