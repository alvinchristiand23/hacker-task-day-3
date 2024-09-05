// src/api/postsService.js
import { jsonPlaceholderClient } from '../api/jsonPlaceholderClient';

export const getPostsService = async (page = 1, limit = 6) => {
  try {
    const response = await jsonPlaceholderClient.get(`/posts`, {
      params: { _page: page, _limit: limit },
    });

    if (response.status === 200) {
      if (response?.data?.length > 0) {
        const dataWithImage = response.data.map((item) => {
          return {
            id: item.id,
            image: `https://picsum.photos/384?random=${item.id}`,
            title: item.title,
            description: item.body,
          };
        });
        return dataWithImage;
      }
      return [];
    }
  } catch (error) {
    console.error('Error getPostsService:', error);
    throw error;
  }
};
