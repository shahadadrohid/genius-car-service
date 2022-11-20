import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const Order = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    useEffect(() => {

        const getOrders = async () => {
            const email = user.email;
            const url = `http://localhost:5000/order?email=${email}`;
            const { data } = await axios.get(url);
            setOrders(data)
        }
        getOrders()

    }, [user])
    return (
        <div>
            <h2>This is order page</h2>
            <h4>Your orders : {orders.length}</h4>
        </div>
    );
};

export default Order;