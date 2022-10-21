import React, { useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password)
    }
    const navigateRegister = event => {
        navigate('/register')
    }
    return (
        <div className="w-50 mx-auto border border-2 border-primary p-4 rounded mt-5">
            <h2 className="text-primary text-center">Please Login</h2>
            <Form onSubmit={handleSubmit} className="">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-start">Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>New to Genius Car? <span className="text-danger" style={{ cursor: 'pointer' }} onClick={navigateRegister}>Please Register Here</span></p>
        </div>
    );
};

export default Login;