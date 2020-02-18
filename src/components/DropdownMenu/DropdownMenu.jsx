import React from 'react';

import Button from '../button/button';
import TelIconSVG from './SVG/TelIconSVG';
import styled from 'styled-components';

const DropdownMenu = () => {
    return (
        <DropDownWrapper>
            <MenuOptions>
                <MenuItem>
                    <a href="/">Home</a>
                </MenuItem>
                <MenuItem>
                    <a href="/about">About</a>
                </MenuItem>
                <MenuItem>
                    <a href="/blog">Blog</a>
                </MenuItem>
                <MenuItem>
                    <a href="/contact">Contact</a>
                </MenuItem>
            </MenuOptions>

            <ExtraOptions>
                <li>
                    <Button text="Apply">Apply</Button>
                </li>
                <li>
                    <Telephone>
                        <TelIconSVG />
                        <a href="tel:+442037780274" data-ga-id="mobileMenu__phone">
                            020 3778 0274
                        </a>
                    </Telephone>
                </li>
            </ExtraOptions>
        </DropDownWrapper>
    );
};

export default DropdownMenu;

const DropDownWrapper = styled.div`
    display: none;
    position: fixed;
    flex-direction: column;
    height: calc(100% - 4rem);
    background-color: white;
    width: 100%;
    left: 0px;
    z-index: -1;
    align-items: center;
    z-index: 10;
    box-shadow: inset 0px 4px 25px -6px rgba(0, 0, 0, 0.15);
    overflow-y: scroll;
    padding-top: 15px;
    padding-bottom: 15px;
    top: 4rem;
    right: 0;
    bottom: 0;
    left: 0;
    font-size: 18px;
`;

const MenuOptions = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    align-items: center;
    width: 90%;
    margin: 0 auto;
`;

const MenuItem = styled.li`
    display: flex;
    min-height: 5rem;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 0px;

    &:nth-child(n + 2) {
        border-top: 2px solid #e6e6e6;
    }

    & a {
        padding: 0;
        color: #143b6b;
        text-decoration: none;
        font-weight: bold;
    }
`;

const ExtraOptions = styled.ul`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    list-style: none;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
`;

const Telephone = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-around;
    max-width: 11rem;
    width: 100%;
    padding-top: 40px;

    & a {
        font-size: 18px;
        color: #143b6b;
        font-weight: bold;
    }
`;
