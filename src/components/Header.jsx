import { navItems } from '../constants/data';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { TbMoon, TbSun } from 'react-icons/tb';
import { useGlobalState } from '../hooks/useGlobalState';
import { Button } from './Button';
import PadiUMKLogo from '../assets/images/padiUMKM.png';

export const Header = () => {
  const { user, handleLogoutUser, theme, handleToggleTheme } = useGlobalState();

  const location = useLocation();
  const navigate = useNavigate();

  return (
    <header>
      <div className='w-[80%] mx-auto grid grid-cols-4 items-center py-2 font-ubuntu'>
        <div className='col-span-1 '>
          <img src={PadiUMKLogo} alt='Padi UMKM' className='w-24' />
        </div>
        <nav className='col-span-2 space-x-12 place-self-center'>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`${
                item.path === location.pathname
                  ? 'font-bold underline underline-offset-8 decoration-accent decoration-4'
                  : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className='flex items-center justify-end col-span-1 space-x-6'>
          {user ? (
            <h2>
              Hi, <strong>{user.slice(0, 5)}</strong>!
            </h2>
          ) : null}
          <Button
            onClick={() => (user ? handleLogoutUser() : navigate('/login'))}
            textLabel={user ? 'Logout' : 'Login'}
          />
          <button onClick={handleToggleTheme}>
            {theme === 'dark' ? <TbSun className='size-6' /> : <TbMoon className='size-6' />}
          </button>
        </div>
      </div>
    </header>
  );
};
