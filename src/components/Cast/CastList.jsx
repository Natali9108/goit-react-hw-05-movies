import PropTypes from 'prop-types';
import { castImgURL } from 'utils';
import castImg from '../../img/cast.jpg';

export const CastList = ({ cast }) => {
  return (
    <ul>
      {cast.map(({ cast_id, original_name, profile_path, character }) => (
        <li key={cast_id}>
          <img
            src={profile_path ? `${castImgURL}${profile_path}` : castImg}
            alt={original_name}
            width="300"
            height="300"
          />
          <p>{original_name}</p>
          <p>Character {character}</p>
        </li>
      ))}
    </ul>
  );
};

CastList.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      cast_id: PropTypes.number,
      original_name: PropTypes.string,
      profile_path: PropTypes.string,
      character: PropTypes.string,
    }).isRequired
  ),
};
