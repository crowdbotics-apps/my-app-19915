import { getToken, saveToken } from './StorageService';
import { backendServerURL} from 'src//config/app';

const doFetch = async (url, params = {}) => {
  try {
    let headers = {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    };
    const token = await getToken();
    if (token && !url.includes('login')) {
      headers.Authorization = `Token ${token}`;
    }

    const response = await fetch(url, {
      headers,
      ...params,
    });
    return response.json();
  } catch (error) {
    console.log('Oops! There was an error.', error);
  }
};

export const handleError = error => {
  console.log('====Handle Error====', error);
  const errorKeys = Object.keys(error);
  if (errorKeys.includes('non_field_errors')) {
    return error.non_field_errors && error.non_field_errors[0];
  }
  if (errorKeys.includes('email')) {
    return error.email[0] || error.email.email[0];
  }
  const firstKey = errorKeys[0];
  return `${error[firstKey]}`;
};

export const login = params => {
  return new Promise(async (resolve, reject) => {
    const response = await doFetch(backendServerURL + '/rest-auth/login/', {
      method: 'POST',
      body: JSON.stringify(params),
    });
    console.log({ response });
    if (response.status === 200 || response.key) {
      if (response.user_detail.role === "client") {
        console.log("data.user_detail.role", response.user_detail.role)
        resolve({
          user: response?.key,
        });
      } else {
        console.log("not a role")
        reject(handleError({ email: ["You have not been register with client role."] }));
      }

    } else {
      reject(handleError(response));
    }
  });
};

// export const fblogin = params => {
//   return new Promise(async (resolve, reject) => {
//     const response = await doFetch(API_HOST + '/rest-auth/social/facebook/', {
//       method: 'POST',
//       body: JSON.stringify(params),
//     });
//     console.log({response});
//     if (response.status === 200 || response.key) {
//       resolve({
//         user: response?.key,
//       });
//     } else {
//       reject(handleError(response));
//     }
//   });
// };

export const register = params => {
  return new Promise(async (resolve, reject) => {
    console.log('paramssssssssssssssssssssss', params)
    const response = await doFetch(API_HOST + '/signup/', {
      method: 'POST',
      body: JSON.stringify(params),
    });

    console.log('===================================================')
    console.log('=========================================', response)
    console.log('=========================================', response)

    if (response.key) {
      resolve({
        user: response,
      });
    } else {
      reject(handleError(response));
    }
  });
};
