import React, { Component, Fragment } from 'react';
import { Link, withRouter } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./App.css";
import Routes from "./Routes";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuthenticated: false
        };

        this.authenticate = this.authenticate.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
}

    authenticate(authenticated) {
      this.setState({ isAuthenticated: authenticated });
    }

    handleLogout(){
        this.authenticate(false);
        this.props.history.push("/login");
    }

    render() {
        const childProps = {
          isAuthenticated: this.state.isAuthenticated,
          authenticate: this.authenticate
        };

        return (
            <div className="container">
                <Navbar fluid collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">HOME</Link>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            {this.state.isAuthenticated
                                ? <NavItem onClick={this.handleLogout}>Logout</NavItem>
                                : <Fragment>
                                    <LinkContainer to="/login">
                                        <NavItem>Login</NavItem>
                                    </LinkContainer>
                                    <LinkContainer to="/signup">
                                        <NavItem>Signup</NavItem>
                                    </LinkContainer>
                                </Fragment>
                            }
                        </Nav>
                     </Navbar.Collapse>
                </Navbar>
                <Routes childProps={childProps}/>
            </div>
        );
    }
}

export default withRouter(App);
