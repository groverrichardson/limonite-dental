import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import InfoCard from './info-card';

export default class Section extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <div className="section-typography col-6">
                        <h2 className="section-header">
                            {this.props.headerCopy}
                        </h2>
                        <p className="bodyCopy">{this.props.bodyCopy}</p>
                        <Button>{this.props.buttonCopy}</Button>
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
