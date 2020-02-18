import React from 'react';
import styled from 'styled-components';
import { Colors, Palette as Color, setBgColor } from '../themes/themes';

const DividerEl = styled.div`
    width: ${props => (props.type !== 'vertical' ? '60px' : '2px')};
    height: ${props => (props.type !== 'vertical' ? '2px' : '60px')};
    background-color: ${props =>
        props.bgColor ? setBgColor(props.bgColor) : Colors.BACKGROUND.DIVIDER.SECONDARY};
    margin: ${props => (props.noMargins ? null : '30px 0')};
`;

const Divider = props => {
    return <DividerEl {...props} />;
};
Divider.bgColor = Color;

export default Divider;
