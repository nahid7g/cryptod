import React from 'react';
import Featured from './Featured/Featured';
import Hero from './Hero/Hero';
import Newsletter from './Newsletter/Newsletter';

const home = () => {
    return (
        <>
            <Hero />
            <Featured />
            <Newsletter />
        </>
    );
};

export default home;