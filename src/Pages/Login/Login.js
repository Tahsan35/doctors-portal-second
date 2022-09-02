import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    if (user) {
        console.log(user);
    }
    const onSubmit = data => console.log(data);

    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("firstName", { required: true })} />
                        {errors.firstName?.type === 'required' && "First name is required"}

                        <input {...register("lastName", { required: true })} />
                        {errors.lastName && <p>Last name is required</p>}

                        <input {...register("mail", { required: "Email Address is required" })} />
                        <p>{errors.mail?.message}</p>

                        <input type="submit" />
                    </form>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()}
                        className="btn btn-outline btn-secondary"
                    >continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;