import { useState, useEffect, useCallback } from 'react';
import { getPostsService } from '../services/getPostsService';

export const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const getPosts = useCallback(async () => {
    if (isLoading || !hasMore) return;
    setIsLoading(true);
    try {
      const newPosts = await getPostsService(page, 6);
      setHasMore(posts.length + newPosts.length < 100);
      setPosts((prev) => [...prev, ...newPosts]);
    } catch (err) {
      throw new err();
    } finally {
      setIsLoading(false);
    }
  }, [page]);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  const loadMorePosts = () => {
    if (!isLoading && hasMore) {
      setPage((prev) => prev + 1);
    }
  };

  return {
    posts,
    isLoading,
    hasMore,
    loadMorePosts,
  };
};
