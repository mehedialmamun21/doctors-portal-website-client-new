import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import Loading from "../Shared/Loading";
import { Link, useNavigate } from "react-router-dom";
import useToken from '../../hooks/useToken';
import googleIcon from '../../assets/images/google.png';
import { FaSignOutAlt } from 'react-icons/fa';

import { FcGoogle } from 'react-icons/fc';

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
        signInError = <p className="text-red-500 font-semibold font-mono"> <small>{error?.message || gError?.message || updateError?.message || verError?.message}</small> </p>
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
        <section className="h-screen flex justify-center items-center">

            <div className="bg-cyan-500 w-1/2 flex justify-center items-center py-0">

                <div className="card w-96 bg-base-50 rounded-sm">

                    {/* <div className="flex justify-center items-center text-xl font-bold">
                        <span className="flex justify-center items-center"><FaSignOutAlt /></span>
                        <span className="pl-4">Register</span>
                    </div> */}

                    <div className="card-body">

                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-mono">Name</span>
                                </label>
                                <input type="text"
                                    placeholder="Your Name"
                                    className="input w-full max-w-xs rounded-sm shadow-lg font-mono bg-slate-200"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Name is required'
                                        },

                                    })}
                                />
                                <label className="label font-semibold ">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500 font-mono">{errors.name.message}</span>}

                                </label>
                            </div>


                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-mono">Email</span>
                                </label>
                                <input type="email"
                                    placeholder="Your Email"
                                    className="input w-full max-w-xs rounded-sm shadow-lg bg-slate-200 font-mono"
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
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500 font-mono">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500 font-mono">{errors.email.message}</span>}

                                </label>
                            </div>


                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-mono">Password</span>
                                </label>
                                <input type="password"
                                    placeholder="Password"
                                    className="input w-full max-w-xs rounded-sm shadow-lg bg-slate-200 font-mono"
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
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500 font-mono">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500 font-mono">{errors.password.message}</span>}
                                </label>
                            </div>

                            <button type="submit" className="py-3 rounded-sm w-full max-w-xs font-semibold bg-gradient-to-r from-secondary to-primary shadow-lg text-white border mt-2 hover:scale-105 duration-300">
                                <p className='flex justify-center items-center'>
                                    <FaSignOutAlt size="1rem" />
                                    <span className='pl-3 flex items-center text-md'>REGISTER</span>
                                </p>
                            </button>

                        </form>

                        <small><p className='text-sm font-semibold'>Already have an Account ? <Link className="font-bold ml-10 lg:ml-14" to="/login" >Please Login</Link> </p></small>

                        <div className="divider font-mono">Or continue with</div>

                        {signInError}

                        <button onClick={() => signInWithGoogle()} className="btn rounded-sm border-none text-white bg-slate-800 hover:bg-slate-800 shadow-lg hover:scale-105 duration-300">
                            <p className='flex justify-center'>
                                <FcGoogle size="2rem" />
                                <span className="pl-3 flex items-center text-md">Google</span>
                            </p>
                        </button>

                    </div>
                </div>
            </div>
        </section >

    );
};

export default SignUp;