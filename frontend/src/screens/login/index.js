import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import ToastContainer from 'react-bootstrap/lib/ToastContainer'
import Toast from 'react-bootstrap/Toast';
import LoginHeader from "../../components/loginHeader"
import { withRouter } from 'react-router-dom'

const base_url = "http://0.0.0.0:8080";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginPayload: {},
            isError: false,
            error: "",
            showToast: false
        }
    }

    componentDidMount () {
        const token = localStorage.getItem("authToken");
        if(token) {
            this.goToNextScreen();
        }
    }

    login = (loginPayload) => {
        fetch(`${base_url}/v1/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginPayload)
        })
            .then(res => res.json())
            .then(
                (result) => {
                    if (result.error) {
                        this.setState({
                            isError: true,
                            error: result.message
                        });
                    } else {
                        console.log("login successful", result);
                        localStorage.setItem("authToken", result.authToken);
                        this.goToNextScreen();
                    }
                },
                (error) => {
                    console.log(error)
                })
    }

    showToast = () => {
        return (
            <div style={{ position: "absolute", top: 20, right: 20 }}>
                <Toast autohide={true} show={this.state.isError} onClose={() => {
                    this.setState({
                        isError: false
                    })
                }}>
                    <Toast.Body>{this.state.error}</Toast.Body>
                </Toast>
            </div>
        )
    }

    goToNextScreen = () => {
        this.props.history.push('/tasks', []);
    }

    render() {
        const { location } = this.props;
        console.log(location.state);
        return (
            <div style={firstDiv}>
                {this.showToast()}
                <div style={secondDiv} >
                    <div style={thirdDiv}>
                        <Form style={loginForm}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>User Name</Form.Label>
                                <Form.Control type="text" name="userName" onChange={(e) => {
                                    this.setState((prevState) => ({
                                        loginPayload: {
                                            ...prevState.loginPayload,
                                            userName: e.target.value
                                        }
                                    }))
                                }} placeholder="User Name" required />
                                <Form.Text className="text-muted">
                                    Login using your user name
                            </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" onChange={(e) => {
                                    this.setState((prevState) => ({
                                        loginPayload: {
                                            ...prevState.loginPayload,
                                            password: e.target.value
                                        }
                                    }))
                                }} placeholder="Password" required />
                                <Form.Text className="text-muted">
                                    Enter the password provided to you by the admin
                            </Form.Text>
                            </Form.Group>

                            <Button variant="primary" onClick={() => { this.login(this.state.loginPayload) }}>
                                Login
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

const firstDiv = {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    backgroundColor: "whitesmoke"
}

const secondDiv = {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    backgroundColor: "whitesmoke"
}

const thirdDiv = {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}

const loginForm = {
    width: "25%",
    backgroundColor: "white",
    borderRadius: "3pt",
    padding: "10pt"
}


export default withRouter(Login)

