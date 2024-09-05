import PropTypes from 'prop-types';

export const Button = ({ textLabel, onClick, disabled, className = false, ...props }) => {
  return (
    <button
      {...props}
      onClick={onClick}
      disabled={disabled}
      className={`w-fit px-8 py-2 border-2 rounded-lg text-sm ${className} ${
        disabled
          ? 'text-slate-400'
          : 'hover:text-white hover:bg-accent text-accent border-accent cursor-pointer'
      }`}
    >
      {textLabel}
    </button>
  );
};

Button.propTypes = {
  textLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element]),
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};
