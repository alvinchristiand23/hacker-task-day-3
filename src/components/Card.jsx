import PropTypes from 'prop-types';
import { Button } from './Button';
import { TbTrash } from 'react-icons/tb';

export const CardHelp = ({ logo, title, descriptions }) => {
  return (
    <div className='flex flex-col p-6 space-y-4 border-2 rounded-lg'>
      <div className='flex items-center space-x-2'>
        <img src={logo} alt={title} className='size-12' />
        <h3 className='text-lg font-bold'>{title}</h3>
      </div>
      <div className='flex flex-col flex-1 space-y-2 list-none text-secondary'>
        {descriptions.map((desc) => (
          <li key={desc}>{desc}</li>
        ))}
      </div>
      <Button textLabel={'Lihat Semua Artikel'} onClick={() => {}} />
    </div>
  );
};

CardHelp.propTypes = {
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  descriptions: PropTypes.array.isRequired,
};

export const CardMedia = ({ image, title, description }) => {
  return (
    <div className='space-y-2'>
      <img src={image} alt={title} className='rounded-lg w-96' loading='lazy' />
      <h1 className='pt-2 text-lg font-bold'>{title}</h1>
      <p className='leading-relaxed'>{description}</p>
    </div>
  );
};

CardMedia.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export const CardContact = ({ title, items }) => {
  return (
    <div className='flex flex-col items-center p-6 space-y-2 border-2 rounded-lg'>
      <h2 className='text-lg font-bold'>{title}</h2>
      {items?.map((i) => (
        <div key={i.name} className='text-center'>
          <h3 className='font-bold text-md'>{i.name}</h3>
          {i.value.map((v) => (
            <p key={v}>{v}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

CardContact.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export const CardFeedbackContact = ({ id, name, message, likes, onDelete, onAddLikes }) => {
  return (
    <div className='flex items-center justify-between p-6 border-2 rounded-lg gap-x-6'>
      <div>
        <h1 className='text-lg font-bold'> {name}</h1>
        <p>{message}</p>
      </div>
      <div className='flex gap-x-4'>
        <Button
          onClick={() => {
            onDelete(id);
          }}
          textLabel={<TbTrash className='text-red-400 size-4' />}
          className={'px-6 border-red-400 hover:bg-red-400 hover:text-white'}
        />
        <Button
          onClick={() => onAddLikes(id)}
          textLabel={likes}
          className={'w-4 flex justify-center items-center'}
        />
      </div>
    </div>
  );
};

CardFeedbackContact.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
  onAddLikes: PropTypes.func.isRequired,
};
