import { helpTopic } from '../constants/data';
import { CardHelp } from '../components/Card';
import { PageTitle } from '../components/PageTitle';

const Help = () => {
  return (
    <div className='w-[80%] mx-auto flex py-24 flex-col justify-center gap-y-6'>
      <PageTitle title={'Pilih Topik Sesuai Kendalamu'} />
      <div className='grid grid-cols-3 gap-x-6'>
        {helpTopic.map((item) => (
          <CardHelp
            key={item.title}
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
