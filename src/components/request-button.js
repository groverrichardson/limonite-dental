import React from 'react';
import { Button } from 'react-bootstrap';

export default class RequestButton extends React.Component {
    render() {
        return (
            <Button
                className={this.props.customClass}
                variant="primary"
                lg={{ order: 'first' }}
            >
                Request an Appointment
            </Button>
        );
    }
}
