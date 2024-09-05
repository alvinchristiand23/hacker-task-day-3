import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGlobalState } from '../hooks/useGlobalState';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import PadiUMKM from '../assets/images/padiUMKM.png';

const Login = () => {
  const navigate = useNavigate();
  const { user, handleLoginUser } = useGlobalState();
  const [name, setName] = useState('');

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user]);

  return (
    <div className='flex items-center justify-center min-h-screen bg-background'>
      <div className='w-96 h-[28rem] rounded-xl flex flex-col items-center p-12 justify-center shadow-md bg-white text-black'>
        <img src={PadiUMKM} alt='Padi UMKM' className='w-24' />
        <Input
          placeholder='Name'
          maxLength={5}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={'text-center'}
        />
        <Button
          disabled={!name}
          onClick={() => {
            handleLoginUser(name);
            navigate('/');
          }}
          textLabel={user ? 'Logout' : 'Login'}
        />
      </div>
    </div>
  );
};

export default Login;
