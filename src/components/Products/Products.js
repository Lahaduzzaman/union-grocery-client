import React from 'react';
import './Products.css';
import { useHistory } from 'react-router';


const Products = (props) => {
    const { product } = props;
    const history = useHistory();

    return (
        <div className="col">
            <div className="card h-100">
                <img src={product.imageURL} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-title">{product.name}</p>
                </div>
                <div className="card-footer d-flex justify-content-between">
                    <h4 className="text-success">${product.price}</h4>
                    <button onClick={() => history.push(`/product/${product._id}`)} className="btn btn-outline-primary btn-sm">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Products;