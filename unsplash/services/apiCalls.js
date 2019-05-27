import axios from 'axios';
import { API_ACCESS_KEY } from '../utils/apiKeys';

const PHOTOS_BASE_URL = 'https://api.unsplash.com/photos';

const getPhotosDatas = () =>
  axios.get(`${PHOTOS_BASE_URL}?client_id=${API_ACCESS_KEY}`);

async function getPhotos() {
  const { data } = await getPhotosDatas();
  return data;
}

export { getPhotos };
