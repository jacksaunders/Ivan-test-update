import React from 'react';
import styled from 'styled-components';
import { Colors, Palette as Color, setColor } from '../themes/themes';

const H1El = styled.h1`
    color: ${props => (props.color ? setColor(props.color) : Colors.TYPOGRAPHY.H1.PRIMARY)};
    font-size: 32px;
    line-height: 120%;
    font-weight: bold;
    margin: 0;

    ${props =>
        props.doubleOnDesktop
            ? `
    @media(min-width: 1220px) {
        font-size: 56px;
    }
  `
            : null}
`;

const H1ElMobile = styled.span`
    @media (min-width: 1220px) {
        display: none;
    }
`;

const H1ElDesktop = styled.span`
    display: none;

    @media (min-width: 1220px) {
        display: inline;
    }
`;

const H1 = props => (
    <H1El {...props}>
        {props.children}

        <H1ElMobile>{props.mobileLexeme}</H1ElMobile>

        <H1ElDesktop>{props.desktopLexeme}</H1ElDesktop>
    </H1El>
);

H1.color = Color;

export default H1;
