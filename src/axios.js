import axios from 'axios';

const instace = axios.create({
  baseURL: 'https://clone-amazon-serverless.netlify.app/.netlify/functions/api',
});

export default instace;
