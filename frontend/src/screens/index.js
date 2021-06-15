import React from "react";
import Login from '../screens/login';
import TaskList from '../screens/tasklist';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import CustomSideNavBar from "../components/customSideNavBar";
import LoginHeader from "../components/loginHeader";
import { columnFlex, rowFlex } from "../assets/css/common";
import ScreenOne from "../components/screenOne";
import ScreenTwo from "../components/screenTwo";
import ScreenThree from "../components/screenThree";
import CustomTopNavBar from "../components/customTopNavBar";

class MainScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            screen: "taskList"
        }
    }

    render() {
        const screen = this.state.screen;
        
        let data;

        if (screen == "screenOne")  data = <ScreenOne />
        else if (screen == "screenTwo")  data = <ScreenTwo />
        else if (screen == "screenThree")  data = <ScreenThree />
        else if (screen == "taskList")  data = <TaskList />

        return (
            <div style={{ ...columnFlex, flex: 1, height: "100vh" }}>
                <LoginHeader />
                <div style={{ ...rowFlex, flex: 1, height: "90vh" }}>
                    <Router>
                        <Switch>
                            <Route path="/login">
                                <Login />
                            </Route>
                            <Route path="/">
                                <div style={{ ...columnFlex, flex: 2 }}>
                                    <CustomSideNavBar updateScreen={(screen) => {
                                        this.setState({
                                            screen: screen
                                        })
                                    }} />
                                </div>
                                <div style={{ ...columnFlex, flex: 8 }}>
                                    <div style={{ ...columnFlex, flex: 2 }}>
                                        <CustomTopNavBar updateScreen={(screen) => {
                                            this.setState({
                                                screen: screen
                                            })
                                        }} />
                                    </div>
                                    <div style={{ ...columnFlex, flex: 8 }}>
                                        {data}
                                    </div>
                                </div>
                            </Route>
                        </Switch>

                    </Router>
                </div>
            </div>
        )
    }
}

export default MainScreen;