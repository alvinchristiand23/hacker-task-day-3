import { CardMedia } from '../components/Card';
import { Button } from '../components/Button';
import { ClipLoader } from 'react-spinners';
import { usePosts } from '../hooks/usePosts';
import { PageTitle } from '../components/PageTitle';

const Media = () => {
  const { posts, isLoading, hasMore, loadMorePosts } = usePosts();

  return (
    <div className='w-[80%] mx-auto flex py-24 flex-col justify-center'>
      <PageTitle title={'Media'} subTitle={['Informasi seputar Padi UMKM']} />
      <div className='grid grid-cols-3 gap-10 py-6'>
        {posts && posts.length > 0
          ? posts.map((item) => (
              <CardMedia
                key={item.title}
                image={item.image}
                title={item.title}
                description={item.description}
              />
            ))
          : null}
      </div>
      {isLoading ? (
        <ClipLoader color='#019EA9' loading={true} size={50} className='mb-6' />
      ) : (
        <Button disabled={isLoading || !hasMore} onClick={loadMorePosts} textLabel={'Load More'} />
      )}
    </div>
  );
};

export default Media;
