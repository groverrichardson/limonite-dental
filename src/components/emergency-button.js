import React from 'react';
import { Button } from 'react-bootstrap';

export default class EmergencyButton extends React.Component {
    render() {
        return (
            <Button
                className="emergency col-xs-12 col-lg-5 p-lg"
                variant="danger"
            >
                Emergency Contact
            </Button>
        );
    }
}
