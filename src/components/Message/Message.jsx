import PropTypes from 'prop-types';

export const Message = ({ text }) => {
  return (
    <>
      <p>{text}</p>
    </>
  );
};

Message.propTypes = {
  text: PropTypes.string.isRequired,
};
