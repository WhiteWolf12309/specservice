
import React from 'react';

const HeaderBurgerMenu = ({ className, fill }) => {
    return (
        <svg className={className} width="43" height="28" viewBox="0 0 43 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="42.9333" height="5.6" rx="2.8" fill={fill}/>
            <rect y="22.4" width="42.9333" height="5.6" rx="2.8" fill={fill}/>
            <rect y="11.2" width="42.9333" height="5.6" rx="2.8" fill={fill}/>
        </svg>
    );
}

export default HeaderBurgerMenu;
