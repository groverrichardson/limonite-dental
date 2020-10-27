import React from 'react';
import EmergencyButton from './components/emergency-button';
import Menu from './components/menu';
import RequestButton from './components/request-button';
import 'normalize.css';
import './sass/style.sass';
import heroImg from './assets/hero-image/hero-image.png';
import tealCircle from './assets/teal-circle.svg';
import pinkCircle from './assets/pink-circle.svg';
import yellowCircle from './assets/yellow-circle.svg';

function App() {
    return (
        <main className="App">
            <Menu />
            <section className="hero-section">
                <div className="hero-copy-container">
                    <h1 className="hero-header">
                        Your Best Smile Is One Visit Away
                    </h1>
                    <p className="hero-copy">
                        Donec id elit non mi porta gravida at eget metus. Cum
                        sociis natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus.
                    </p>
                    <div className="hero-button-container">
                        <RequestButton />
                        <EmergencyButton />
                    </div>
                </div>
                <div className="image-container">
                    <img
                        src={heroImg}
                        alt="Dental patients smiling"
                        className="hero-image"
                    />
                    <img
                        src={tealCircle}
                        alt="Decorative circle"
                        className="teal-circle-hero circle"
                    />
                    <img
                        src={yellowCircle}
                        alt="Decorative circle"
                        className="yellow-circle-hero circle"
                    />
                    <img
                        src={pinkCircle}
                        alt="Decorative circle"
                        className="pink-circle-hero circle"
                    />
                </div>
            </section>
        </main>
    );
}

export default App;
