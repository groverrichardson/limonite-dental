import React from 'react';
import RequestButton from './request-button';

export default class Menu extends React.Component {
    render() {
        return (
            <section className="main-menu">
                <div className="top-menu">
                    <h2 className="logo">Limonite Dental</h2>
                    <div className="page-menu">
                        <button className="page-button">Services</button>
                        <button className="page-button">Team</button>
                        <button className="page-button">Financing</button>
                        <button className="page-button">Blog</button>
                    </div>
                    <RequestButton />
                </div>
                <div className="bottom-menu">
                    <h4 className="office-hours menu-copy">Office Hours :</h4>
                    <div className="date-container menu-copy">
                        <p className="monday-thursday menu-copy">
                            Monday - Thursday
                        </p>
                        <p className="times menu-copy">9AM - 6PM</p>
                    </div>
                    <div className="date-container menu-copy">
                        <p className="friday menu-copy">Friday</p>
                        <p className="times menu-copy">9AM - 6PM</p>
                    </div>
                    <div className="date-container menu-copy">
                        <p className="friday menu-copy">Saturday</p>
                        <p className="times menu-copy">Appointment Only</p>
                    </div>
                </div>
            </section>
        );
    }
}
