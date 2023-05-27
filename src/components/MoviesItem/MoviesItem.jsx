import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const MoviesItem = ({ title, path, state }) => {
  return (
    <li>
      <Link to={path} state={state}>
        {title}
      </Link>
    </li>
  );
};

MoviesItem.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string.isRequired,
  state: PropTypes.object.isRequired,
};
