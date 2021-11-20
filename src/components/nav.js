import React from 'react';
import Button from './button';

function Nav() {
    return (
        <nav className="Nav w-full flex flex-row justify-between items-center h-24">
            <div className="logo-container flex flex-row justify-center items-center w-1/4">
                <p className="logo">Limonite Dental</p>
            </div>
            <div className="page-menu flex flex-row justify-between items-center w-1/4">
                <p className="menu-item">Services</p>
                <p className="menu-item">Team</p>
                <p className="menu-item">Financing</p>
                <p className="menu-item">Blog</p>
            </div>
            <div className="button-container flex flex-center items-center justify-center w-1/4">
                <Button
                    buttonText="Request an Appointment"
                    color="bg-gray-300"
                />
            </div>
        </nav>
    );
}

export default Nav;
