import React from 'react';
import {
    Button,
    Form,
    FormControl,
    FormGroup,
    FormLabel,
    Row,
} from 'react-bootstrap';

export default class ContactForm extends React.Component {
    render() {
        return (
            <Form className="col-12 col-md-6 justify-content-center align-items-center p-3 contact-form">
                <FormGroup>
                    <FormLabel className="form-label">First Name</FormLabel>
                    <FormControl
                        type="text"
                        placeholder="First Name"
                        className="justify-self-stretch"
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel className="form-label">Last Name</FormLabel>
                    <FormControl
                        type="text"
                        placeholder="Last Name"
                        className=""
                    />
                </FormGroup>
                <FormGroup>
                    <FormLabel className="form-label">Email</FormLabel>
                    <FormControl type="email" placeholder="Email" />
                </FormGroup>
                <FormGroup>
                    <FormLabel className="form-label">Message</FormLabel>
                    <FormControl type="text" placeholder="Message" />
                </FormGroup>
                <Row className="mx-1">
                    <Button className="contact-submit col">Submit</Button>
                </Row>
            </Form>
        );
    }
}
