import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ContactForm from './contact-form';

export default class ContactSection extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <div className="contact-typography col-6">
                        <h2 className="contact-header">Contact Us</h2>
                        <p className="contact-copy">
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
