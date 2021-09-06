import React from "react";
import './Password.scss'

import { Link } from 'react-router-dom';
import axios from "axios";
import Button from "../lib/Button/Button";

class Password extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            password: '',
            mismatch: false
        };

        this.password = React.createRef();
        this.cnfPassword = React.createRef();

        this.setPassword = this.setPassword.bind(this);
        this.checkPassword = this.checkPassword.bind(this);

    }

    checkPassword() {
        this.setState({mismatch: this.password.current.value != this.cnfPassword.current.value && this.cnfPassword.current.value.length !=0 ? true : false});
    }


    setPassword() {
        if(this.password.current.value.length > 0 && !this.mismatch) {
            axios.post('/setPassword' , {password: this.password.current.value}).then(function() {
                console.log('password done')
            })
        }

    }

    render() {
        return (<div className="Password">
            <div className="password-title">
                <p>Password</p>
            </div>
            <div className="password-body">
                <div className="form-controls">
                    <label>Password</label>
                    <div>
                        <input type="password" placeholder="Enter Your Password" ref={this.password}/>
                    </div>
                </div>
                <div className="form-controls">
                    <label>Confirm Password</label>
                    <div>
                        <input type="password" placeholder="Confirm Your Password" ref={this.cnfPassword} onInput={this.checkPassword} />
                       {this.state.mismatch ? <span className="warning">password doesnot match</span> : <span></span> }      
                    </div>
                </div>
            </div>

            <Link to="/">
                <div>
                   <Button name="Confirm" clickHandler={this.setPassword} />
                </div>
            </Link>
        </div>);
    }

}

export default Password;