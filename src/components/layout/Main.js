import React from 'react';

// Component
import Home from './Home';
import Aboutus from './Aboutus';
import Services from './Services';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Pricing from './Pricing';
import ContactUs from './ContactUs';

const Main = () => {
    return (
        <main className='main'>
            <Home />
            <Aboutus />
            <Services />
            <Resume />
            <Portfolio />
            <Pricing />
            <ContactUs />
        </main>
    );
};

export default Main;