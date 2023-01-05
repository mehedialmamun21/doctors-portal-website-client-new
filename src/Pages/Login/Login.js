import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import Loading from "../Shared/Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";
import googleIcon from '../../assets/images/google.png'

const Login = () => {

  const [email, setEmail] = useState('');

  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const [token] = useToken(user || gUser);

  const [sendPasswordResetEmail, sending, resError] = useSendPasswordResetEmail(
    auth
  );

  let signInError;
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate])

  if (loading || gLoading || sending) {
    return <Loading></Loading>
  }

  if (error || gError || resError) {
    signInError = <p className="text-red-500 font-semibold"> <small>{error?.message || gError?.message || resError}</small> </p>
  }

  const onSubmit = data => {
    setEmail(data.email);
    signInWithEmailAndPassword(data.email, data.password);
  }

  return (
    <section className="h-screen flex justify-center items-center">

      <div className="bg-white w-1/2 flex justify-center items-center py-0">
        <div className="card w-96 bg-base-50 rounded-sm ">
          <div className="card-body ">

            {/* <h2 className="text-center text-xl font-semibold">Login</h2> */}

            <form onSubmit={handleSubmit(onSubmit)}>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email"
                  placeholder="Your Email"
                  className="input w-full max-w-xs rounded-sm shadow-lg bg-slate-200"
                  {...register("email", {
                    required: {
                      value: true,
                      message: 'Email is required'
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: 'Provide a valid Email'
                    }
                  })}
                />
                <label className="label font-semibold">
                  {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                  {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                </label>
              </div>


              <div className="form-control w-full max-w-xs">

                <label className="label">
                  <span className="label-text">Password</span>
                </label>

                <input type="password"
                  placeholder="Password"
                  className="input w-full max-w-xs rounded-sm shadow-lg bg-slate-200"
                  {...register("password", {
                    required: {
                      value: true,
                      message: 'Password is required'
                    },
                    minLength: {
                      value: 6,
                      message: 'Must be 6 characters or longer'
                    }
                  })}
                />

                <label className="label font-semibold">
                  {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                  {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                </label>

              </div>


              <button
                onClick={async () => {
                  await sendPasswordResetEmail(email);
                  alert('Password Reset email sent..');
                }}
              >
                <h5 className="pb-2 font-semibold">Forgot password?</h5>
              </button>

              {signInError}

              <input className="btn mt-3 rounded-xl w-full max-w-xs font-semibold bg-gradient-to-r from-secondary to-primary shadow-lg text-white border-none hover:scale-105 duration-300" type="submit" value="Login" />

            </form>



            <small><p className="text-sm font-semibold">New to Doctors Portal? <Link className="font-bold ml-4 lg:ml-5" to="/signup" >Create new account</Link> </p></small>

            <div className="divider">Or continue with</div>

            <button
              onClick={() => signInWithGoogle()}
              className="btn rounded-xl border-none text-white bg-slate-600 shadow-lg hover:scale-105 duration-300"
            > <img src={googleIcon} alt="" /><b className="mx-2 font-semibold">Google</b></button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Login;