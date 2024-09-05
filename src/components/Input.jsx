import PropTypes from 'prop-types';

export const Input = ({ className, ...props }) => {
  return (
    <input
      {...props}
      className={`px-4 py-2 mt-12 mb-6 text-sm border-2 rounded-lg focus:outline-none focus:border-accent ${className}`}
    />
  );
};

Input.propTypes = {
  className: PropTypes.string,
};
