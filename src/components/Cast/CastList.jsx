import PropTypes from 'prop-types';
import { castImgURL, castPlacholder } from 'utils';
import { ListCast, CastImg } from './CastList.styled';

export const CastList = ({ cast }) => {
  return (
    <ListCast>
      {cast.map(({ cast_id, original_name, profile_path, character }) => (
        <li key={cast_id}>
          <CastImg
            src={profile_path ? `${castImgURL}${profile_path}` : castPlacholder}
            alt={original_name}
          />
          <p>{original_name}</p>
          <p>Character {character}</p>
        </li>
      ))}
    </ListCast>
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
