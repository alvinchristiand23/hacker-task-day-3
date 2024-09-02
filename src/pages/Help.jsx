import { helpTopic } from '../constants/data';
import { Card } from '../components/Card';

const Help = () => {
  return (
    <div className='flex flex-col items-center justify-between py-24 mx-auto w-[80%] space-y-6'>
      <h1 className='text-3xl font-bold'>Pilih Topik Sesuai Kendalamu</h1>
      <div className='flex justify-between space-x-6'>
        {helpTopic.map((item, index) => (
          <Card
            key={item.title + index}
            logo={item.logo}
            title={item.title}
            descriptions={item.descriptions}
          />
        ))}
      </div>
    </div>
  );
};

export default Help;
