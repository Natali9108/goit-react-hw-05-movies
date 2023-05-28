import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovieURL, MoviePlacholder } from 'utils';
import {
  BoxMovie,
  MoviesList,
  MovieImg,
  Overwiew,
  Genres,
  LinkBox,
  LinkTitle,
} from './MovieDetailsList.styled';

export const MovieDetailsList = ({ movie }) => {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    movie;

  return (
    <>
      <BoxMovie>
        <MovieImg
          src={poster_path ? `${MovieURL}${poster_path}` : MoviePlacholder}
          alt={title}
        />

        <MoviesList>
          <li>
            <h3>
              {title} ({release_date.slice(0, 4)})
            </h3>
          </li>
          <li>
            <p>User Score: {(vote_average * 10).toFixed(1)}%</p>
          </li>
          {overview && (
            <li>
              <Overwiew>Overview </Overwiew>
              <p>{overview}</p>
            </li>
          )}
          {genres && (
            <li>
              <Genres>Genres </Genres>
              <p>{genres.map(el => el.name).join(', ')}</p>
            </li>
          )}
        </MoviesList>
      </BoxMovie>
      <LinkBox>
        <LinkTitle>Aditional information</LinkTitle>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </LinkBox>
    </>
  );
};

MovieDetailsList.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.object),
  }),
};
