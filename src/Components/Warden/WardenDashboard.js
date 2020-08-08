import React, { Component } from 'react';
import WardenHeader from './WardenHeader';
import { Container, Card, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export class WardenDashboard extends Component {
    render() {
        return (
            <>
                <WardenHeader />
                <Container className="mt-5">
                    <Row>
                        <Card className="col-md-3 ml-2 mb-2">
                            <Card.Body>
                                <Card.Title>Renew Room</Card.Title>
                                <Card.Text>
                                    Renew Student's Room
                                </Card.Text>
                                <Link className="btn btn-primary" to="/warden/renew">Click Here</Link>
                            </Card.Body>
                        </Card>
                        <Card className="col-md-3 ml-2 mb-2">
                            <Card.Body>
                                <Card.Title>Add Students</Card.Title>
                                <Card.Text>
                                    Make Student Account
                                </Card.Text>
                                <Link className="btn btn-primary" to="/warden/add">Click Here</Link>
                            </Card.Body>
                        </Card>
                        <Card className="col-md-3 ml-2 mb-2">
                            <Card.Body>
                                <Card.Title>Student Registration</Card.Title>
                                <Card.Text>
                                    Delete Student Account, Give Mess Pass, Search & Edit Student Profile
                                </Card.Text>
                                <Link className="btn btn-primary" to="/warden/registration">Click Here</Link>
                            </Card.Body>
                        </Card>
                    </Row>
                </Container>
            </>
        );
    }
}