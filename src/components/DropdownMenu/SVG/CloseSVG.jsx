import React from 'react';

const CloseSVG = ({ className }) => {
    return (
        <svg
            className={className}
            width="16"
            height="14"
            viewBox="0 0 13 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M1.41421 0.948486L12.7279 12.2622L11.3137 13.6764L0 2.3627L1.41421 0.948486Z"
                fill="black"
            />
            <path
                d="M0 12.2622L11.3137 0.948486L12.7279 2.3627L1.41421 13.6764L0 12.2622Z"
                fill="black"
            />
        </svg>
    );
};

export default CloseSVG;
