import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ContactForm from './contact-form';

export default class ContactSection extends React.Component {
    render() {
        return (
            <Container fluid className="mt-5 contact-section p-5">
                <Row className="justify-content-center align-items-center">
                    <div className="contact-typography col-md-6">
                        <h2 className="contact-header">Contact Us</h2>
                        <p className="contact-copy mt-3 mb-5">
                            Donec id elit non mi porta gravida at eget metus.
                            Cum sociis natoque penatibus et magnis dis
                            parturient montes, nascetur ridiculus mus.
                        </p>
                    </div>
                    <ContactForm />
                </Row>
            </Container>
        );
    }
}
