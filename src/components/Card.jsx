import PropTypes from 'prop-types';
import { Button } from './Button';

export const Card = ({ logo, title, descriptions }) => {
  return (
    <div className='flex flex-col flex-1 p-6 space-y-4 border-2 rounded-lg'>
      <div className='flex items-center space-x-2'>
        <img src={logo} alt={title} className='size-12' />
        <h3 className='text-lg font-bold text-text-primary'>{title}</h3>
      </div>
      <div className='flex flex-col flex-1 space-y-2 list-none text-text-secondary'>
        {descriptions.map((desc, index) => (
          <li key={desc + index}>{desc}</li>
        ))}
      </div>
      <Button caption={'Lihat Semua Artikel'} />
    </div>
  );
};

Card.propTypes = {
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  descriptions: PropTypes.string.isRequired,
};
