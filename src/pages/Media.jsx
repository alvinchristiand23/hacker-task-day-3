import { useEffect, useState } from 'react';
import axios from 'axios';
// import { MediaInformations } from '../constants/data';
import { Card2 } from '../components/Card2';
import { Button } from '../components/Button';
import { ClipLoader } from 'react-spinners';

const Media = () => {
  const [posts, setPosts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=30');
      const postsWithImages = response.data.map((post) => ({
        ...post,
        imageUrl: `https://picsum.photos/200?random=${post.id}`,
      }));
      setPosts(postsWithImages);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleLoadMorePosts = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  return (
    <div className='w-[80%] mx-auto flex py-24 flex-col justify-center items-center'>
      <h1 className='text-3xl font-bold'> Media</h1>
      <p>Informasi seputar Padi UMKM</p>
      <div className='grid grid-cols-3 gap-10 py-6'>
        {posts && posts.length > 0
          ? posts
              .slice(0, visibleCount)
              .map((item, index) => (
                <Card2
                  key={item.title + index}
                  image={item.imageUrl}
                  title={item.title}
                  description={item.body}
                />
              ))
          : null}
      </div>
      <ClipLoader color='#019EA9' loading={loading} size={50} className='mb-6' />
      <Button disabled={visibleCount >= 30} onClick={handleLoadMorePosts} caption={'Load More'} />
    </div>
  );
};

export default Media;
