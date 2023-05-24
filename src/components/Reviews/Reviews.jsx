import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as ApiServise from '../../servises/Api';
import { ReviewsList } from './ReviewsList';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    ApiServise.getReviewMovie(movieId)
      .then(({ results }) => {
        setReviews([...results]);
      })
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <div>
      {reviews.length === 0 ? (
        <p>We don't hane ane reviews for this movie</p>
      ) : (
        <ReviewsList reviews={reviews} />
      )}
    </div>
  );
};

export default Reviews;
