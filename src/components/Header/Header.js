
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';


const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <>
            <nav className="navbar navbar-expand-md sticky-top navbar-light" style={{ backgroundColor: '#FFE4C4' }}>
                <div className="container-fluid">
                    <Link className="navbar-brand font-weight-bold" to="/">UNION GROCERY</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end font-weight-bold" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/orders">Orders</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin">Admin</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/deals">Deals</Link>
                            </li>
                            {
                                loggedInUser?.isSignedIn &&
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">{loggedInUser.displayName}</Link>
                                    </li>
                                </>
                            }
                            <li className="nav-item">
                                {loggedInUser.isSignedIn ? <Link className="nav-link btn btn-outline-danger" to="/" onClick={() => setLoggedInUser({})}>Logout</Link> : <Link className="nav-link btn btn-outline-success" to="/login">Login</Link>}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container my-5">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search Product" />
                    <button className="btn btn-outline-primary" type="button">Search</button>
                </div>
            </div>
        </>
    );
};

export default Header;