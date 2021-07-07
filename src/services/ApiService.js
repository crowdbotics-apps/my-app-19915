import axios from 'axios';
import { getToken } from './StorageService';
import { backendServerURL } from 'src/config/app';

const http = axios.create();
const setupHttp = async () => {
  http.defaults.baseURL = backendServerURL;
  http.defaults.timeout = 5000;
  http.defaults.xsrfHeaderName = 'X-CSRFToken';
  http.defaults.headers['Content-Type'] = 'application/json';
  const token = await getToken();
  if (token) {
    http.defaults.headers.Authorization = `Token ${token}`;
  }
};

const login = ({ email, password }) => {
  console.log('==login===', email, password);
  const config = {
    method: 'post',
    url: '/token/login/',
    data: {
      email,
      password,
    },
  };
  return http(config);
};

const loginSocial = ({ key, provider }) => {
  console.log('key ', key);
  console.log('provider: ', provider)
  const config = {
    method: 'post',
    url: `/token/social/${provider}/?user_role=client`,
    data: {
      access_token: key,
    },
  };
  return http(config);
};

const resetPassword = ({ email }) => {
  const config = {
    method: 'post',
    url: '/rest-auth/password/reset',
    data: {
      email,
    },
  };
  return http(config);
};

const register = data => {
  const config = {
    method: 'post',
    url: '/rest-auth/registration/',
    data: data,
  };
  return http(config);
};

export { login, loginSocial, register, resetPassword, setupHttp };
