import { useContext } from 'react';
import { GlobalContext } from '../App';

export const Child = () => {
  const profile = useContext(GlobalContext);

  return (
    <div>
      <h1>{profile.nama}</h1>
      <h2>{profile.kota}</h2>
      <h2>{profile.hobby}</h2>
    </div>
  );
};
