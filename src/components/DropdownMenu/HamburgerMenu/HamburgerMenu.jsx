import React from 'react';
import HamburgerSVG from '../SVG/HamburgerSVG';
import CloseSVG from '../SVG/CloseSVG';
import styled from 'styled-components';

const HamburgerMenu = () => {
    return (
        <HamburgerIcon>
            <HamburgerSVG />
            <CloseSVG />
        </HamburgerIcon>
    );
};

export default HamburgerMenu;

const HamburgerIcon = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem;
    position: absolute;
    right: 0;
    height: 4rem;
`;
