import React from 'react';

const Button = ({className, text}) => {
    return (
        <a href='www.google.com' className={className}>{text}</a>
    );
};

export default Button;