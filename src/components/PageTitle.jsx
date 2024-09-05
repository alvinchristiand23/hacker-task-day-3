import PropTypes from 'prop-types';

export const PageTitle = ({ title, subTitle }) => {
  return (
    <div>
      <h1 className='text-3xl font-bold'>{title}</h1>
      {subTitle?.length > 0 ? subTitle.map((item) => <p key={item}>{item}</p>) : null}
    </div>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.arrayOf(PropTypes.string),
};
