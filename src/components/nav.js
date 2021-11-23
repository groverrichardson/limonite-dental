import React from 'react';
import Button from './button';
import Hours from './hours';

function Nav() {
    return (
        <nav className="Nav w-full flex flex-col justify-between items-center h-24">
            <div className="nav-level-one flex flex-row justify-between items-center w-full mt-2">
                <div className="logo-container flex flex-row justify-start items-center w-1/4">
                    <p className="logo">Limonite Dental</p>
                </div>
                <div className="page-menu flex flex-row justify-between items-center w-1/4">
                    <p className="menu-item">Services</p>
                    <p className="menu-item">Team</p>
                    <p className="menu-item">Financing</p>
                    <p className="menu-item">Blog</p>
                </div>
                <div className="button-container flex flex-center items-center justify-end w-1/4">
                    <Button
                        buttonText="Request an Appointment"
                        color="bg-gray-300"
                    />
                </div>
            </div>
            <Hours />
        </nav>
    );
}

export default Nav;
