import React from 'react';
import StudentHeader from './StudentHeader';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Control, LocalForm } from 'react-redux-form';

export function ServicesComponent(props) {
    return (
        <>
            <StudentHeader />
            <div className="container mt-5">
                <Button className="ml-3" color="primary" onClick={() => alert("Room Renewed")}>Renew Room</Button>
                <Button className="ml-3" color="primary" onClick={() => alert("Maintenance Called")}>Call Maintenance</Button>
                <Button className="ml-3" color="primary" onClick={() => alert("Transport Called")}>Call Transport</Button>
                <Button className="ml-3" color="primary" onClick={() => alert("Registration Canceled")}>Cancel Registration</Button>
            </div>
        </>
    );
}

export function ProfileComponent(props) {
    return (
        <>
            <StudentHeader />
            <Container className="mt-5">
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form>
                            <LocalForm onSubmit={handleSubmitAdd}>
                                <Form.Group>
                                    <Form.Label htmlFor="name">Enter Name Of Student</Form.Label>
                                    <Control.text model=".name" id="name" name="name"
                                        placeholder="Ahmed Bilal"
                                        className="form-control"
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label htmlFor="username">Enter User Name for Student</Form.Label>
                                    <Control.text model=".username" id="username" name="username"
                                        placeholder="billoo69"
                                        className="form-control"
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label htmlFor="email">Enter Email Of Student</Form.Label>
                                    <Control.text model=".email" id="email" name="email"
                                        placeholder="billa1969@gmail.com"
                                        className="form-control"
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label htmlFor="password">Enter Password for Student</Form.Label>
                                    <Control.text model=".password" id="password" name="password"
                                        placeholder="Change Password"
                                        className="form-control"
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label htmlFor="University">Enter University of Student</Form.Label>
                                    <Control.text model=".university" id="university" name="university"
                                        placeholder="CAMSTATUS Uni"
                                        className="form-control"
                                    />
                                </Form.Group>
                                <Button type="submit" color="primary">
                                    Change Info
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
    alert("Student Account Edited");
}

export function DuesComponent(props) {
    return (
        <>
            <StudentHeader />
            <Container className="mt-5">
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form>
                            <LocalForm onSubmit={handleSubmitPay}>
                                <Form.Group>
                                    <Form.Label htmlFor="name">Enter Bank ID</Form.Label>
                                    <Control.text model=".name" id="name" name="name"
                                        placeholder="ID"
                                        className="form-control"
                                    />
                                </Form.Group>
                                <Button type="submit" color="primary">
                                    Pay Dues
                                </Button>
                            </LocalForm>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

function handleSubmitPay(values) {
    alert("Dues Payed");
}