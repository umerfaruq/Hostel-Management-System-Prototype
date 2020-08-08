import React from 'react';
import WardenHeader from './WardenHeader';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Control, LocalForm } from 'react-redux-form';
import { Link } from 'react-router-dom';

export function RenewComponent(props) {
    return (
        <>
            <WardenHeader />
            <Container className="mt-5">
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form>
                            <LocalForm onSubmit={handleSubmitRenew}>
                                <Form.Group>
                                    <Form.Label htmlFor="username">Enter ID Of Student</Form.Label>
                                    <Control.text model=".username" id="username" name="username"
                                        placeholder="Enter Student ID"
                                        className="form-control"
                                    />
                                </Form.Group>
                                <Button type="submit" color="primary">
                                    Renew Room
                                </Button>
                            </LocalForm>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

function handleSubmitRenew(vals) {
    alert("Student Room Renewed");
}

export function AddComponent(props) {
    return (
        <>
            <WardenHeader />
            <Container className="mt-5">
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form>
                            <LocalForm onSubmit={handleSubmitAdd}>
                                <Form.Group>
                                    <Form.Label htmlFor="name">Enter Name Of Student</Form.Label>
                                    <Control.text model=".name" id="name" name="name"
                                        placeholder="Name"
                                        className="form-control"
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label htmlFor="username">Enter User Name for Student</Form.Label>
                                    <Control.text model=".username" id="username" name="username"
                                        placeholder="User Name"
                                        className="form-control"
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label htmlFor="email">Enter Email Of Student</Form.Label>
                                    <Control.text model=".email" id="email" name="email"
                                        placeholder="Email"
                                        className="form-control"
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label htmlFor="password">Enter Password for Student</Form.Label>
                                    <Control.text model=".password" id="password" name="password"
                                        placeholder="Password"
                                        className="form-control"
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label htmlFor="University">Enter University of Student</Form.Label>
                                    <Control.text model=".university" id="university" name="university"
                                        placeholder="University"
                                        className="form-control"
                                    />
                                </Form.Group>
                                <Button type="submit" color="primary">
                                    Add Account
                                </Button>
                            </LocalForm>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

function handleSubmitAdd(values) {
    alert("Student Account Created");
}

export function RegistrationComponent(props) {
    return (
        <>
            <WardenHeader />
            <Container className="mt-5">
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form>
                            <LocalForm>
                                <Form.Group>
                                    <Form.Label htmlFor="name">Enter Student ID</Form.Label>
                                    <Control.text model=".name" id="name" name="name"
                                        placeholder="ID"
                                        className="form-control"
                                    />
                                </Form.Group>
                            </LocalForm>
                        </Form>
                    </Col>
                </Row>
                <Row className="offset-3">
                    <Button className="ml-3" color="primary" onClick={() => alert("Account Deleted")}>Delete Student Account</Button>
                    <Button className="ml-3" color="primary" onClick={() => alert("Mess Pass Given")}>Give Mess Pass</Button>
                    <Link className="btn btn-primary ml-3" to="/student/profile">Open/Edit Profile</Link>
                </Row>
            </Container>
            <div className="container mt-5">
                
            </div>
        </>
    );
}