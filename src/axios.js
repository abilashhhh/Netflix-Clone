import axios from 'axios'
import { theBaseUrl } from './constants/constants';
const Instance = axios.create({
    baseURL: theBaseUrl,
  });


  export default Instance