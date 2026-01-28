import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import { AuthButton } from '../../../components/Button/Button';
import { useAuth } from '../../../context/AuthContext';

interface RegisterProps {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  repeatPassword: string;
  birthday: string;
  terms: boolean;
}

export const Register = () => {
  const { register: registerUser, loading, user } = useAuth();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<RegisterProps>({
    mode: 'onChange',
  });

  const onSubmit = async (data: RegisterProps) => {
    try {
      await registerUser(data);
    } catch (err: any) {
      setError('password', {
        type: 'value',
        message: err.message || 'Registration failed',
      });
    }
  };

  if (user) {
    return <Navigate to="/login" replace />;
  }

  return loading ? (
    <p style={{ color: 'white', fontSize: '50px' }} className="bold text-center h-100 mx-auto my-auto">loading...</p>
  ) : (
    <div className="container d-flex justify-content-center align-items-center my-1 my-md-3 my-xl-5" style={{ color: 'white' }}>
      <div className="row">
        <div className="col-0 col-md-6 col-xl-7">
          <img
            src="https://wallpapercave.com/wp/wp1973433.jpg"
            alt="Register"
            className="h-100 w-100 d-none d-md-block img-fluid"
          />
        </div>
        <div className="col-12 col-md-6 col-xl-5">
          <h3 className="mt-2">Join Twitter today.</h3>
          <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="name" className="control-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                autoComplete="given-name"
                aria-describedby="nameHelp"
                placeholder="Enter name"
                {...register('firstname', {
                  required: 'Name is required',
                })}
              />
              {errors.firstname?.message ? (
                <div className="alert alert-danger" role="alert">
                  {errors.firstname?.message}
                </div>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="lastName" className="control-label">Lastname</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                autoComplete="family-name"
                aria-describedby="lastNameHelp"
                placeholder="Enter lastname"
                {...register('lastname', {
                  required: 'Lastname is required',
                })}
              />
              {errors.lastname?.message ? (
                <div className="alert alert-danger" role="alert">
                  {errors.lastname?.message}
                </div>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="birthday" className="control-label">Birthday</label>
              <input
                type="date"
                className="form-control"
                id="birthday"
                autoComplete="off"
                placeholder="MM/DD/YYY"
                {...register('birthday', {
                  required: 'Birthday is required',
                })}
              />
              {errors.birthday?.message ? (
                <div className="alert alert-danger" role="alert">
                  {errors.birthday?.message}
                </div>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="email" className="control-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                autoComplete="off"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                {...register('email', {
                  required: 'Email is required',
                })}
              />
              {errors.email?.message ? (
                <div className="alert alert-danger" role="alert">
                  {errors.email?.message}
                </div>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="password" className="control-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                autoComplete="off"
                placeholder="Password"
                {...register('password', {
                  required: 'Password is required',
                })}
              />
              {errors.password?.message ? (
                <div className="alert alert-danger" role="alert">
                  {errors.password?.message}
                </div>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword" className="control-label">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                autoComplete="off"
                placeholder="Confirm Password"
                {...register('repeatPassword', {
                  required: 'Confirm Password is required',
                })}
              />
              {errors.repeatPassword?.message ? (
                <div className="alert alert-danger" role="alert">
                  {errors.repeatPassword?.message}
                </div>
              ) : null}
            </div>
            <div className="form-check mt-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="terms"
                {...register('terms', {
                  required: 'You must accept the terms',
                })}
              />
              <label htmlFor="terms" className="form-check-label">
                I agree to all terms and conditions
              </label>
            </div>
            {errors.terms?.message ? (
              <div className="alert alert-danger mt-2" role="alert">
                {errors.terms.message}
              </div>
            ) : null}
            <div className="row mt-4">
              <h6 className="col-7">
                You already have an account? <a href="login">Sign in</a>
              </h6>
              <div className="col-5">
                <AuthButton type="submit" nameButton="Sign In" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
