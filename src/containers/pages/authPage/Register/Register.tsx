import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthContext';
import { AuthButton } from '../../../../components/Button/Button';

interface RegisterProps {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  repeatPassword: string;
  birthday: string;
}

export const Register = () => {
  const { register: registerUser, error, loading, userIsRegistred } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<RegisterProps>({
    mode: 'onChange',
  });

  useEffect(() => {
    if (error) {
      setError('password', {
        type: 'value',
        message: "Password and Repeat Password don't match",
      });
    }
  }, [error]);

  const onSubmit = (data: RegisterProps) => {
    registerUser(data);
  };

  if (userIsRegistred) {
    return <Navigate to="/login" replace />;
  }

  console.log('loading', loading);
  return loading ? (
    <p style={{ color: 'white' }}>loading...</p>
  ) : (
    <div className="container d-flex justify-content-center align-items-center mt-1 mt-md-3 mt-xl-5" style={{ color: 'white' }}>
      <div className="row">
        <div className="col-0 col-md-6 col-xl-7">
          <img
            src="https://wallpapercave.com/wp/wp1973433.jpg"
            alt="Register Image"
            className="h-100 w-100 d-none d-md-block img-fluid"
          />
        </div>
        <div className="col=12 col-md-6 col-xl-5">
          <h3 className="mt-2">Join Twitter today.</h3>
          <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName1"
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
              <label>Lastname</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputLastName1"
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
              <label className="control-label">Birthday</label>
              <input
                type="date"
                className="form-control"
                id="date"
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
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
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
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
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
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputConfirmPassword1"
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
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label">Check me out</label>
            </div>
            <div className="col-8">
              <AuthButton type="submit" nameButton="Sign In" />
            </div>
            <h6 className="row mt-4">
              You already have an account?<a href="login">Sign in</a>
            </h6>
          </form>
        </div>
      </div>
    </div>
  );
};
