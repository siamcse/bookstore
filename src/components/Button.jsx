import React from 'react';

const Button = ({text}) => {
    return (
        <button className="mt-5 py-3 px-8 bg-primary text-white font-['Chivo_Mono']">{text}</button>
    );
};

export default Button;