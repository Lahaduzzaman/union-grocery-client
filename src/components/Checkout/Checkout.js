import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../App';


const Checkout = () =>
{
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    let { id } = useParams();
    const [product, setProduct] = useState([])

    useEffect(() =>
    {
        fetch(`https://enigmatic-cove-32831.herokuapp.com/product/${ id }`)
            .then(res => res.json())
            .then(data => setProduct(data[0]))
    }, [])

    const { name, price, imageURL, quantity } = product;

    const orderInfo = () =>
    {
        const orderDetail = { ...loggedInUser, name, price, imageURL, quantity, orderTime: new Date() }

        const url = `https://enigmatic-cove-32831.herokuapp.com/addOrder`;

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderDetail)
        })
            .then(res => res.json())
            .then(data =>
            {
                if (data)
                {
                    alert('Your Order Placed Successfully');
                    history.push("/home");
                }
            })

    }

    return (
        <div className="container">
            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th scope="col">Product Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">{product.name}</th>
                        <td>1</td>
                        <td>${product.price}</td>
                    </tr>
                    <tr>
                        <th></th>
                        <td></td>
                        <td><button onClick={orderInfo} className="btn btn-outline-success">Checkout</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Checkout;