import { api } from './api';

export const getPosts = async () => {
  const res = await api.get('/posts');
  return res.data;
};

export const createPost = async (data: { title: string; body: string }) => {
  const res = await api.post('/posts', data);
  return res.data;
};

export const deletePost = async (id: number) => {
  await api.delete(`/posts/${id}`);
};

export const updatePost = async (id: number, data: { title: string; body: string }) => {
  const res = await api.put(`/posts/${id}`, data);
  return res.data;
};
