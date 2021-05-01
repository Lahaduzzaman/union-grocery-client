
import './App.css';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import {
BrowserRouter as Router,
Switch,
Route
} from "react-router-dom";
import Home from './components/Home/Home';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Orders from './components/Orders/Orders';
import Admin from './components/Admin/Admin';
import Deals from './components/Deals/Deals';
import AddProduct from './components/AddProduct/AddProduct';
import ManageProduct from './components/ManageProduct/ManageProduct';
import Checkout from './components/Checkout/Checkout';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/orders">
            <Orders />
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <Route path="/deals">
            <Deals />
          </Route>
          <PrivateRoute path="/addProduct">
            <AddProduct />
          </PrivateRoute>
          <PrivateRoute path="/manageProduct">
            <ManageProduct />
          </PrivateRoute>
          <PrivateRoute path="/product/:id">
            <Checkout />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;