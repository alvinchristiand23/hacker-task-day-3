import { VisionAndMission } from '../constants/data';
import AboutHero from '../assets/images/tentangKami.webp';

const About = () => {
  return (
    <div className='w-[80%] mx-auto py-24 grid items-center grid-cols-2'>
      <div className='space-y-6'>
        {VisionAndMission.map((item) => (
          <div key={item.title} className='space-y-2'>
            <h1 className='text-3xl font-bold text-primary'>{item.title}</h1>
            <ul
              className={`${
                item.descriptions.length > 1 ? 'list-disc' : ''
              } pl-12 text-secondary space-y-4`}
            >
              {item.descriptions.map((desc) => (
                <li key={desc}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <img src={AboutHero} alt='About Hero' className='justify-self-end w-96' />
    </div>
  );
};

export default About;
