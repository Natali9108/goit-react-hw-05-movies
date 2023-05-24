import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as ApiServise from '../servises/Api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    ApiServise.getReviewMovie(movieId).then(({ results }) => {
      setReviews([...results]);
    });
  }, [movieId]);

  return (
    <div>
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <h3>Author: {author}</h3>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
