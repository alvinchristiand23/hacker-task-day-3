import BerandaHero from '../assets/images/beranda.webp';
import { Button } from '../components/Button';

const Home = () => {
  return (
    <div className='bg-gradient-to-r from-gradient-start to-gradient-end'>
      <div className='w-[80%] mx-auto py-24 grid items-center grid-cols-2 gap-x-24'>
        <div className='flex flex-col gap-y-2'>
          <h1 className='text-3xl font-bold leading-snug'>
            PaDi UMKM Hadir Sebagai Satu Solusi Bisnis bagi UMKM, BUMN dan Pemerintah.
          </h1>
          <p className='leading-relaxed'>
            Mempertemukan UMKM berkualitas dengan perusahaan BUMN maupun Swasta untuk mendapatkan
            transaksi dengan harga dan kualitas terbaik.
          </p>
          <Button textLabel={'Selengkapnya'} onClick={() => {}} />
        </div>
        <img src={BerandaHero} alt='Beranda Hero' className='rounded-2xl' />
      </div>
    </div>
  );
};

export default Home;
