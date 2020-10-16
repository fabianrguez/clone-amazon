import axios from 'axios';

const instace = axios.create({
  baseURL: 'http://localhost:5001/clone-ama-zon/us-central1/api',
});

export default instace;
