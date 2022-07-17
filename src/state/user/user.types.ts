export interface User {
  firstname?: string;
  lastname?: string;
  email?: string;
  password?: string;
  repeatPassword?: string;
  birthday?: string;
  loading?: boolean;
  error?: string;
}

export type UserState = {
  userIsLoggedIn: boolean;
  userIsRegistred: boolean;
  loading: boolean;
  error: string;
  user?: User;
};

// export interface UserError {
//   error?: string;
// }
// export type ErrorState = {
//   error: string;
//   loginFailure?: boolean;
// };
