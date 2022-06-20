import React, {useContext, useEffect} from 'react';
import {Form, FormControl, InputGroup} from 'react-bootstrap';
import {useForm} from 'react-hook-form';
import {AuthContext} from '../../../../context/AuthContext';
import {ReplyButton} from '../../../../components/Button/Button';
import {Navigate, useNavigate} from 'react-router-dom';

interface FormProps {
  username: string;
  password: string;
}

export const Login = () => {
  const navigate = useNavigate();
  const {user, login, error, loading, userIsLoggedIn} = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: {errors},
    setError,
  } = useForm<FormProps>({
    mode: 'onChange',
  });

  useEffect(() => {
    if (error) {
      setError('username', {
        type: 'value',
        message: 'Check your username and password.',
      });
    }
  }, [error]);

  const onSubmit = (data: FormProps) => {
    login({username: data.username, password: data.password});
  };

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user]);

  if (userIsLoggedIn) {
    return <Navigate to="/" replace />;
  }

  console.log('loading', loading);
  return loading ? (
    <p style={{color: 'white'}}>loading...</p>
  ) : (
    <div className="container" style={{color: 'white'}}>
      <div className="row">
        <div
          className="col-6"
          style={{border: '1px solid white', backgroundColor: 'blue', height: '700px'}}
        >
          <div style={{backgroundColor: 'blue'}}></div>
        </div>
        <div className="col-6" style={{height: '700px'}}>
          <div
            style={{
              border: '1px solid red',
              padding: '20px',
              marginLeft: '20px',
              marginTop: '50px',
              height: '10px',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Icon
          </div>
          <h2 className="mt-5">Happening now</h2>
          <h4 className="mt-2">Join Twitter today.</h4>
          <Form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
            <InputGroup className="mt-2 mb-2">Login</InputGroup>
            <InputGroup.Text id="inputGroup-sizing-default">USERNAME</InputGroup.Text>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              className="mt-1"
              type="text"
              {...register('username', {
                required: 'Username is require',
                // validate: username => username.includes('@'),
              })}
            />
            {errors.username?.message ? (
              <div className="alert alert-danger" role="alert">
                {errors.username?.message}
              </div>
            ) : null}
            <InputGroup.Text id="inputGroup-sizing-default" className="mt-5">
              PASSWORD
            </InputGroup.Text>
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              className="mt-1"
              type="text"
              {...register('password', {
                required: 'Password is require',
                // validate: password => password === 'admin123',
              })}
            />
            {errors.password?.message ? (
              <div className="alert alert-danger" role="alert">
                {errors.password?.message}
              </div>
            ) : null}
            <div className="col mt-3">
              <ReplyButton type="submit" nameButton="Log In" />
            </div>
            <h6 className="col">
              Don't have an account?<a href="/">Sing up</a>
            </h6>
          </Form>
        </div>
      </div>
    </div>
  );
};
