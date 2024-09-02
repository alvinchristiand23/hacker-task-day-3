import BerandaHero from '../assets/images/beranda.webp';
import { Button } from '../components/Button';

const Home = () => {
  return (
    <div className='bg-gradient-to-r from-gradient-start to-gradient-end'>
      <div className='flex flex-row items-center justify-between mx-auto w-[80%] py-24 space-x-48'>
        <div className='space-y-4'>
          <h1 className='text-3xl font-bold leading-snug'>
            PaDi UMKM Hadir Sebagai Satu Solusi Bisnis bagi UMKM, BUMN dan Pemerintah.
          </h1>
          <p className='leading-relaxed'>
            Mempertemukan UMKM berkualitas dengan perusahaan BUMN maupun Swasta untuk mendapatkan
            transaksi dengan harga dan kualitas terbaik.
          </p>
          <Button caption={'Selengkapnya'} />
        </div>
        <img src={BerandaHero} alt='Beranda Hero' className='rounded-2xl w-96' />
      </div>
    </div>
  );
};

export default Home;
