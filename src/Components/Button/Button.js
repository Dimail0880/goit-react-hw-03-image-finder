import React from 'react';

const Button = ({onClick}) => {
    window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    return (
        <>
        <button className='Button' onClick={onClick}>LOAD MORE</button>
        </>
    );
};

export default Button;