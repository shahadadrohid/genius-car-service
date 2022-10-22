import React, { useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init.js'
import { useLocation } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin.js';

const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate();
    const location = useLocation();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let errorElement;
    if (error) {
        errorElement = <p>Error: {error?.massage}</p>
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password)
    }

    const from = location?.state?.from?.pathname || '/';
    if (user) {
        navigate(from, { replace: true })
    }
    const navigateRegister = event => {
        navigate('/register')
    }

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        alert('Sent email')
    }

    return (
        <div className="w-50 mx-auto border border-2 border-primary p-4 rounded mt-5">
            <h2 className="text-primary text-center">Please Login</h2>
            <Form onSubmit={handleSubmit} className="">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-start">Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <p className="">Forget Password? <span className="text-danger" style={{ cursor: 'pointer' }} onClick={resetPassword}>Reset password here</span></p>

                <Button className="border-0 d-block w-75 mx-auto rounded-pill px-5 py-2 text-white" variant="primary" type="submit">
                    Login
                </Button>
            </Form>

            {errorElement}
            <p className="">New to Genius Car? <span className="text-danger" style={{ cursor: 'pointer' }} onClick={navigateRegister}>Register here</span></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;