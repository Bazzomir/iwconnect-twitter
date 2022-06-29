import React, {useContext, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {Navigate} from 'react-router-dom';
import {AuthButton} from '../../../../components/Button/Button';
import {AuthContext} from '../../../../context/AuthContext';

interface RegisterProps {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  repeatPassword: string;
  birthday: string;
}

export const Register = () => {
  const {register: registerUser, error} = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    setError,
    formState: {errors},
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

  return (
    <div className="container-fluid mt-5" style={{color: 'white'}}>
      <div className="row">
        <div className="col-7">
          <img
            src="https://wallpapercave.com/wp/wp1973433.jpg"
            alt=" "
            style={{float: 'left', height: '100%', width: '100%'}}
          />
        </div>
        <div className="col-5">
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
                  // validate: password => password === 'admin123',
                })}
              />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Confirm Password"
                {...register('repeatPassword', {
                  required: 'Password is required',
                  // validate: password => password === 'admin123',
                })}
              />
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label">Check me out</label>
            </div>
            <div className="col-8">
              <AuthButton type="submit" nameButton="Sign In" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
