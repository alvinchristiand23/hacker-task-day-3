import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGlobalState } from '../hooks/useGlobalState';
import { Button } from '../components/Button';
import PadiUMKM from '../assets/images/padiUMKM.png';

const Login = () => {
  const { user, handleLoginUser } = useGlobalState();

  const [name, setName] = useState('');

  const navigate = useNavigate();
  return (
    <div className='flex items-center justify-center min-h-screen bg-accent'>
      <div className='w-96 h-[28rem] rounded-xl bg-bg-color flex flex-col items-center p-12 justify-center'>
        <img src={PadiUMKM} alt='Padi UMKM' className='w-24' />
        <input
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='px-4 py-2 mt-12 mb-6 border-2 rounded-md border-accent'
        />
        <Button
          disabled={!name}
          onClick={() => {
            handleLoginUser(name);
            navigate('/');
          }}
          caption={user ? 'Logout' : 'Login'}
        />
      </div>
    </div>
  );
};

export default Login;
