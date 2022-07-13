interface User {
  email: string;
  password: string;
}

// type Action =
//   | {
//       type: ActionEnum.LOGIN_IN_PROGRESS;
//     }
//   | {
//       type: ActionEnum.LOGIN_SUCCESS;
//       payload: {
//         user: User;
//       };
//     }
//   | {
//       type: ActionEnum.LOGIN_FAILUER;
//       payload: {
//         error: string;
//       };
//     }
//   | {
//       type: ActionEnum.RESET_STATE;
//     }
//   | {
//       type: ActionEnum.LOGOUT_SUCCESS;
//     }
//   | {
//       type: ActionEnum.LOGOUT_FAILUER;
//       payload: {
//         error: string;
//       };
//     }
//   | {
//       type: ActionEnum.LOADING;
//       payload: boolean;
//     }
//   | {
//       type: ActionEnum.REGISTER_IN_PROGRESS;
//     }
//   | {
//       type: ActionEnum.REGISTER_SUCCESS;
//       payload: {
//         user: User;
//       };
//     }
//   | {
//       type: ActionEnum.REGISTER_FAILUER;
//       payload: {
//         error: string;
//       };
//     };

export type UserState = {
  userIsLoggedIn: boolean;
  userIsRegistred: boolean;
  loading: boolean;
  error: string;
  user?: User;
};
