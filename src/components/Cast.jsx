import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as ApiServise from '../servises/Api';

const URL = 'https://image.tmdb.org/t/p/w300';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    ApiServise.getMovieCast(movieId).then(({ cast }) => {
      setCast([...cast]);
    });
  }, [movieId]);

  return (
    <div>
      <ul>
        {cast.map(({ cast_id, original_name, profile_path, character }) => (
          <li key={cast_id}>
            <img
              src={`https://image.tmdb.org/t/p/w300/${profile_path}`}
              alt={original_name}
            />
            <p>{original_name}</p>
            <p>Character {character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
