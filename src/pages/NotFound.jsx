import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import PadiUMKM from '../assets/images/padiUMKM.png';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col items-center justify-center min-h-screen space-y-6'>
      <img src={PadiUMKM} alt='Padi UMKM' className='w-48' />
      <h1 className='text-3xl font-bold text-accent'>Page Not Found!</h1>
      <Button onClick={() => navigate('/')} caption={'Back To Home'} />
    </div>
  );
};

export default NotFound;
