import { MediaInformations } from '../constants/data';
import { Card2 } from '../components/Card2';

const Media = () => {
  return (
    <div className='w-[80%] mx-auto flex py-24 flex-col justify-center items-center'>
      <h1 className='text-3xl font-bold'> Media</h1>
      <p>Informasi seputar Padi UMKM</p>
      <div className='flex justify-between pt-6 space-x-6'>
        {MediaInformations.map((item, index) => (
          <Card2
            key={item.title + index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Media;
