import React from "react";
import DP from "../assets/images/DP.png";
import {
    columnFlex, listStyle, centerAlign,
    cicularImage, centerUlStyle
} from "../assets/css/common";
import {
    Link
} from "react-router-dom";
import { withRouter } from 'react-router-dom'

class CustomNavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            screen: ""
        }
    }

    render() {
        const { updateScreen } = this.props;
        return (
            <div style={{
                ...columnFlex,
                ...centerAlign,
                flex: 1,
                justifyContent: "top"
            }}>
                <img src={DP}
                    alt="image"
                    style={cicularImage}
                />
                <div style={{
                    margin: "10px 0 0 0"
                }}>
                    Hello Chitra
                </div>

                <nav style={{ width: "100%" }}>
                    <ul style={centerUlStyle}>

                        <Link to="/screen1">
                            <li style={listStyle} onClick={() => {
                                updateScreen("screenOne")
                            }}>
                                screen one
                            </li>
                        </Link>


                        <Link to="/screen2">
                            <li style={listStyle} onClick={() => {
                                updateScreen("screenTwo")
                            }}>
                                screen two
                            </li>
                        </Link>

                        <Link to="/screen3">
                            <li style={listStyle} onClick={() => {
                                updateScreen("screenThree")
                            }}>
                                screen three
                            </li>
                        </Link>
                        
                        <Link to="/">
                            <li style={listStyle} onClick={() => {
                                updateScreen("taskList")
                            }}>
                                Show Tasks
                            </li>
                        </Link>
                        
                        <Link to="/">
                            <li style={listStyle} onClick={() => {
                                updateScreen("taskList")
                            }}>
                                Show Tasks
                            </li>
                        </Link>
                    </ul>


                </nav>
                    <div style={{
                            display: "flex",
                            flex: 1,
                            width: "100%",
                            alignItems: "flex-end",
                            justifyContent: "center"
                        }} onClick={() => {
                            localStorage.removeItem("authToken");
                            this.props.history.push('/login', ["I am a great prop being passed from the router"])
                        }}>
                            <div style={{
                                borderRadius: "2%",
                                width: "100%",
                                margin: "16px",
                                padding: "10px",
                                cursor: "pointer",
                                color: "white",
                                background: "red"
                            }}>Logout</div>
                        </div>
            </div>
        )
    }
}

export default withRouter(CustomNavBar);