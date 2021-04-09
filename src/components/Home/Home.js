import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';

const Home = () =>
{
    const [products, setProducts] = useState([])

    useEffect(() =>
    {
        fetch(`https://enigmatic-cove-32831.herokuapp.com/products`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className="text-center">
            {
                products.length === 0 &&
                <div className="spinner-border text-success" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            }
            <div className="container my-5">
                <div className="row row-cols-1 row-cols-lg-4 row-cols-md-3 row-cols-sm-2  g-4">
                    {
                        products.map(product => <Products key={product._id} product={product} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;