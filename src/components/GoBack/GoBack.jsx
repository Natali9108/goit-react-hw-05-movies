import { HiArrowNarrowLeft } from 'react-icons/hi';
import { GoBackLink } from './GoBack.styled';

export const GoBack = ({ path }) => {
  return (
    <div>
      <GoBackLink to={path}>
        <HiArrowNarrowLeft />
        Go Back
      </GoBackLink>
    </div>
  );
};
