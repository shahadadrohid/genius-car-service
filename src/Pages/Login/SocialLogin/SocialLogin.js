import React from 'react';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;
    if (error || error1) {
        errorElement = <p>Error: {error?.massage} {error1?.message}</p>
    }
    if (user || user1) {
        navigate('/')
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px', backgroundColor: '#3b5998' }} className='w-50'></div>
                <p className="mt-2 px-2">OR</p>
                <div style={{ height: '1px', backgroundColor: '#3b5998' }} className='w-50'></div>
            </div>
            <div className=''>
                <button onClick={() => signInWithGoogle()} style={{ cursor: 'pointer' }} className="border-0 w-75 mx-auto d-block rounded-pill px-5 py-2 bg-secondary text-white">Sign in with Google</button>
            </div>
            <div className='mt-2'>
                <button style={{ backgroundColor: '#3b5998', cursor: 'pointer' }} className="border-0 d-block w-75 mx-auto rounded-pill px-5 py-2 text-white">Sign in with Facebook</button>
            </div>
            <div className='mt-2'>
                <button onClick={() => signInWithGithub()} style={{ cursor: 'pointer' }} className="border-0 d-block w-75 mx-auto rounded-pill px-5 py-2 text-white bg-dark">Sign in with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;