import axios from 'axios'

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
export default instance;
// https://api.themoviedb.org/3/discover/tv?api_key=72bb4ca42ec132a01bd72505f8faebe4&with_networks=213
