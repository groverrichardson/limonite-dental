import React from 'react';
import { Form, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap';

export default class ContactForm extends React.Component {
    render() {
        return (
            <Form className="col-6">
                <Row>
                    <FormGroup>
                        <FormLabel>First Name</FormLabel>
                        <FormControl
                            type="text"
                            placeholder="First Name"
                            className="col"
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl
                            type="text"
                            placeholder="Last Name"
                            className="col"
                        />
                    </FormGroup>
                </Row>
                <FormGroup>
                    <FormLabel>Email</FormLabel>
                    <FormControl type="email" placeholder="Email" />
                </FormGroup>
                <FormGroup>
                    <FormLabel>Message</FormLabel>
                    <FormControl type="text" placeholder="Message" />
                </FormGroup>
            </Form>
        );
    }
}
