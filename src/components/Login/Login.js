import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import { googleSignIn, initializeSignIn } from './loginManager';


const Login = () => {
    initializeSignIn();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleResponse = (res, redirect) => {
        setLoggedInUser(res)
        if (redirect) {
            history.replace(from);
        }
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(res => {
                handleResponse(res, true)
            })
    }
    return (
        <div className="text-center">
            <h1 className="my-5">Please Login Here</h1>
            <button onClick={handleGoogleSignIn} className="btn btn-outline-success btn-lg">Login With Google</button>
        </div>
    );
};

export default Login;