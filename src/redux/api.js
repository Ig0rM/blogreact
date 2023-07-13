import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const fetchArticlesApi = () => {
  return axios.get(`${API_URL}/posts`);
};

export const createArticleApi = (article) => {
  return axios.post(`${API_URL}/posts`, article);
};

export const deleteArticleApi = (articleId) => {
  return axios.delete(`${API_URL}/posts/${articleId}`);
};

export const updateArticleApi = (articleId, updatedInfo) => {
  return axios.put(`${API_URL}/posts/${articleId}`, updatedInfo);
};