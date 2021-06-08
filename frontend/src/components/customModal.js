import React from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const base_url = "http://0.0.0.0:8080";
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYWU5N2UzNmM2OWEzZmQ1NWZmZWQzMCIsInVzZXJOYW1lIjoiYWRtaW4tdXNlciIsInBhc3N3b3JkIjoiYWRtaW4tcGFzc3dvcmQiLCJpc0FkbWluIjp0cnVlLCJpc1Jldmlld2VyIjp0cnVlLCJpc1VzZXIiOnRydWUsImlhdCI6MTYyMjEwNzIzM30.DOUgp4fA3xwnC1Lt9Sp03OltWXW-HYEasopngrjkYiA"

class CustomModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            taskPayload: {}
        }
    }

    createTask = (taskPayload) => {
        console.log(taskPayload)
        fetch(`${base_url}/v1/task/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(taskPayload)
        })
            .then(res => res.json())
            .then(
                (result) => {
                    if (result.error) {
                        console.log(result);
                    } else {
                        this.setState(prevState => ({
                            tasks: prevState.tasks.push(result),
                            modalShow: false
                        }))
                    }
                },
                (error) => {
                    console.log(error)
                })
    }

    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Modal heading
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" name="taskTitle" placeholder="Put your task's title here..." onChange={(e) => {
                                this.setState(prevState => ({
                                    taskPayload: {
                                        ...prevState.taskPayload,
                                        title: e.target.value
                                    }
                                }))
                            }} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" name="taskBody" placeholder="Put your task's description here..." onChange={(e) => {
                                this.setState(prevState => ({
                                    taskPayload: {
                                        ...prevState.taskPayload,
                                        body: e.target.value
                                    }
                                }))
                            }} />
                        </Form.Group>

                        <Button variant="primary" type="submit" onClick={() => {
                            this.createTask(this.state.taskPayload);
                        }}>
                            Create Task
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default CustomModal;