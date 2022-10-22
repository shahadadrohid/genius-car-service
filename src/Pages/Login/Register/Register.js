import React, { useState, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const nameRef = useRef('');
    const confirmPasswordRef = useRef('')
    const navigate = useNavigate();


    const navigateLogin = event => {
        navigate('/login')
    }

    if (user) {
        navigate('/')
    }
    const handleSubmit = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const name = nameRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ dispalyName: name })
        alert('Update profile')
        navigate('/')
    }
    return (
        <div className="w-50 mx-auto border border-2 border-primary p-4 rounded mt-5">
            <h2 className="text-primary text-center">Register</h2>
            <Form onSubmit={handleSubmit} className="">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-start">Your Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" placeholder="Enter your name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-start">Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control ref={confirmPasswordRef} type="password" placeholder="Confirm Password" required />
                </Form.Group>

                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={`ps-2 ${agree ? 'text-success' : 'text-danger'}`} htmlFor="terms">Accept Genius Car Terms & Conditions</label>

                <Button disabled={!agree} className="mt-4 border-0 d-block w-75 mx-auto rounded-pill px-5 py-2 text-white" variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p className="text-center">Have an Account? <span className="text-danger" style={{ cursor: 'pointer' }} onClick={navigateLogin}>Login here</span></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;