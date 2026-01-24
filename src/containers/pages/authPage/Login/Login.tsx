import { useContext, useEffect } from 'react';
import { Form, FormControl, InputGroup } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../../context/AuthContext';
import { AuthButton } from '../../../../components/Button/Button';
import { Navigate } from 'react-router-dom';
import { BsTwitter } from 'react-icons/bs';
// import firebase from '../../../../firebase';

interface FormProps {
  email: string;
  password: string;
}

export const Login = () => {
  const { login, error, loading, userIsLoggedIn } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormProps>({
    mode: 'onChange',
  });

  useEffect(() => {
    if (error) {
      setError('email', {
        type: 'value',
        message: 'Check your email and password.',
      });
    }
  }, [error]);

  const onSubmit = (data: FormProps) => {
    login({ email: data.email, password: data.password });
  };

  if (userIsLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return loading ? (
    <p style={{ color: 'white', fontSize: '50px' }} className="bold text-center h-100 mx-auto my-auto">loading...</p>
  ) : (
    <div className="container d-flex justify-content-center align-items-center my-1 my-md-3 my-xl-5" style={{ color: 'white' }}>
      <div className="row">
        <div className="col-0 col-md-6 col-xl-8">
          <img
            src="https://royaladarsh.files.wordpress.com/2021/05/image_editor_output_image-113800456-1622176846204.png"
            alt="Login"
            className="h-100 w-100 d-none d-md-block img-fluid"
          />
        </div>
        <div className="col-12 col-md-6 col-xl-4 h-100">
          <BsTwitter className="mt-5" style={{ height: '100px', width: '50px' }} />
          <h2 className="mt-5">Happening now</h2>
          <h4 className="mt-2">Join Twitter today.</h4>
          <Form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
            <InputGroup className="my-2">
              <h3>Login</h3>
            </InputGroup>
            <label htmlFor="emailLogin" id="inputGroup-sizing-default">Email</label>
            <FormControl
              id="emailLogin"
              autoComplete="off"
              aria-label="Email"
              aria-describedby="inputGroup-sizing-default"
              className="mt-1"
              type="text"
              {...register('email', {
                required: 'Email is required',
              })}
            />
            {errors.email?.message ? (
              <div className="alert alert-danger" role="alert">
                {errors.email?.message}
              </div>
            ) : null}
            <label htmlFor="passwordLogin" id="inputGroup-sizing-default" className="mt-3">
              Password
            </label>
            <FormControl
              id="passwordLogin"
              autoComplete="off"
              aria-label="Password"
              aria-describedby="inputGroup-sizing-default"
              className="mt-1"
              type="password"
              {...register('password', {
                required: 'Password is required',
              })}
            />
            {errors.password?.message ? (
              <div className="alert alert-danger" role="alert">
                {errors.password?.message}
              </div>
            ) : null}
            <div className="row mt-4">
              <h6 className="col-7">
                Don't have an account? <a href="register">Sign up</a>
              </h6>
              <div className="col-5">
                <AuthButton type="submit" nameButton="Log In" />
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};
