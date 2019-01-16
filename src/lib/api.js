import axios from 'axios';
import apiConfig from '../config/apiConfig';

const authIntercepter = config => {
  // Add any authentication request parameters to api
  return config
};

const responseErrorHandler = error => {
  // Add any api error handlers specifically for 401, 403 etc.
  console.error(error);
  return Promise.reject(error);
}

let API;

if (process.env.NODE_ENV !== 'test') {
    API = axios.create({
    baseURL: apiConfig.baseURL
  });
// skip adding Authentication interceptors for unit-tests
    API.interceptors.request.use(authIntercepter, e => Promise.reject(e));
    API.interceptors.response.use(r => r, responseErrorHandler);
} else {
    API = axios;
}

export default API;
