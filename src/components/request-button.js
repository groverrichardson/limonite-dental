import React from 'react';
import { Button } from 'react-bootstrap';

export default class RequestButton extends React.Component {
    render() {
        return (
            <Button
                className="request request-cta mr-md-5"
                variant="primary"
                lg={{ order: 'first' }}
            >
                Request an Appointment
            </Button>
        );
    }
}
