import PropTypes from 'prop-types';

export const Card2 = ({ image, title, description }) => {
  return (
    <div className='space-y-2 w-96'>
      <img src={image} alt={title} className='rounded-lg w-96' loading='lazy' />
      <h1 className='pt-4 text-lg font-bold'>{title}</h1>
      <p className='leading-relaxed'>{description}</p>
    </div>
  );
};

Card2.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
