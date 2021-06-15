import React from "react";
import DP from "../assets/images/DP.png";
import {
    columnFlex, listStyle as tempListStyle, centerAlign,
    cicularImage, centerUlStyle
} from "../assets/css/common";
import {
    Link
} from "react-router-dom";
import { withRouter } from 'react-router-dom'

let listStyle = {
    ...tempListStyle,
    justifyContent: "center",
    flex: 1
}

let activeListStyle = {
    ...listStyle,
    borderRight: "3px solid #ed3833"
}

class customSideNavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clickedLink: "taskList"
        }
    }

    updateLinkStyle = (listName, cb) => {
        this.setState({
            clickedLink: listName
        }, () => {
            cb(listName);
        });
    }

    getListStyle = (listName) => {
        return this.state.clickedLink != listName ? listStyle : activeListStyle
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

                <nav style={{ width: "100%" }}>
                    <ul style={centerUlStyle}>

                        
                        <Link to="/">
                            <li style={this.getListStyle("taskList")}  onClick={() => {
                                this.updateLinkStyle("taskList", updateScreen)
                            }}>
                                Show Tasks
                            </li>
                        </Link>
                        
                        <Link to="/screen1">
                            <li style={this.getListStyle("screenOne")} onClick={() => {
                                this.updateLinkStyle("screenOne", updateScreen)
                            }}>
                                screen one
                            </li>
                        </Link>


                        <Link to="/screen2">
                            <li style={this.getListStyle("screenTwo")} onClick={() => {
                                this.updateLinkStyle("screenTwo", updateScreen)
                            }}>
                                screen two
                            </li>
                        </Link>

                        <Link to="/screen3">
                            <li style={this.getListStyle("screenThree")} onClick={() => {
                                this.updateLinkStyle("screenThree", updateScreen)
                            }}>
                                screen three
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

export default withRouter(customSideNavBar);