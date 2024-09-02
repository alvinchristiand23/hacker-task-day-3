const Contact = () => {
  return (
    <div className='w-[80%] mx-auto py-24 flex flex-col justify-center items-center'>
      <h1 className='text-3xl font-bold'>Hubungi Kami</h1>
      <p>Memiliki pertanyaan lebih lanjut seputar Padi UMKM?</p>
      <p>Silahkan menghubungi Kami secara langsung</p>
      <div className='flex items-center justify-between pt-6 space-x-6'>
        <div className='flex flex-col items-center flex-1 h-64 p-8 border-2 rounded-lg'>
          <h2 className='text-lg font-bold'>Layanan informasi Pengguna</h2>
          <h3 className='mt-2 font-bold text-md'>Email</h3>
          <p>cs@padiumkm.id</p>
          <h3 className='mt-2 font-bold text-md'>Whatsapp</h3>
          <p>+62 812 9000 7820</p>
          <h3 className='mt-2 font-bold text-md'>Senin - Jumat | 08:00 - 17:00 WIB</h3>
        </div>
        <div className='flex flex-col items-center flex-1 h-64 p-8 text-center border-2 rounded-lg'>
          <h2 className='text-lg font-bold'>Kantor Kami</h2>
          <h3 className='mt-2 font-bold text-md'>Padi UMKM Headquarters</h3>
          <h4>Gedung Telkom Direktorat Business and Technology</h4>
          <p>Jln. Prof. Dr. Soepomo No. 139, Jakarta Selatan, DKI Jakarta, 12810 Indonesia</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
