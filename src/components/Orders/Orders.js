import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';


const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://enigmatic-cove-32831.herokuapp.com/orders?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    return (
        <div className="text-center">
            {
                orders.length === 0 &&
                <div className="spinner-border text-success" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            }
            <div className="container">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Email</th>
                            <th scope="col">Product</th>
                            <th scope="col">Price</th>
                            <th scope="col">Order Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order =>
                                <tr key={order._id}>
                                    <th scope="row">{order.email}</th>
                                    <td>{order.name}</td>
                                    <td>{order.price}</td>
                                    <td>{(new Date(order.orderTime).toString('dd/MM/yyyy'))}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;