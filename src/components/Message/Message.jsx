import PropTypes from 'prop-types';

export const Message = ({ text }) => {
  return (
    <div style={{ padding: '12px' }}>
      <p
        style={{
          fontSize: '18px',
          fontWeight: '600',
          letterSpacing: '0.03em',
        }}
      >
        {text}
      </p>
    </div>
  );
};

Message.propTypes = {
  text: PropTypes.string.isRequired,
};
