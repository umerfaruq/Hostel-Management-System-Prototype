import React, { Component }from 'react';
import { Navbar, Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { RouteTo } from '../RouteComponent';

let isRequired = (val) => {
    if (val) {
        return true;
    } else {
        return false;
    }
}

let isCorrect = (val) => {
    if (!isRequired(val)) {
        return false;
    }
    if (val.toLowerCase() === "warden" || val.toLowerCase() === "student") {
        return true;
    } else {
        return false;
    }
}

export class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            submitted: false,
            name: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        this.setState({
            submitted: true,
            name: values.username
        });
    }

    render() {
        if (this.state.submitted) {
            return (
                <RouteTo name={this.state.name} />
            );
        } else {
            return (
                <>
                    <Navbar bg="light">
                        <Navbar.Brand>Hostel Management System</Navbar.Brand>
                    </Navbar>
                    <Container className="mt-5">
                        <Row>
                            <Col md={{ span: 6, offset: 3 }}>
                                <Form>
                                    <LocalForm onSubmit={this.handleSubmit}>
                                        <Form.Group>
                                            <Form.Label htmlFor="username">User Name</Form.Label>
                                            <Control.text model=".username" id="username" name="username"
                                                placeholder="Enter User Name"
                                                className="form-control"
                                                validators={{
                                                    isRequired, isCorrect
                                                }}
                                            />
                                            <Errors
                                                model=".username"
                                                show="touched"
                                                messages={{
                                                    isRequired: "Required Field",
                                                    isCorrect: "Enter Warden or Student as Username"
                                                }}
                                            />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label htmlFor="password">Password</Form.Label>
                                            <Control.password model=".password" id="password" name="password"
                                                placeholder="Enter Password"
                                                className="form-control "
                                            />
                                        </Form.Group>
                                        <Button type="submit" color="primary">
                                            Login
                                        </Button>
                                    </LocalForm>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </>
            );
        }
    }
}