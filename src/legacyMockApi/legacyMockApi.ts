/**
 * LEGACY MOCK API
 * Used during React mentorship program (2022)
 * Replaced with Firebase Authentication
 * Kept for reference only
 */


import { LocalStorageConstants } from '../constants/constants';
import { readFromStorage, writeInStorage } from '../utils/localStorage';

export class CustomLoginError extends Error {
  status: any;
  constructor(message: string, status?: number) {
    super();
    this.message = message;
  }
}

interface User {
  email: string;
  password: string;
}

export const loginApi = ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<{ accessToken: string; refreshToken: string; email: string; password: string }> => {
  return new Promise((resolve, reject) => {
    if (password.length < 3) {
      reject(new CustomLoginError('Plase make your password at least 3 characters'));
    }
    var validatedPassword = readFromStorage(email);
    if (!!validatedPassword) {
      resolve({
        accessToken: LocalStorageConstants.AccessToken,
        refreshToken: LocalStorageConstants.RefreshToken,
        email: email,
        password: validatedPassword,
      });
    } else {
      reject(new CustomLoginError('Check your email and password.', 401));
    }
  });
};

export const logoutApi = ({ accessToken }: { accessToken: string | null }): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    if (accessToken) {
      resolve(true);
    } else {
      reject('You are not logged out');
    }
  });
};

export const getUserApi = ({
  accessToken,
}: {
  accessToken: string | null;
}): Promise<{ email: string; password: string }> => {
  return new Promise((resolve, reject) => {
    if (accessToken) {
      const email = readFromStorage(LocalStorageConstants.Email);
      const password = readFromStorage(LocalStorageConstants.Password);
      if (email != null && password != null) {
        resolve({ email: email, password: password });
      }
    } else {
      reject('You must login');
    }
  });
};

export const registerUserApi = ({
  email,
  password,
  repeatPassword,
}: {
  firstname: string;
  lastname: string;
  email: string;
  birthday: string;
  password: string;
  repeatPassword: string;
}): Promise<{ user: User; accessToken: string; refreshToken: string }> => {
  return new Promise((resolve, reject) => {
    if (password === repeatPassword) {
      writeInStorage(email, password);
      resolve({
        user: { email, password },
        accessToken: LocalStorageConstants.AccessToken,
        refreshToken: LocalStorageConstants.RefreshToken,
      });
    } else {
      reject("Password and Repeat Password don't match");
    }
  });
};
