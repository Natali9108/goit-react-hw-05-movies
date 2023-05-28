import PropTypes from 'prop-types';
import { ReviewsBox, ListReviews, Author } from './ReviewsList.styled';

export const ReviewsList = ({ reviews }) => {
  return (
    <ReviewsBox>
      <ListReviews>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <Author>Author: {author}</Author>
            <p>{content}</p>
          </li>
        ))}
      </ListReviews>
    </ReviewsBox>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      author: PropTypes.string,
      content: PropTypes.string,
    })
  ).isRequired,
};
