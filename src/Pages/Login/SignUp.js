import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import Loading from "../Shared/Loading";
import { Link, useNavigate } from "react-router-dom";
import useToken from '../../hooks/useToken';
import googleIcon from '../../assets/images/google.png';

const SignUp = () => {

    const [email, setEmail] = useState('');

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [sendEmailVerification, sending, verError] = useSendEmailVerification(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [token] = useToken(user || gUser);
    const navigate = useNavigate();

    let signInError;

    if (loading || gLoading || updating) {
        return <Loading></Loading>
    }

    if (error || gError || updateError || verError) {
        signInError = <p className="text-red-500"> <small>{error?.message || gError?.message || updateError?.message || verError?.message}</small> </p>
    }

    if (token) {
        navigate('/appointment');
    }

    const onSubmit = async data => {
        setEmail(data.email);
        // console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        // console.log('update done');

        await sendEmailVerification();
        alert('Email verification sent');
    }

    return (
        <section className="bg-zinc-500 h-screen flex justify-center items-center">
            <div className="bg-white w-1/2 flex justify-center items-center py-0">
                <div className="card w-96 bg-base-50 rounded-sm">
                    <div className="card-body">

                        {/* <h2 className='text-center text-xl font-semibold'>Register</h2> */}

                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"
                                    placeholder="Your Name"
                                    className="input w-full max-w-xs rounded-sm shadow-lg bg-slate-200"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Name is required'
                                        },

                                    })}
                                />
                                <label className="label font-semibold">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                                </label>
                            </div>


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

                            {signInError}

                            <input className="btn rounded-xl w-full max-w-xs font-semibold bg-gradient-to-r from-secondary to-primary shadow-lg text-white border-none mt-4 hover:scale-105 duration-300" type="submit" value="Register" />
                        </form>

                        <small><p className='text-sm font-semibold'>Already have an account? <Link className="font-bold ml-10 lg:ml-10" to="/login" >Please login</Link> </p></small>

                        <div className="divider">Or continue with</div>

                        <button
                            onClick={() => signInWithGoogle()}
                            className="btn rounded-xl border-none text-white shadow-lg bg-slate-600 hover:scale-105 duration-300"
                        > <img src={googleIcon} alt="" /><b className="mx-2 font-semibold">Google</b></button>

                    </div>
                </div>
            </div>
        </section>

    );
};

export default SignUp;