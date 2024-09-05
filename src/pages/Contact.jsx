import { useState } from 'react';
import { Button } from '../components/Button';
import { CardContact, CardFeedbackContact } from '../components/Card';
import { Input } from '../components/Input';
import { PageTitle } from '../components/PageTitle';
import { TextArea } from '../components/TextArea';
import { contactInformation } from '../constants/data';
import { useFeedback } from '../hooks/useFeedback';

const Contact = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const { feedback, handleAddFeedback, handleDeleteFeedback, handleAddLikes } = useFeedback();

  const resetForm = () => {
    setName('');
    setMessage('');
  };

  return (
    <div className='w-[80%] mx-auto py-24 flex flex-col justify-center gap-y-24'>
      <div className='space-y-6'>
        <PageTitle
          title={'Kritik dan Saran'}
          subTitle={['Silahkan masukkan kritik dan saran anda']}
        />
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={'Nama...'}
          className={'w-full'}
        />
        <TextArea
          value={message}
          rows={3}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={'Saran anda...'}
          className={'w-full'}
        />
        <Button
          disabled={!name || !message}
          onClick={() => {
            handleAddFeedback(name, message);
            resetForm();
          }}
          textLabel={'Kirim Saran'}
        />
        {feedback.map((item) => (
          <CardFeedbackContact
            key={item.id}
            id={item.id}
            name={item.name}
            message={item.message}
            likes={item.likes}
            onDelete={handleDeleteFeedback}
            onAddLikes={handleAddLikes}
          />
        ))}
      </div>
      <div className='space-y-6'>
        <PageTitle
          title={'Hubungi Kami'}
          subTitle={[
            'Memiliki pertanyaan lebih lanjut seputar Padi UMKM?',
            'Silahkan menghubungi Kami secara langsung',
          ]}
        />
        <div className='grid grid-cols-2 gap-x-6'>
          {contactInformation.map((item) => (
            <CardContact key={item.title} title={item.title} items={item.items} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
