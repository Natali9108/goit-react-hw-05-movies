import PropTypes from 'prop-types';
import { castImgURL, castPlacholder } from 'utils';
import {
  ListCast,
  CastItem,
  CastImg,
  Wrapper,
  OriginalName,
  Character,
  CharacterText,
} from './CastList.styled';

export const CastList = ({ cast }) => {
  return (
    <div>
      <ListCast>
        {cast.map(({ cast_id, original_name, profile_path, character }) => (
          <CastItem key={cast_id}>
            <CastImg
              src={
                profile_path ? `${castImgURL}${profile_path}` : castPlacholder
              }
              alt={original_name}
            />
            <Wrapper>
              <OriginalName>{original_name}</OriginalName>
              <Character>Character:</Character>
              <CharacterText>{character}</CharacterText>
            </Wrapper>
          </CastItem>
        ))}
      </ListCast>
    </div>
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
