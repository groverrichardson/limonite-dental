import React from 'react';
import Hero from './hero';
import Nav from './nav';

function Home() {
    return (
        <main className="Home justify-center items-center content-center w-full">
            <Nav />
            <Hero />
        </main>
    );
}

export default Home;
