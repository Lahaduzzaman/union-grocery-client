import React from 'react';
import { Link } from 'react-router-dom';


const Admin = () =>
{
    return (
        <div className="container text-center">
            <button className="btn btn-outline-success btn-lg m-3"><Link style={{ color: 'black' }} className="nav-link active" aria-current="page" to="/addProduct">Add Product</Link></button>
            <button className="btn btn-outline-primary btn-lg m-3"><Link style={{ color: 'black' }} className="nav-link" to="/manageProduct">Manage Product</Link></button>
        </div>
    );
};

export default Admin;