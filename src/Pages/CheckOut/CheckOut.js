import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../hooks/useServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import { Toast } from 'react-bootstrap';

const CheckOut = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);

    /*const [user, setUser] = useState({
        name: 'Shahadad',
        email: 'me@gmail.com',
        address: 'Chittagong'
    })

    const handleAddressChange = event => {
        const { address, ...rest } = user;
        console.log(address, rest);
        const newAddress = event.target.value;
        const newUser = { address: newAddress, ...rest };
        console.log(newUser)
        setUser(newUser)
    }*/

    const [user, loading, error] = useAuthState(auth);
    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post('http://localhost:5000/order', order)
            .then(response => {
                console.log(response)
                const { data } = response;
                if (data.insertedId) {
                    <h2>Done</h2>
                    event.target.reset();
                }
            })
    }
    return (
        <div>
            <p className="text-center text-primary" style={{ fontSize: '30px' }}>Welcome to CheckOut: {service.name}</p>
            <form onSubmit={handlePlaceOrder} action="" className="w-50 mx-auto">
                <input className="w-100 mb-2" type="text" value={user?.displayName} name="name" id="" placeholder='Name' />
                <br />
                <input className="w-100 mb-2" type="email" value={user?.email} name="email" id="" placeholder="Email" />
                <br />
                <input className="w-100 mb-2" type="text" value={service?.name} name="service" id="" placeholder="service" />
                <br />
                <input className="w-100 mb-2" type="text" name="address" id="" placeholder="address" />
                <br />
                <input className="w-100 mb-2" type="text" name="phone" id="" placeholder="phone" />
                <br />
                <input type="submit" className="btn btn-primary" value="Place Order" />
            </form>
        </div>
    );
};

export default CheckOut;