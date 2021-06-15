import React from "react";
import {
    listStyle as tempListStyle, centerAlign,
    centerUlStyle, rowFlex, columnFlex
} from "../assets/css/common";
import {
    Link
} from "react-router-dom";

let listStyle = {
    ...rowFlex,
    ...tempListStyle,
    justifyContent: "center",
    flex: 1
}

let activeListStyle = {
    ...listStyle,
    borderBottom: "3px solid #ed3833"
}


class customTopNavBar extends React.Component {
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

    render() {
        const { updateScreen } = this.props;
        return (
            <div>
                <div style={{
                    margin: "10px 0 0 0"
                }}>
                    Hello Chitra
                </div>
                <nav>
                    <ul style={{
                        ...centerUlStyle,
                        ...rowFlex,
                        ...centerAlign,
                        flex: 1,
                        width: "100%"
                    }}>
                        <Link style={this.state.clickedLink != "taskList" ? listStyle : activeListStyle} to="/">
                            <li onClick={() => {
                                this.updateLinkStyle("taskList", updateScreen);
                            }}>
                                Show Tasks
                            </li>
                        </Link>

                        <Link style={this.state.clickedLink != "screenOne" ? listStyle : activeListStyle} to="/screen1">
                            <li onClick={() => {
                                this.updateLinkStyle("screenOne", updateScreen);
                            }}>
                                screen one
                            </li>
                        </Link>


                        <Link style={this.state.clickedLink != "screenTwo" ? listStyle : activeListStyle} to="/screen2">
                            <li onClick={() => {
                                this.updateLinkStyle("screenTwo", updateScreen);
                            }}>
                                screen two
                            </li>
                        </Link>

                        <Link style={this.state.clickedLink != "screenThree" ? listStyle : activeListStyle} to="/screen3">
                            <li onClick={() => {
                                this.updateLinkStyle("screenThree", updateScreen);
                            }}>
                                screen three
                            </li>
                        </Link>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default customTopNavBar;