import React from 'react';

// Shared
import Button from './Button';

const PackagePricing = ({classColor, type, price, btnColor}) => {
    return (
        <div className='col-12 col-md-6 col-lg-4'>
            <div className='package'>
                <div className={classColor}>
                    <h4 className='package__type'>{type}</h4>
                    <span className='package__price'>{price}</span>
                    <span className='package__filter'>Only PSD Design</span>
                </div>
                <div className='package__body'>
                    <ul className='package__option'>
                        <li className='package__option-item'>
                            <svg className='package__option-icon' width="14.058" height="11.773" viewBox="0 0 14.058 11.773">
                                <path id="Icon_material-done" data-name="Icon material-done" d="M1355.037,6029.945l-3.028-3.231-1.009,1.077,4.037,4.309,8.651-9.233-1.009-1.077-4.073,4.347Z" transform="translate(-1350.315 -6021.058)" fill="#333" stroke="#333" stroke-width="1"/>
                            </svg>
                            Graphic Desing
                        </li>
                        <li className='package__option-item'>
                            <svg className='package__option-icon' width="14.058" height="11.773" viewBox="0 0 14.058 11.773">
                                <path id="Icon_material-done" data-name="Icon material-done" d="M1355.037,6029.945l-3.028-3.231-1.009,1.077,4.037,4.309,8.651-9.233-1.009-1.077-4.073,4.347Z" transform="translate(-1350.315 -6021.058)" fill="#333" stroke="#333" stroke-width="1"/>
                            </svg>
                            Web Design
                        </li>
                        <li className='package__option-item'>
                            <svg className='package__option-icon' width="14.058" height="11.773" viewBox="0 0 14.058 11.773">
                                <path id="Icon_material-done" data-name="Icon material-done" d="M1355.037,6029.945l-3.028-3.231-1.009,1.077,4.037,4.309,8.651-9.233-1.009-1.077-4.073,4.347Z" transform="translate(-1350.315 -6021.058)" fill="#333" stroke="#333" stroke-width="1"/>
                            </svg>
                            UI/UX Design 
                        </li>
                        <li className='package__option-item'>
                            <svg className='package__option-icon' width="14.058" height="11.773" viewBox="0 0 14.058 11.773">
                                <path id="Icon_material-done" data-name="Icon material-done" d="M1355.037,6029.945l-3.028-3.231-1.009,1.077,4.037,4.309,8.651-9.233-1.009-1.077-4.073,4.347Z" transform="translate(-1350.315 -6021.058)" fill="#333" stroke="#333" stroke-width="1"/>
                            </svg>
                            HTML & CSS
                        </li>
                        <li className='package__option-item'>
                            <svg className='package__option-icon' width="14.058" height="11.773" viewBox="0 0 14.058 11.773">
                                <path id="Icon_material-done" data-name="Icon material-done" d="M1355.037,6029.945l-3.028-3.231-1.009,1.077,4.037,4.309,8.651-9.233-1.009-1.077-4.073,4.347Z" transform="translate(-1350.315 -6021.058)" fill="#333" stroke="#333" stroke-width="1"/>
                            </svg>
                            SEO Optimize
                        </li>
                        <li className='package__option-item'>
                            <svg className='package__option-icon' width="14.058" height="11.773" viewBox="0 0 14.058 11.773">
                                <path id="Icon_material-done" data-name="Icon material-done" d="M1355.037,6029.945l-3.028-3.231-1.009,1.077,4.037,4.309,8.651-9.233-1.009-1.077-4.073,4.347Z" transform="translate(-1350.315 -6021.058)" fill="#333" stroke="#333" stroke-width="1"/>
                            </svg>
                            Business Develop
                        </li>
                    </ul>
                    <Button className={btnColor} text='Choose Plan' />
                </div>
            </div>
        </div>
    );
};

export default PackagePricing;