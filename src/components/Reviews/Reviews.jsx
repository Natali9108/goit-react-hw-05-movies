import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as ApiServise from '../../servises/Api';
import { ReviewsList } from './ReviewsList';
import { Message } from 'components';

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
        <Message text="We don't hane any reviews for this movie" />
      ) : (
        <ReviewsList reviews={reviews} />
      )}
    </div>
  );
};

export default Reviews;
