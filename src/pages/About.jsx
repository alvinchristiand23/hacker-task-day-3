import { VisionAndMission } from '../constants/data';
import AboutHero from '../assets/images/tentangKami.webp';

const About = () => {
  return (
    <div className='flex items-center py-24 justify-between mx-auto w-[80%]'>
      <div className='space-y-6'>
        {VisionAndMission.map((item, index) => (
          <div key={item.title + index} className='space-y-2'>
            <h1 className='text-3xl font-bold text-text-primary'>{item.title}</h1>
            <ul
              className={`${
                item.descriptions.length > 1 ? 'list-disc' : ''
              } w-[36rem] pl-12 text-text-secondary space-y-4`}
            >
              {item.descriptions.map((desc, index) => (
                <li key={desc + index}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <img src={AboutHero} alt='About Hero' className='w-96' />
    </div>
  );
};

export default About;
