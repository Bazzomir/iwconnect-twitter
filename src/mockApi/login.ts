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
        accessToken: 'accessToken',
        refreshToken: 'refreshToken',
      });
    } else {
      //   reject('Check your username and password.');
      reject(new CustomLoginError('Check your username and password.', 401));
    }
  });
};
