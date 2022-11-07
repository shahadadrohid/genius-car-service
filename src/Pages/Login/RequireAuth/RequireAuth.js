import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import { Toast } from 'react-bootstrap';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    const location = useLocation();
    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    console.log(user)
    if (user.providerData[0].providerId === 'password' && !user.emailVerified) {
        return <div>
            <h2 className={{ color: 'red' }}>Email is not verified</h2>
            <button className="btn btn-primary" onClick={async () => {
                await sendEmailVerification();
                Toast('sending email')
            }}>Send verification</button>
        </div>
    }
    return children;
};

export default RequireAuth;