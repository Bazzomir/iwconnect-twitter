import React, {useContext, useEffect} from 'react';
import {Form, FormControl, InputGroup} from 'react-bootstrap';
import {useForm} from 'react-hook-form';
import {AuthContext} from '../../../../context/AuthContext';
import {AuthButton} from '../../../../components/Button/Button';
import {Navigate} from 'react-router-dom';
import {BsTwitter} from 'react-icons/bs';
import {useDispatch} from 'react-redux';
import {loginInProgress} from '../../../../state/user/user.actions';
import {useSelector} from 'react-redux';
import {UserState} from '../../../../state/user/user.types';

interface FormProps {
  email: string;
  password: string;
}

export const Login = () => {
  const {login, error, loading, userIsLoggedIn} = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: {errors},
    setError,
  } = useForm<FormProps>({
    mode: 'onChange',
  });

  const dispatch = useDispatch();
  const userIsLoggedInFromState = useSelector((state: UserState) => {
    // console.log(state);
    return state?.userIsLoggedIn;
  });
  console.log(userIsLoggedInFromState);

  useEffect(() => {
    if (error) {
      setError('email', {
        type: 'value',
        message: 'Check your email and password.',
      });
    }
  }, [error]);

  const onSubmit = (data: FormProps) => {
    login({email: data.email, password: data.password});
  };

  if (userIsLoggedIn) {
    return <Navigate to="/" replace />;
  }

  // console.log('loading', loading);
  return loading ? (
    <p style={{color: 'white'}}>loading...</p>
  ) : (
    <div className="container" style={{color: 'white'}}>
      <div className="row">
        <div className="col-8">
          <img
            src="https://royaladarsh.files.wordpress.com/2021/05/image_editor_output_image-113800456-1622176846204.png"
            alt=""
            style={{float: 'left', height: '100%', width: '100%'}}
          />
        </div>
        <div className="col-4" style={{height: '700px'}}>
          <BsTwitter className="mt-5" style={{height: '100px', width: '50px'}} />
          <h2 className="mt-5">Happening now</h2>
          <h4 className="mt-2">Join Twitter today.</h4>
          <Form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
            <InputGroup className="mt-2 mb-2">
              <h3>Login</h3>
            </InputGroup>
            <label id="inputGroup-sizing-default">email</label>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              className="mt-1"
              type="text"
              {...register('email', {
                required: 'email is required',
                // validate: email => email.includes('@'),
              })}
            />
            {errors.email?.message ? (
              <div className="alert alert-danger" role="alert">
                {errors.email?.message}
              </div>
            ) : null}
            <label id="inputGroup-sizing-default" className="mt-5">
              PASSWORD
            </label>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              className="mt-1"
              type="password"
              {...register('password', {
                required: 'Password is required',
                // validate: password => password === 'admin123',
              })}
            />
            {errors.password?.message ? (
              <div className="alert alert-danger" role="alert">
                {errors.password?.message}
              </div>
            ) : null}
            <AuthButton type="submit" nameButton="Log In" />
            <h6 className="row mt-4">
              Don't have an account?<a href="/register">Sign up</a>
            </h6>
            <button
              onClick={() => {
                dispatch(loginInProgress({userIsLoggedIn: true}));
              }}
            >
              Fire Action
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
};
