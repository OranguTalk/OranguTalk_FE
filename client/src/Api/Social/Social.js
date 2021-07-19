import axios from 'axios';

export const GithubLoginAPI = () => {
  const response = axios.get('/auth/github');
  return response;
};
