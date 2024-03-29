import React from "react";
import './Login.scss';
import { Link } from 'react-router-dom';
import axios from "axios";
import Button from "../lib/Button/Button";
import ENDPOINT from "../../config/endpoints";

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.email = React.createRef();
        this.password = React.createRef();
        this.login = this.login.bind(this);
    }

    login() {
        axios.post(ENDPOINT.LOGIN,{
            email: this.email.current.value,
            password: this.password.current.value}
        ).then(function(response) {
            window.sessionStorage.setItem('token' , response.data.token.access_token);
          window.alert('Login Successful');
        }).catch(function (error) {
            console.log(error);
        });
    }

    render() {
        return (
            <div className="Login">
                <div className="login-title">
                    <p>Login for School</p>
                </div>
                <div className="login-body">
                    <div className="form-controls">
                        <label>Email</label>
                        <div>
                            <input type="text" placeholder="Enter your Email" autoFocus ref={this.email} />
                        </div>
                    </div>
                    <div className="form-controls">
                        <label>Password</label>
                        <div>
                            <input type="password" placeholder="Enter Your Password"  ref={this.password} />
                        </div>
                    </div>
                    <Link to="/">
                        <div>
                            <Button name="Login" clickHandler={this.login} />
                        </div>
                    </Link>
                    <div className="has-account">
                        <span>Don't have Account?</span><span className="register"><Link to="/register">Register</Link></span>
                    </div>
                </div>
            </div>);
    }
}

export default Login;