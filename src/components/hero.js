import React from 'react';
import Button from './button';

function Hero() {
    return (
        <section className="hero flex flex-row justify-center items-center w-full bg-gray-200">
            <div className="hero-copy-container w-1/2 flex flex-col justify-between items-start p-5">
                <header className="hero-header">
                    <h1 className="hero-header-copy">
                        Your Best Smile Is One Visit Away
                    </h1>
                </header>
                <p className="hero-copy my-6">
                    Donec id elit non mi porta gravida at eget metus. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus.
                </p>
                <div className="hero-button-container">
                    <Button
                        buttonText="Request an Appointment"
                        color="bg-gray-300"
                    />
                    <Button
                        buttonText="Emergency Contact"
                        color="bg-gray-500"
                        margin="ml-5"
                    />
                </div>
            </div>
            <div className="img-placeholder w-1/2 bg-gray-500 h-96 text-center">
                IMG
            </div>
        </section>
    );
}

export default Hero;
