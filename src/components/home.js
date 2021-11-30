import React from 'react';
import Hero from './hero';
import Nav from './nav';
import QuadSection from './quad-section';

function Home() {
    return (
        <main className="Home justify-center items-center content-center w-full">
            <Nav />
            <Hero />
            <QuadSection />
        </main>
    );
}

export default Home;
