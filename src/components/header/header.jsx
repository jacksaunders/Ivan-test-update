import React from 'react';
import styled from 'styled-components';
import Logo from '../logo/logo';
import Icon from '../icon/icon';
import Text from '../typography/text';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import HamburgerMenu from '../DropdownMenu/HamburgerMenu/HamburgerMenu';

const MenuContainer = styled.div`
    width: 100%;
    margin: 3rem auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const MenuLogo = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    width: 100vw;
    left: 0;
    top: 0;
    height: 4rem;
    background: white;
    box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.1);
    z-index: 20;

    @media (min-width: 770px) {
        justify-content: flex-start;
        position: static;
    }
`;

const MenuPhone = styled.div`
    display: none;

    @media (min-width: 770px) {
        display: flex;
        width: 100%;
        justify-content: flex-end;
        align-items: center;
    }
`;

const Menu = () => (
    <MenuContainer>
        <MenuLogo>
            <Logo />
            <HamburgerMenu />
        </MenuLogo>
        <DropdownMenu />
        <MenuPhone>
            <Text icon={<Icon src={Icon.type.PHONE} width={'16px'} />} noVerticalSpace={true}>
                020 3778 0274
            </Text>
        </MenuPhone>
    </MenuContainer>
);

export default Menu;
