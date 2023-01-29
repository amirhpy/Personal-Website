import React, { useState } from 'react';

// Shared
import SectionHead from '../shared/SectionHead';
import PackagePricing from '../shared/PackagePricing';

const Pricing = () => {
    const [packageOption, setPackageOption] = useState([
        {id: 1, classColor: 'package__head package__head--orange', type: 'Basic', price: '$70', btnColor: 'app-btn app-btn--orange package__link'},
        {id: 2, classColor: 'package__head package__head--purple', type: 'Standard', price: '$100', btnColor: 'app-btn app-btn--purple package__link'},
        {id: 3, classColor: 'package__head package__head--pink', type: 'Premium', price: '$150', btnColor: 'app-btn app-btn--pink package__link'}
    ])
    return (
        <section className='pricing'>
            <div className='container skew-reset'>
                <SectionHead title='Pricing' caption='Check our Services package' />
                <div className='row'>
                    {packageOption.map(item => <PackagePricing key={item.id} classColor={item.classColor} type={item.type} price={item.price} btnColor={item.btnColor} />)}
                </div>
            </div>
        </section>
    );
};

export default Pricing;