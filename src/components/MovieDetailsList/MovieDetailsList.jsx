import PropTypes from 'prop-types';
import { MovieURL } from 'utils';
import defaultMovieimg from '../../img/movie.jpg';
import { MovieImg } from './MovieDetailsList.styled';

export const MovieDetailsList = ({ movie }) => {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    movie;

  return (
    <div>
      <MovieImg
        src={poster_path ? `${MovieURL}${poster_path}` : defaultMovieimg}
        alt={title}
      />
      <h2>
        {title} ({release_date.slice(0, 4)})
      </h2>
      <ul>
        <li>
          <p>User Score: {(vote_average * 10).toFixed(1)}%</p>
        </li>
        <li>
          <p>
            <span>Overview {overview}</span>
          </p>
        </li>
        <li>
          <span>Genres </span>
          <p>{genres.map(el => el.name).join('  ')}</p>
        </li>
      </ul>
    </div>
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
