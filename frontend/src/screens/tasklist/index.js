import React from "react";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import TableRow from "../../components/tableRow";
import CustomModal from "../../components/customModal";
import { withRouter } from "react-router-dom";
const base_url = "http://0.0.0.0:8080";

class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            modalShow: false
        }
    }

    componentDidMount() {
        const token = localStorage.getItem("authToken");
        if (token) {
            fetch(`${base_url}/v1/task/all`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(res => res.json())
                .then(
                    (result) => {
                        if (result.error) {
                            console.log(result);
                        } else {
                            this.setState({
                                tasks: result
                            })
                        }
                    },
                    (error) => {
                        console.log(error)
                    })
        } else {
            this.props.history.push('/login');
        }
    }

    render() {
        const taskList = this.state.tasks;
        return (
            <div style={{
                overflowY: "scroll",
            }}>
                <div style={
                    {
                        ...firstDiv,
                        height: "100vh"
                    }
                }>
                    <div style={
                        {
                            display: "flex",
                            flexDirection: "row",
                            flex: 1
                        }
                    }>
                        <div style={
                            {
                                display: "flex",
                                flexDirection: "column",
                                flex: 1,
                                textAlign: "left",
                                margin: "10px 20px",
                                justifyContent: "center"
                            }
                        }>
                            Pending Tasks
                        </div>
                        <div style={
                            {
                                display: "column",
                                flexDirection: "row",
                                flex: 1,
                                textAlignLast: "right",
                                margin: "10px 20px"
                            }
                        }>
                            <Button variant="primary" type="submit" onClick={() => {
                                this.setState({
                                    modalShow: true
                                });
                            }}>
                                Create Task
                        </Button>

                            {/* <Button variant="primary" type="submit" onClick={() => {
                                localStorage.removeItem("authToken");
                                this.props.history.push('/login')
                            }}>
                                Logout
                            </Button> */}
                        </div>
                    </div>

                    <div style={
                        {
                            ...firstDiv,
                            padding: "0 20px"
                        }
                    }>
                        <Table striped hover>
                            <tbody>
                                {taskList.map((task, index) => {
                                    return <TableRow task={task} />
                                })}
                            </tbody>
                        </Table>

                        <CustomModal
                            show={this.state.modalShow}
                            onHide={() => this.setState({
                                modalShow: false
                            })} />
                    </div>
                </div>
            </div>
        )
    }
}

const firstDiv = {
    // display: "flex",
    // flexDirection: "column",
    flex: 1,
}

export default withRouter(TaskList)