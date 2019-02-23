import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: '',
            password: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validateForm() {
        return this.state.user.length > 0 && this.state.password.length > 0;
    }

    handleChange(event) {
        this.setState({[event.target.id] : event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();

        fetch(`http://localhost:4000/api/users?user=${this.state.user}&password=${this.state.password}`)
        .then(res => res.json())
        .then(res => {
            if (res.length > 0) {
                this.props.authenticate(true);
                this.props.history.push('/transactions', {'user': this.state.user});
            } else {
                alert("Invalid user or password!");
                this.setState({user:''});
                this.setState({password:''});
            }
        })
       .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="user" bsSize="large">
                        <ControlLabel>UserName</ControlLabel>
                        <FormControl
                            autoFocus
                            type="user"
                            value={this.state.user}
                            onChange={this.handleChange}
                         />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                            type="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                    />
                    </FormGroup>
                    <Button block bsSize="large" disabled={!this.validateForm()} type="submit">
                        Login
                    </Button>
                </form>
            </div>
        );
    }
}
export default Login;
