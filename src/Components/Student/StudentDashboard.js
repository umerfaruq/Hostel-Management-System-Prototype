import React, { Component } from 'react';
import StudentHeader from './StudentHeader';
import { Container, Card, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class StudentDashboard extends Component {
    render() {
        return (
            <>
            <StudentHeader />
                <Container className="mt-5">
                    <Row>
                        <Card className="col-md-3 ml-2 mb-2">
                            <Card.Body>
                                <Card.Title>Services</Card.Title>
                                <Card.Text>
                                    Renew Room, Maintenance & Transport, Cancel Registration
                                </Card.Text>
                                <Link className="btn btn-primary" to="/student/services">Click Here</Link>
                            </Card.Body>
                        </Card>
                        <Card className="col-md-3 ml-2 mb-2">
                            <Card.Body>
                                <Card.Title>Access Student Profile</Card.Title>
                                <Card.Text>
                                    View & Edit Profile
                                </Card.Text>
                                <Link className="btn btn-primary" to="/student/profile">Click Here</Link>
                            </Card.Body>
                        </Card>
                        <Card className="col-md-3 ml-2 mb-2">
                            <Card.Body>
                                <Card.Title>Dues</Card.Title>
                                <Card.Text>
                                    Pay Dues
                                </Card.Text>
                                <Link className="btn btn-primary" to="/student/dues">Click Here</Link>
                            </Card.Body>
                        </Card>
                    </Row>
                </Container>
            </>
        );
    }
}