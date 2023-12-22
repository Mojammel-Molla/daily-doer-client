import axios from 'axios';

const axiosPublic = axios.create({
  baseURL: 'https://daily-doer-server.vercel.app',
});
const useAxios = () => {
  return axiosPublic;
};

export default useAxios;
