import React from 'react';

function Hours() {
    return (
        <div className="Hours flex flex-row justify-between items-center w-full py-2">
            <div className="office-hours-header-container">Office Hours</div>
            <div className="monday-thursday-container flex flex-row justify-between items-center">
                <p className="monday-thursday">Monday - Thursday</p>
                <p className="times ml-5">9 AM - 6 PM</p>
            </div>
            <div className="friday-container flex flex-row justify-between items-center">
                <p className="friday">Friday</p>
                <p className="times ml-5">9 AM - 6 PM</p>
            </div>
            <div className="saturday-container flex flex-row justify-center items-center">
                <p className="saturday">Saturday</p>
                <p className="times ml-5">Appointment Only</p>
            </div>
        </div>
    );
}

export default Hours;
