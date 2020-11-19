import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import InfoCard from './info-card';

export default class Section extends React.Component {
    render() {
        return (
            <Container
                fluid
                className={'section-spacer' + ' ' + this.props.customClass}
            >
                <Row className="justify-content-between align-items-center">
                    <div className="section-typography col-md-6 pr-md-5 my-5 my-md-auto">
                        <h1 className="section-header">
                            {this.props.headerCopy}
                        </h1>
                        <p className="bodyCopy py-3">{this.props.bodyCopy}</p>
                        <Button className="btn service-section-button col-xs-12 col-lg p-lg">
                            {this.props.buttonCopy}
                        </Button>
                    </div>
                    <InfoCard
                        infoImageSource={this.props.infoImageSource}
                        infoHeaderCopy={this.props.infoHeaderCopy}
                        infoCopy={this.props.infoCopy}
                    />
                </Row>
            </Container>
        );
    }
}
