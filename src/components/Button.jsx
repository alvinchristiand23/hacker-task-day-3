import PropTypes from 'prop-types';

export const Button = ({ onClick, caption, disabled, ...props }) => {
  return (
    <button
      {...props}
      onClick={onClick}
      className={`px-4 py-1 border-2 rounded-md ${
        disabled
          ? 'text-text-secondary border-text-secondary cursor-default'
          : 'hover:text-white hover:bg-accent text-accent border-accent cursor-pointer'
      }`}
    >
      {caption}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  caption: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};
