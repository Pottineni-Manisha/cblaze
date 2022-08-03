import React from "react";
import { Switch, Route } from "react-router-dom";
import RegisterPage from './RegisterPage'
import CartPage from './CartPage'
import LoginPage from './LoginPage'
import ChangePasswordPage from './ChangePasswordPage'
import HomePage from './HomePage'

function Routes() {
  return (
    <div>
      <Switch>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/cart">
          <CartPage />
        </Route>
        <Route path="/changePassword">
          <ChangePasswordPage />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/">
          <LoginPage />
        </Route>
      </Switch>
    </div>
  );
}

export default Routes;
