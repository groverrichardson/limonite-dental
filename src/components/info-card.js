import React from 'react';

export default class InfoCard extends React.Component {
    render() {
        console.log(this.props.infoHeaderCopy);
        return (
            <div
                className={'info-card col-md-6' + ' ' + this.props.customClass}
            >
                <img
                    src={this.props.infoImageSource}
                    alt=""
                    className="info-card-img p-2 mb-3 align-self-stretch"
                />
                <h3
                    className={
                        !this.props.infoHeaderCopy
                            ? 'hide info-header py-2'
                            : 'info-header py-2'
                    }
                >
                    {this.props.infoHeaderCopy}
                </h3>
                <p
                    className={
                        !this.props.infoCopy ? 'hide info-copy' : 'info-copy'
                    }
                >
                    {this.props.infoCopy}
                </p>
            </div>
        );
    }
}
