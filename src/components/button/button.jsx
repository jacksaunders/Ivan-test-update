import React from 'react';
import styled from 'styled-components';
import { Colors } from '../themes/themes';

const ButtonEl = styled.button`
    color: ${Colors.TYPOGRAPHY.BUTTON.PRIMARY};
    background-color: ${Colors.BACKGROUND.BUTTON.PRIMARY};
    padding: 10px 35px;
    font-size: 18px;
    line-height: 150%;
    font-weight: bold;
    box-shadow: 0px 15px 35px rgba(112, 112, 112, 0.45);
    border-radius: 8px;
`;

const Button = props => <ButtonEl>{props.text}</ButtonEl>;

export default Button;
