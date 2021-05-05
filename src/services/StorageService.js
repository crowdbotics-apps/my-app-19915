import RNSecureKeyStore, { ACCESSIBLE } from 'react-native-secure-key-store';

const TOKEN_KEY = 'token';

const saveToken = token => {
  return new Promise(function (resolve, reject) {
    RNSecureKeyStore.set(TOKEN_KEY, token, {
      accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY,
    }).then(
      res => {
        resolve(res);
      },
      err => {
        reject(err);
      },
    );
  });
};

const getToken = async () => {
  return new Promise(resolve => {
    RNSecureKeyStore.get(TOKEN_KEY).then(
      token => {
        resolve(token);
      },
      () => {
        resolve(null);
      },
    );
  });
};

const removeToken = async () => {
  return new Promise(resolve => {
    RNSecureKeyStore.remove(TOKEN_KEY).then(
      () => {
        resolve(null);
      },
    );
  });
};

export { getToken, saveToken, removeToken };
