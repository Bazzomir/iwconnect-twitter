import {LocalStorageConstants} from '../constants/constants';

export class CustomLoginError extends Error {
  status: any;
  constructor(message: string, status?: number) {
    super();
    this.message = message;
  }
}

const nekojaGreshka = new CustomLoginError('Check your credentials');

export const loginApi = ({
  username,
  password,
}: {
  username: string;
  password: string;
}): Promise<{accessToken: string; refreshToken: string}> => {
  return new Promise((resolve, reject) => {
    if (password.length < 4) {
      reject(new CustomLoginError('Plase make your password at least 4 characters'));
    }
    if (username === 'admin@admin' && password === 'admin123') {
      resolve({
        accessToken: LocalStorageConstants.AccessToken,
        refreshToken: LocalStorageConstants.RefreshToken,
      });
    } else {
      //   reject('Check your username and password.');
      reject(new CustomLoginError('Check your username and password.', 401));
    }
  });
};

export const logoutApi = ({accessToken}: {accessToken: string | null}): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    if (accessToken) {
      resolve(true);
    } else {
      reject('You are not logged out');
    }
  });
};
